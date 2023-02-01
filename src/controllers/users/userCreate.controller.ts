import { Request, Response } from "express";
import userCreateService from "../../services/users/createUser.service";

const userCreateController = (req:Request, res:Response) =>{
    try{
        const {email, name, password, phone } = req.body
        const newUser = userCreateService({email, name, password, phone})
        return res.status(201).send(newUser)
    }
    catch(err){
        if(err instanceof Error){
            return res.status(400).send({
                status: err.name,
                message: err.message
            })
        }
    }
}

export default userCreateController