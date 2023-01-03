const db = require('../connection');

const editPlayQuiz = function(id) {

  const quizQuery =
    `SELECT quizzes.title AS quizzes_title, questions.title, answers.answer, questions.id AS question_id, answers.id AS answer_id, answers.answer_number AS answer_number, questions.question_number FROM quizzes
    JOIN questions ON quizzes.id = questions.quiz_ID
    JOIN answers ON questions.id = answers.question_id
    WHERE quizzes.id = ${id}
    ORDER BY questions.question_number, answers.answer_number
    `;

  return db

    .query(quizQuery)
    .then((result) => {
      // console.log("result rows from edit quiz", result.rows);
      console.log('quizzes', result);
      const questions = {};
      result.rows.forEach((answer) => {

        if (!questions[answer.question_id]) {
          questions[answer.question_id] = {
            quiz_title: answer.quizzes_title,
            title: answer.title,
            id: answer.question_id,
            answers: []
          }
        }
        questions[answer.question_id].answers.push(answer)
      })
      console.log('questions: ', questions);
      return questions;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getNumOfQuestions = () => {

}




module.exports = { editPlayQuiz };
