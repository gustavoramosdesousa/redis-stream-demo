import {REDIS_URL} from '../private';
import { createClient, commandOptions  } from 'redis';

const client = createClient({ url: REDIS_URL });
//const client = new Redis(redis_config);

//client.on('error', err => console.log('Redis Client Error', err));


async function terminateRedisConnection() {
    await client.quit();
};

async function initializeRedisConnection() {
    await client.connect();
};

async function configurateRedisStreams() {
    try {
        // https://redis.io/commands/xgroup-create/
        await client.xGroupCreate('all_orders', 'redis-stream-demo', '0', { MKSTREAM: true });
        await client.xGroupCreate('delayed', 'redis-stream-demo', '0', { MKSTREAM: true });
        await client.xGroupCreate('approved', 'redis-stream-demo', '0', { MKSTREAM: true });
        //console.log('Created consumer group.');
    } catch (e) {
        //console.log('Consumer group already exists, skipped creation.');
    }
};

initializeRedisConnection();
configurateRedisStreams();

const addRedisMessage = async (stream_id:string, data: any) => {
    const doc_ref = await client.xAdd(stream_id, '*', data );
    return doc_ref;
};

const getRedisMessages = async (stream_id:string) : Promise<string> => {
    const consumer_name = 'provider';
    const stream_group =  'redis-stream-demo';
    let retorno:any;
    try {
        // https://redis.io/commands/xreadgroup/
        let response = await client.xReadGroup(
        commandOptions({
            isolated: true
        }),
        stream_group, 
        consumer_name, [ 
            // XREADGROUP can read from multiple streams, starting at a
            // different ID for each...
            {
            key: stream_id,
            id: '>' // Next entry ID that no consumer in this group has read
            }
        ], {
            // Read 1 entry at a time, block for 5 seconds if there are none.
            COUNT: 1,
            BLOCK: 1000
        }
        );
    
        if (response) {
        // Response is an array of streams, each containing an array of
        // entries:
        //
        // [
        //   {
        //      "name": "mystream",
        //      "messages": [
        //        {
        //          "id": "1642088708425-0",
        //          "message": {
        //            "num": "999"
        //          }
        //        }
        //      ]
        //    }
        //  ]
        
    
        // Use XACK to acknowledge successful processing of this
        // stream entry.
        // https://redis.io/commands/xack/
        const entryId = response[0].messages[0].id;
        //console.log('entryId:', entryId);
        //console.log('response:', response[0].messages[0]);
        await client.xAck(stream_id, stream_group, entryId);
        //retorno = JSON.stringify(response[0].messages[0]);
        //console.log('response_stringify:', response);
        //console.log(`Acknowledged processing of entry ${entryId}.`);
        retorno = response[0].messages[0].message;
        } else {
        // Response is null, we have read everything that is
        // in the stream right now...
        //console.log('No new stream entries.');
        }
    } catch (err) {
        console.error(err);
    }finally{
        return retorno;
    }
};



export{addRedisMessage, getRedisMessages, terminateRedisConnection};