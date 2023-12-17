import  express  from "express";
import router from "./src/rutas/index.js";

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/api",router);
  export default app;