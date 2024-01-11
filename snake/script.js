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

const drawSnake = () => {
    snake.forEach((segment) => {
        ctx.fillStyle = `rgba(0, 255, 0, ${1 - (snake.indexOf(segment) / snake.length) * 0.5})`;
        ctx.fillRect(segment.x, segment.y, grid, grid);
    });
};

const drawFood = () => {
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, grid, grid);
};
