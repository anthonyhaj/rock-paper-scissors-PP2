// Define global variables to keep track of the game state
let playerScore = 0;
let computerScore = 0;
let round = 1;


// Get references to the relevant HTML elements
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const playAgainButton = document.getElementById("play-again-button");

const playerScoreDisplay = document.getElementById("p-score");
const computerScoreDisplay = document.getElementById("c-score");
const resultDisplay = document.getElementById("result-text");
const computerMoveImg = document.querySelector('.computer-move img');
const playerMoveImg = document.querySelector('.you-chose img');

// Function to generate random computer move
function getComputerMove() {
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * moves.length);
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

// Function to update the player move image
function updatePlayerMoveImage(playerMove) {
    let playerImage = '';
    if (playerMove === 'rock') {
        playerImage = './assets/images/rock-r.png';
    } else if (playerMove === 'paper') {
        playerImage = './assets/images/paper-r.png';
    } else if (playerMove === 'scissors') {
        playerImage = './assets/images/scissors-r.png';
    }
    playerMoveImg.src = playerImage;
}

// Function to play a single round of the game
function playRound(playerMove) {
    const computerMove = getComputerMove();
    // Animation to switch between possible moves images"
    let i = 0; // Variable to keep track of the current index in the animation array
    let animation = ['rock.png', 'paper.png', 'scissors.png']; // Array of image names for the animation
    const animationInterval = setInterval(() => {
            computerMoveImg.src = './assets/images/' + animation[i];
            i++;
            if (i >= animation.length) {
                clearInterval(animationInterval); // Stop the animation when it reaches the end of the array

                updateComputerMoveImage(computerMove);

                if (playerMove === computerMove) {
                    resultDisplay.textContent = "It's a Tie!";
                } else if (
                    (playerMove === 'rock' && computerMove === 'scissors') ||
                    (playerMove === 'paper' && computerMove === 'rock') ||
                    (playerMove === 'scissors' && computerMove === 'paper')
                ) {
                    resultDisplay.textContent = 'You Win!';
                    playerScore++;
                    playerScoreDisplay.textContent = playerScore;
                } else {
                    resultDisplay.textContent = 'Computer Wins!';
                    computerScore++;
                    computerScoreDisplay.textContent = computerScore;
                }

                updatePlayerMoveImage(playerMove);

                if (round === 10) {
                    if (playerScore > computerScore) {
                        resultDisplay.textContent = 'You win the game!';
                    } else if (computerScore > playerScore) {
                        resultDisplay.textContent = 'You lose the game!';
                    } else {
                        resultDisplay.textContent = "It's a tie game!";
                    }
                    rockButton.disabled = true;
                    paperButton.disabled = true;
                    scissorsButton.disabled = true;
                } else {
                    round++;
                }
            }
        }, 300); // Change the interval duration (in milliseconds) to adjust the animation speed
    }

    // Function to reset game state
    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        round = 1;
        playerScoreDisplay.textContent = 0;
        computerScoreDisplay.textContent = 0;
        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
    }

    // Event listeners for player moves

    rockButton.addEventListener('click', function () {
        playRound('rock');
    });
    paperButton.addEventListener('click', function () {
        playRound('paper');
    });
    scissorsButton.addEventListener('click', function () {
        playRound('scissors');
    });
    playAgainButton.addEventListener('click', function () {
        resetGame();
    });