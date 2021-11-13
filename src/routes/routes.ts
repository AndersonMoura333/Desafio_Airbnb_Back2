import { Router } from 'express';
import * as ReservaController from '../controllers/reserva.controller';

export const router = Router();
export const path = '/';

router.get('/reserva/listar', ReservaController.listarTodos);
router.post('/reserva/cadatrar', ReservaController.cadastrar);
