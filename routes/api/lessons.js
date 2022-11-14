const express = require('express')
const { ctrlWrapper, validation } = require('../../helpers');
const { lessons: ctrl } = require('../../controllers');
const { lessonJoiSchema, lessonRemoveJoiSchema } = require('../../models/lesson');
const { lessonDescriptionJoiSchema } = require('../../models/lessonDescription');

const router = express.Router()

// create lesson
router.post('/', validation(lessonJoiSchema), ctrlWrapper(ctrl.createLesson));

// get all lessons in db
router.get('/', ctrlWrapper(ctrl.getAllLessons));

//get lesson by lesson id
router.get('/:lessonId', ctrlWrapper(ctrl.getLessonByLessonId));

// update lesson
router.put('/:lessonId', validation(lessonJoiSchema), ctrlWrapper(ctrl.updateLesson));

// delete lesson 
router.delete('/', validation(lessonRemoveJoiSchema), ctrlWrapper(ctrl.removeLesson));

// DESCRIPTION BLOCK
router.post('/:lessonId/description', validation(lessonDescriptionJoiSchema), ctrlWrapper(ctrl.createLessonDescription));

module.exports = router
