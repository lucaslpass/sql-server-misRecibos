import { Router } from "express";
import { getRecibo,getReciboByEmpleado,createNewRecibo } from "../controllers/ReciboController.js";

const routerRec= Router();

routerRec.get('/recibo',getRecibo)

routerRec.get('/recibo/:empleado',getReciboByEmpleado) 

routerRec.post('/recibo',createNewRecibo)

routerRec.put('/recrecibo',)

routerRec.delete('/recibo')

export default routerRec