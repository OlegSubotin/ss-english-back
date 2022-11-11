const getAllLessonsByCourseId = require('./getAllLessonsByCourseId');
const createLesson = require('./createLesson');
const getAllLessons = require('./getAllLessons');
const getLessonByIdAndCourseId = require('./getLessonByIdAndCourseId');
const updateLesson = require('./updateLesson');
const removeLesson = require('./removeLesson');

module.exports = {
  getAllLessonsByCourseId,
  createLesson,
  getAllLessons,
  getLessonByIdAndCourseId,
  updateLesson,
  removeLesson,
}