const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('quizzes_index');
});

router.get('/new', (req, res) => {
  res.render('quizzes_new');
});


module.exports = router;
