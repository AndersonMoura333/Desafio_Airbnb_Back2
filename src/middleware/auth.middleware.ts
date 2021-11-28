import { verify } from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';

export const authorizationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authorizationHeader = req.headers.authorization;
    if (authorizationHeader) {
        verify(authorizationHeader, process.env.HASH_KEY!, (err, decoded) => {
            if (err) {
                res.status(401).json({
                    message: 'token invalido'
                });
            } else {
                return next();
            }
        })
    } else {
        res.status(401).json({
            message: 'token não encontrado'
        });
    }
}
