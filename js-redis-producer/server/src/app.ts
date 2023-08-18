import express from 'express';
import { Application } from 'express-serve-static-core';
import cors from 'cors';
import path from 'node:path';
import { ApiRoutes } from './routes/api.routes';
import { SocketRoutes } from './routes/socket.routes';

/*
import { connectMongoDB } from './infra/mongoDB';
import { errorMiddleware } from './middlewares/error.middlewares';
import { EventRoutes } from './routes/event.routes';
import cors from 'cors';
*/

class App{
    public app : Application;
    private api_routes = new ApiRoutes();
    private socket_routes : SocketRoutes;

    constructor(){
        this.app = express();
        this.socket_routes = new SocketRoutes(this.app);

        this.middlewaresInitialize();
        this.initializeRoutes();
        this.interceptionError();
        
        //connectMongoDB();
    };


    private interceptionError(){
        //this.app.use(errorMiddleware);
    };
        
    private initializeRoutes(){
        this.app.use('/api/v1', this.api_routes.router);
    };

    private middlewaresInitialize(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use('/uploads', express.static(path.join(__dirname, './tmp/uploads')));
        this.app.use(express.urlencoded({extended:true})); //converte as urls, para remover espaço e colocar "%20" por exemplo
    };

    listen(){
        this.app.listen(3333, ()=>{
            console.log('Server is running...');
        });
    };
}
export {App};