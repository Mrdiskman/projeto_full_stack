import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/user"; 
import jwt from "jsonwebtoken"

const loginUserService = async({email, password}:IUserLogin) =>{
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    const account = users.find(user => user.email === email)

    const token = jwt.sign(
        {email: email, id:account!.id}, String(process.env.JWT_SECRET), {expiresIn:"1d"}
    )
    return token
}

export default loginUserService