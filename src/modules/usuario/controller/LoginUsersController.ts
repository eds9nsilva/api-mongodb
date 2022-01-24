import jwt from 'jsonwebtoken';
import {Request, Response} from 'express';
import AppError from '../../../shared/errors/AppError';
import UserModel from '../models/UserSchema';
import authConfig from '../../../config/auth';

export default class UsuarioController {
    public async LoginUsuarioController(request: Request, response: Response) {
      
       const { email, password } = request.body;

       const usuarioExiste = await UserModel.findOne({email: email});

       //Validando os dados Email e Senha
       if(!usuarioExiste){
        throw new AppError('E-mail ou senha está incorreto!', 401);
       }
       // Usando este método para verificar.
       // caso use criptografia no cadastro usar o compare da biblioteca bcryptjs
       if(password != usuarioExiste.password){
        throw new AppError('E-mail ou senha está incorreto!', 401);
       }


       //Gerando o token
      const token = jwt.sign(
        {
           id: usuarioExiste.id
        },  
          authConfig.jwt.secret
        ,
          {expiresIn: authConfig.jwt.expiresIn} 
      );
      
      //Não retonar dados sensivel
      //Retornando o dado password vázio
      usuarioExiste.password = '';

      const user = {    
        usuarioExiste,
        token
      }
      return response.json(user);
    }
}