import { Router } from "express";
import userCreateController from "../controllers/users/userCreate.controller";
import listUserController from "../controllers/users/userList.controller";

const routes = Router()

routes.post("/users", userCreateController)
routes.get("/users", listUserController)

export default routes