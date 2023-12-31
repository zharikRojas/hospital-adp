import { conexion } from "../../config.js";
import util from "util";

//permite utilizar el async await
conexion.query = util.promisify(conexion.query).bind(conexion);

export async function obtenerCitasMedico(idMedico){
   
      try {
        const data  = await conexion.query(`SELECT c.id_cita, c.fecha_hora, c.novedad, 
        e.nombreEspecialidad AS Especialidad, u.nombre AS Paciente, u2.nombre AS Medico, 
        ec.estado AS Estado_Cita
        FROM cita c
        INNER JOIN especialidad e ON c.id_especialidad = e.id_especialidad
        INNER JOIN usuario u ON c.id_paciente= u.id_usuario
        INNER JOIN usuario u2 ON c.id_medico = u2.id_usuario
        INNER JOIN estadoCita ec on c.id_estadoCita= ec.id_estadoCita
        where c.id_medico=${idMedico}`);
        return data;
      } catch (error) {
        console.error("error con la base de datos");
      }
}

export async function obtenerCitasPaciente(idPaciente){
   
  try {
    const data  = await conexion.query(`SELECT c.id_cita, c.fecha_hora, c.novedad, 
    e.nombreEspecialidad AS Especialidad, u.nombre AS Paciente, u2.nombre AS Medico, 
    ec.estado AS Estado_Cita
    FROM cita c
    INNER JOIN especialidad e ON c.id_especialidad = e.id_especialidad
    INNER JOIN usuario u ON c.id_paciente= u.id_usuario
    INNER JOIN usuario u2 ON c.id_medico = u2.id_usuario
    INNER JOIN estadoCita ec on c.id_estadoCita= ec.id_estadoCita
    where c.id_paciente=${idPaciente}`);
    return data;
  } catch (error) {
    console.error("error con la base de datos");
  }
 
}

export async function asignarCitaPaciente(nuevaCita){

  try {
    
    const data = await conexion.query(`INSERT INTO cita (fecha_hora, id_especialidad, id_paciente, id_medico, id_estadoCita) VALUES ("${nuevaCita.fechaHoraCita}", ${nuevaCita.id_especialidad},${nuevaCita.id_paciente},${nuevaCita.id_medico},${nuevaCita.id_estadoCita})`);

    return data;
  } catch (error) {
    console.error("Error al insertar en la base de datos");
  }
}

export async function actualizarCita(datosCita){
  try {
    const data = await conexion.query(`UPDATE cita SET id_estadoCita = ${datosCita.id_estadoCita}, novedad = "${datosCita.novedad}" WHERE id_cita = ${datosCita.id_cita}`)
   

    return data;
  } catch (error) {
    console.error("Error al actualizar campos en la base de datos");
  }
}

export async function obtenerCita(idCita){
  try {
    const data  = await conexion.query(`SELECT c.fecha_hora, c.novedad, 
    e.nombreEspecialidad AS Especialidad, u.nombre AS Paciente, u2.nombre AS Medico, 
    ec.estado AS Estado_Cita
    FROM cita c
    INNER JOIN especialidad e ON c.id_especialidad = e.id_especialidad
    INNER JOIN usuario u ON c.id_paciente= u.id_usuario
    INNER JOIN usuario u2 ON c.id_medico = u2.id_usuario
    INNER JOIN estadoCita ec on c.id_estadoCita= ec.id_estadoCita
    where c.id_cita=${idCita}`);

    return data;
  } catch (error) {
    console.error("error con la base de datos");
  }
}