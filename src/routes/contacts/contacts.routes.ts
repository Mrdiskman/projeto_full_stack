import { Router } from "express";
import contactCreateController from "../../controllers/contacts/createContact.controller";
import deleteContactController from "../../controllers/contacts/deleteContacts.controller";
import contactListController from "../../controllers/contacts/listContacts.controller";
import listOneContactController from "../../controllers/contacts/listOneContact.controller";
import updateContactController from "../../controllers/contacts/updateContacts.controller";
import { authUser } from "../../middlewares/authUser.middleware";
import verifyContactDataMiddleware from "../../middlewares/contactDataVerify";
import userExistVerifyMiddleware from "../../middlewares/userExistVerify.middleware";

const routes = Router()

routes.post("/contacts", authUser, userExistVerifyMiddleware, verifyContactDataMiddleware, contactCreateController)
routes.get("/contacts", authUser, userExistVerifyMiddleware, contactListController)

routes.get("/contact/:id", authUser, userExistVerifyMiddleware, listOneContactController)

routes.patch("/contacts/update/:id", authUser, userExistVerifyMiddleware, updateContactController)
routes.delete("/contacts/:id", authUser, userExistVerifyMiddleware, deleteContactController)

export default routes