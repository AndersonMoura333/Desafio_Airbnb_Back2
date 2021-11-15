import { Router } from 'express';
import * as ReservaController from '../controllers/reserva.controller';
import { body } from 'express-validator';
import * as UserController from '../controllers/userController';

export const router = Router();
const pathReserva = '/reserva';
const pathUser = '/usuario';

router.get(`${pathReserva}/listar`, ReservaController.listarTodos);

router.post(`${pathReserva}/cadastrar`,
    body('id').notEmpty().isString(),
    body('nome').notEmpty().isString(),
    body('sumario').notEmpty().isString(),
    body('espaco').notEmpty().isString(),
    body('descricao').notEmpty().isString(),
    body('notas').notEmpty().isString(),
    body('acesso').notEmpty().isString(),
    body('interacao').notEmpty().isString(),
    body('regrasDaCasa').notEmpty().isString(),
    body('tipoDePropriedade').notEmpty().isString(),
    body('tipoDeSala').notEmpty().isString(),
    body('tipoDeCama').notEmpty().isString(),
    body('minimoDeNoites').notEmpty().isString(),
    body('maximoDeNoites').notEmpty().isString(),
    body('imagens').notEmpty().isString(),
    ReservaController.cadastrar);

router.post(`${pathUser}/cadastrar`,
    body('nome').notEmpty().isString().toLowerCase(),
    body('email').notEmpty().isString().toLowerCase(),
    body('senha').notEmpty().isString(),
    UserController.cadastrar);
