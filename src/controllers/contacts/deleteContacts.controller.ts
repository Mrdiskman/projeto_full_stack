import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import contactDeleteSelfService from "../../services/contacts/deleteContact.service";


const deleteContactController = async (req:Request, res:Response) =>{
    try{
        const {id} = req.params
        const deleteUser = await contactDeleteSelfService(id)
        return res.status(200).send({message:"Contact Deleted With Sucess"})
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default deleteContactController