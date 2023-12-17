import { autenticar } from "../servicios/autenticacion.js";

//exportamos una funcion que permite validar la autenticacion del usuario
export async function validateAutentication(req, res){
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    try {
        const data = await autenticar(username, password);//obtenemos el resultado que devuelve la función autenticar
        if(data.length > 0){
            res.status(200).send(data);
        }else{
            res.status(401).send({error: "Usuario y/o contraseña invalidos"});
        }
        
    } catch (error) {
        console.error("hubo un error durante la autenticacion");
        res.status(500).send(error);
    }
}