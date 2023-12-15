import express from 'express';
import authRouter from './autenticacion.js';
import citasRouter from './citas.js';
import pacientesRouter from './pacientes.js';

const router = express.Router();

router.use(authRouter);
router.use(citasRouter);
router.use(pacientesRouter);

//Devolvemos todos los endpoints
export default router;