//custom js for JSQuiz
var timerEl = document.getElementById("countdown");
var startBtn = document.getElementById("start");


function countdown() {
    //sets the starting time
    var timeLeft = 80;

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

startBtn.onclick = countdown;