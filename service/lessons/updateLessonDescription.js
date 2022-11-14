const { LessonDescription } = require("../../models/lessonDescription");

const createLessonDescription = async ({ lessonId, blocks }) => {
  const spreadBlocks = [...blocks];
  try {
    const data = await LessonDescription.findOneAndUpdate(
      { lessonId: lessonId },
      { blocks: spreadBlocks },
      { new: true }
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = createLessonDescription;



