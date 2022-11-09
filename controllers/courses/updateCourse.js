const createError = require('http-errors');
const { courses: service } = require("../../service");

const updateCourse = async (req, res) => {
  const { courseId } = req.params;
  const course = await service.getCourseById(courseId);
  if (!course) {
    throw createError(404, 'Not found course with such id');
  }
  const result = await service.updateCourse(courseId, req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result
    }
  });
};

module.exports = updateCourse;