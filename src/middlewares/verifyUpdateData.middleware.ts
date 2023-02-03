import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError, handleError } from "../errors/appError";

export const verifyUpdatedData = async(req:Request, res:Response, next:NextFunction)=>{
    try{
        let {email, password, name} = req.body
        const id = req.idUser
        const usersRepository = AppDataSource.getRepository(User);
        const user = await usersRepository.findOneBy({ id });

        if (email == ""|| password == "" || name == "")
        throw new AppError(400, "Can't Update To A Empty Field")
        
        if (!name && !email && !password) {
            return user;
          }
        
        next() 
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default verifyUpdatedData