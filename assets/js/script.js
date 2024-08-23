//Global Variables
let homeScreen = document.getElementsByClassName('home')[0];
let howTo = document.getElementsByClassName('how-to')[0];
let gameArea = document.getElementsByClassName('game-area')[0];
let questionArea = document.getElementsByClassName('question')[0];
let answerArea = document.getElementsByClassName('answers')[0];
let menuButtons = document.getElementsByClassName('menu-btn');
let timer = document.getElementById("timer")
let oldScore = document.getElementById("score")
let timeLeft = 20; //Game left in seconds
let timerInterval
let score = 0;
let currentQuestionIndex = 0;

//Get menu button elements and add event listeners
for (let menuButton of menuButtons) {
    menuButton.addEventListener('click', function () {
        menuControls(menuButton);
    });
}

//Controls menu buttons
function menuControls(button) {
    // Check the id of the button that was clicked
    if(button.id === "htp-btn") {
        homeScreen.classList.add('hide');
        howTo.classList.remove('hide');
    } else if (button.id === "back-btn") {
        homeScreen.classList.remove('hide');
        howTo.classList.add('hide');
    } else if (button.id === "play-btn") {
        startGame();  
    }
}

/**
 * Main fuction to start the game
 */
function startGame() {
    homeScreen.classList.add('hide');
    questionArea.classList.remove('hide');
    answerArea.classList.remove('hide');
    oldScore = 0;
    timeLeft = 20;
    currentQuestionIndex = 0;
    oldScore.textContent = `Score: ${score}`;
    startTimer();
 }

shuffleQuestions() {
    gameQuestions
 }

checkAnswer()

isCorrect()

isIncorrect()

function startTimer() {
    timer.textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            isIncorrect();
            nextQuestion();
        }
    }, 1000)
}

// scoreTracker() {
//     if (isCorrect()) {
//         score++;
//         oldScore.textContent = "Score: "+ score;
//     }
// }