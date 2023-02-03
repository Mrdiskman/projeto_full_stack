import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError, handleError } from "../errors/appError";

export const verifyEmailAlredyExistMiddleware = async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const data = req.body
        const userRepository = AppDataSource.getRepository(User)
        const emailAlredyExist = await userRepository.findOneBy({email:data.email})

        if(emailAlredyExist){
            throw new AppError(409, "Email Alredy Exists")
        }
        next() 
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default verifyEmailAlredyExistMiddleware