import  express  from "express";
import { validateAutentication } from "../controladores/autenticacion.js";

const authRouter = express.Router();

authRouter.post('/auth', validateAutentication);

export default authRouter;