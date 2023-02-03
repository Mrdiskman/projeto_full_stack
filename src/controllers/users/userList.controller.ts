import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listUserService from "../../services/users/listUser.service";

const listUserController = async (req:Request, res:Response) =>{
    try{
        const listUsers = await listUserService()
        return res.status(201).send(listUsers)
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default listUserController