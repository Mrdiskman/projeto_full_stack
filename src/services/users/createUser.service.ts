import { database } from "../../database";
import { IUserCreate, IUser } from "../../interfaces/user";
import {v4 as uuidv4} from "uuid"

const userCreateService = ({email, name, password, phone}:IUserCreate) => {
    const emailAlredyExist = database.find((user)=> user.email === email)
    if(emailAlredyExist){
        throw new Error("Email alredy exists")
    }

    const newUser:IUser={
        id:uuidv4(),
        name,
        email,
        password, 
        phone
    }

    database.push(newUser)
    return newUser
}

export default userCreateService