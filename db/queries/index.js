const db = require('../connection');

const getQuizzes = function() {

  const quizQuery =
    `SELECT * FROM quizzes WHERE islisted = true`;

  return db

    .query(quizQuery)
    .then((result) => {
      console.log("result rows from getQuizzes", result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};


const getQuizzesByUser = function(user) {

  const quizQuery =
    `SELECT quizzes.id, user_id, title, islisted, loginname FROM quizzes JOIN users1 ON quizzes.user_id = users1.id
    WHERE users1.loginname = $1`;

  return db

    .query(quizQuery, user)
    .then((result) => {
      console.log("result rows from getQuizzes", result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};


const getUserByLogin = function(user) {

  const quizQuery =
    `SELECT id FROM users1 WHERE loginname = $1;`

  return db

    .query(quizQuery, user)
    .then((result) => {
      console.log("result rows from getQuizzes", result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getQuizzes, getQuizzesByUser, getUserByLogin };
