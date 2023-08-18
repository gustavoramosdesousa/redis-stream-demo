import { Request, Response, NextFunction } from "express";
/*
import { EventUseCase} from "../useCases/EventUseCase";
import { Event } from "../entities/Event";
*/
class SocketController{
    //depende dos usecases
    constructor(/*private eventUseCase: EventUseCase*/){};

    async about(request: Request, response: Response, next: NextFunction){

        const api_status = { status: 'online',
                             author: 'Gustavo Ramos'
                           };
        try {
            return response.status(200).json(api_status);
        } catch (error) {
            next(error);
        }
    }
}
export {SocketController};