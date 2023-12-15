import { conexion } from "../../config.js";
import util from "util";

conexion.query = util.promisify(conexion.query).bind(conexion);

export async function autenticar(username, password){
    /*return conexion.connect((err) => {
        if (err) {
          console.error('Error de conexión: ', err);
          return;
        }
      
        console.log('Conectado a la base de datos!');
      
        conexion.query(`SELECT * FROM usuario where cedula=${username} AND contrasenia=${password}`, (err, rows) => {
          if (err) {
            console.error('Error al realizar la consulta: ', err);
            return;
          }
      
          console.log('Resultados: ', rows);
          return true;
        });
      });*/
      try {
        const data  = await conexion.query(`SELECT * FROM usuario where cedula=${username} AND contrasenia=${password}`);
        console.log(data);
        return data;
      } catch (error) {
        console.error("error con la base de datos");
      }
     
}
