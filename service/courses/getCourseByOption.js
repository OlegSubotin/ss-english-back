const { Course } = require("../../models/course");

const getCourseByOption = async (option) => {
  try {
    const data = await Course.find(option);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getCourseByOption;