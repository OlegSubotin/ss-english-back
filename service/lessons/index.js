const getAllLessonsByCourseId = require('./getAllLessonsByCourseId');
const createLesson = require('./createLesson');
const getAllLessons = require('./getAllLessons');
const getLessonByIdAndCourseId = require('./getLessonByIdAndCourseId');
const updateLesson = require('./updateLesson');
const removeLesson = require('./removeLesson');
const createLessonDescription = require('./createLessonDescription');
const getLessonByLessonId = require('./getLessonByLessonId');
const getLessonWithDescription = require('./getLessonWithDescription');

module.exports = {
  getAllLessonsByCourseId,
  createLesson,
  getAllLessons,
  getLessonByIdAndCourseId,
  updateLesson,
  removeLesson,
  createLessonDescription,
  getLessonByLessonId,
  getLessonWithDescription
}