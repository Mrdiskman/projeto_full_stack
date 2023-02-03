import { Router } from "express";
import contactCreateController from "../../controllers/contacts/createContact.controller";
import deleteContactController from "../../controllers/contacts/deleteContacts.controller";
import contactListController from "../../controllers/contacts/listContacts.controller";
import updateContactController from "../../controllers/contacts/updateContacts.controller";
import { authUser } from "../../middlewares/authUser.middleware";
import userExistVerifyMiddleware from "../../middlewares/userExistVerify.middleware";

const routes = Router()

routes.post("/contacts", authUser, userExistVerifyMiddleware, contactCreateController)
routes.get("/contacts", authUser, userExistVerifyMiddleware, contactListController)
routes.patch("/contacts/update/:id", authUser, userExistVerifyMiddleware, updateContactController)
routes.delete("/contacts/:id", authUser, userExistVerifyMiddleware, deleteContactController)

export default routes