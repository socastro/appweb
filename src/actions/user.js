let users = []

exports.getUsers = () => {
    return users
}

exports.addUser = (userData) => {
    const user = {
        nombre: userData.nombre,
        mail: userData.mail,
        rut: userData.rut,
        carrera: userData.carrera,
        duracionMaxima : userData.duracionMaxima,
        semestre: userData.semestre,

    }
    users.push(user)
}

exports.removeUser = (userRut) => {
    users = users.filter((user) => {  
        return user.rut !== userRut
    })
}

exports.clearUsers = () => {
    users = []
}
