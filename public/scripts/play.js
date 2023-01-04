// const { addUserAnswer } = require('../db/queries/playing');

$(() => {
  $.get(`/api/quizzes/${quizId}/questions`, function(data) {


    console.log('just data', data);


    // console.log('data', data['questions']['1']['title'])
    // console.log('quiztitle', data['questions']['7']['quiz_title']);


    const questionData = data['questions'];

    let titleVar = 0;
    for(const counterdata in questionData){
      titleVar = counterdata;
    }
    let questionsCounter = 0;
    const quizTitle = data['questions'][`${titleVar}`]['quiz_title'];
    // const questionTitle = data['questions']['1']['title'];
    $('#questionCont').append(`<h2>${quizTitle}</h2>
    `)

    for(const counterdata in questionData){
      console.log('counterdata', counterdata);
      questionsCounter += 1;
      titleVar = counterdata;

      const questionTitle = data['questions'][`${counterdata}`]['title'];
      const correctAnswer = data['questions'][`${counterdata}`]['answers']['0']['answer']
      const wrongAnswer1 = data['questions'][`${counterdata}`]['answers']['1']['answer']
      const wrongAnswer2 = data['questions'][`${counterdata}`]['answers']['2']['answer']
      const wrongAnswer3 = data['questions'][`${counterdata}`]['answers']['3']['answer']

      const orderedAnswers = [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3]

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
              <button class="btn btn-secondary check-answer ${counterdata}">${shuffledAnswers[0]}</button>
              <button class="btn btn-secondary check-answer ${counterdata}">${shuffledAnswers[1]}</button>
              <button class="btn btn-secondary check-answer ${counterdata}">${shuffledAnswers[2]}</button>
              <button class="btn btn-secondary check-answer ${counterdata}">${shuffledAnswers[3]}</button>
            </div>
    `);
    }
    let answersArray = [];

    $('.check-answer').on('click', function(event) {

      const counter = $(this).attr('class').split(' ')[3];
      // console.log('counter', counter);

      for(const answer of data['questions'][`${counter}`]['answers']){
        if(answer.answer === event.target.textContent)
      console.log('itworked', answer.answer_id)
    }

      if(event.target.textContent === data['questions'][`${counter}`]['answers']['0']['answer']){
        
        console.log('thats correct');
      }
      else{console.log('wrong answer')}


      console.log("event", event.target.textContent)
      console.log("just event", event)


      // answersArray.push()
      // addUserAnswer()

  })

  })
})
