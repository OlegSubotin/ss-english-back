const { Course } = require("../../models/course");

const updateCourse = async (id, body) => {
  try {
    const data = await Course.findByIdAndUpdate(id, body, { new: true });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = updateCourse;