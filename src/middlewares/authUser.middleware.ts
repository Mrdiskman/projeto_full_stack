import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { AppError, handleError } from "../errors/appError";

export const authUser = async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const auth = req.headers.authorization

        if(!auth){
            throw new AppError(409, "Missing authorization token")
        }
        const token = auth.split(" ")[1]
        jwt.verify(token as string, process.env.JWT_SECRET as string, (err:any, decoded:any)=>{
            req.idUser = decoded.id
            req.userEmail = decoded.email
        }) 

        next() 
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}