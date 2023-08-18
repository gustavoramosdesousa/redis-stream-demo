import { server_socket_base_url } from '@/utils/constants';
import io from 'socket.io-client';

class SocketIoService{

    private myId : string;
    private socket_client : any;

    constructor(client_id : string){
       this.myId = client_id;
       this.socket_client = io(server_socket_base_url);
       this.initiateListening();
    };

    public joinRoom(room : string){
        console.log('client::joinRoom', room);
        this.socket_client.emit("join_room", room);
    }
    public sendMessage(message : string){
        console.log('client::sending message', message)
        this.socket_client.emit("send_message", message);
    }

    public initiateListening() {
        this.socket_client.on('connect',
            () => console.log(`${this.myId} conectou!`)
        );
        this.socket_client.on('err',
            (err : any) => console.log('socket_client_err', err)
        );
        this.socket_client.on('success',
            (res : any) => console.log('socket_client_success', res)
        );

        this.socket_client.on("join_room_answer", (data : any) => {
            console.log("Client::join_room_answer", data);
          });
    };
}
export {SocketIoService};