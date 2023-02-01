import { Request, Response } from "express";
import listUserService from "../../services/users/listUser.service";

const listUserController = (req:Request, res:Response) =>{
    try{
        const listUsers = listUserService()
        return res.status(201).send(listUsers)
    }
    catch(err){
        if(err instanceof Error){
            return res.status(400).send({
                status: err.name,
                message: err.message
            })
        }
    }
}

export default listUserController