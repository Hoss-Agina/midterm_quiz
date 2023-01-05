// const { addUserAnswer } = require('../db/queries/playing');

$(() => {
  $.get(`/api/quizzes/${quizId}/questions`, function(data) {

    console.log('just data', data);
    // console.log('data', data['questions']['1']['title'])
    // console.log('quiztitle', data['questions']['7']['quiz_title']);

    const questionData = data['questions'];

    let titleVar = 0;
    for (const counterdata in questionData) {
      titleVar = counterdata;
    }
    let questionsCounter = 0;
    const quizTitle = data['questions'][`${titleVar}`]['quiz_title'];
    // const questionTitle = data['questions']['1']['title'];
    $('#questionCont').append(`<h2>${quizTitle}</h2>`);

    for (const counterdata in questionData) {
      console.log('counterdata', counterdata);
      questionsCounter += 1;
      titleVar = counterdata;

      const questionTitle = data['questions'][`${counterdata}`]['title'];
      const correctAnswer = data['questions'][`${counterdata}`]['answers']['0'];
      const wrongAnswer1 = data['questions'][`${counterdata}`]['answers']['1'];
      const wrongAnswer2 = data['questions'][`${counterdata}`]['answers']['2'];
      const wrongAnswer3 = data['questions'][`${counterdata}`]['answers']['3'];

      console.log('counter', data['questions'][`${counterdata}`]);

      const orderedAnswers = [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3];

      // let randomIndex = Math.floor(Math.random() * 3)

      // handles shuffling the answers for the user when playing.
      function shuffleArray(array) {
        console.log('array', array);
        const copyArray = [...array];

        for (let i = copyArray.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = copyArray[i];
          copyArray[i] = copyArray[j];
          copyArray[j] = temp;
        }
        return copyArray;
      }

      const shuffledAnswers = shuffleArray(orderedAnswers);

      console.log('questionsCounter', questionsCounter);
      $('#questionCont').append(`
    <div id="question${questionsCounter}">
      <h3>${questionsCounter}. ${questionTitle}</h3>
      <fieldset id="question-${counterdata}">
      <input class="${counterdata}" type="radio" id="answer-${shuffledAnswers[0].answer_id}" name="${counterdata}" value="${shuffledAnswers[0].answer_id}">
        <label for="answer-${shuffledAnswers[0].answer_id}">${shuffledAnswers[0].answer}</label><br>

      <input class="${counterdata}" type="radio" id="answer-${shuffledAnswers[1].answer_id}" name="${counterdata}" value="${shuffledAnswers[1].answer_id}">
        <label for="answer-${shuffledAnswers[1].answer_id}">${shuffledAnswers[1].answer}</label><br>

      <input class="${counterdata}" type="radio" id="answer-${shuffledAnswers[2].answer_id}" name="${counterdata}" value="${shuffledAnswers[2].answer_id}">
        <label for="answer-${shuffledAnswers[2].answer_id}">${shuffledAnswers[2].answer}</label><br>

      <input class="${counterdata}" type="radio" id="answer-${shuffledAnswers[3].answer_id}" name="${counterdata}" value="${shuffledAnswers[3].answer_id}">
        <label for="answer-${shuffledAnswers[3].answer_id}">${shuffledAnswers[3].answer}</label><br>
      </fieldset>
            </div>
    `);
    }
    let answersArray = [];

    // <button class="btn btn-secondary check-answer ${counterdata}">${shuffledAnswers[0]}</button>
    // <button class="btn btn-secondary check-answer ${counterdata}">${shuffledAnswers[1]}</button>
    // <button class="btn btn-secondary check-answer ${counterdata}">${shuffledAnswers[2]}</button>
    // <button class="btn btn-secondary check-answer ${counterdata}">${shuffledAnswers[3]}</button>

    // $('#submit-quiz').on('submit', function(event) {
    //   const answerData = $(this).serializeArray();
    //   // event.preventDefault();
    //   const renderResult = function(data) {
    //     $('#resultCont').append(`
    //     <h3>Your Score!</h3>
    //     `);
    //   };
    //   console.log('event', answerData);
    //   $.post(`/quizzes/play/${quizId}/result`, answerData, (respond) => {
    //     console.log('did this work')
    //   // window.location.replace(`/quizzes/play/${quizId}/result`)
    //     // $.get(`/quizzes/play/${quizId}/result`, function(respond) {
    //     // });
    //   });
    // });

    // $('.check-answer').on('click', function(event) {

    //   const counter = $(this).attr('class').split(' ')[3];
    //   // console.log('counter', counter);

      // $(this).removeClass('button')
      // $('check-answer').addClass('hide')

      // for (const answer of data['questions'][`${counter}`]['answers']) {
      //   if (answer.answer === event.target.textContent)
      //     console.log('itworked', answer.answer_id);
      // }

      // if (event.target.textContent === data['questions'][`${counter}`]['answers']['0']['answer']) {

      //   $(this).addClass('correct');
      //   console.log('thats correct');
      // }
      // else { $(this).addClass('incorrect'); }

      // console.log("event", event.target.textContent);
      // console.log("just event", event);

      // answersArray.push()
      // addUserAnswer()

    // });

  });
});
