const { courses: service } = require("../../service");

const createCourse = async (req, res) => {
  const result = await service.createCourse(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result
    }
  });
};

module.exports = createCourse;