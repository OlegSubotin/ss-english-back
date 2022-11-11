const express = require('express')
const { ctrlWrapper, validation } = require('../../helpers');
const { lessons: ctrl } = require('../../controllers');
const { lessonJoiSchema, lessonRemoveJoiSchema } = require('../../models/lesson');

const router = express.Router()

// create lesson
router.post('/', validation(lessonJoiSchema), ctrlWrapper(ctrl.createLesson));

// get all lessons in db
router.get('/', ctrlWrapper(ctrl.getAllLessons));

// update lesson
router.put('/:lessonId', validation(lessonJoiSchema), ctrlWrapper(ctrl.updateLesson));

// delete lesson 
router.delete('/', validation(lessonRemoveJoiSchema), ctrlWrapper(ctrl.removeLesson));

module.exports = router
