import { Request, Response } from 'express';
import { Airbnb } from '../entities/airbnb';
import { criar, listar, buscarPorCidade } from '../repositories/AirbnbRepository'
import { validationResult } from 'express-validator'


export async function listarTodos(req: Request, res: Response) {
    const airbnbs = await listar();
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(404).json({
            message: errors.array()
        });
    } else {

        res.status(200).json(airbnb);
        criar(airbnb);
    }

}

export async function buscar(req: Request, res: Response) {
    const { cidade } = req.params;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(404).json({
            message: errors.array()
        });
    } else {
        const AirbnbPorCidade = await buscarPorCidade(cidade.toLowerCase());
        res.status(200).json(AirbnbPorCidade);

    }


}
