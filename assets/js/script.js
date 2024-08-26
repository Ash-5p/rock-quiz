//Global Variables
const homeScreen = document.getElementsByClassName('home')[0]; //Homescreen
const howTo = document.getElementsByClassName('how-to')[0]; //How to screen
const gameArea = document.getElementsByClassName('game-area')[0]; //Game area div
const questionArea = document.getElementsByClassName('question')[0]; // Question div
const questionElement = questionArea.children[0]; //Question text
const imageBox = document.getElementsByClassName('img-box')[0]; //Image
const answerArea = document.getElementsByClassName('answers')[0]; // Answer div
const answerButtons = document.getElementsByClassName('ans-btn');
const nextButton = document.getElementById('next-btn');
const menuButtons = document.getElementsByClassName('menu-btn'); //Menu buttons
const timer = document.getElementById("timer") //Timer display
let score = document.getElementById("score") // Score display
let timeLeft = 20; //Game time left in seconds
let timerInterval

let shuffleQuestions, currentQuestionIndex;

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
    } else if (button.id === "home-btn") {
        homeScreen.classList.remove('hide');
        questionArea.classList.add('hide');
        answerArea.classList.add('hide');
        score.classList.add('hide');
    } else if (button.id === "play-btn") {
        resetState();
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
    score.classList.remove('hide');
    timeLeft = 20;
    shuffleQuestions = gameQuestions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    nextQuestion();
    startTimer();
 };

 function nextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);

 };

 function showQuestion(gameQuestions) {
    questionElement.textContent = gameQuestions.question;
    imageBox.attributes.src = gameQuestions.imageSrc;
    gameQuestions.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.classList.add('ans-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        };
        button.addEventListener('click', selectAnswer);
        answerArea.appendChild(button)
    });

 };

 /**
  * Resets the state of game area by removing existing buttons and resetting timer interval
  */
function resetState() {
    nextButton.classList.add('inactive');
    while (answerArea.firstChild) {
        answerArea.removeChild(answerArea.firstChild);
    };
    clearInterval(timerInterval);
    timeLeft = 20;
};

function selectAnswer(event) {
   const selectedButton = event.target;
   const correct = selectedButton.dataset.correct;
   nextButton.classList.remove('inactive')
   Array.from(answerArea.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
   });
 };

 /**
  * Checks wether the answer is correct or incorrect, and adds the corresponding class
  */
 function setStatusClass(element, correct) {
    clearStatusClass(element) 
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    };
 };

 /**
  * Clears the existing classes of the answer buttons
  */
function clearStatusClass (element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

/**
 * Controls the in-game countdown timer
 */
function startTimer() {
    timer.textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            nextQuestion();
        };
    }, 1000)
};
