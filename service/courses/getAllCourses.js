const { Course } = require("../../models/course");

const getAllCourses = async () => {
  try {
    const data = await Course.find({});
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllCourses;