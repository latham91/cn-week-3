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
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    document.getElementById(
        "result"
    ).innerText = `Player chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}
