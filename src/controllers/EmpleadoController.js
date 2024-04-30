
import { getConnection , sql, queriesEmp} from "../database/index.js";


export const getEmpleado = async (req,res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queriesEmp.getAllEmpleados)
        res.json(result.recordset)        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}
export const createNewEmpleado = async (req, res) => {
    
const { nombre, apellido, dni, cuil, calle, numero_de_calle, ciudad, provincia, fecha_de_ingreso, fecha_de_egreso, is_delete } = req.body;

const emp = { 
    nombre,
    apellido,
    dni,
    cuil,
    calle,
    numero_de_calle,
    ciudad,
    provincia,
    fecha_de_ingreso,
    fecha_de_egreso,
    is_delete
};

    const camposVacios = [];
    console.log(req.body)    
    Object.keys(emp).forEach(key => {
        if ((key !== 'fecha_de_egreso' && key !== 'is_delete') && (emp[key] == null || emp[key] === '')) {
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
    .input("nombre", sql.VarChar,nombre)
    .input("apellido", sql.VarChar,apellido)
    .input("dni", sql.Numeric,dni)
    .input("cuil", sql.Numeric,cuil)
    .input("calle", sql.VarChar,calle)
    .input("numero_de_calle", sql.Numeric,numero_de_calle)
    .input("ciudad", sql.VarChar,ciudad)
    .input("provincia", sql.VarChar,provincia)
    .input("fecha_de_ingreso", sql.SmallDateTime,fecha_de_ingreso)
    .input("fecha_de_egreso", sql.SmallDateTime,fecha_de_egreso)
    .input("is_delete", sql.Bit,is_delete)
    .query(queriesEmp.createNwEmpleado)
        
    } catch (error) {
     res.status(500)
     res.send(error.message)        
    }
    
    res.json('new empleado')        
}

export const getEmpleadoById = async (req, res)=>{
 try {
    const {id}= req.params
    console.log(req.params)
    const pool = await getConnection();
    const result = await pool.request().input("id",id).query(queriesEmp.getEmpleadoById)
    console.log(result)
    res.send(result.recordset[0])    
 } catch (error) {
    res.status(500)
    res.send(error.message)}
}
export const getEmpleadoByDni = async (req, res)=>{
    try {
       const {dni}= req.params
       console.log(req.params)
       const pool = await getConnection();
       const result = await pool.request().input("dni", dni).query(queriesEmp.getEmpleadoByDni)
       console.log(result)
       res.send(result.recordset[0])    
    } catch (error) {
       res.status(500)
       res.send(error.message)
    }
}    