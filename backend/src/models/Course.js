const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
	name: String,
	price: Number,
	thumbnail: String,
	category: String
})

module.exports = mongoose.model('Course', CourseSchema)