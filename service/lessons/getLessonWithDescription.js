const { LessonDescription } = require("../../models/lessonDescription");

const getLessonWithDescription = async (lessonId) => {
  try {
    const data = await LessonDescription.find({ lessonId });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getLessonWithDescription;