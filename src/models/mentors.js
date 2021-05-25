const mongoose = require('mongoose')

const mentorSchema = new mongoose.Schema({
	name: {
	type: String, 
	minLength: 2,
	maxLength: 100,
	required: true
},
	lastName:{
	type: String, 
	minLength: 2,
	maxLength: 100,
	required: true
},
	age: {
	type: Number,
	min: 0,
	max: 150,
	required: true
},
	gender: {
	type: String,
	maxLength: 1,
	enum: [ 'm', 'f'],
	required: true
}
})

const Mentor = mongoose.model('mentor', mentorSchema)

module.exports = Mentor