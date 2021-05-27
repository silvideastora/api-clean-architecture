// importamos modelo

const Users = require('../models, users')
const bcrypt = ('../lib/bcrypt')
const jwt = require('../lib/jwt')

function  getAll () {
    return Users.find()
}

//crea una funcion para guardar los datos obtenidos

function signUp ({name, email, password}) {
    return Users.create({name, email, password})
}

// Que necesitamos para encriptar'
//Instalar un paquete en 

async function login (mail, password) {
    const userFound = await Users.findOne({email})

    if(!userFound) {
        throw new Error('Invalid data')
    }
    //ahora desencriptaremos
    const isValidPassword = await bcrypt.compare(password, userFound.password)
    if(!isValidPassword) {
        throw new Error('Invalid data')
    }
    return jwt.sign({id: userFound._id})
}

module.exports = {
    getAll,
    signUp,
    login
}