const express = require('express')
const { ctrlWrapper, validation } = require('../../helpers');
const { lessons: ctrl } = require('../../controllers');
const { lessonJoiSchema } = require('../../models/lesson');

const router = express.Router()

router.get('/', ctrlWrapper(ctrl.getAllLessons));

router.get('/:lessonId', ctrlWrapper(ctrl.getLessonById));

router.post('/', validation(lessonJoiSchema), ctrlWrapper(ctrl.createLesson));

router.put('/:lessonId', validation(lessonJoiSchema), ctrlWrapper(ctrl.updateLesson));

router.delete('/:lessonId', ctrlWrapper(ctrl.removeLesson));


module.exports = router
