import express from 'express';
import config from './config.js';
import empleadoRouter from "./routers/EmpleadoRuters.js";
import usuarioRouter from "./routers/UsuarioRuters.js";
import reciboRouter from "./routers/ReciboRuters.js";
import bodyParser from 'body-parser';

const app = express();
//setings
app.set('port',config.port );
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(empleadoRouter)
app.use(usuarioRouter)
app.use(reciboRouter)

export default app;