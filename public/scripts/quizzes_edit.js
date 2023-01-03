// Client facing scripts here

console.log("hello");
$(() => {
  $.get(`/api/quizzes/${quizId}/questions`, function(data) {
    console.log(data);
  })
    $('#cont').append(`
    <div id="question${questionCounter}">
      <label for="question1">Question ${questionCounter}</label>
              <input
                class="form-control"
                type="text"
                name="question-${questionCounter}"
                style="width: 300px; margin: 1em"
              />
              <label for="answer1">Answer 1</label>
              <input
                class="form-control"
                placeholder="Insert Correct Answer"
                type="text"
                name="correct-answer-${questionCounter}"
                style="width: 300px; margin: 1em"
              />
              <label for="answer2">Answer 2</label>
              <input
                class="form-control"
                placeholder="Insert Wrong Answer"
                type="text"
                name="wrong-answer-${questionCounter}-2"
                style="width: 300px; margin: 1em"
              />
              <label for="answer3">Answer 3</label>
              <input
                class="form-control"
                placeholder="Insert Wrong Answer"
                type="text"
                name="wrong-answer-${questionCounter}-3"
                style="width: 300px; margin: 1em"
              />
              <label for="answer4">Answer 4</label>
              <input
                class="form-control"
                placeholder="Insert Wrong Answer"
                type="text"
                name="wrong-answer-${questionCounter}-4"
                style="width: 300px; margin: 1em"
              />
              <hr>
            </div>
    `);
  });
