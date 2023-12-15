import { conexion } from "../../config.js";
import util from "util";

//permite utilizar el async await
conexion.query = util.promisify(conexion.query).bind(conexion);

export async function obtenerPacientes(){
   
    try {
      const data  = await conexion.query(`SELECT id_usuario, cedula, nombre AS Nombre_Paciente 
      FROM usuario
      WHERE id_rol = 2`);
      console.log(data);
      return data;
    } catch (error) {
      console.error("error con la base de datos");
    }
   
}