import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import loginUserService from "../../services/users/loginUser.service";

const loginUserController = async (req:Request, res:Response) =>{
    try{
        const dataLogin = req.body
        const token = await loginUserService(dataLogin)
        return res.status(201).send({token})
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
} 

export default loginUserController