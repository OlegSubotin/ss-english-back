const { courses: service } = require("../../service");

const getCourseById = async (req, res) => {
  const { courseId } = req.params;
  const result = await service.getCourseById(courseId);
  res.json({
    status: "success",
    code: 200,
    data: {
      result
    }
  });
};

module.exports = getCourseById;