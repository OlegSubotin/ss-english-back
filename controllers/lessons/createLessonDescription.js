const createError = require("http-errors");
const { lessons} = require("../../service");

const createLessonDescription = async (req, res) => {
  const { blocks } = req.body;
  const { lessonId } = req.params;
  const lesson = await lessons.getLessonByLessonId(lessonId);
  if (!lesson) {
    throw createError(404, `no lesson with such id=${lessonId}`);
  }
  const describedLesson = await lessons.getLessonWithDescription(lessonId);
  if (describedLesson.length !== 0) {
    throw createError(404, `lesson with such id=${lessonId} has description`);
  }
  const result = await lessons.createLessonDescription({ lessonId: lessonId, blocks });
  res.status(201).json({
    status: "success",
    code: 201,
    result
  });
};

module.exports = createLessonDescription;