'use client'
import {useEffect, useState} from 'react';
import io from 'socket.io-client';
import { server_socket_base_url } from '@/utils/constants';
import { SocketCommand } from '@/types/types';
import {v4 as uuid} from 'uuid';
const myId = uuid();

import { SocketIoService } from '@/services/Socketio.service';
//const socket_client = io(server_socket_base_url);
const socket_service = SocketIoService.getInstance(myId);
const socket_client = socket_service.getMySocketClient();


interface IRedisListenerProps{
    title: string;
    stream_id:string;
};

const default_socket_command = {
	room_id: '',
	status: '',
	data: {}
};

export const RedisListener = ({title, stream_id} : IRedisListenerProps) => {
    const [messages, setMessages] = useState<string[]>([]);
    const [connected, setConnected] = useState<boolean>(false);

    //const [socket_command, setSocketCommand] = useState<SocketCommand>(default_socket_command);
    const joinRoom = () => {
        const message = {room_id: stream_id, status:'ativo', data: {}};
        //console.log("joinRoom:", message);
        //console.log("on:", `join_room_answer:${stream_id}`)
        socket_client.emit("join_room", message);
        setConnected(true);
    };

    useEffect(() => {
        console.log(`Socket[${socket_client.id}] conectado para MyId[${myId}] e Stream[${stream_id}].`);
        if(stream_id !== undefined && !connected){
            joinRoom();
        }       
    }, [socket_client]);

    useEffect(() => {
        console.log("useEffect::", stream_id);
        //setSocketCommand({room_id: stream_id, status:'ativo', data: {}});
        socket_client.on(`join_room_answer:${stream_id}`, (data : any) => {
            console.log(`useEffect::join_room_answer:${stream_id}`, data);
            //const obj =  JSON.parse(data);
            setMessages([...messages, data.codigo]);
        });        
    }, [messages, stream_id]);


      return (
        <div className="my-4">
            <p className="text-neutral-500 text-sm font-light">{title}</p>
            <div className="w-full h-20 bg-zinc-300 rounded-3xl shadow flex overflow-hidden ">
                {(messages.length>0) && messages.map((message, index) => (
                    <span key={index} className=' w-[20px]  odd:bg-white even:bg-slate-200 px-1.5'>
                        <p className='leading-1 w-1 break-words align-middle text-sm'> {message} </p>
                    </span>
                ))}
            </div>
        </div>
    );
};