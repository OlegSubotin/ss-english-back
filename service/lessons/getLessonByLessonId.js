const { Lesson } = require("../../models/lesson");

const getLessonByLessonId = async (lessonId) => {
  try {
    const data = await Lesson.findById(lessonId);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getLessonByLessonId;