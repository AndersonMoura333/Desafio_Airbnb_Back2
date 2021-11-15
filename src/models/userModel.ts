import { User } from '../entities/user';
import { model, Schema } from 'mongoose';

const UserSchema = new Schema<User>({
    nome: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },

});

export const UserModel = model<User>('User', UserSchema, 'Users');
