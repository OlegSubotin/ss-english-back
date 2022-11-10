const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require("dotenv").config()

// const lessonsRouter = require('./routes/api/lessons')
const coursesRouter = require('./routes/api/courses')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

// app.use('/api/lessons', lessonsRouter)
app.use('/api/courses', coursesRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err; 
  res.status(status).json({ message })
})

module.exports = app
