import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const listContactsService = async (id:string) => {
    const userRespository = AppDataSource.getRepository(User)
    const users = await userRespository.find()
    const account = users.find(user => user.id === id)
    if(!account){
        throw new AppError(404, "User not found")
    }
    const contacts = account.contacts
    return contacts
}

export default listContactsService