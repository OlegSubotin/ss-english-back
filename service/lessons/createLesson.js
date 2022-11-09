const { Lesson } = require("../../models/lesson");

const createLesson = async (body) => {
  try {
    const data = await Lesson.create({ ...body });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createLesson;