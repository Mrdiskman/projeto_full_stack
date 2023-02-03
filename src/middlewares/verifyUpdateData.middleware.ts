import { Request, Response, NextFunction } from "express";
import bcrypt, { hash } from "bcrypt"
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError, handleError } from "../errors/appError";

export const verifyLoginMiddleware = async(req:Request, res:Response, next:NextFunction)=>{
    try{
        let {email, password, name} = req.body
        const id = req.idUser
        const usersRepository = AppDataSource.getRepository(User);
        const user = await usersRepository.findOneBy({ id });
        
        if (!name && !email && !password) {
            return user;
          }
        
        if (password) {
            password = await hash(password, 10);
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