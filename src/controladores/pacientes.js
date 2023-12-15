import { obtenerPacientes } from "../servicios/pacientes.js";

export async function getPacientes(req,res){
     try{
        const data = await obtenerPacientes();
        
        if(data.length > 0){
            res.status(200).send(data);
        }else{
            res.status(204).send({error: "No se encontraron pacientes"});
        }
     }catch(error){
        console.error("Hubo un problema en la busqueda de pacientes");
        res.status(500).send(error);
     }
}