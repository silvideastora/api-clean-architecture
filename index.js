
// importamos el servidor
const server = require('./src/server')
// importamos la base de datos

const dbConnect = require('./src/lib/db')

dbConnect()
.then(() => {
    console.log('DB connected')
    server.listen(8080, () => {
        console.log('server is listening')
    })
})
.catch(error => {
    console.error('DB connection error:', error)
})

// GET /koders
//1. Crear o asegurarse de que existe el modelo
// 2. Crear el caso de uso necesario
// 3. Crea el endpoint necesario, vamos de atras hacia delante


/*
Practica:
-POST /koders
-Delete /koders/:id
-Necesitas usar la funcion del modelo Koders.findByIdAndDelete(id)
*/
