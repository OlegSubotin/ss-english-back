const { courses: service } = require("../../service");

const getAllCourses = async (req, res) => {
  const result = await service.getAllCourses();
  res.json({
    status: "success",
    code: 200,
    data: {
      result
    }
  });
};

module.exports = getAllCourses;