const createError = require("http-errors");
const { lessonsVocabulary, lessons } = require("../../service");

const createLessonVocabulary = async (req, res) => {
  const { lessonId } = req.params;
  const vocabularyBody = req.body;
  const lesson = await lessons.getLessonByLessonId(lessonId);
  if (!lesson) {
    throw createError(404, `no lesson with such id=${lessonId}`);
  }
  const result = await lessonsVocabulary.createLessonVocabulary({ lessonId: lessonId }, vocabularyBody);
  res.status(201).json({
    status: "success",
    code: 201,
    result
  });
};

module.exports = createLessonVocabulary;