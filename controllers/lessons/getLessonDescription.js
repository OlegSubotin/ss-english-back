
const createError = require('http-errors');
const { lessons: service } = require("../../service");

const getLessonDescription = async (req, res) => {
  const { lessonId } = req.params;
  const result = await service.getLessonWithDescription(lessonId);
  if (!result) {
    throw createError(404, 'No lesson with such id');
  }
  const data = result[0];
  res.json({
    status: "success",
    code: 200,
    data
  });
};

module.exports = getLessonDescription;