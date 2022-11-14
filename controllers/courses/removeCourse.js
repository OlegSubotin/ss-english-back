const createError = require('http-errors');
const { courses, lessons } = require("../../service");

const removeCourse = async (req, res) => {
  const { courseId } = req.params;
  const course = await courses.getCourseById(courseId);
  if (!course) {
    throw createError(404, 'No course with such id');
  }
  const courseLesson = await lessons.getAllLessonsByCourseId({ courseId });
  for (const lesson of courseLesson) {
    await lessons.removeLesson(lesson.id);
    await lessons.removeLessonDescription(lesson.id);
  }
  const result = await courses.removeCourse(courseId);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result
    }
  });
};

module.exports = removeCourse;