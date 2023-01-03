const db = require('../connection');

const deleteQuiz = function(id) {

  const quizQuery =
    `DELETE FROM quizzes WHERE id = ${id}`;

  return db

    .query(quizQuery)
    .then((result) => {
      console.log("result rows from delete quiz", result.rows);
      return;
    })
    .catch((err) => {
      console.log(err.message);
    });
};




module.exports = { deleteQuiz };
