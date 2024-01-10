// Element Selectors
const scoreHeading = document.getElementById("scoreHeading");
const leftCardValue = document.querySelectorAll(".leftCardValue");
const rightCardValue = document.querySelectorAll(".rightCardValue");
const leftCardSuit = document.querySelectorAll(".leftCardSuit");
const rightCardSuit = document.querySelectorAll(".rightCardSuit");
const higherButton = document.querySelector("#btnHigher");
const lowerButton = document.querySelector("#btnLower");
const restartButton = document.querySelector("#btnRestart");
const rightCardElement = document.querySelector(".cardRight");

// Variables
const suits = ["♠", "♣", "♥", "♦"];
const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suitColors = ["black", "black", "red", "red"];
let score = 0;

// Functions
const generateStartingCards = () => {
    const leftCard = generateCard();
    const rightCard = generateCard();

    leftCardValue.forEach((element) => {
        element.textContent = leftCard.value;
        element.style.color = leftCard.color;
    });

    leftCardSuit.forEach((element) => {
        element.textContent = leftCard.suit;
        element.style.color = leftCard.color;
    });

    rightCardElement.style.backgroundColor = "skyblue";
};

const generateCard = () => {
    const randomSuit = Math.floor(Math.random() * 4);
    const randomValue = Math.floor(Math.random() * 12);

    return {
        suit: suits[randomSuit],
        value: cardValues[randomValue],
        color: suitColors[randomSuit],
    };
};

const changeRightCard = (rightCard) => {
    rightCardValue.forEach((element) => {
        element.textContent = rightCard.value;
        element.style.color = rightCard.color;
    });

    rightCardSuit.forEach((element) => {
        element.textContent = rightCard.suit;
        element.style.color = rightCard.color;
    });
};

const changeLeftCard = (leftCard) => {
    leftCardValue.forEach((element) => {
        element.textContent = leftCard.value;
        element.style.color = leftCard.color;
    });

    leftCardSuit.forEach((element) => {
        element.textContent = leftCard.suit;
        element.style.color = leftCard.color;
    });
};

// Event Listeners
restartButton.addEventListener("click", () => {
    score = 0;
    scoreHeading.textContent = `SCORE: ${score}`;

    higherButton.disabled = false;
    lowerButton.disabled = false;

    rightCardElement.style.backgroundColor = "skyblue";
    rightCardElement.childNodes.forEach((element) => {
        element.textContent = "";
        element.color = "white";
    });

    rightCard = generateCard();
    leftCard = generateCard();

    changeLeftCard(leftCard);
});

higherButton.addEventListener("click", () => {
    if (cardValues.indexOf(rightCard.value) <= cardValues.indexOf(leftCard.value)) {
        score = 0;
        scoreHeading.textContent = "You Lose!";

        higherButton.disabled = true;
        lowerButton.disabled = true;

        rightCardElement.style.backgroundColor = "white";
        changeRightCard(rightCard);
    } else {
        score++;
        scoreHeading.textContent = `SCORE: ${score}`;

        higherButton.disabled = true;
        lowerButton.disabled = true;

        rightCardElement.style.backgroundColor = "white";
        changeRightCard(rightCard);

        setTimeout(() => {
            leftCard = rightCard;
            changeLeftCard(leftCard);

            rightCard = generateCard();
            rightCardElement.style.backgroundColor = "skyblue";
            rightCardElement.childNodes.forEach((element) => {
                element.textContent = "";
                element.color = "white";
            });

            higherButton.disabled = false;
            lowerButton.disabled = false;
        }, 2000);
    }
});

lowerButton.addEventListener("click", () => {
    if (cardValues.indexOf(rightCard.value) >= cardValues.indexOf(leftCard.value)) {
        score = 0;
        scoreHeading.textContent = "You Lose!";

        higherButton.disabled = true;
        lowerButton.disabled = true;

        rightCardElement.style.backgroundColor = "white";
        changeRightCard(rightCard);
    } else {
        score++;
        scoreHeading.textContent = `SCORE: ${score}`;

        higherButton.disabled = true;
        lowerButton.disabled = true;

        rightCardElement.style.backgroundColor = "white";
        changeRightCard(rightCard);

        setTimeout(() => {
            leftCard = rightCard;
            changeLeftCard(leftCard);

            rightCard = generateCard();
            rightCardElement.style.backgroundColor = "skyblue";
            rightCardElement.childNodes.forEach((element) => {
                element.textContent = "";
                element.color = "white";
            });

            higherButton.disabled = false;
            lowerButton.disabled = false;
        }, 2000);
    }
});

// Generate Random Cards on Page Load
rightCardElement.style.backgroundColor = "skyblue";

let leftCard = generateCard();
let rightCard = generateCard();

changeLeftCard(leftCard);
