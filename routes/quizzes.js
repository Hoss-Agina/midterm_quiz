const express = require('express');
// const { Database } = require('sqlite3');
const db = require('../db/connection');
const { addQuiz, addQuestion, addAnswer } = require('../db/queries/quizzes_new');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('quizzes_index');
});

router.get('/new', (req, res) => {
  res.render('quizzes_new');
});

router.post('/new', (req, res) => {
  // console.log(req.body)
  // db.addQuiz({...req.body,owner_ID:user_ID, })

  //Counting number of questions users entered into the quiz
  let numOfQuestions = 1;
  let quizArr = [];
  let questionsArr = [];

  while (req.body[`question-${numOfQuestions}`]) {
    questionsArr.push(req.body[`question-${numOfQuestions}`]);
    numOfQuestions += 1
  }
  numOfQuestions -= 1;
  // console.log(numOfQuestions);

  //Checking if any of the fields are empty
  // for (let q = 1; q <= numOfQuestions; q++) {
  //   if (req.body.title || req.body[`question-${q}`] || req.body[`correct-answer-${q}`] || req.body[`wrong-answer-${q}-2`] || req.body[`wrong-answer-${q}-3`] || req.body[`wrong-answer-${q}-4`]) {
  //     //send error msg to user to input all fields

  //   }
  // }

  //Creating 3 arrays: quizArr, questionsArr & answersArr to store quiz title, questions & answers entered by user

  const answersArr = function(questionNumber) {
    let answersArray = [];
    answersArray.push(req.body[`correct-answer-${questionNumber}`]);
    answersArray.push(req.body[`wrong-answer-${questionNumber}-2`]);
    answersArray.push(req.body[`wrong-answer-${questionNumber}-3`]);
    answersArray.push(req.body[`wrong-answer-${questionNumber}-4`]);
    console.log('answersArray', answersArray);
    console.log('questionNumber', questionNumber);
    return answersArray;
  }
  quizArr.push(req.body.title)



  // for (let q = 1; q <= numOfQuestions; q++) {
    // questionsArr.push(req.body[`question-${q}`]);
  //   answersArr.push(req.body[`correct-answer-${q}`]);
  //   answersArr.push(req.body[`wrong-answer-${q}-2`]);
  //   answersArr.push(req.body[`wrong-answer-${q}-3`]);
  //   answersArr.push(req.body[`wrong-answer-${q}-4`]);
  // }
  // console.log('quizArr :', quizArr);
  // console.log('questions Array :', questionsArr);
  console.log('answers Array :', answersArr);
  // console.log('quiz ID', quizID);


  const addQuestions = function (questionsArr, quiz_ID) {
    let arrOfPromises = [];
    for (let q = 0; q < questionsArr.length; q++) {
      let promise = addQuestion([quiz_ID, questionsArr[q]]);
      arrOfPromises.push(promise);
      promise.then((question_ID) => addAnswers(question_ID, answersArr(q+1)))
    }
    return Promise.all(arrOfPromises);
  }

  const addAnswers = function (question_ID, answersArr) {
    let arrOfPromises = [];
    for (let q = 0; q < answersArr.length; q++) {
      let promise = addAnswer([question_ID, answersArr[q]]);
      arrOfPromises.push(promise);
    }
    return Promise.all(arrOfPromises);
  }

  addQuiz(quizArr).then((quiz_ID) => {
    console.log("quizID", quiz_ID);
    addQuestions(questionsArr, quiz_ID)
      .then(() => {
        res.redirect(`/quiz/${quiz_ID}`)
      })
      .catch((error) => {
        res.send(error)
      })
  })

})


  module.exports = router;
