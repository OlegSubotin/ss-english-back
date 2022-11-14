const createLesson = require('./createLesson');
const getAllLessons = require('./getAllLessons');
const updateLesson = require('./updateLesson');
const removeLesson = require('./removeLesson');
const getLessonDescription = require('./getLessonDescription');
const getLessonByLessonId = require('./getLessonByLessonId');
const createLessonDescription = require('./createLessonDescription');
const updateLessonDescription = require('./updateLessonDescription');

module.exports = {
  createLesson,
  getAllLessons,
  updateLesson,
  removeLesson,
  getLessonByLessonId,
  createLessonDescription,
  getLessonDescription,
  updateLessonDescription
}