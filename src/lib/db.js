// para conectarnos a la BD , necesitamos instalar mongoose
const mongoose = require('mongoose')

//usamos el metodo connect para url y la guardamos en una funcion con el nombre

const DB_USER = 'silvi'
const DB_PASSWORD = 'kodemia123'
const DB_HOST = 'kodemia-silvi.lxzcl.mongodb.net'
const DB_NAME = 'kodemia'


const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect() {
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
}

// luego la exportamos

module.exports = connect