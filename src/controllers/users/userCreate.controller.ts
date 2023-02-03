import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userCreateService from "../../services/users/createUser.service";

const userCreateController = async (req:Request, res:Response) =>{
    try{
        const user = req.body
        const newUser = await userCreateService(user)
        const { password, ...rest } = newUser;
        return res.status(201).send(rest)
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}


export default userCreateController