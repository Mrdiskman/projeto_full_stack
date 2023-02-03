import { Router } from "express";
import listOneUserController from "../../controllers/users/listMe.controller";
import loginUserController from "../../controllers/users/loginUser.controller";
import userCreateController from "../../controllers/users/userCreate.controller";
import userDeleteSelfController from "../../controllers/users/userDeleteSelf.controller";
import listUserController from "../../controllers/users/userList.controller";
import newPasswordController from "../../controllers/users/userUpdate.controller";
import { authUser } from "../../middlewares/authUser.middleware";
import verifyLoginMiddleware from "../../middlewares/loginVerify.middlewares";
import userExistVerifyMiddleware from "../../middlewares/userExistVerify.middleware";
import verifyEmailAlredyExistMiddleware from "../../middlewares/verifyEmailAlredyExist.middleware";
import verifyRegisterMiddleware from "../../middlewares/verifyRegisterData.middleware";
import verifyUpdatedData from "../../middlewares/verifyUpdateData.middleware";

const routes = Router()

routes.post("/users", verifyRegisterMiddleware, userCreateController)
routes.post("/users/login", verifyLoginMiddleware, loginUserController)

routes.get("/users", listUserController)
routes.get("/users/me", authUser, userExistVerifyMiddleware, listOneUserController)

routes.delete("/users", authUser, userExistVerifyMiddleware, userDeleteSelfController)

routes.patch("/users/update", authUser, userExistVerifyMiddleware, verifyUpdatedData, verifyEmailAlredyExistMiddleware, newPasswordController)

export default routes