const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const CourseController = require('./controllers/CourseController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store)

routes.post('/courses', upload.single('thumbnail'), CourseController.store)

module.exports = routes