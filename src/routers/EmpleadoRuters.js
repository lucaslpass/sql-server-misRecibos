import { Router } from "express";
import {createNewEmpleado, getEmpleado, getEmpleadoByDni, getEmpleadoById} from '../controllers/EmpleadoController.js'

const routeremp= Router();

routeremp.get('/empleado',getEmpleado)

routeremp.get('/empleado/:id',getEmpleadoById)

routeremp.get('/empleado/dni/:dni',getEmpleadoByDni)

routeremp.post('/empleado',createNewEmpleado)

routeremp.delete('/empleado',getEmpleado)

routeremp.put('/empleado',getEmpleado)

export default routeremp