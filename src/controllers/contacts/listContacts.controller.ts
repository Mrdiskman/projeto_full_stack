import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listContactsService from "../../services/contacts/listContacts.service";

const contactListController = async (req:Request, res:Response) =>{
    try{
        const id = req.idUser
        const contacts = await listContactsService(id)
        return res.status(200).send(contacts)
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default contactListController