import { Request, Response } from 'express';
import CommentModel from '../models/CommentsSchema';
import ClasseModel from '../../classes/models/ClasseSchema';
import AppError from '../../../shared/errors/AppError';

export default class CommentController {
    //Função para criar comentario
    public async CreateComment(request: Request, response: Response){
        const { comment } = request.body;
        const { id_class } = request.headers;

        //Verficando sa classe existe
        const classeExiste =  await ClasseModel.findOne({_id: id_class});
        if(!classeExiste){
            throw new AppError("Classe não existe", 401);
        }

        let novaQuantidadeComment = classeExiste.total_comments;
        ++novaQuantidadeComment;

        //Atualizando a quantidade de Comments na Classe
        await ClasseModel.updateOne(
            {_id: id_class},
            {total_comments: novaQuantidadeComment}
        )
        
        const date_created = classeExiste.date_created;
        //Salvando o comment
        const commentReturn = await CommentModel.create({
            id_class,
            comment,
           date_created
        })

        return response.json(commentReturn);
    }

    //Função para deletar os comentarios
    public async DeleteComment(request: Request, response: Response){

        const { id_comment} = request.params;
        const commentExiste = await CommentModel.findOne({_id: id_comment});

        if(!commentExiste){
            throw new AppError("Comentario não existe", 401);
        }
        
        //Verficando sa classe existe
        const classe =  await ClasseModel.findOne({_id: commentExiste.id_class});
        if(!classe){
            throw new AppError("Classe não existe", 401);
        }

        let novaQuantidadeComment = classe.total_comments;
        --novaQuantidadeComment;

        //Atualizando a quantidade de Comments na Classe
        await ClasseModel.updateOne(
            {_id: classe._id},
            {total_comments: novaQuantidadeComment}
        )

        await CommentModel.deleteOne({_id: id_comment});

        return response.json({"Message": "Comentario excluido com sucesso!"});
    }

    public async ShowComments(request: Request, response: Response){
        const {id_aula} = request.headers;
        const aulaExiste = await ClasseModel.findOne({_id: id_aula});
        if(!aulaExiste){
            throw new AppError("Aula não existe", 401);
        }
        const commets = await CommentModel.find(
            {id_class: id_aula},
        ).limit(50);

        return response.json(commets);
    }
}