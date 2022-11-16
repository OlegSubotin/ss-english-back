const { LessonVocabulary } = require("../../models/lessonVocabulary");

const createLessonVocabulary = async({ lessonId }, body ) => {
  try {
    const data = await LessonVocabulary.create({ lessonId: lessonId, ...body } );
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = createLessonVocabulary;



