/* Imports */

/* State */
// let gameState = ''; // 'guess' or 'results' = '';

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let userGuess;

const userGuessDisplay = document.getElementById('user-guess-display');
const ghostGuessDisplay = document.getElementById('ghost-guess-display');
const resultDisplay = document.getElementById('result-display');

// let userWins = 0;
// let ghostWins = 0;
// let draws = 0;

const ghostGuess = ['rock', 'paper', 'scissors'];

/* Actions */

rock.addEventListener('click', () => {
    const randNum = Math.floor(Math.random() * ghostGuess.length);
    ghostGuessDisplay.textContent = ghostGuess[randNum];
    userGuess === 'rock';
    userGuessDisplay.textContent = 'rock';

    getResult();
    // inputsContainer.classList.toggle('hide');
    // fortuneContainer.classList.toggle('hide');
});

paper.addEventListener('click', () => {
    const randNum = Math.floor(Math.random() * ghostGuess.length);
    ghostGuessDisplay.textContent = ghostGuess[randNum];
    userGuess = 'paper';
    userGuessDisplay.textContent = 'paper';

    getResult();
    // inputsContainer.classList.toggle('hide');
    // fortuneContainer.classList.toggle('hide');
});

scissors.addEventListener('click', () => {
    const randNum = Math.floor(Math.random() * ghostGuess.length);
    ghostGuessDisplay.textContent = ghostGuess[randNum];
    userGuess = 'scissors';
    userGuessDisplay.textContent = 'scissors';

    getResult();

    // inputsContainer.classList.toggle('hide');
    // fortuneContainer.classList.toggle('hide');
});

// function loadPage() {}
function getResult() {
    if (ghostGuess === userGuess) {
        resultDisplay.textContent = 'its a draw!';
    }
    if (ghostGuess === 'rock' && userGuess === 'paper') {
        resultDisplay.textContent = 'you win!';
    }
    if (ghostGuess === 'rock' && userGuess === 'scissors') {
        resultDisplay.textContent = 'ghost wins!';
    }
    if (ghostGuess === 'paper' && userGuess === 'scissors') {
        resultDisplay.textContent = 'you win!';
    }
    if (ghostGuess === 'paper' && userGuess === 'rock') {
        resultDisplay.textContent = 'ghost wins!!';
    }
    if (ghostGuess === 'scissors' && userGuess === 'rock') {
        resultDisplay.textContent.textContent = 'you win!';
    }
    if (ghostGuess === 'scissors' && userGuess === 'paper') {
        resultDisplay.textContent = 'ghost wins!!';
    }
    // console.log('getResult');
}
/* Components */

/* Component */
// get DOM
// display
// event listeners

/* Run page load code */
// loadPage();
