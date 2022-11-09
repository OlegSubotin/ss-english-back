const { Course } = require("../../models/course");

const getAllCourses = async (courseId) => {
  try {
    const data = await Course.findById(courseId);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllCourses;