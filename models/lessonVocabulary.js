const { Schema, model } = require("mongoose");
const Joi = require("joi");

const lessonVocabularySchema = Schema({
  lessonId: {
    type: String,
    required: [true, 'Set lesson id to which it relates'],
  },
  blockName: {
    type: String,
    required:[true, 'Set the name of the block'],
  },
  exercises: [{}],
}, { versionKey: false, timestamps: true });

const lessonVocabularyJoiSchema = Joi.object({
  blockName: Joi.string().required(),
  exercises: Joi.array().items(Joi.object({
    order: Joi.number().min(1).required(),
    exerciseName: Joi.string().min(3).required(),
    exerciseTask: Joi.string().min(3).required(),
    exerciseType: Joi.string().required().valid("RADIO", "INPUT", "MULTIPLE", "ORDER", "SELECT", "READ"),
    questions: Joi.array(),
    variants: Joi.array(),
    /*
    - if 'INPUT' 
    questions: [{id:1, part1: 'qwerty', part2: 'qwerty', correct: 'qwerty'}, ..., {}]

    - if 'MULTIPLE'
    variants: [{id:1, text: 'qwerty'}, ..., {}] 
    questions: [{id:1, part1: 'qwerty', part2: 'qwerty', correct: 'qwerty'}, ..., {}]
    
    - if 'ORDER'
    questions: [{id:1, pieces:[{id:1, text: 'qwerty'}, ..., {}], correct: 'qwerty'}, ..., {}] 

    - if 'RADIO'
    questions: [{id:1, question: 'qwerty', answers:[{id:1, answer: 'qwerty'}, ..., {}], correct:'qwerty'}, ..., {}]

    - if 'SELECT'
    questions: [{id:1, part1:'qwerty', part2: 'qwerty', answers:[{id:1, answer: 'qwerty'}, ..., {}], correct: 'qwerty'}, ..., {}]

    - if "READ"
    questions: [{id:1, word: 'qwerty', image: 'qwerty'}, ..., {}]
    */
  })),
});

const LessonVocabulary = model("lessonVocabulary", lessonVocabularySchema);

module.exports = {
  LessonVocabulary,
  lessonVocabularyJoiSchema,
};

