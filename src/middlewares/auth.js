const jwt = require('../lib/jwt')
// los middlewares reciben: 
function auth (request, response, next) {    // pide el token esta funcion
    try {
    const {authorization: token} = request.headers
    console.log('token:', token)
    
    const isValidToken = jwt.verify(token)
    console.log

    if(!isValidToken) {

        throw new Error('Not authorized')
    } 
    next()

} catch (error) {
        response.status(401)
        response.json({
           success: false, 
           message: 'Not authorized' ,
           erro: error.message
        })
    }
}

function authRoles (allowedRoles) {
    return (request, response, next) => {
        try {
            const {authorization: token} = request.headers
            console.log('token:', token)
            
            const isValidToken = jwt.verify(token)
        
            if(!isValidToken) {
        
                throw new Error('Not authorized')
            } 
            next()
        
        } catch (error) {
                response.status(401)
                response.json({
                   success: false, 
                   message: 'Not authorized' ,
                   erro: error.message
                })
            }
    }
}


// ya que lo creamos lo montamos en 

// la exportamos
module.exports = {
    auth,
    authRoles
}