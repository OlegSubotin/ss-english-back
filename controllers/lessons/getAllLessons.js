const { lessons: service } = require("../../service");

const getAllLessons = async (req, res) => {
  const result = await service.getAllLessons();
  res.json({
    status: "success",
    code: 200,
    data: [
      ...result
    ]
  });
};

module.exports = getAllLessons;