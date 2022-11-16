const express = require('express')
const { ctrlWrapper, validation } = require('../../helpers');
const { lessons: ctrl } = require('../../controllers');
const { lessonVocabulary: ctrlVocabulary } = require('../../controllers');
const { lessonJoiSchema, lessonRemoveJoiSchema } = require('../../models/lesson');
const { lessonDescriptionJoiSchema } = require('../../models/lessonDescription');
const { lessonVocabularyJoiSchema } = require('../../models/lessonVocabulary');

const router = express.Router()

// ------------------- LESSON BLOCK --------------------

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

//------------------------ DESCRIPTION BLOCK -------------------------

// create description for the lesson
router.post('/:lessonId/description', validation(lessonDescriptionJoiSchema), ctrlWrapper(ctrl.createLessonDescription));

// get description for the lesson
router.get('/:lessonId/description', ctrlWrapper(ctrl.getLessonDescription));

// update description for the lesson
router.put('/:lessonId/description', validation(lessonDescriptionJoiSchema), ctrlWrapper(ctrl.updateLessonDescription));

// delete lesson description
router.delete('/:lessonId/description', ctrlWrapper(ctrl.removeLessonDescription));

// -------------------------- VOCABULARY BLOCK --------------------------------------

//create vocabulary for the lesson
router.post('/:lessonId/vocabulary', validation(lessonVocabularyJoiSchema), ctrlWrapper(ctrlVocabulary.createLessonVocabulary));

module.exports = router
