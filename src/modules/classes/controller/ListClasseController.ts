import { Request, Response } from 'express';
import AppError from '../../../shared/errors/AppError';
import ClasseModel from '../models/ClasseSchema';
import CommentModel from '../../comments/models/CommentsSchema';

export default class ListClasseController {
   
    public async ListClasseController(request: Request, response: Response) {
        
        const { id_classe } = request.params;
        
        const classe = await ClasseModel.findById({_id: id_classe});
        if(!classe){
            throw new AppError("Classe não existe", 401);
        }

        const commentExist = await CommentModel.find({id_class: id_classe});
        if(!commentExist){
            return response.json({"name": classe.name, "comments": ""});
        }
        //buscando os 3 ultimos comentarios da aul
        const comment = await CommentModel.find({
            id_class: id_classe
        }).sort({comment: -1}).limit(3);
        //Criando o array com os 3 ultimos comentarios
        const comments = [];
        //Preenchendo o array com comentarios
        for(var i = 0; 2 >= i; i++){
            //Verificar se tem campo nulo
            if(comment[i] != null){
                comments[i] = comment[i].comment;
            }
        }
        return response.json({"name": classe.name, "comments": comments});
    }

}