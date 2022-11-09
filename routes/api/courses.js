const express = require('express')
const { ctrlWrapper, validation } = require('../../helpers');
const { courses: ctrl } = require('../../controllers');
const { courseJoiSchema } = require('../../models/course');

const router = express.Router()

router.get('/', ctrlWrapper(ctrl.getAllCourses));

router.get('/:courseId', ctrlWrapper(ctrl.getCourseById));

router.post('/', validation(courseJoiSchema), ctrlWrapper(ctrl.createCourse));

router.put('/:courseId', validation(courseJoiSchema), ctrlWrapper(ctrl.updateCourse));

router.delete('/:courseId', ctrlWrapper(ctrl.removeCourse));

module.exports = router
