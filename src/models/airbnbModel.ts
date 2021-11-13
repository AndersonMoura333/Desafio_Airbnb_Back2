import { Airbnb } from '../entities/airbnb';
import { Imagens } from '../entities/imagens'
import { model, Schema, SchemaTypes } from 'mongoose';

const AirbnbSchema = new Schema<Airbnb>({
    id: { type: String, required: true, unique: true },
    nome: { type: String, required: true },
    sumario: { type: String, required: true },
    espaco: { type: String, required: true },
    descricao: { type: String, required: true },
    notas: { type: String, required: true },
    acesso: { type: String, required: true },
    interacao: { type: String, required: true },
    regrasDaCasa: { type: String, required: true },
    tipoDePropriedade: { type: String, required: true },
    tipoDeSala: { type: String, required: true },
    tipoDeCama: { type: String, required: true },
    minimoDeNoites: { type: String, required: true },
    maximoDeNoites: { type: String, required: true },
    imagens: { type: String, required: true }
});

export const AirbnbModel = model<Airbnb>('Airbnb', AirbnbSchema, 'airbnb');
