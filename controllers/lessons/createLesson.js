const createError = require("http-errors");
const { courses: coursesService } = require("../../service");
const { lessons: lessonsService } = require("../../service");

const createLesson = async (req, res) => {
  const { courseId } = req.body;
  const course = await coursesService.getCourseById(courseId);
  if (!course) {
    throw createError(404, `not found the course with such id=${courseId}`);
  }
  const result = await lessonsService.createLesson(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result
    }
  });
};

module.exports = createLesson;