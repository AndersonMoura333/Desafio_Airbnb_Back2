import { Response, Request } from 'express';
import { User } from '../entities/user';
import { criar } from '../repositories/UserRepository';
import { validationResult } from 'express-validator';

export async function cadastrar(req: Request, res: Response) {
    const user: User = (req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(404).json({
            message: errors.array()
        });
    } else {
        res.status(200);
        criar(user);
    }
}

