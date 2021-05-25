
// Este archivo aloja la definición de nuestro servidor
// Debe tener todos middlewares y al final lo debes exportar
const express = require('express')
// importamos el router

const kodersRouter = require('./routers/koders')

const mentorsRouter = require('./routers/mentors')
const app = express()

app.use(express.json())
//monto mi router
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)


// una vez que esté listo lo exportas 
module.exports = app