// Define global variables to keep track of the game state
let playerScore = 0;
let computerScore = 0;

// Get references to the relevant HTML elements
const rockButtton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const playAgainButton = document.getElementById("play-again-button");

const playerScoreDisplay = document.getElementById("p-score");
const computerScoreDisplay = document.getElementById("c-score");
const resultDisplay = document.getElementById("result-text");
const computerMoveImg = document.querySelector('.computer-move img');

// Function to generate random computer move
function getComputerMove() {
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor (math.random() * moves.length);
    return moves[randomIndex];
}

// Function to update the computer move image
function updateComputerMoveImage(computerMove) {
    let computerImage = '';
    if (computerMove === 'rock') {
        computerImage = './assets/images/rock.png';
    } else if (computerMove === 'paper') {
        computerImage = './assets/images/paper.png';
    } else if (computerMove === 'scissors') {
        computerImage = './assets/images/scissors.png';
    }
    computerMoveImg.src = computerImage;
}

// Function to play a single round of the game
function playRound(playerMove) {
    const computerMove = getComputerMove();
    updateComputerMoveImage(computerMove);

