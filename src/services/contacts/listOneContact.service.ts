import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const listOneContactService = async (id:string ,idUser:string) => {
    const userRespository = AppDataSource.getRepository(User)
    const users = await userRespository.find()
    const account = users.find(user => user.id === idUser)
    if(!account){
        throw new AppError(404, "User not found")
    }
    const contacts = account.contacts
    const contact = contacts.find((contact)=> contact.id === id)

    return contact
}

export default listOneContactService