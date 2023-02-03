import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userListMeService from "../../services/users/listMe.service"

const listOneUserController = async (req:Request, res:Response) =>{
    try{
        const id = req.idUser
        const user = await userListMeService(id)
        // const {password, ...rest} = user
        return res.status(200).send(user)
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
} 

export default listOneUserController