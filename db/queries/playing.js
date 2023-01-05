const db = require('../connection');

const addUserAnswer = function(answerId) {

  const quizQuery =
    `INSERT INTO each_user_answers (answer_id, attempt_timestamp )
    VALUES ($1, CURRENT_TIMESTAMP(0)) RETURNING *;` ;

  return db

    .query(quizQuery, [answerId])
    .then((result) => {
      console.log("we found it:",result.rows[0]);

      return result.rows[0];
    })
    .catch((err) => {
      console.log('error message', err.message);
    });
};

module.exports= { addUserAnswer }
