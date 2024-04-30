import { Router } from "express";

import { createNewUsuario, getUsuario, getUsuarioByPassword } from "../controllers/UsuarioController.js";

const routerUsuario= Router();

routerUsuario.get('/Usuario', getUsuario)

routerUsuario.get('/Usuario', getUsuarioByPassword)

routerUsuario.post('/Usuario', createNewUsuario )

routerUsuario.put('/Usuario')

routerUsuario.delete('/Usuario')

export default routerUsuario