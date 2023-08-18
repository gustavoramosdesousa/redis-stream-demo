import { Request, Response, NextFunction } from "express";
import { Application } from 'express-serve-static-core';
import http from "http";
import socketio, { Server } from "socket.io";
import { Router } from "express";
/*
import { EventUseCase} from "../useCases/EventUseCase";
import { Event } from "../entities/Event";
*/
class SocketRoutes{
    private server : any;
    public io: any;
    //depende dos usecases
    constructor(private app: Application ){
        //const server = require('http').createServer(app);
       // const io = require('socket.io')(server);
       this.server = http.createServer(app);
       this.io = new socketio.Server(this.server,{
        cors: {
            origin: "*",/**http://localhost:5000 */
            methods: ["GET", "POST"],
            allowedHeaders: ["Access-Control-Allow-Origin"],
          }});
       this.initiateListening();
       this.initiateRoutes();
    };
  

    public initiateListening(){
        this.server.listen(4004, () => {
            console.log("Running at localhost:4004");
        });
    };

    public initiateRoutes(){

        this.io.on('connection', (socket : any) => {
        
            socket.on('join_room', (data : any) => {
                console.log("join_room", data);        
                this.io.sockets.to(socket.id).emit('join_room_answer', "OKOK");
            });
            
            socket.on('send_message', (data : any) => {
                console.log("send_message", data);
            });

        });
    };
}
export {SocketRoutes};