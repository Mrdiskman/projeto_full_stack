import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contacts.entity"
import { AppError } from "../../errors/appError"

const contactDeleteSelfService = async(id:string)=>{
    const contactRepository = AppDataSource.getRepository(Contact)
    const contacts = await contactRepository.find()
    const contact = contacts.find(contact => contact.id === id)
    if(!contact){
        throw new AppError(404, "Contact Not Found")
    }
    await contactRepository.delete(contact.id)

    return true
}

export default contactDeleteSelfService