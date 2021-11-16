import { Response, Request } from 'express';
import { User } from '../entities/user';
import { criar } from '../repositories/UserRepository';
import { validationResult } from 'express-validator';
import { hash } from 'bcrypt';

export async function cadastrar(req: Request, res: Response) {
    const user: User = (req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(404).json({
            message: errors.array()
        });
    } else {
        const hashPassword = await hash(user.senha, 10);
        const hashedUser: User = {
            nome: user.nome,
            email: user.email,
            senha: hashPassword
        }
        criar(hashedUser);
        res.status(200).json({
            message: 'Cadastrado com sucesso'
        });
    }

}

