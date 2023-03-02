import { Router } from "express";
import { CraeteUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRouter = Router();

const createUserController = new CraeteUserController();

usersRouter.post("/", createUserController.handler);

export { usersRouter };