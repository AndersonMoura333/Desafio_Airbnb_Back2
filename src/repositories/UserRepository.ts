import { UserModel } from '../models/userModel';
import { User } from '../entities/user';

export async function criar(user: User) {
    return UserModel.create(user);
}

export async function autentificar(userName: String, userPassword: String) {
    return UserModel.where('nome').equals(userName).where('senha').equals(userPassword).exec();
}





