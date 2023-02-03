import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserUpdate } from "../../interfaces/user"

const updateUserService = async(id:string, newData:IUserUpdate) =>{
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