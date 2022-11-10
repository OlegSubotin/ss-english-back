const createError = require('http-errors');
const { courses, lessons } = require("../../service");

const updateLesson = async (req, res) => {
  const { lessonId } = req.params;
  const { order, name, courseId } = req.body;
  const course = await courses.getCourseById(courseId);
  if (!course) {
    throw createError(404, `no course with such id=${courseId}`);
  }
  const lesson = await lessons.getLessonByIdAndCourseId(lessonId, courseId);
  if (!lesson) {
    throw createError(404, `no lesson with such id=${courseId} for course with id=${courseId}`);
  }
  const allLessonsOfCourse = await lessons.getAllLessonsByCourseId({ courseId });
  if (allLessonsOfCourse.length !== 0) {
    if (allLessonsOfCourse.find(lesson => lesson.name === name)) {
      throw createError(404, `lesson with the name=${name} already exists for course with id=${courseId}`);
    }
    if (allLessonsOfCourse.find(lesson => lesson.order === order)) {
      throw createError(404, `lesson with the order=${order} already exists for course with id=${courseId}`);
    }
  }
  const result = await lessons.updateLesson(lessonId, req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result
    }
  });
};

module.exports = updateLesson;