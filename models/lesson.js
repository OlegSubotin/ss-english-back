const { Schema, model } = require("mongoose");
const Joi = require("joi");

const lessonSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for the lesson'],
  },
  courseId: {
    type: String,
    required: [true, 'Which course you want to add to, use course id'],
  }
}, { versionKey: false, timestamps: true });

const lessonJoiSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  courseId: Joi.string().length(24).required(),
});

const Lesson = model("lesson", lessonSchema);

module.exports = {
  Lesson,
  lessonJoiSchema,
};