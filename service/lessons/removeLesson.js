const { Lesson } = require("../../models/lesson");

const removeLesson = async (id) => {
  try {
    const data = await Lesson.findByIdAndDelete(id);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = removeLesson;