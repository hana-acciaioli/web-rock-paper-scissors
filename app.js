const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let userGuess;
let gameState = '';

const userGuessDisplay = document.getElementById('user-guess-display');
const ghostGuessDisplay = document.getElementById('ghost-guess-display');
const resultDisplay = document.getElementById('result-display');

let userWins = 0;
let ghostWins = 0;
let draws = 0;
// let totalGames;

const playAgain = document.getElementById('play-again');

const ghostGuess = ['rock', 'paper', 'scissors'];

function loadPage() {
    displayGuess();
    displayResults();
    displayScoreboard();
}

rock.addEventListener('click', () => {
    const randNum = Math.floor(Math.random() * ghostGuess.length);
    ghostGuessDisplay.textContent = ghostGuess[randNum];
    gameState = 'resultsState';
    userGuess = 'rock';
    userGuessDisplay.textContent = 'rock';

    getResult();
});

paper.addEventListener('click', () => {
    const randNum = Math.floor(Math.random() * ghostGuess.length);
    ghostGuessDisplay.textContent = ghostGuess[randNum];
    gameState = 'resultsState';
    userGuess = 'paper';
    userGuessDisplay.textContent = 'paper';

    getResult();
});

scissors.addEventListener('click', () => {
    const randNum = Math.floor(Math.random() * ghostGuess.length);
    ghostGuessDisplay.textContent = ghostGuess[randNum];
    gameState = 'resultsState';
    userGuess = 'scissors';
    userGuessDisplay.textContent = 'scissors';
    getResult();
});

playAgain.addEventListener('click', () => {
    loadPage();
    rePlay();
});

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
    loadPage();
}

const guessSection = document.getElementById('guess-section');
function displayGuess() {
    if (gameState === 'guessState') {
        guessSection.classList.remove('hidden');
        resultsSection.classList.add('hidden');
    }
}

const resultsSection = document.getElementById('results-section');

function displayResults() {
    if (gameState === 'resultsState') {
        resultsSection.classList.remove('hidden');
        guessSection.classList.add('hidden');
    }
}

const userWinsDisplay = document.getElementById('user-wins-display');
const ghostWinsDisplay = document.getElementById('ghost-wins-display');
const drawsDisplay = document.getElementById('draws-display');
const totalGamesDisplay = document.getElementById('total-games');

function displayScoreboard() {
    userWinsDisplay.textContent = userWins;
    ghostWinsDisplay.textContent = ghostWins;
    drawsDisplay.textContent = draws;
    totalGamesDisplay.textContent = userWins + ghostWins + draws;
}

function rePlay() {
    gameState = 'guessState';
    loadPage();
}
