import { Router } from "express";
import { ApiController } from "../controllers/ApiController";

/*
import { EventRepositoryMongoose } from "../repositories/EventRepositoryMongoose";
import { EventUseCase } from "../useCases/EventUseCase";

import { upload } from "../infra/multer";
*/

class ApiRoutes { 
    public router: Router;
    private api_controller: ApiController;

    constructor(){
        this.router = Router();
        //const eventRepository = new EventRepositoryMongoose();
        //const eventUseCase = new EventUseCase(eventRepository);
        this.api_controller = new ApiController(/*eventUseCase*/);
        this.initRoutes();
    };

    initRoutes(){

        this.router.get(
            '/about', 
            this.api_controller.about.bind(this.api_controller)
        );

    };


}
export {ApiRoutes};