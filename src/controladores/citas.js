import { obtenerCitasMedico, obtenerCitasPaciente, asignarCitaPaciente } from "../servicios/citas.js";

export async function getCitasMedico(req,res){
    const idMedico = req.params.id;
     try{
        const data = await obtenerCitasMedico(idMedico);
        
        if(data.length > 0){
            res.status(200).send(data);
        }else{
            res.status(204).send({error: "No se encontraron citas con el usuario"});
        }
     }catch(error){
        console.error("Hubo un problema en la busqueda de citas");
        res.status(500).send(error);
     }
}

export async function getCitasPaciente(req,res){
    const idPaciente = req.params.id;
    try {
        const data = await obtenerCitasPaciente(idPaciente);
        if(data.length > 0){
            res.status(200).send(data);
        }else{
            res.status(204).send({error:"No se encontraron citas con el usuario"});
        }
    } catch (error) {
        console.error("Hubo un problema en la busqueda de citas");
        res.status(500).send(error);
    }
}

export async function crearCitas(req,res){
    const nuevaCita = {
        fechaHoraCita: req.body.fechaHoraCita,
        id_especialidad: req.body.id_especialidad,
        id_paciente: req.body.id_paciente,
        id_medico: req.body.id_medico,
        id_estadoCita: req.body.id_estadoCita
    }

    try {
        const data = await asignarCitaPaciente(nuevaCita);
        console.log(data);
        if(data){
            res.status(200).send("Se asigno la cita");
        }else{
            res.status(204).send({error: "Creacion NO existosa."});
        }
    } catch (error) {
        console.error("Hubo un problema al asignar la cita.");
        res.status(500).send(error);
    }
}