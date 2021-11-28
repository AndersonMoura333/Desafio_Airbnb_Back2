import { Airbnb } from '../entities/airbnb';
import { model, Schema } from 'mongoose';

const AirbnbSchema = new Schema<Airbnb>({
    id: { type: String, required: true, unique: true },
    nome: { type: String, required: true },
    cidade: { type: String, required: true },
    sumario: { type: String, required: false },
    espaco: { type: String, required: false },
    descricao: { type: String, required: false },
    nota: { type: String, required: false },
    acesso: { type: String, required: false },
    regrasDaCasa: { type: String, required: true },
    tipoDePropriedade: { type: String, required: true },
    precoPorNoite: { type: String, required: true },
    minimoDeNoites: { type: String, required: true },
    maximoDeNoites: { type: String, required: true },
    numDeBanheiros: { type: String, required: true },
    numDeQuartos: { type: String, required: true },
    numDeHospedes: { type: String, required: true },
    numDeCamas: { type: String, required: true },
    imagem: { type: String, required: true }
});

export const AirbnbModel = model<Airbnb>('Airbnb', AirbnbSchema, 'airbnb');
