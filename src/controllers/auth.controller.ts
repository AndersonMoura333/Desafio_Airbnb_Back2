import { compare } from 'bcrypt';
import { Response, Request } from 'express';
import { buscar } from '../repositories/UserRepository';
import { sign } from 'jsonwebtoken'


export async function signIn(req: Request, res: Response) {
    const { nome, senha } = req.body;
    const user = await buscar(nome);
    compare(senha, user!.senha).then(passwordDidMatch => {
        console.log(passwordDidMatch);
        if (passwordDidMatch) {
            const token = sign({ nome: user!.nome, email: user!.email }, '9B20AC9338D7F324E6743676B6331FE135B96CB0C676D0D6720460B984B486FA', { expiresIn: 60 * 60 });
            res.status(200).json(token);
        } else {
            res.status(401).json({
                message: 'Usuario ou senha invalido'
            });
        }

    });
}
