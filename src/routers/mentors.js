const express = require('express')

const mentors = require('../usecases/mentors')

const router = express.Router()

router.get('/', async (request, response) =>{
    try {
        const allMentors = await mentors.getAll()

        response.json({
            success: true,
            message : 'All mentors',
            data : {
                mentors: allMentors
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false, 
            message: 'Error at get all mentors',
            error: error.message
        })
    }
})

router.post('/', async (request, response) => {
    try {
        const mentorCreated = await mentors.create(request,body)

        response.json({
            success: true,
            message: 'El mentor ha sido creado',
            data: {
                mentor: mentorCreated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        
        const mentorDb = await mentores.deleteById(id)


        mentorDb ?
        response.json({
            success: true, 
            message : 'El mentor ha sido eliminado'
        }) :
        seponse.json({
            success: true, 
            message: 'No se eliminó al mentor'
        })


    } catch (error) {
        response.status(400)
        response.json({
            success: false, 
            message: error.message
        })
    }
})

router.patch('/:id', async ( request, response) => {
    try {
        const { id } = request.params;
        const updatedData = request.body
        const updatedMentor = await mentors.updateById(id, updatedData);
        response.json({
          success: true,
          message: 'Mentor actualizado',
          data: {
            updatedMentor
      }
    })
  } catch (error) {
    response.status(400).json({
      success: false,
      message: 'Error en la actualización del mentor',
      data: error.message
    })
    }
})

//lo exportamos
module.exports = router