const express = require('express')

const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json({ message: 'hi Andrew, I am here' })
})

router.get('/:lessonId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:lessonId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:lessonId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
