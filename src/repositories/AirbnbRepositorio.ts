import { Airbnb } from '../entities/airbnb';
import { AirbnbModel } from '../models/airbnbModel';

export async function criar(airbnb: Airbnb) {
    return AirbnbModel.create(airbnb);
}

export async function buscarPorId(id: string) {
    return AirbnbModel.where('id').equals(id);
}

export async function listar() {
    return AirbnbModel.find().exec();
}
