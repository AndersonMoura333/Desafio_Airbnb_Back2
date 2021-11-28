import { Router } from 'express';
import * as ReservaController from '../controllers/reserva.controller';
import { body } from 'express-validator';
import * as UserController from '../controllers/user.controller';
import { signIn } from '../controllers/auth.controller';
import { authorizationMiddleware } from '../middleware/auth.middleware';


export const router = Router();
const pathReserva = '/reserva';
const pathUser = '/usuario';
const pathAuth = '/auth';
const pathBuscar = '/buscar';

router.get(`${pathReserva}/listar`, ReservaController.listarTodos);

router.post(`${pathReserva}/cadastrar`,
    body('id').notEmpty().isString(),
    body('nome').notEmpty().isString(),
    body('cidade').notEmpty().isString().toLowerCase(),
    body('sumario').isString(),
    body('espaco').isString(),
    body('descricao').isString(),
    body('nota').notEmpty().isString(),
    body('acesso').isString(),
    body('regrasDaCasa').notEmpty().isString(),
    body('tipoDePropriedade').notEmpty().isString(),
    body('precoPorNoite').notEmpty().isString(),
    body('minimoDeNoites').notEmpty().isString(),
    body('maximoDeNoites').notEmpty().isString(),
    body('numDeBanheiros').notEmpty().isString(),
    body('numDeQuartos').notEmpty().isString(),
    body('numDeHospedes').notEmpty().isString(),
    body('numDeCamas').notEmpty().isString(),
    body('imagem').notEmpty().isString(),
    // authorizationMiddleware,
    ReservaController.cadastrar);

router.post(`${pathUser}/cadastrar`,
    body('nome').notEmpty().isString().toLowerCase(),
    body('email').notEmpty().isString().isEmail().toLowerCase(),
    body('senha').notEmpty().isString(),
    UserController.cadastrar);

router.post(`${pathAuth}/signIn`,
    body('nome').notEmpty().isString().toLowerCase(),
    body('senha').notEmpty().isString(), signIn);

router.get(`${pathBuscar}/cidade/:cidade`, ReservaController.buscarCidade);


router.get(`/filtro/:preco?/:tipoDePropriedade?`, ReservaController.filtrar);

