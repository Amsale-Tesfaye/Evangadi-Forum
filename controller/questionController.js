const Question = require("../models/Question");

const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find().sort({ createdAt: -1 });
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const askQuestion = async (req, res) => {
  const { title, description, username } = req.body;
  const newQuestion = new Question({ title, description, username });

  try {
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getQuestionById = async (req, res) => {
  const { id } = req.params;
  try {
    const question = await Question.findById(id);
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const answerQuestion = async (req, res) => {
  const { id } = req.params;
  const { username, text } = req.body;

  try {
    const question = await Question.findById(id);
    question.answers.push({ username, text });
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { getQuestions, askQuestion, getQuestionById, answerQuestion };
