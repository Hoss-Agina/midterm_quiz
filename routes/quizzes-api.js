const express = require('express');
// const { Database } = require('sqlite3');
const db = require('../db/connection');
const { addQuiz, addQuestion, addAnswer } = require('../db/queries/quizzes_new');
const { getQuizzes } = require('../db/queries/index');
const { deleteQuiz } = require('../db/queries/delete');
const { editPlayQuiz } = require('../db/queries/edit');
const { addUserAnswer  } = require('../db/queries/playing')
const router = express.Router();


router.get('/:id/questions', (req, res) => {
  editPlayQuiz(req.params.id).then((questions) => {
    // const templateVars = { questions }
    res.json({questions})
  })
});

router.post('/play/:id', (req, res) => {
  addUserAnswer(req.params.id).then((questions) => {
    // const templateVars = { questions }
    res.json({questions})
  })
});

module.exports = router;
