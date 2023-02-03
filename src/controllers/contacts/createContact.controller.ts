import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import contactCreateService from "../../services/contacts/createContact.service";

const contactCreateController = async (req:Request, res:Response) =>{
    try{
        const id = req.idUser
        const contact = req.body
        const newContact = await contactCreateService(id, contact)
        const {user, ...rest} = newContact
        return res.status(201).send(rest)
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}


export default contactCreateController