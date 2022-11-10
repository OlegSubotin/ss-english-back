const createError = require("http-errors");
const { lessons, courses } = require("../../service");

const getAllLessonsByCourseId = async (req, res) => {
  const { courseId } = req.params;
  const course = await courses.getCourseById(courseId);
  if (!course) {
    throw createError(404, `no course with such id=${courseId}`);
  }
  const result = await lessons.getAllLessonsByCourseId({courseId});
  res.json({
    status: "success",
    code: 200,
    data: {
      ...result
    }
  });
};

module.exports = getAllLessonsByCourseId;