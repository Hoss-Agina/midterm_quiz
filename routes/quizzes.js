const express = require('express');
const { Database } = require('sqlite3');
const db = require('../db/connection');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('quizzes_index');
});

router.get('/new', (req, res) => {
  res.render('quizzes_new');
});

router.post('/new', (req, res) => {
console.log(req.body)
db.addQuiz({...req.body,owner_ID:user_ID, })
});

module.exports = router;
