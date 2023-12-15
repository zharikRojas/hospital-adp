import  express  from "express";
import { getCitas } from "../controladores/citas.js";

const citasRouter = express.Router();
//id medico
citasRouter.get('/citas/medico/:id', getCitasMedico);
export default citasRouter;