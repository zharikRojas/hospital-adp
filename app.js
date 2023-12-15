import  express  from "express";
import router from "./src/rutas/index.js";

export const name = "martin";

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

/*app.get("/", (req, res) => {
    res.json({ message: "ok" });
  });

  app.get("/citas", (req, res) => {
    res.json({ message: "citas" });
  });

  //callback - pasar funcion como parametro a otra funcion
  app.get("/citas/:id", (req, res) => {
    console.log(req.params.id);
    res.json({ message: "citas con parametro" });
  });
*/
app.use("/api",router);
  export default app;