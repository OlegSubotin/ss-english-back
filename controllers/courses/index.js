const getAllCourses = require('./getAllCourses');
const createCourse = require('./createCourse');
const removeCourse = require('./removeCourse');
const getCourseById = require('./getCourseById');
const updateCourse = require('./updateCourse');
const getAllLessonsByCourseId = require('./getAllLessonsByCourseId');

module.exports = {
  getAllCourses,
  createCourse,
  removeCourse,
  getCourseById,
  updateCourse,
  getAllLessonsByCourseId
}