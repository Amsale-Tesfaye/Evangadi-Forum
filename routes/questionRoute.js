// const express = require("express");
// const router = express.Router()

// //authentication middleware
// const authMiddleware = require('../middleware/authMiddleware')

// router.get("/all-questions", authMiddleware, (req, res) => {
//     res.send("all questions")
// })


// module.exports = router

const express = require("express");
const {
  getQuestions,
  askQuestion,
  getQuestionById,
  answerQuestion,
} = require("../controllers/questionController");
const router = express.Router();

router.get("/", getQuestions);
router.post("/", askQuestion);
router.get("/:id", getQuestionById);
router.post("/:id/answers", answerQuestion);

module.exports = router;