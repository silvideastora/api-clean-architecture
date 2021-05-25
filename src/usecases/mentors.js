const Mentors = require('../models/mentors')

function getAll () {
    return Mentors.find({})   //find regresa una promesa
}
function create({name, lastName, age, gender}) {
    return Mentors.create({ name, lastName, age, gender})
}

function deletedById(id){
    return Mentors.findByIdAndDelete(id)
}
function updateById (id, dataToUpdate){
    return Mentors.findByIdAndUpdate(id, dataToUpdate)

}
// luego lo exportamos
module.exports = {
    getAll,
    create,
    deletedById, 
    updateById
}

