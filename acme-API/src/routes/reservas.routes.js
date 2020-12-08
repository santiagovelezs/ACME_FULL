import { Router } from 'express'
const router = Router()

import * as reservaController from '../controllers/reserva.controller'

/* "/acme/api/albums" */
router.post("/", reservaController.createReserva) 
router.get('/', reservaController.getReservas)

export default router