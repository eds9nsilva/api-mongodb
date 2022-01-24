import { Request, Response } from 'express';
import AppError from '../../../shared/errors/AppError';
import CommentModel from '../../comments/models/CommentsSchema';
import ClasseModel from '../models/ClasseSchema';
export default class ClasseController {
   
    public async CreateAula(request: Request, response: Response) {
        const { 
            name,
            description,
            data_init,
            data_end, 
            date_created, 
            date_updated
        } = request.body;
        const  video  = request.file;

        //Aula nova inicia com a quantidade de comentarios = 0
        const total_comments = 0;
        const classe = await ClasseModel.create({
            name,
            description,
            video: video?.filename,
            data_init,
            data_end, 
            date_created, 
            date_updated,
            total_comments
        });

        return response.json(classe);
    }


    

    public async UpdateAula(request: Request, response: Response){
        const { 
            name,
            description,
            data_init,
            data_end, 
            date_created, 
            date_updated
        } = request.body;
        const { id_aula } = request.headers;

        const aula = await ClasseModel.findOne({_id: id_aula});
        if(!aula){
            throw new AppError("Aula não existe");
        }

        await ClasseModel.findOneAndUpdate({
            _id: id_aula
        }, {
            name: name || aula.name,
            description: description || aula.description,
            data_init: data_init || aula.data_init,
            data_end: data_end || aula.data_end,
            date_created: date_created || aula.date_created,
            date_updated: date_updated || aula.date_updated
        })
        const aulaAtualizada = await ClasseModel.findOne({_id: id_aula});
        return response.json(aulaAtualizada);
    }

    public async DeleteAula(request: Request, response: Response){
        const {id_aula} = request.params;
        await ClasseModel.findOneAndDelete({_id: id_aula});
        //deletando comentarios relacionados com a aula
        await CommentModel.deleteMany({id_class: id_aula});
        return response.json({"Message": "Aula deletada com sucesso"});
    }

}