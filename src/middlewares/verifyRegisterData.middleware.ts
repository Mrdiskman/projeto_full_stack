import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError, handleError } from "../errors/appError";

export const verifyRegisterMiddleware = async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const data = req.body
        if(data.name === ""){
            throw new AppError(400, "Missing Name")
        }
        if(data.email === ""){
            throw new AppError(400, "Missing Email")
        }
        if(data.number === ""){
            throw new AppError(400, "Missing Number")
        }   
        if(data.password === ""){
            throw new AppError(400, "Missing Password")
        }

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

export default verifyRegisterMiddleware