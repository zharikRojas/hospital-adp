import { conexion } from "../../config.js";
import util from "util";

//permite utilizar el async await
conexion.query = util.promisify(conexion.query).bind(conexion);

export async function autenticar(username, password){
   
      try {
        const data  = await conexion.query(`SELECT id_usuario, cedula, nombre, id_rol FROM usuario where cedula=${username} AND contrasenia=${password}`);
        console.log(data);
        return data;
      } catch (error) {
        console.error("error con la base de datos");
      }
     
}
