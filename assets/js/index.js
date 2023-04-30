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