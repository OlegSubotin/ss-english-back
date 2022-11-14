const { LessonDescription } = require("../../models/lessonDescription");

const removeLessonDescription = async (lessonId) => {
  try {
    const data = await LessonDescription.deleteOne({ lessonId: lessonId });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = removeLessonDescription;