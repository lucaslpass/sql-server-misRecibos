import { getConnection , sql, queriesUsu} from "../database/index.js";


export const getUsuario = async (req,res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queriesUsu.getAllUsuario)
        res.json(result.recordset)        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}
export const createNewUsuario = async (req, res) => {
    
const {email, password, empleado} = req.body;

const usuario ={email, password, empleado};

    const camposVacios = [];
    console.log(req.body)    
    Object.keys(usuario).forEach(key => {
        if ( (usuario[key] == null || usuario[key] === '')) {
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
    .input("email", sql.VarChar,email)
    .input("password", sql.VarChar,password)
    .input("empleado", sql.Int,empleado)
    .query(queriesUsu.createNewUsuario)
        
    } catch (error) {
     res.status(500)
     res.send(error.message)        
    }
    
    res.json('new usuario')        
}
export const getUsuarioByPassword = async (req, res)=>{
 try {
    const {password}= req.params
    const pool = await getConnection();
    const result = await pool.request().input("password",password).query(queriesUsu.getUsuarioByPassword)
    console.log(result)
    res.send(result.recordset[0])    
 } catch (error) {
    res.status(500)
    res.send(error.message)
 }}