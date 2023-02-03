import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt"
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError, handleError } from "../errors/appError";

export const userExistVerifyMiddleware = async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const id = req.idUser
        const userRepository = AppDataSource.getRepository(User)
        const users = await userRepository.find()
        const account = users.find(user => user.id === id)
    
        if(!account){
            throw new AppError(404, "User Not Found")
        }

        next() 
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default userExistVerifyMiddleware