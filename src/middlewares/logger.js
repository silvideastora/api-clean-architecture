
function logger (request, response, next) {
    console.log(`[${request.method }] ${request.url} ${JSON.stringify(request.body)}`)
    next()
}

module.exports = logger
//AUTENTICACION: Una vez que nos presentamos a un sistema, decirle quienes somos, para ser registrados
//AUTORIZACION: Ya registrados, 

//bcrypt
//jwt
// Flujo de registro y loggeo

//Registro
//1. Otorgamos datos de usuario
// Email, password y name

// 2. Validación de usuarios existentes
// 3. Encriptar el password
// 4. Guardar en la base de datos

// bcrypt -> encriptar
//lib/ bcrypt
// modelo, caso de uso y rutas
//
