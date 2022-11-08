const express = require('express')
const { ctrlWrapper, validation } = require('../../helpers');
const { courses: ctrl } = require('../../controllers');
const { courseJoiSchema } = require('../../models/course');

const router = express.Router()

router.get('/', ctrlWrapper(ctrl.getAllCourses));

router.post('/', validation(courseJoiSchema), ctrlWrapper(ctrl.createCourse));

router.delete('/:courseId', ctrlWrapper(ctrl.removeCourse));
























// router.get('/:lessonId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.post('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.delete('/:lessonId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.put('/:lessonId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

module.exports = router
