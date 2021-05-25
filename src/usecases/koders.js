
// endpoint -> Caso de uso  -> modelo
// vammos a importar el modelo
const Koders = require('../models/koders')

//crea una funcion de listar todos los koders

function getAll () {
    return Koders.find({})   //find regresa una promesa
}
function create({name, lastName, age, gender}) {
    return Koders.create({ name, lastName, age, gender})
}

function deletedById(id){
    return Koders.findByIdAndDelete(id)
}
function updateById (id, dataToUpdate){
    return Koders.findByIdAndUpdate(id, dataToUpdate)

}
// luego lo exportamos
module.exports = {
    getAll,
    create,
    deletedById, 
    updateById
}