import { Schema, model, connect } from 'mongoose';

// 1. Crie uma interface representando o MongoDB.
interface IUser {
  name: string;
  email: string;
  password: string;
}

// 2. Criando um Schema correspondente à interface.
const schema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

// 3. Criando o Model.
const UserModel = model<IUser>('User', schema);

export default UserModel;