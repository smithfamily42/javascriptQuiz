//custom js for JSQuiz
var score = 0;
var timerEl = document.getElementById("countdown");
var startBtn = document.getElementById("start");
var question = document.getElementById("questionText");
var feedbackEl = document.getElementById("result");
var choicesEl = document.getElementById("answer-group");
var currentQuestion = 0;

//array for questions
var questions = [
    { q: 'Which of the following is a valid type of function javascript supports?',
     choices: ["named function", "anonymous function", "Both of the above", "None of the above"],
      a: "Both of the above" },
    { q: 'Which of the following function of String object returns the calling string value converted to upper case?',
     choices: ["toLocaleUpperCase()", "toString()", "toUpperCase()", "substring()"], a: "toUpperCase()" },
    { q: 'Which built-in method returns the length of the string?', 
    choices: ["length()", "size()", "index()", "None of the above"], a: "length()" },
    { q: 'Which of the following type of variable is visible everywhere in your JavaScript code?', 
    choices: ["global variable", "local variable", "Both of the above", "None of the above"], a: "global variable" },
    { q: 'Which of the following functions of Array object adds one or more elements to the front of an array and returns the new length of the array?', 
    choices: ["sort()", "splice()", "toString()", "unshift()"], a: "unshift()" }
];
var timeLeft = 80;
function countdown() {
    //sets the starting time


    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "Out of Time";
            startBtn.textContent = "Restart Game";
            clearInterval(timeInterval);
        }
    }, 1000);
}

function dispQuestion() {

    var option = questions[currentQuestion];

    //question.innerHTML = "<p>"+ option.q +"</p>";
    question.textContent = option.q;

    //clear old questions
    choicesEl.innerHTML = "";

    //loop over choices
    option.choices.forEach(function(answer, i) {
        //creating new button for each choice
    var answerNode = document.createElement("button");
    answerNode.setAttribute("class", "btn d-block btn-success");
    answerNode.setAttribute("value", answer);

    answerNode.textContent = i + 1 + ". " + answer;

    //attach click event listener
    answerNode.onclick = questionClick;

    //display on the page
    choicesEl.appendChild(answerNode);
    });
}

function questionClick() {
    countdown();
    // check if user guessed wrong
    if (this.value !== questions[currentQuestion].a) {
       // penalize time
       timeLeft -= 10;
       if (timeLeft < 0) {
         timeLeft = 0;
       }
      // display new time on page
      timerEl.textContent = timeLeft;

      feedbackEl.textContent = "Wrong!";
    } else {

      feedbackEl.textContent = "Correct!";
    }
    // flash right/wrong feedback on page for half a second
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
    // move to next question
    currentQuestion++;
    // check if we've run out of questions
    if (currentQuestion === questions.length) {
      quizEnd();
    } else {
      dispQuestion();
    }
  }


function startQuiz () {
    dispQuestion();
    countdown();

}
/*
    options.choices.forEach (function(answer, i) {
        var answerNode = document.createElement('button');

for (var i = 0; i < questions.length; i++) {
    var answer = ;
*/

//Events
startBtn.onclick = startQuiz;