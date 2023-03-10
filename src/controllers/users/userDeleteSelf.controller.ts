import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userDeleteSelfService from "../../services/users/userDeleteSelf.service";


const userDeleteSelfController = async (req:Request, res:Response) =>{
    try{
        const id = req.idUser
        const deleteUser = await userDeleteSelfService(id)
        return res.status(200).json({message:"User Deleted With Sucess"})
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
} 

export default userDeleteSelfController