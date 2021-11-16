import { verify } from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';

export const authorizationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authorizationHeader = req.headers.authorization;
    if (authorizationHeader) {
        verify(authorizationHeader, '9B20AC9338D7F324E6743676B6331FE135B96CB0C676D0D6720460B984B486FA', (err, decoded) => {
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
