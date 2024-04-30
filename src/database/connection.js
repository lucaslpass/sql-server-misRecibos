import sql from 'mssql';
const dbStrings ={
    user: 'lucas',
    password: 'sqlpass',
    server: 'DESKTOP-STM78D4',
    database: 'MisRecibos_01' ,
    options:{
        encrypt: false ,
        trustServerCertificate: true,
    }


}
export async function  getConnection() {
    try{
        const pool = await sql.connect(dbStrings)
      
        return pool;  
        
    }
    catch (error){
        console.error(error)
    }
}

export {sql}