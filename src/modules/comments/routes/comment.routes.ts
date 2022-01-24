import { Router } from "express";
import CommentController from "../controller/CommentController";
import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated";

const commentRouter = Router();
const commentControlerRouter = new CommentController();

//Colocando o middlewares de autenticação 
commentRouter.post('/', isAuthenticated, commentControlerRouter.CreateComment);

commentRouter.delete('/:id_comment', isAuthenticated, commentControlerRouter.DeleteComment);
commentRouter.get('/', isAuthenticated, commentControlerRouter.ShowComments);

export default commentRouter;
