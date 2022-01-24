import { Schema, model, connect } from 'mongoose';

// 1. Crie uma interface representando o MongoDB.
interface IClasse {
  name: string;
  description: string;
  video: string;
  data_init: Date;
  data_end: Date;
  date_created: Date;
  date_updated: Date;
  total_comments: Number;
}

// 2. Criando um Schema correspondente à interface.
const schema = new Schema<IClasse>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  video: { type: String, required: true },
  data_init: { type: Date, required: true },
  data_end: { type: Date, required: true },
  date_created: { type: Date, required: true },
  date_updated: { type: Date, required: true },
  total_comments: { type: Number, required: false },


});

// 3. Criando o Model.
const ClasseModel = model<IClasse>('Classe', schema);

export default ClasseModel;