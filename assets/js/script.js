//Global Variables
let homeScreen = document.getElementsByClassName('home')[0];
let howTo = document.getElementsByClassName('how-to')[0];
let gameArea = document.getElementsByClassName('game-area')[0];
let answerArea = document.getElementsByClassName('answers')[0];
let questionArea = document.getElementsByClassName('question')[0];
let menuButtons = document.getElementsByClassName('menu-btn');

//Get menu button elements and add event listeners
for (let menuButton of menuButtons) {
    menuButton.addEventListener('click', function () {
        menuControls(menuButton);
    });
}

function menuControls(button) {
    // Check the id of the button that was clicked
    if(button.id === "htp-btn") {
        homeScreen.classList.add('hide');
        howTo.classList.remove('hide');
    }
}

shuffleQuestions()

checkAnswer()

isCorrect()

isIncorrect()

timer()

scoreTracker()