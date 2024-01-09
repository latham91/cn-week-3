// Element Selectors
const playerOneScore = document.querySelector("#playerOneScore");
const playerTwoScore = document.querySelector("#playerTwoScore");

const playerOneCurrentScore = document.querySelector("#playerOneCurrentScore");
const playerTwoCurrentScore = document.querySelector("#playerTwoCurrentScore");

const rollButton = document.querySelector("#rollButton");
const holdButton = document.querySelector("#holdButton");
const restartButton = document.querySelector("#restartButton");

const playerTurnHeading = document.querySelector(".playerTurnHeading");

const diceImage = document.querySelector("#diceImage");

// Global Variables
let playerOneScoreValue = 0;
let playerTwoScoreValue = 0;

let playerOneCurrentScoreValue = 0;
let playerTwoCurrentScoreValue = 0;

let playerOneTurn = true;

// Functions
const rollDice = (player) => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    diceImage.src = `./images/dice-${diceValue}.png`;

    if (player && diceValue !== 1) {
        // If its player 1's turn
        playerOneCurrentScoreValue += diceValue; // adds dice value to current score
        playerOneCurrentScore.textContent = playerOneCurrentScoreValue; // changes text value to current score
    } else if (!player && diceValue !== 1) {
        // If its player 2's turn
        playerTwoCurrentScoreValue += diceValue;
        playerTwoCurrentScore.textContent = playerTwoCurrentScoreValue;
    } else if (player && diceValue === 1) {
        // If its player 1's turn and dice value is 1
        playerOneCurrentScoreValue = 0; // resets player 1's current score to 0
        playerOneCurrentScore.textContent = 0; // changes text value to 0

        playerOneTurn = false; // changes player turn to player 2
        playerTurnHeading.textContent = "Player 2's Turn"; // changes heading to player 2's turn
    } else if (!player && diceValue === 1) {
        // If its player 2's turn and dice value is 1
        playerTwoCurrentScoreValue = 0; // resets player 2's current score to 0
        playerTwoCurrentScore.textContent = 0; // changes text value to 0

        playerOneTurn = true; // changes player turn to player 1
        playerTurnHeading.textContent = "Player 1's Turn"; // changes heading to player 1's turn
    }
};

const holdScore = (player) => {
    console.log();
    if (player && playerOneCurrentScoreValue + playerOneScoreValue >= 20) {
        // If player 1s score + the current score is greater than or equal to 20
        playerOneScoreValue += playerOneCurrentScoreValue; // adds current score to player 1's score
        playerOneScore.textContent = playerOneScoreValue; // changes text value to player 1's score

        playerTurnHeading.textContent = "Player 1 Wins!"; // changes heading to player 1 wins

        rollButton.disabled = true; // disables the roll button
        holdButton.disabled = true; // disables the hold button
        restartButton.disabled = false; // enables the restart button
    } else if (!player && playerTwoCurrentScoreValue + playerTwoScoreValue >= 20) {
        // If player 2s score + the current score is greater than or equal to 20
        playerTwoScoreValue += playerTwoCurrentScoreValue; // adds current score to player 2's score
        playerTwoScore.textContent = playerTwoScoreValue; // changes text value to player 2's score

        playerTurnHeading.textContent = "Player 2 Wins!"; // changes heading to player 2 wins

        rollButton.disabled = true; // disables the roll button
        holdButton.disabled = true; // disables the hold button
        restartButton.disabled = false; // enables the restart button
    } else if (player) {
        // If its player 1's turn
        playerOneScoreValue += playerOneCurrentScoreValue; // adds current score to player 1's score
        playerOneScore.textContent = playerOneScoreValue; // changes text value to player 1's score

        playerOneCurrentScoreValue = 0; // resets player 1's current score to 0
        playerOneCurrentScore.textContent = 0; // changes text value to 0

        playerOneTurn = false; // changes player turn to player 2
        playerTurnHeading.textContent = "Player 2's Turn"; // changes heading to player 2's turn
    } else if (!player) {
        // If its player 2's turn
        playerTwoScoreValue += playerTwoCurrentScoreValue; // adds current score to player 2's score
        playerTwoScore.textContent = playerTwoScoreValue; // changes text value to player 2's score

        playerTwoCurrentScoreValue = 0; // resets player 2's current score to 0
        playerTwoCurrentScore.textContent = 0; // changes text value to 0

        playerOneTurn = true; // changes player turn to player 1
        playerTurnHeading.textContent = "Player 1's Turn"; // changes heading to player 1's turn
    }
};

const restartGame = () => {
    playerOneScoreValue = 0;
    playerTwoScoreValue = 0;

    playerOneCurrentScoreValue = 0;
    playerTwoCurrentScoreValue = 0;

    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;

    playerOneCurrentScore.textContent = 0;
    playerTwoCurrentScore.textContent = 0;

    playerTurnHeading.textContent = "Player 1's Turn";

    rollButton.disabled = false;
    holdButton.disabled = false;
    restartButton.disabled = true;
};

// Event Listeners
rollButton.addEventListener("click", () => rollDice(playerOneTurn));
holdButton.addEventListener("click", () => holdScore(playerOneTurn));
restartButton.addEventListener("click", restartGame);
