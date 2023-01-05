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




module.exports = { getQuizzes };
