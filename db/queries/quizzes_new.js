const db = require('../connection');

const addQuiz = function(quizArr) {

  const quizQuery =
    ` INSERT INTO quizzes (title, islisted, user_id) VALUES ($1, $2, (SELECT id FROM users1 WHERE loginname = $3)) RETURNING *;` ;

  return db

    .query(quizQuery, quizArr)
    .then((result) => {
      console.log("result.rows[0].id",result.rows[0].id);
      // console.log('quizQuery:', quizQuery);

      return result.rows[0].id;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const addQuestion = function(questionsArr) {
  // let values = [quiz.rows[0].id, quiz.title];

  const quizQuery =
    `INSERT INTO questions (quiz_ID, title, question_number) VALUES ($1, $2, $3) RETURNING *;`;

  return db

    .query(quizQuery, questionsArr)
    .then((result) => {
      console.log('results from addQuestion func:', result.rows[0].id);
      // console.log('quizQuery:', quizQuery);

      return result.rows[0].id;
    })
    .catch((err) => {
      console.log(err.message);
    });
};


const addAnswer = function(quiz) {

    const quizQuery =
    `INSERT INTO answers (question_id, answer, isCorrect, answer_number) VALUES ($1, $2, $3, $4) RETURNING *;`;

  return db

    .query(quizQuery, quiz)
    .then((result) => {
      console.log(result.rows);
      console.log('quizQuery:', quizQuery);

      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// const getQuizId = () => {
//   return db

//     .query('SELECT id from quizzes WHERE ')
// }

module.exports = { addQuiz, addQuestion, addAnswer };
