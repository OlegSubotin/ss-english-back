const { lessons: service } = require("../../service");

const removeLesson = async (req, res) => {
  const { id } = req.body;
  
  const result = await service.removeLesson(id);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result
    }
  });
};

module.exports = removeLesson;