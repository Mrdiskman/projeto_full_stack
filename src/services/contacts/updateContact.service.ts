import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors/appError"
import { IContactUpdate } from "../../interfaces/contacts";
import { Contact } from "../../entities/contacts.entity";

const updateContactService = async(id:string, newData:IContactUpdate) =>{
    const contactRepository = AppDataSource.getRepository(Contact);
    const contact = await contactRepository.findOneBy({ id });
    
    if (!contact) {
      throw new AppError(404, "Contact Not Found");
    }
  
    if (!newData.name && !newData.email && !newData.password) {
      return contact;
    }
  
    const newContact = await contactRepository.update(id, { ...newData });
    const newContactReq = await contactRepository.findOneBy({ id });
    
    const updateRes = {
      name: newContactReq!.name,
      email: newContactReq!.email,
      number: newContactReq!.number,
    };
  
    return updateRes;
}

export default updateContactService