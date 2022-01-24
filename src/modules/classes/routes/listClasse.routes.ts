import { Router } from "express";
import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated";
import ListClasseController from '../controller/ListClasseController';
const listRouter = Router();
const ListClasseControllerRouter = new ListClasseController();

//Colocando o middlewares de autenticação e upload 
listRouter.get('/:id_classe', isAuthenticated,  ListClasseControllerRouter.ListClasseController);

export default listRouter;
