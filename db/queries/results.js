const db = require('../connection');

const compareAnswers = function(attemptTime) {
  // const answerIds = userAnswersArr.join(', ');

  // const quizQuery =
  //   `SELECT COUNT(*) AS score FROM answers WHERE id IN (${answerIds}) AND iscorrect = true;
  //    ` ;

const quizAttemptQuery =
`SELECT COUNT(*) AS score FROM answers
WHERE id IN (SELECT answer_id FROM each_user_answers WHERE attempt_timestamp = $1) AND iscorrect = true
`
  return db

    .query(quizAttemptQuery, [attemptTime])
    .then((result) => {
      console.log("number of correct answers:", result.rows[0]);

      return result.rows[0].score;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { compareAnswers };
