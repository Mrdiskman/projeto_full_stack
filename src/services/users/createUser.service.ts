import { User } from "../../entities/user.entity";
import { IUserCreate, IUser } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import bcrypt from "bcrypt"
import { AppError } from "../../errors/appError";

const userCreateService = async({email, name, password, number}:IUserCreate) : Promise<IUser> => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    const emailAlredyExist = users.find((user)=> user.email === email)

    if(emailAlredyExist){
        throw new AppError(409, "Email Alredy Exists")
    }

    const user:IUser = new User()
    user.name = name,
    user.email= email,
    user.password = bcrypt.hashSync(password, 10),
    user.number = number

    userRepository.create(user)
    await userRepository.save(user)

    return user
}

export default userCreateService