import { Router } from "express";
import multerConfig from "../../../config/multerConfig";
import ClasseController from "../controller/ClasseController";
import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated";

const classeRouter = Router();
const classeControlerRouter = new ClasseController();

//Colocando o middlewares de autenticação e upload 
classeRouter.post('/', isAuthenticated, multerConfig.single("video"), classeControlerRouter.CreateAula);
classeRouter.put('/', isAuthenticated, classeControlerRouter.UpdateAula);
classeRouter.delete('/:id_aula', isAuthenticated, classeControlerRouter.DeleteAula);


export default classeRouter;
