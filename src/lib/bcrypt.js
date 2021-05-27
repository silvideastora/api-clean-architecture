// importamos bcrypt
// existe el metodo HASH
// 
const bcrypt = require('bcrypt')

function hash (plainText) {
    return bcrypt.hash(plainText,10  ) //texto plano y salt rounds
}
// exportamos un objeto que tiene todo lo ue tiene bcrypt con ... y nuestra nueva función
module.exports = {
    ...bcrypt, 
    hash
}