import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contacts.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IContact, IContactCreate } from "../../interfaces/contacts"

const contactCreateService = async(id:string, {name, email, number}:IContactCreate) : Promise<IContact> =>{
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id:id})
    if(!user){
        throw new AppError(404, "User not Found")
    }
    
    const contactRepository = AppDataSource.getRepository(Contact)
   
    const contact:IContact = new Contact()
    contact.user = user
    contact.name = name
    contact.email = email
    contact.number = number

    contactRepository.create(contact)
    await contactRepository.save(contact)
    
    return contact
}

export default contactCreateService