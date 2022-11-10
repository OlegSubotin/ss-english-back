const { Lesson } = require("../../models/lesson");

const updateLesson = async (id, body) => {
  try {
    const data = await Lesson.findByIdAndUpdate(id, body, { new: true });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = updateLesson;