import { Router } from 'express';
import * as ReservaController from '../controllers/reserva.controller';

export const router = Router();
export const pathReserva = '/reserva';

router.get(`${pathReserva}/listar`, ReservaController.listarTodos);
router.post(`${pathReserva}/cadastrar`, ReservaController.cadastrar);
