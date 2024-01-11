const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const grid = 40;
canvas.height = 32 * grid;
canvas.width = 32 * grid;

const snake = [
    {
        // This is the head of the snake.
        x: 16 * grid,
        y: 16 * grid,
    },
];

// This is the food.
let food = {
    x: Math.floor(Math.random() * 32) * grid,
    y: Math.floor(Math.random() * 32) * grid,
};

let score = 0;
let direction = "up";
