import fs from "fs";
import { getConnection , sql, queriesRec} from "../database/index.js";


export const getRecibo = async (req,res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queriesRec.getAllRecibos)
        console.log(result)
        res.json(result.recordset)        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}
export const createNewRecibo = async (req, res) => {
    
const { path, mes, anio, empleado } = req.body;

const recibo = { path, mes, anio, empleado};

    const camposVacios = [];
    console.log(req.body)    
    Object.keys(recibo).forEach(key => {
        if ( (recibo[key] == null || recibo[key] === '')) {
            camposVacios.push(key);
        }
    });

    if (camposVacios.length > 0) {
        return res.status(400).json({ msg: 'Bad request', campos_vacios: camposVacios });
    }
    try {
        const pool = await getConnection();
    await pool
    .request()
    .input("path", sql.VarChar,path)
    .input("mes", sql.Numeric,mes)
    .input("anio", sql.Numeric,anio)
    .input("empleado", sql.Int,empleado)
    .query(queriesRec.createNewRecibo)
        
    } catch (error) {
     res.status(500)
     res.send(error.message)        
    }
    
    res.json('new recibo')        
}
export const getReciboByEmpleado = async (req, res)=>{
 try {
    const {empleado}= req.params
    const pool = await getConnection();
    const result = await pool.request().input("empleado",empleado).query(queriesRec.getReciboByEmpleado)
    console.log(result)
    var file = fs.readdirSync(result.recordset[0].path)
    res.send(file)    
 } catch (error) {
    res.status(500)
    res.send(error.message)
 }}
