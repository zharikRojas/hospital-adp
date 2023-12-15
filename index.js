import { conexion } from "./config.js";
import app, {name} from "./app.js";


app.listen(app.get("port"), ()=>{
  console.log("el servidor ha iniciado en el puerto: ", app.get("port"))
});

/*conexion.connect((err) => {
    if (err) {
      console.error('Error de conexión: ', err);
      return;
    }
  
    console.log('Conectado a la base de datos!');
  
    conexion.query('SELECT * FROM cita', (err, rows) => {
      if (err) {
        console.error('Error al realizar la consulta: ', err);
        return;
      }
  
      console.log('Resultados: ', rows);
    });
  });*/