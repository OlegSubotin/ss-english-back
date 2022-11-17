const { LessonVocabulary } = require("../../models/lessonVocabulary");

const updateLessonVocabulary = async ({ lessonId }, body) => {
  console.log(lessonId);
  try {
    const data = await LessonVocabulary.findOneAndUpdate({ lessonId: lessonId }, body, { new: true });
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = updateLessonVocabulary;



