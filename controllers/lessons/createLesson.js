const createError = require("http-errors");
const { lessons, courses} = require("../../service");

const createLesson = async (req, res) => {
  const { name, order, courseId } = req.body;
  const course = await courses.getCourseById(courseId);
  if (!course) {
    throw createError(404, `no course with such id=${courseId}`);
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
  const result = await lessons.createLesson(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result
    }
  });
};

module.exports = createLesson;