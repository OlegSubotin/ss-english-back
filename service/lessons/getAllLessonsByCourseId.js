const { Lesson } = require("../../models/lesson");

const getAllLessonsByCourseId = async ({ courseId }) => {
  try {
    const data = await Lesson.find({courseId});
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllLessonsByCourseId;