const { Schema, model } = require("mongoose");
const Joi = require("joi");

const lessonSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for the lesson'],
  },
  courseId: {
    type: String,
    required: [true, 'Set course id to which it relates'],
  },
  order: {
    type: Number,
    required: [true, 'Set order number for the lesson'],
  }
}, { versionKey: false, timestamps: true });

const lessonJoiSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  courseId: Joi.string().length(24).required(),
  order: Joi.number().min(1).max(100).required(),
});

const Lesson = model("lesson", lessonSchema);

module.exports = {
  Lesson,
  lessonJoiSchema,
};