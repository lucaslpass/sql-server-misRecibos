

export const queriesEmp = {
    getAllEmpleados : 'SELECT * FROM Empleado',

    getEmpleadoById: 'SELECT * FROM Empleado WHERE id =@id',

    getEmpleadoByDni: 'SELECT * FROM Empleado WHERE dni =@dni',

    createNwEmpleado: "INSERT INTO Empleado"
                      +"(nombre,apellido,dni,"
                      +"cuil,calle,numero_de_calle,"
                      +"ciudad,provincia,fecha_de_ingreso,"
                      +"fecha_de_egreso,is_delete)"
                      +" VALUES (@nombre,@apellido, @dni,@cuil,"
                      +" @calle, @numero_de_calle, @ciudad,@provincia,"
                      +" @fecha_de_ingreso,@fecha_de_egreso, @is_delete)"
}