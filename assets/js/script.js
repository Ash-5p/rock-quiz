//Global Variables
let homeScreen = document.getElementsByClassName('home')[0];
let howTo = document.getElementsByClassName('how-to')[0];
let gameArea = document.getElementsByClassName('game-area')[0];
let questionArea = document.getElementsByClassName('question')[0];
let answerArea = document.getElementsByClassName('answers')[0];
let menuButtons = document.getElementsByClassName('menu-btn');
let timer = document.getElementById("timer")
let oldScore = document.getElementById("score")

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
        homeScreen.classList.add('hide');
        questionArea.classList.remove('hide');
        answerArea.classList.remove('hide');    
    }
}

// function startGame() {
//     shuffleQuestions();
//     startTimer();
// }

shuffleQuestions()

checkAnswer()

isCorrect()

isIncorrect()

startTimer()

// scoreTracker() {
//     if (isCorrect()) {
//         score++;
//         oldScore.textContent = "Score: "+ score;
//     }
// }