import { Router } from 'express';
import LoginController from '../controller/LoginUsersController';
const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post(
  '/',
  loginController.LoginUsuarioController,
);

export default loginRouter;