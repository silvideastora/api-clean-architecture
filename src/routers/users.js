const { Router } = require("express");

router.post('/login', (request, response) => {
    try {
        const { email, password } = request.body
        const token = users.login(email, password)

        response.json({
            success: true, 
            message: 'Logged in',
            data: {
                token
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Could not log in',
            error: error.message
        })
    }
})

module.exports = router