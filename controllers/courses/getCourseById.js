const createError = require('http-errors');
const { courses: service } = require("../../service");

const getCourseById = async (req, res) => {
  const { courseId } = req.params;
  const result = await service.getCourseById(courseId);
  if (!result) {
    throw createError(404, 'No course with such id');
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result
    }
  });
};

module.exports = getCourseById;