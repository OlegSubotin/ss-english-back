const { Course } = require("../../models/course");

const removeCourse = async (courseId) => {
  try {
    const data = await Course.findByIdAndRemove(courseId);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = removeCourse;