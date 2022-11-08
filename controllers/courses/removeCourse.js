const { courses: service } = require("../../service");

const removeCourse = async (req, res) => {
  const { courseId } = req.params;
  const result = await service.removeCourse(courseId);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result
    }
  });
};

module.exports = removeCourse;