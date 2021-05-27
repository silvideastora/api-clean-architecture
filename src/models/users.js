// creamos este archivo para un nuevo modelo de usuario

const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 20
    },
    email: {
        type: String,
        match: /.+@.+\..+/,
        maxLength: 100
    },
    password: {
        type: String,
        required: true,
        minLength: 1
    },
    role: {
        type: [String],
        enum: ['admin', 'user'],
        minLength: 1
    }
})

const model = mongoose.model('users', usersSchema) // la crea mongoose.

module.exports = model