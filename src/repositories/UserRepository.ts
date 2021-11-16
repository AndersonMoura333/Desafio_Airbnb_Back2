import { UserModel } from '../models/userModel';
import { User } from '../entities/user';

export async function criar(user: User) {
    return UserModel.create(user);
}

export async function buscar(userName: String) {
    const userAuth = await UserModel.where('nome').equals(userName).exec();
    return userAuth[0];
}





