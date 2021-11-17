import { connect } from 'mongoose';


const uri = 'mongodb+srv://AdminAirbnb:123789@cluster0.vyak2.mongodb.net/Airbnb?retryWrites=true&w=majority';

export async function connecting() {
    try {
        const cliente = await connect(uri);
        console.log('Conectado ao MongoDb Atlas');

    } catch (error) {
        console.log(`Erro: ${error}`);
    }


}

