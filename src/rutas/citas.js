import  express  from "express";
import { getCitasMedico, getCitasPaciente, crearCitas, updateCita } from "../controladores/citas.js";

const citasRouter = express.Router();

//endpoint para obtener citas segun el id del usuario logeado
//medico
citasRouter.get('/citas/medico/:id', getCitasMedico);
//paciente
citasRouter.get('/citas/paciente/:id', getCitasPaciente);

citasRouter.post('/citas', crearCitas);
citasRouter.post('/citas/:id',updateCita);

export default citasRouter;