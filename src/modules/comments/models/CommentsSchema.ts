import { Schema, model,  ObjectId } from 'mongoose';

// 1. Crie uma interface representando o MongoDB.
interface IClasse {
  id_class: ObjectId;
  comment: string;
  date_created: Date;
}

// 2. Criando um Schema correspondente à interface.
const schema = new Schema<IClasse>({
  id_class: { type: Object, required: true },
  comment: { type: String, required: true },
  date_created: { type: Date, required: true },
});

// 3. Criando o Model.
const CommentModel = model<IClasse>('Comment', schema);

export default CommentModel;