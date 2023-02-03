import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt"
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError, handleError } from "../errors/appError";

export const verifyLoginMiddleware = async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const {email, password} = req.body
        const userRepository = AppDataSource.getRepository(User)
        const users = await userRepository.find()
        const account = users.find(user => user.email === email)
    
        if(!account){
            throw new AppError(403, "Wrong Email/Password")
        }
        if(!bcrypt.compareSync(password, account.password)){
            throw new AppError(403, "Wrong Email/Password")
        }
        next() 
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default verifyLoginMiddleware