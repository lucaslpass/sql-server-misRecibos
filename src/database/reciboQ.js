

export const queriesRec = {
    getAllRecibos : 'SELECT * FROM Recibo',

    getReciboByEmpleado: 'SELECT * FROM Recibo WHERE empleado = @empleado',

    createNewRecibo: "INSERT INTO Recibo (path,mes,anio,empleado) VALUES (@path, @mes, @anio, @empleado)"

}