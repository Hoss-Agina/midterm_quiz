const db = require('../connection');

const addUserAnswer = function(userAnswersArr) {

  const quizQuery =
    `INSERT INTO each_user_answers (answer_id) VALUES ($1) RETURNING *;` ;

  return db

    .query(quizQuery, userAnswersArr)
    .then((result) => {
      console.log("result.rows[0].id",result.rows[0]);

      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports= { addUserAnswer }
