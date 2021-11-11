import { Router } from 'express';
import * as InicialController from '../controllers/inicial.controller';

export const router = Router();
export const path = '/';

router.get(path, InicialController.getInicial);
