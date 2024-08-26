/* jshint esversion: 11 */

//Global Variables
const homeScreen = document.getElementById('home'); //Homescreen
const howTo = document.getElementById('how-to'); //How to screen
const gameArea = document.getElementById('game-area'); //Game area div
const questionArea = document.getElementById('question'); // Question div
const questionElement = questionArea.firstElementChild; //Question text
const imageBox = document.getElementById('img-box'); //Image constainer
const questionImage = imageBox.firstElementChild; // Question image
const answerArea = document.getElementById('answers'); // Answer div
const answerButtons = document.getElementsByClassName('ans-btn'); //Answer buttons
const nextButton = document.getElementById('next-btn'); //Next button
const menuButtons = document.getElementsByClassName('menu-btn'); //Menu buttons
const timer = document.getElementById("timer"); //Timer display
let score = document.getElementById("score"); // Score display
let timeLeft = 20; //Game time left in seconds
let timerInterval;

let shuffleQuestions, currentQuestionIndex;

// Add event listeners to all menu buttons
for (let menuButton of menuButtons) {
    triggerMenuBtns(menuButton);
}

// Handle adding event listeners to each menu button
function triggerMenuBtns(btn) {
    btn.addEventListener("click", handleMenuClick);
}

// Handler function that deals with button clicks
function handleMenuClick(e) {
    const btn = e.currentTarget;  // the clicked button
    menuControls(btn);
}


// Controls menu buttons depending on their id
function menuControls(btn) {
    switch (btn.id) {
        case "htp-btn": //When "how to play" button is clicked
            homeScreen.classList.add('hide');
            howTo.classList.remove('hide');
            break;
        case "back-btn": //When "back" button is clicked
            homeScreen.classList.remove('hide');
            howTo.classList.add('hide');
            break;
        case "home-btn": //When "home" button is clicked
            homeScreen.classList.remove('hide');
            questionArea.classList.add('hide');
            answerArea.classList.add('hide');
            score.classList.add('hide');
            break;
        case "next-btn": //When "next" button is clicked
            currentQuestionIndex++;
            nextQuestion();
            startTimer();
            break;   
        case "play-btn": //When "play" button is clicked
            resetState();
            startGame();
            break;
        default:
            console.warn("Unhandled button ID: ", btn.id);
            break;
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

 /**
  * Function to move to next question when nextButton is clicked
  */
 function nextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);
 };

 /**
  * Function to display a random question from gameQuestion array 
  */
 function showQuestion(gameQuestions) {
    questionElement.textContent = gameQuestions.question;
    questionImage.src = gameQuestions.imageSrc;
    if (gameQuestions.imageSrc === '') { // Removes alt attribute for non-image questions
        questionImage.alt = ''; 
    } else {
        questionImage.alt = 'guitar'; // Adds alt attribute if image question
    };
    gameQuestions.answers.sort(() => Math.random() - 0.5);
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

/**
 * Function to manage events when an answer is selected
 */
function selectAnswer() {
    stopTimer();
   nextButton.classList.remove('inactive')
   Array.from(answerArea.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
   });
   const correctAnswer = this.dataset.correct === 'true';
    checkAnswer(correctAnswer, this);
 };

 /**
  * Updates player score. Adds timeLeft to current score
  */
function checkAnswer(correctAnswer, button) {
    if (correctAnswer) {
        //Increments and displays score 
        let scoreNum = Number(score.textContent.substring(7,9));
        score.textContent = `Score: ${timeLeft + scoreNum}`
}

}

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
 * Starts the in-game countdown timer
 */
function startTimer() {
    timer.textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
        };
    }, 1000)
};

/**
 * Function to stop timer when an answer is selected
 */

function stopTimer() {
    clearInterval(timerInterval);
};

// function timeout {
    
// }
