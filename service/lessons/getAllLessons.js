const { Lesson } = require("../../models/lesson");

const getAllCourses = async () => {
  try {
    const data = await Lesson.find({});
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllCourses;