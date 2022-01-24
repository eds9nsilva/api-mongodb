import { Router } from "express";
import loginRouter from "../../../modules/usuario/routes/login.routes";
import classeRouter from "../../../modules/classes/routes/classe.routes";
import commentRouter from "../../../modules/comments/routes/comment.routes";
import listRouter from "../../../modules/classes/routes/listClasse.routes";
const routes = Router();

//Arquivo principal de rotas
routes.use('/users', loginRouter);
routes.use('/classes', classeRouter);
routes.use('/classes/comments', commentRouter);
routes.use('/classes', listRouter);

export default routes;
