import  express  from "express";
import { getPacientes } from "../controladores/pacientes.js";

const pacientesRouter = express.Router();

pacientesRouter.get('/pacientes', getPacientes);

export default pacientesRouter;