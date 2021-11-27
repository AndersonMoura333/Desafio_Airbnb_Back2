import { Airbnb } from '../entities/airbnb';
import { AirbnbModel } from '../models/airbnbModel';

export async function criar(airbnb: Airbnb) {
    return AirbnbModel.create(airbnb);
}

export async function buscarPorId(id: string) {
    return AirbnbModel.where('id').equals(id).exec();
}

export async function buscarPorCidade(cidadeBuscada: string) {
    // const airbnbPorCidade = await AirbnbModel.where('cidade').equals(cidade).exec();
    return AirbnbModel.find({ cidade: cidadeBuscada }).exec();
}

export async function listar() {
    return AirbnbModel.find().exec();
}
