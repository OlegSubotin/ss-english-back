const { Course } = require("../../models/course");

const getCourseByCourseId = async (courseId) => {
  try {
    const data = await Course.findById(courseId);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getCourseByCourseId;