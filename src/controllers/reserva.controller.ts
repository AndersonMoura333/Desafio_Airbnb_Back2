import { Request, Response } from 'express';
import { Airbnb } from '../entities/airbnb';
import { criar, listar } from '../repositories/AirbnbRepositorio'
export async function listarTodos(req: Request, res: Response) {
    const airbnbs = await listar();
    console.log(airbnbs);
    if (airbnbs.length > 0) {
        res.status(200).json(airbnbs);
    } else {
        res.status(404).json({
            message: 'reserva não encontrada'
        });
    }


}

export async function cadastrar(req: Request, res: Response) {
    const airbnb: Airbnb = (req.body);
    criar(airbnb);
    res.send(airbnb);
}
