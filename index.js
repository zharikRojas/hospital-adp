import { conexion } from "./config.js";
import app from "./app.js";


app.listen(app.get("port"), ()=>{
  console.log("el servidor ha iniciado en el puerto: ", app.get("port"))
});
