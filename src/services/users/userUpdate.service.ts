import { hash } from "bcrypt";
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserUpdate } from "../../interfaces/user"
import * as moment from 'moment';

const updateUserService = async(id:string, newData:IUserUpdate) =>{
    if (newData.password) {
      newData.password = await hash(newData.password, 10);
    }
    
    const usersRepository = AppDataSource.getRepository(User);
    const newUser = await usersRepository.update(id, { ...newData });
    const newUserReq = await usersRepository.findOneBy({ id });

    const updateRes = {
      name: newUserReq!.name,
      email: newUserReq!.email,
      number: newUserReq!.number,
    }
    return updateRes;
}

export default updateUserService