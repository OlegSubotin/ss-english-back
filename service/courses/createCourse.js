const { Course } = require("../../models/course");

const createCourse = async (body) => {
  try {
    const data = await Course.create({ ...body });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createCourse;