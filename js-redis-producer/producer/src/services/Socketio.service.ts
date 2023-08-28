import { server_socket_base_url } from '@/utils/constants';
import io from 'socket.io-client';

class SocketIoService{
    static getInstance(client_id : string) {
        return new SocketIoService(client_id);
    }

    private myId : string;
    private socket_client : any;

    constructor(client_id : string){
       this.myId = client_id;
       this.socket_client = io(server_socket_base_url);
       this.initiateFixedListeners();
    };

    public getMySocketClient(){
        return this.socket_client;
    }
    public joinRoom(message:{room_id: string, status:string, data: {}}){
        if(message.room_id !== undefined){
            console.log('client::joinRoom', message.room_id);
            this.socket_client.emit("join_room", message.room_id);
        }
    }
    public sendMessage(message : {id:string | undefined, codigo: string, status: string, data_criacao: string}){
        //console.log('client::sending message', message);
        if(message.status === 'Cancelada'){
            this.socket_client.emit("send_message", {stream_id:'delayed', message});
        }
        if(message.status === 'Aprovada'){
            this.socket_client.emit("send_message", {stream_id:'approved', message});
        }

        this.socket_client.emit("send_message", {stream_id:'all_orders', message});
    }

    public initiateFixedListeners() {
        this.socket_client.on('connect',
            () => console.log(`${this.myId} conectou!`)
        );
        this.socket_client.on('err',
            (err : any) => console.log('socket_client_err', err)
        );
        this.socket_client.on('success',
            (res : any) => console.log('socket_client_success', res)
        );
    };
}
export {SocketIoService};