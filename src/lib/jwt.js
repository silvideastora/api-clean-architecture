// me nada a llamar

const jwt = require('jsonwebtoken')
const JWT_SECRET = 'supersecretword'
// creamos una funcion sing que retorna el jwt.sign

function sign (payload ) {
    return jwt.sign(payload, JWT_SECRET, {expiresIn:'1d' })
}

// la siguiente funcion es la verify

function verify(token) {
    return jwt.verify(token, JWT_SECRET)
} 
 // Exportamos

 module.exports = {
     ...jwt,       //... significa todo lo que tenga jwt
     sign,
     verify
 }