//para crear el router necesito importar express

const express = require('express')

// importamos el caso de uso

const koders = require('../usecases/koders')

const router = express.Router()

router.get('/', async (request, response) => {
    try{
        const allKoders = await koders.getAll()

        response.json ({
            success: true,
            message: 'All koders',
            data: {
                koders: allkoders
            }

        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'error at get all koders',
            error: error.message
        })
    }
})


router.post('/', async (request,response) => {
    try{
        const koderCreated = await koders.create(request.body)

        response.json ({
            success: true,
            message: 'Koder created',
            data: {
                koder: koderCreated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'error while creating koder',
            error: error.message
        })
    }
})

router.delete('/:id', (request, response) => {
   try{
    const {id } = request.params
    const koderDeleted = koders.deletedById(id)

    response.json({
        success: true,
        message : 'koder deleted',
        data: {
            koders: koderdeleted
        }
    })


   } catch (error) {
    response.status(400)
    response.json({
        success: false,
        message: 'error while deleting koder',
        error: error.message
    })
}
})

router.patch('/:id', async(request, response) =>{
    try{
        const { id }  = request.params
        const koderUpdated = await koder.updateById(id, request.body)
        response.json({
            succes : tue, 
            message: 'koder updated',
            data: {
                koder: koderUpdated
            }
        })


    } catch (error ) {
        response.status(400)
        response.json({
            success: false,
            message: 'error at koder update',
            error: error.message
        })
    }
})

//lo exporto
module.exports = router

