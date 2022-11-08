const { Schema, model } = require("mongoose");
const Joi = require("joi");

const courseSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for the course'],
  }
}, { versionKey: false, timestamps: true });

const courseJoiSchema = Joi.object({
  name: Joi.string().min(1).max(100).required()
});

const Course = model("course", courseSchema);

module.exports = {
  Course,
  courseJoiSchema,
};