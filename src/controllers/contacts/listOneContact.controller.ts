import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listOneContactService from "../../services/contacts/listOneContact.service";

const listOneContactController = async (req:Request, res:Response) =>{
    try{
        const {id} = req.params
        const idUser = req.idUser
        const contact = await listOneContactService(id, idUser)
        return res.status(200).send(contact)
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default listOneContactController