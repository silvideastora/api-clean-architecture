
// Este archivo aloja la definición de nuestro servidor
// Debe tener todos middlewares y al final lo debes exportar
const express = require('express')
// importamos el router

const kodersRouter = require('./routers/koders')
const logger = require('./middlewares/logger')
const mentorsRouter = require('./routers/mentors')
const app = express()

//esto es para poder leer los json
app.use(express.json())

app.use(logger)
//monto mi router
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)


// una vez que esté listo lo exportas 
module.exports = app