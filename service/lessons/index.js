const getAllLessonsByCourseId = require('./getAllLessonsByCourseId');
const createLesson = require('./createLesson');
const getAllLessons = require('./getAllLessons');
const getLessonByIdAndCourseId = require('./getLessonByIdAndCourseId');
const updateLesson = require('./updateLesson');

module.exports = {
  getAllLessonsByCourseId,
  createLesson,
  getAllLessons,
  getLessonByIdAndCourseId,
  updateLesson
}