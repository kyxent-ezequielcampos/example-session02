import { Router, Request, Response } from "express";
import { createWarriorService } from "../services/createWarrior.service";



export const initWarriorRoutes = () => {

    try {

        const enrutador = Router()

        enrutador.post("/warriors", (req:Request, res:Response) => createWarriorService(req, res))


        return enrutador


    } catch (error) {
        throw new Error(`${error}`);
        
    }

}