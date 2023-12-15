import express from 'express';
import authRouter from './autenticacion.js';
import citasRouter from './citas.js';

const router = express.Router();

router.use(authRouter);
router.use(citasRouter);

export default router;