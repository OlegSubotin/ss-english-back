const createError = require("http-errors");
const { courses: service } = require("../../service");

const createCourse = async (req, res) => {
  const { name, order } = req.body;
  const existingCourseArrayByName = await service.getCourseByOption({ name });
  const existingCourseArrayByOrder = await service.getCourseByOption({ order });
  if ((existingCourseArrayByName.length !== 0 || existingCourseArrayByOrder.length !== 0)
    || (existingCourseArrayByName.length !== 0 && existingCourseArrayByOrder.length !== 0)) {
    throw createError(400, 'such course exists');
  }
  const result = await service.createCourse(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result
    }
  });
};

module.exports = createCourse;