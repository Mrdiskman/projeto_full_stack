import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import updateContactService from  "../../services/contacts/updateContact.service"

const updateContactController = async (req:Request, res:Response) =>{
    try{
        const {id} = req.params
        const newDate = req.body
        const updatedContact = await updateContactService(id, newDate)
        return res.status(200).send({message:"Contact Updated With Sucess", ...updatedContact})
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default updateContactController