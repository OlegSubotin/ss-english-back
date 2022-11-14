const { LessonDescription } = require("../../models/lessonDescription");

const createLessonDescription = async ({ lessonId, blocks }) => {
  const spreadBlocks = [...blocks];
  try {
    const data = await LessonDescription.create({ lessonId: lessonId, blocks: spreadBlocks });
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = createLessonDescription;



