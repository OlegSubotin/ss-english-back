const { Schema, model } = require("mongoose");
const Joi = require("joi");

const lessonDescriptionSchema = Schema({
  lessonId: {
    type: String,
    required: [true, 'Set lesson id to which it relates'],
  },
  blocks: [{}],
}, { versionKey: false, timestamps: true });

const lessonDescriptionJoiSchema = Joi.object({
  blocks: Joi.array().items(Joi.object({
    path: Joi.string().min(3).max(30).required(),
    title: Joi.string().min(3).required(),
    description: Joi.string().min(3).required(),
  })),
});

const LessonDescription = model("lessonDescription", lessonDescriptionSchema);

module.exports = {
  LessonDescription,
  lessonDescriptionJoiSchema,
};



