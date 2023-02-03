import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userListMeService = async (id:string) => {
    const userRespository = AppDataSource.getRepository(User)
    const user = await userRespository.findOneBy({ id })
    const res = {
        name:user?.name,
        email:user?.email,
        number:user?.number,
        register:user?.register,
        contacts:user?.contacts
    }
    return res
}

export default userListMeService