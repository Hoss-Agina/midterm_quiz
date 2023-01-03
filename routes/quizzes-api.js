const express = require('express');
// const { Database } = require('sqlite3');
const db = require('../db/connection');
const { addQuiz, addQuestion, addAnswer } = require('../db/queries/quizzes_new');
const { getQuizzes } = require('../db/queries/index');
const { deleteQuiz } = require('../db/queries/delete');
const { editQuiz } = require('../db/queries/edit');
const router = express.Router();


router.get('/:id/questions', (req, res) => {
  editQuiz(req.params.id).then((questions) => {
    // const templateVars = { questions }
    res.json({questions})
  })
});

module.exports = router;
