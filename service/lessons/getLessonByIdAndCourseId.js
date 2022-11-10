const { Lesson } = require("../../models/lesson");

const getCourseByIdAndCourseId = async (lessonId, courseId) => {
  console.log(lessonId, courseId);
  try {
    const data = await Lesson.find({ id: lessonId, courseId });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getCourseByIdAndCourseId;