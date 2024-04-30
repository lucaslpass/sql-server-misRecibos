

export const queriesUsu = {
    getAllUsurio : 'SELECT * FROM Usuario',

    getUsuarioByPassword: 'SELECT * FROM Usuario WHERE password =@password',

    createNewUsuario: "INSERT INTO Empleado (email , password,empleado)  VALUES (@email,@password, @empleado)"
}