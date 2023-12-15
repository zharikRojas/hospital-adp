import { autenticar } from "../servicios/autenticacion.js";

export async function validateAutentication(req, res){
    const username = req.body.username;
    const password = req.body.password;
    try {
        const data = await autenticar(username, password);
        if(data.length > 0){
            res.status(200).send(data[0]);
        }else{
            res.status(404).send({error: "Usuario y/o contraseña invalidos"});
        }
        
    } catch (error) {
        console.error("hubo un error durante la autenticacion");
        res.status(500).send(error);
    }
}