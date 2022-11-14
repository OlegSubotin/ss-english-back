const createLesson = require('./createLesson');
const getAllLessons = require('./getAllLessons');
const updateLesson = require('./updateLesson');
const removeLesson = require('./removeLesson');
const getLessonByLessonId = require('./getLessonByLessonId');
const createLessonDescription = require('./createLessonDescription');

module.exports = {
  createLesson,
  getAllLessons,
  updateLesson,
  removeLesson,
  getLessonByLessonId,
  createLessonDescription,
}