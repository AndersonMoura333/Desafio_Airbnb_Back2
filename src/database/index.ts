import { connect } from 'mongoose';


const uri = process.env.MONGO_URI;

export async function connecting() {
    try {
        const cliente = await connect(uri!);
        console.log('Conectado ao MongoDb Atlas');

    } catch (error) {
        console.log(`Erro: ${error}`);
    }


}

