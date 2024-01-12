document.getElementById("rock").addEventListener("click", function () {
    play("rock");
});
document.getElementById("paper").addEventListener("click", function () {
    play("paper");
});
document.getElementById("scissors").addEventListener("click", function () {
    play("scissors");
});

function play(playerChoice) {
    const choices = ["rock", "paper", "scissors"]; // define the choice
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]; // randomly choose the computer's choice

    let result;
    if (playerChoice === computerChoice) {
        // If player and computers choice are the same.
        result = "It's a tie!";
    } else if (
        // This is the main game logic which decided which choice beats the other.
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    // Changes the text on the page to display the result.
    document.getElementById(
        "result"
    ).innerText = `Player chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}
