const express = require('express')
const { ctrlWrapper, validation } = require('../../helpers');
const { lessons: ctrl } = require('../../controllers');
const { lessonJoiSchema } = require('../../models/lesson');

const router = express.Router()

// create lesson
router.post('/', validation(lessonJoiSchema), ctrlWrapper(ctrl.createLesson));

// get all lessons in db
router.get('/', ctrlWrapper(ctrl.getAllLessons));

// update lesson
router.put('/:lessonId', validation(lessonJoiSchema), ctrlWrapper(ctrl.updateLesson));

// // create course
// router.post('/', validation(courseJoiSchema), ctrlWrapper(ctrl.createCourse));

// //update course
// router.put('/:courseId', validation(courseJoiSchema), ctrlWrapper(ctrl.updateCourse));

// // get all courses
// router.get('/', ctrlWrapper(ctrl.getAllCourses));

// // get course by id
// router.get('/:courseId', ctrlWrapper(ctrl.getCourseById));

// // delete course by id
// router.delete('/:courseId', ctrlWrapper(ctrl.removeCourse));
 
// // get all lessons by course id
// router.get('/:courseId/lessons', ctrlWrapper(ctrl.getAllLessonsByCourseId));

module.exports = router
