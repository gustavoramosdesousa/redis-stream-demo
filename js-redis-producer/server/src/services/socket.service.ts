import { Request, Response, NextFunction } from "express";
import { Application } from 'express-serve-static-core';
import http from "http";
import socketio, { Server } from "socket.io";
import { addRedisMessage, getRedisMessages } from "../repository/redis.repository";

/*
import { EventUseCase} from "../useCases/EventUseCase";
import { Event } from "../entities/Event";
*/
class SocketRoutes{
    private server : any;
    public io: any;

    private salas_por_socket = new Array<String>(); 

    //depende dos usecases
    constructor(private app: Application ){
       this.server = http.createServer(app);
       this.io = new socketio.Server(this.server,{
        cors: {
            origin: "*",/**http://localhost:5000 */
            methods: ["GET", "POST"],
            allowedHeaders: ["Access-Control-Allow-Origin"],
          }});
       this.initiateServerListening();
       this.initiateRoutes();
    };

    public initiateServerListening(){
        this.server.listen(4004, () => {
            console.log("Running at localhost:4004");
        });
    };

    public initiateRoutes(){
        //getRedisMessages('');
        this.io.on('connection', (socket : any) => {
            socket.on('join_room', (data : any) => {
                //console.log(`Novo Socket Conectado [ ${socket.id} ], data: `, data);
                socket.join(data.room_id);
                {//formas de responder evento 
                    //caso queria transmitar algo para todos da sala
                    //this.io.to(data.room_id).emit(`join_room_answer:${data.room_id}`, `chama: ${data.room_id}`);
                    //caso queria transmitar algo o usuário recém adicionado à sala
                    //socket.emit('message', { user: 'admin', text:`${user.name},welcome to room ${user.room}.` });
                    //caso queria transmitar algo para todos da sala, com exceção do recém adiconado
                    //socket.broadcast.to(user.room).emit('message', { user: "admin",text: `${user.name}, has joined` });
                }
                /** ativa resposta automática apenas se a sala for do tipo Ativo */
                if(!this.salas_por_socket.includes(data.room_id) && data.status === 'ativo'){
                    this.startReadingFromRedisStream(data.room_id, socket.id);
                    this.salas_por_socket.push(data.room_id);
                    console.log("Nova sala adicionada:", this.salas_por_socket);
                }
            });
            
            socket.on('send_message', (data : any) => {
                console.log("send_message", data);
                addRedisMessage(data.stream_id, data.message);

            });

            socket.on('get_message', (data : any) => {
                console.log("send_message", data);
                //addRedisMessage("all_orders", data);

            });
        });
    };

    private async startReadingFromRedisStream(room_id:string, socket_id:string){
        //console.log(`O Socket [${socket_id}] tentou ligar a escuta na stream: ${room_id}.`);
        if(room_id===undefined) return;
        //console.log(`O Socket [${socket_id}] ligou a escuta na stream: ${room_id}.`);
        while(true){
            const retorno = await getRedisMessages(room_id);

            if(retorno !== undefined) {
                //console.log(`Da Stream [${room_id}] veio o retorno retorno:`,retorno );
                this.io.sockets.to(room_id).emit(`join_room_answer:${room_id}`, retorno);
            }
        }
    };

}
export {SocketRoutes};