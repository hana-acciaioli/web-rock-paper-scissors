/* Imports */

/* State */
// let gameState = ''; // 'guess' or 'results' = '';

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let userGuess;
// let gameState = 'resultState';

const userGuessDisplay = document.getElementById('user-guess-display');
const ghostGuessDisplay = document.getElementById('ghost-guess-display');
const resultDisplay = document.getElementById('result-display');

let userWins = 0;
let ghostWins = 0;
let draws = 0;
// let totalGames;

const ghostGuess = ['rock', 'paper', 'scissors'];

/* Actions */
function loadPage() {
    // displayGuess();
    // displayResults();
    displayScoreboard();
}

rock.addEventListener('click', () => {
    const randNum = Math.floor(Math.random() * ghostGuess.length);
    ghostGuessDisplay.textContent = ghostGuess[randNum];
    // gameState = resultState;
    userGuess = 'rock';
    userGuessDisplay.textContent = 'rock';

    getResult();
    // inputsContainer.classList.toggle('hide');
    // fortuneContainer.classList.toggle('hide');
});

paper.addEventListener('click', () => {
    const randNum = Math.floor(Math.random() * ghostGuess.length);
    ghostGuessDisplay.textContent = ghostGuess[randNum];
    // gameState = 'resultState';
    userGuess = 'paper';
    userGuessDisplay.textContent = 'paper';

    getResult();
    // inputsContainer.classList.toggle('hide');
    // fortuneContainer.classList.toggle('hide');
});

scissors.addEventListener('click', () => {
    const randNum = Math.floor(Math.random() * ghostGuess.length);
    ghostGuessDisplay.textContent = ghostGuess[randNum];
    // gameState = resultState;
    userGuess = 'scissors';
    userGuessDisplay.textContent = 'scissors';

    getResult();

    // inputsContainer.classList.toggle('hide');
    // fortuneContainer.classList.toggle('hide');
});

// function loadPage() {}
function getResult() {
    if (ghostGuessDisplay.textContent === userGuess) {
        resultDisplay.textContent = 'its a draw!';
        displayScoreboard();
        draws++;
    }
    if (ghostGuessDisplay.textContent === 'rock' && userGuess === 'paper') {
        resultDisplay.textContent = 'you win!';
        displayScoreboard();
        userWins++;
    }
    if (ghostGuessDisplay.textContent === 'rock' && userGuess === 'scissors') {
        resultDisplay.textContent = 'ghost wins!';
        displayScoreboard();
        ghostWins++;
    }
    if (ghostGuessDisplay.textContent === 'paper' && userGuess === 'scissors') {
        resultDisplay.textContent = 'you win!';
        displayScoreboard();
        userWins++;
    }
    if (ghostGuessDisplay.textContent === 'paper' && userGuess === 'rock') {
        resultDisplay.textContent = 'ghost wins!';
        displayScoreboard();
        ghostWins++;
    }
    if (ghostGuessDisplay.textContent === 'scissors' && userGuess === 'rock') {
        resultDisplay.textContent = 'you win!';
        displayScoreboard();
        userWins++;
    }
    if (ghostGuessDisplay.textContent === 'scissors' && userGuess === 'paper') {
        resultDisplay.textContent = 'ghost wins!';
        displayScoreboard();
        ghostWins++;
    }
    // console.log('getResult');
}
/* Components */

/* Component */
const userWinsDisplay = document.getElementById('user-wins-display');
const ghostWinsDisplay = document.getElementById('ghost-wins-display');
const drawsDisplay = document.getElementById('draws-display');
// const totalGamesDisplay = document.getElementById('total-games');

function displayScoreboard() {
    userWinsDisplay.textContent = userWins;
    ghostWinsDisplay.textContent = ghostWins;
    drawsDisplay.textContent = draws;
    // totalGamesDisplay.textContent = totalGames;
}
// get DOM
// display
// event listeners

/* Run page load code */
loadPage();
// function playAgain() {
//     // gameState = 'guess';
//     loadPage();
// }
