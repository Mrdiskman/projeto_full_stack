import express, { NextFunction, Response, Request} from "express"
import { AppError } from "./errors/appError"
import userRoutes from "./routes/users/user.routes"
import contactRoutes from "./routes/contacts/contacts.routes"

const app = express()

app.use(express.json())
app.use("", userRoutes)
app.use("", contactRoutes)

app.use((err:Error, req:Request, res:Response, _:NextFunction)=>{
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            status:"error",
            message:err.message
        })
      }
    console.error(err)
    return res.status(500).json({
        status:"error",
        message:"Internal Server Error"
        })
    }
)
export default app