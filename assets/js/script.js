/* jshint esversion: 11 */

//Global Variables
const homeScreen = document.getElementById('home'); //Homescreen
const endScreen = document.getElementById('end-screen'); //End screen
const howTo = document.getElementById('how-to'); //How to screen
const questionArea = document.getElementById('question'); // Question section
const questionElement = questionArea.firstElementChild; //Question text
const imageBox = document.getElementById('img-box'); //Image constainer
const questionImage = imageBox.firstElementChild; // Question image
const answerArea = document.getElementById('answers'); // Answer div
const answerButtons = document.getElementsByClassName('ans-btn'); //Answer buttons
const nextButton = document.getElementById('next-btn'); //Next button
const menuButtons = document.getElementsByClassName('menu-btn'); //Menu buttons
const timer = document.getElementById("timer"); //Timer display
let score = document.getElementById("score"); // Score display
let scoreNum; //Score value
let finalScore = document.getElementById("final-score"); // Final score
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
            case "replay-btn": //When "replay" button is clicked
            homeScreen.classList.remove('hide');
            endScreen.classList.add('hide');
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
 * Main fuction to start the game:
 *  - Hides homescreen
 *  - Shows answer & question area
 *  - Shuffles questions
 *  - Calls nextQuestion(), startTimer() & resetScore()
 */
function startGame() {
    homeScreen.classList.add('hide');
    questionArea.classList.remove('hide');
    answerArea.classList.remove('hide');
    score.classList.remove('hide');
    timeLeft = 20;
    shuffleQuestions = gameQuestions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    nextQuestion();
    startTimer();
    resetScore();
 }

 /**
  * Function to call resetState and showQuestion functions
  */
 function nextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);
 }

 /**
  * Function to display a random question from gameQuestion array 
  */
 function showQuestion(gameQuestions) {
    questionElement.textContent = `Q${currentQuestionIndex + 1}. ${gameQuestions.question}`;
    questionImage.src = gameQuestions.imageSrc;
    if (gameQuestions.imageSrc === '') { // Removes alt attribute for non-image questions
        questionImage.alt = 'logo'; 
        questionImage.src = 'assets/images/logo-trans.png';
    } else {
        questionImage.alt = 'guitar'; // Adds alt attribute if image question
    }
    gameQuestions.answers.sort(() => Math.random() - 0.5);
    gameQuestions.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.classList.add('ans-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerArea.appendChild(button);
        endGame(currentQuestionIndex);
    });
 }

 /**
  * Resets the state of game area:
  *  - Removes existing buttons
  *  - Reset timer to 20 seconds
  *  - Disables nextButton
  */
function resetState() {
    nextButton.classList.add('inactive');
    nextButton.disabled = true;
    while (answerArea.firstChild) {
        answerArea.removeChild(answerArea.firstChild);
    }
    clearInterval(timerInterval);
    timeLeft = 20;
}

/**
 * Function to manage events when an answer is selected:
 *  - Stops timer
 *  - Enables nextButton
 */
function selectAnswer() {
    stopTimer();
    nextButton.disabled = false;
   nextButton.classList.remove('inactive');
   Array.from(answerArea.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
   });
   const correctAnswer = this.dataset.correct === 'true';
    checkAnswer(correctAnswer, this);
 }

 /**
  * Updates player score 
  */
function checkAnswer(correctAnswer, button) {
    scoreNum = Number(score.textContent.substring(7,10));
    if (correctAnswer) { //Adds timeLeft to current score
        score.textContent = `Score: ${timeLeft + scoreNum}`;
    } else if (scoreNum < 10) { //Prevents score < 0
        resetScore();
    } else { // Subtracts 10 points from current score
        score.textContent = `Score: ${scoreNum - 10}`;
    } 
}

/**
 * Resets score back to 0
 */
function resetScore() {
    score.textContent = 'Score: 0';
    scoreNum = 0;
}

 /**
  * Checks wether the answer is correct or incorrect, and adds the corresponding class
  */
function setStatusClass(element, correct) {
    clearStatusClass(element); 
    if (correct) {
        element.classList.add('correct');
        element.disabled = true;
    } else {
        element.classList.add('incorrect');
        element.disabled = true;
    }
 }

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
            timeout(); // Call the timeout function when the timer runs out
        }
    }, 1000);
}

/**
 * Function to stop timer when an answer is selected
 */
function stopTimer() {
    clearInterval(timerInterval);
}

/**
 * Function to end game after 10 questions
 *  - Hide question & answer area
 *  - Show final score screen
 *  - Display final score
 */
function endGame(currentQuestionIndex) {
    scoreNum = Number(score.textContent.substring(7,10));
    if (currentQuestionIndex > 9) {
        questionArea.classList.add('hide');
        answerArea.classList.add('hide');
        score.classList.add('hide');
        endScreen.classList.remove('hide');
        finalScore.textContent = scoreNum;
    }
}

/**
 * Function to control actions when timer reaches 0
 *  - Disable answer buttons
 *  - Deduct 5 points from score
 *  - Enable nextButton
 */
function timeout() {
    if (timeLeft <= 0) {
        nextButton.classList.remove('inactive');
        nextButton.disabled = false;
        for (let answerButton of answerButtons) {
            if (answerButton.dataset.correct === 'true') {
                answerButton.classList.add('correct');
                answerButton.disabled = true;
            } else if (scoreNum < 5) {
                resetScore();
                answerButton.classList.add('incorrect');
                answerButton.disabled = true;
            } else {
                answerButton.classList.add('incorrect');
                answerButton.disabled = true;
                score.textContent = `Score: ${scoreNum - 5}`;
            }
        }
    }
}


