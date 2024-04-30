

export const queriesUsu = {
    getAllUsuario : 'SELECT * FROM Usuario',

    getUsuarioByPassword: 'SELECT * FROM Usuario WHERE password =@password',

    createNewUsuario: "INSERT INTO Usuario (email , password, empleado)  VALUES (@email,@password, @empleado)"
}