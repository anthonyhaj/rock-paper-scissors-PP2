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
    const computerMove = moves[randomIndex];
    switch (computerMove) {
        case 'rock':
            computerMoveImg.src = './assets/images/rock.png';
            break;
            case 'paper':
            computerMoveImg.src = './assets/images/paper.png';
            break;
        case 'scissors':
            computerMoveImg.src = './assets/images/scissors.png';
            break;
    }
    return computerMove;
}

