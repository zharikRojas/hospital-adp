import { obtenerCitasMedico, obtenerCitasPaciente, asignarCitaPaciente, actualizarCita, obtenerCita } from "../servicios/citas.js";

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
        if(data){
            res.status(200).send({success: "Se asigno la cita"});
        }else{
            res.status(204).send({error: "Creacion NO existosa."});
        }
    } catch (error) {
        console.error("Hubo un problema al asignar la cita.");
        res.status(500).send(error);
    }
}

export async function updateCita(req,res){

    const datosCita = {
        id_cita: req.params.id,
        novedad: req.body.novedad,
        id_estadoCita: req.body.id_estadoCita
    }

    try {
        const data = await actualizarCita(datosCita);
        
        if(data){
            res.status(200).send("Se han acttualizado los campos correctamente");
        }else{
            res.status(204).send({error: "La actualización de los datos no fue exitosa."});
        }
    } catch (error) {
        console.error("Ha ocurrido un error al actualizar la cita.");
        res.status(500).send(error);
    }
}

export async function getCitas(req,res){
    const idCita = req.params.id;
    try {
        const data = await obtenerCita(idCita);
        if(data.length > 0){
            res.status(200).send(data);
        }else{
            res.status(204).send({error:"No se encontraron citas con ese id"});
        }
    } catch (error) {
        console.error("Hubo un problema en la busqueda de citas");
        res.status(500).send(error);
    }
}