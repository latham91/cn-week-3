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
const generateCard = () => {
    // This function just creates a new random card and returns an object with the card's suit, value, and color.
    const randomSuit = Math.floor(Math.random() * 4); // chooses a random suit.
    const randomValue = Math.floor(Math.random() * 12); // chooses a random card value

    return {
        suit: suits[randomSuit],
        value: cardValues[randomValue],
        color: suitColors[randomSuit],
    };
};

const changeRightCard = (rightCard) => {
    // This changes the right card styles to the values of rightCard object.
    rightCardValue.forEach((element) => {
        // this loops through the right card value and changes the styles and text content.
        element.textContent = rightCard.value;
        element.style.color = rightCard.color;
    });

    rightCardSuit.forEach((element) => {
        // this loops through the right card suit and changes the styles and text content.
        element.textContent = rightCard.suit;
        element.style.color = rightCard.color;
    });
};

const changeLeftCard = (leftCard) => {
    // This changes the left card styles to the values of leftCard object.
    leftCardValue.forEach((element) => {
        // this loops through the left card value and changes the styles and text content.
        element.textContent = leftCard.value;
        element.style.color = leftCard.color;
    });

    leftCardSuit.forEach((element) => {
        // this loops through the left card suit and changes the styles and text content.
        element.textContent = leftCard.suit;
        element.style.color = leftCard.color;
    });
};

const swapCardsTimeout = (timer) => {
    return setTimeout(() => {
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
    }, timer);
};

// Event Listeners
restartButton.addEventListener("click", () => {
    // Reset the score and change the right card back to default.
    score = 0;
    scoreHeading.textContent = `SCORE: ${score}`;

    // Disable the buttons for 2 seconds to prevent spamming.
    higherButton.disabled = false;
    lowerButton.disabled = false;

    // Changes the styling of the right card.
    rightCardElement.style.backgroundColor = "skyblue";
    rightCardElement.childNodes.forEach((element) => {
        element.textContent = "";
        element.color = "white";
    });

    // Generate a new left and right card.
    rightCard = generateCard();
    leftCard = generateCard();

    // Change the left card to the new left card.
    changeLeftCard(leftCard);
});

higherButton.addEventListener("click", () => {
    // If both cards are the same, just change the right card and reset the buttons.
    if (cardValues.indexOf(rightCard.value) === cardValues.indexOf(leftCard.value)) {
        higherButton.disabled = true;
        lowerButton.disabled = true;

        rightCardElement.style.backgroundColor = "white";
        changeRightCard(rightCard);

        // This timeout function changes the left card to what was the right card, and generates a new right card.
        // It then changes the right cards styling to look like a card back.
        // You can pass the time in ms as an argument to the function.
        swapCardsTimeout(2000);
    }

    if (cardValues.indexOf(rightCard.value) < cardValues.indexOf(leftCard.value)) {
        // If right is lower than left, lose the game. and reset the score.
        score = 0;
        scoreHeading.textContent = "You Lose!";

        higherButton.disabled = true;
        lowerButton.disabled = true;

        rightCardElement.style.backgroundColor = "white";
        changeRightCard(rightCard);
    } else {
        // If right is higher than left, add 1 to the score and change the cards.
        score++;
        scoreHeading.textContent = `SCORE: ${score}`;

        higherButton.disabled = true;
        lowerButton.disabled = true;

        rightCardElement.style.backgroundColor = "white";
        changeRightCard(rightCard);

        // This timeout changes the left card to what was the right card, and generates a new right card.
        // It then changes the right cards styling to look like a card back.
        // You can pass the time in ms as an argument to the function.
        swapCardsTimeout(2000);
    }
});

lowerButton.addEventListener("click", () => {
    // If both cards are the same, just change the right card and reset the buttons.
    if (cardValues.indexOf(rightCard.value) === cardValues.indexOf(leftCard.value)) {
        higherButton.disabled = true;
        lowerButton.disabled = true;

        rightCardElement.style.backgroundColor = "white";
        changeRightCard(rightCard);

        // This timeout changes the left card to what was the right card, and generates a new right card.
        // It then changes the right cards styling to look like a card back.
        // You can pass the time in ms as an argument to the function.
        swapCardsTimeout(2000);
    }

    if (cardValues.indexOf(rightCard.value) > cardValues.indexOf(leftCard.value)) {
        // If right is higher than left, lose the game. and reset the score.
        score = 0;
        scoreHeading.textContent = "You Lose!";

        higherButton.disabled = true;
        lowerButton.disabled = true;

        rightCardElement.style.backgroundColor = "white";
        changeRightCard(rightCard);
    } else {
        // If right is lower than left, add 1 to the score and change the cards.
        score++;
        scoreHeading.textContent = `SCORE: ${score}`;

        higherButton.disabled = true;
        lowerButton.disabled = true;

        rightCardElement.style.backgroundColor = "white";
        changeRightCard(rightCard);

        // This timeout changes the left card to what was the right card, and generates a new right card.
        // It then changes the right cards styling to look like a card back.
        // You can pass the time in ms as an argument to the function.
        swapCardsTimeout(2000);
    }
});

// Generate Random Cards on Page Load
rightCardElement.style.backgroundColor = "skyblue";

let leftCard = generateCard();
let rightCard = generateCard();

// Change the left card to the new left card but leaves the right card as a card back.
changeLeftCard(leftCard);
