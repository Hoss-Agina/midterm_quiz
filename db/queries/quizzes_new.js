const db = require('../connection');

const addQuiz = function(quiz) {
  let values = [quiz.user_ID, quiz.title, quiz.isListed];

  const quizQuery =
    `INSERT INTO quizzes(user_ID, title, isListed)
  VALUES($1, $2, $3)
  RETURNING *;`;

  return db

    .query(quizQuery, values)
    .then((result) => {
      console.log(result.rows);
      console.log('quizQuery:', quizQuery);

      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const addQuestions = function(quiz) {
  let values = [quiz.quiz_ID, quiz.title];

  const quizQuery =
    `INSERT INTO quizzes(user_ID, title)
  VALUES($1, $2)
  RETURNING *;`;

  return db

    .query(quizQuery, values)
    .then((result) => {
      console.log(result.rows);
      console.log('quizQuery:', quizQuery);

      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const addAnswers = function(quiz) {
  let values = [quiz.question_ID, quiz.answer, quiz.isCorrect];

  const quizQuery =
    `INSERT INTO quizzes(question_ID, title, isCorrect)
  VALUES($1, $2, $3)
  RETURNING *;`;

  return db

    .query(quizQuery, values)
    .then((result) => {
      console.log(result.rows);
      console.log('quizQuery:', quizQuery);

      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { addQuiz };
