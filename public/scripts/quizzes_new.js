// $(() => {
//   $('#add-question').on('click', () => {
//     $.ajax({
//       method: 'GET',
//       url: '/quizzes/new'
//     })
//     .done((response) => {
//       const $usersList = $('#users');
//       $usersList.empty();

//       for(const user of response.users) {
//         $(`<li class="user">`).text(user.name).appendTo($usersList);
//       }
//     });
//   });
// });

// const express = require("express");
// const cookieSession = require('cookie-session');
// const app = express();
$(document).ready(function() {

  const htmlString = `<label for="question1">Question 1</label>
  <input
    class="form-control"
    type="text"
    name="longURL"
    style="width: 300px; margin: 1em"
  />
  <label for="answer1">Answer 1</label>
  <input
    class="form-control"
    placeholder="Insert Correct Answer"
    type="text"
    name="correct-answer"
    style="width: 300px; margin: 1em"
  />
  <label for="answer2">Answer 2</label>
  <input
    class="form-control"
    placeholder="Insert Wrong Answer"
    type="text"
    name="longURL"
    style="width: 300px; margin: 1em"
  />
  <label for="answer3">Answer 3</label>
  <input
    class="form-control"
    placeholder="Insert Wrong Answer"
    type="text"
    name="longURL"
    style="width: 300px; margin: 1em"
  />
  <label for="answer4">Answer 4</label>
  <input
    class="form-control"
    placeholder="Insert Wrong Answer"
    type="text"
    name="longURL"
    style="width: 300px; margin: 1em"
  />`

  $(() => {
      $('#add-question').on('submit', () => {
        $('.form-group').appendTo(htmlString);
      })
    })



// const questionCounter = function(num) {
//   let num = 0;

//   return num;
// }


        })
