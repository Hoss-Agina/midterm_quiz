// Client facing scripts here

console.log("hello");
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
    $('#questionCont').append(`<label for="title">Quizzel Name</label>
    <input
      class="form-control"
      value="${quizTitle}"
      type="text"
      name="title"
      style="width: 300px; margin: 1em"
    />`)

    for(const counterdata in questionData){
      console.log('counterdata', counterdata);
      questionsCounter += 1;
      titleVar = counterdata;

      const questionTitle = data['questions'][`${counterdata}`]['title'];
      const correctAnswer = data['questions'][`${counterdata}`]['answers']['0']['answer']
      const wrongAnswer1 = data['questions'][`${counterdata}`]['answers']['1']['answer']
      const wrongAnswer2 = data['questions'][`${counterdata}`]['answers']['2']['answer']
      const wrongAnswer3 = data['questions'][`${counterdata}`]['answers']['3']['answer']

      console.log('questionsCounter', questionsCounter);
      $('#questionCont').append(`
    <div id="question${questionsCounter}">
      <label for="question1">Question ${questionsCounter}</label>
              <input
                class="form-control"
                type="text"
                value="${questionTitle}"
                name="question-${questionsCounter}"
                style="width: 300px; margin: 1em"
              />
              <label for="answer1">Answer 1</label>
              <input
                class="form-control"
                placeholder="Insert Correct Answer"
                type="text"
                value="${correctAnswer}"
                name="correct-answer-${questionsCounter}"
                style="width: 300px; margin: 1em"
              />
              <label for="answer2">Answer 2</label>
              <input
                class="form-control"
                placeholder="Insert Wrong Answer"
                type="text"
                value="${wrongAnswer1}"
                name="wrong-answer-${questionsCounter}-2"
                style="width: 300px; margin: 1em"
              />
              <label for="answer3">Answer 3</label>
              <input
                class="form-control"
                placeholder="Insert Wrong Answer"
                type="text"
                value="${wrongAnswer2}"
                name="wrong-answer-${questionsCounter}-3"
                style="width: 300px; margin: 1em"
              />
              <label for="answer4">Answer 4</label>
              <input
                class="form-control"
                placeholder="Insert Wrong Answer"
                type="text"
                value="${wrongAnswer3}"
                name="wrong-answer-${questionsCounter}-4"
                style="width: 300px; margin: 1em"
              />
              <hr>
            </div>
    `);
    }
    $('#add-question').on('click', () => {

      questionsCounter += 1;
      $('#questionCont').append(`
      <div id="question${questionsCounter}">
        <label for="question1">Question ${questionsCounter}</label>
                <input
                  class="form-control"
                  type="text"
                  name="question-${questionsCounter}"
                  style="width: 300px; margin: 1em"
                />
                <label for="answer1">Answer 1</label>
                <input
                  class="form-control"
                  placeholder="Insert Correct Answer"
                  type="text"
                  name="correct-answer-${questionsCounter}"
                  style="width: 300px; margin: 1em"
                />
                <label for="answer2">Answer 2</label>
                <input
                  class="form-control"
                  placeholder="Insert Wrong Answer"
                  type="text"
                  name="wrong-answer-${questionsCounter}-2"
                  style="width: 300px; margin: 1em"
                />
                <label for="answer3">Answer 3</label>
                <input
                  class="form-control"
                  placeholder="Insert Wrong Answer"
                  type="text"
                  name="wrong-answer-${questionsCounter}-3"
                  style="width: 300px; margin: 1em"
                />
                <label for="answer4">Answer 4</label>
                <input
                  class="form-control"
                  placeholder="Insert Wrong Answer"
                  type="text"
                  name="wrong-answer-${questionsCounter}-4"
                  style="width: 300px; margin: 1em"
                />
                <hr>
              </div>
      `);
    });

    $('#remove-question').on('click', () => {
      if (questionsCounter === 1) {
        return;
      } else {
        $(`#question${questionsCounter}`).remove();
        questionsCounter -= 1;
      }
    });
  })
  });
