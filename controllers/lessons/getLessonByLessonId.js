const createError = require('http-errors');
const { lessons: service } = require("../../service");

const getLessonByLessonId = async (req, res) => {
  const { lessonId } = req.params;
  const result = await service.getLessonByLessonId(lessonId);
  if (!result) {
    throw createError(404, 'No lesson with such id');
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result
    }
  });
};

module.exports = getLessonByLessonId;