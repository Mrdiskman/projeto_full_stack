import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contacts.entity";
import { AppError, handleError } from "../errors/appError";

export const verifyContactDataMiddleware = async(req:Request, res:Response, next:NextFunction)=>{
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
        next() 
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default verifyContactDataMiddleware