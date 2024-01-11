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

const drawScore = () => {
    ctx.fillStyle = "black";
    ctx.font = "40px Monospace";
    ctx.fillText(`Score: ${score}`, 32, 64);
};

const moveSnake = () => {
    const head = {
        x: snake[0].x,
        y: snake[0].y,
    };

    // This is the movement of the snake. cant move backwards.
    if (direction === "up") {
        head.y -= grid;
    } else if (direction === "down") {
        head.y += grid;
    } else if (direction === "left") {
        head.x -= grid;
    } else if (direction === "right") {
        head.x += grid;
    }

    snake.unshift(head);

    if (snake[0].x === food.x && snake[0].y === food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * 32) * grid,
            y: Math.floor(Math.random() * 32) * grid,
        };
    } else {
        snake.pop();
    }
};

const drawRestart = () => {
    ctx.fillStyle = "black";
    ctx.font = "40px Monospace";
    // Fill in center of grid
    ctx.fillText("Game Over!", 32 * 16, 32 * 16);
    ctx.fillText(`Score: ${score}`, 32 * 16, 32 * 18);
    ctx.fillText("Press R to restart", 32 * 13, 32 * 20);
};

const gameOver = () => {
    if (snake[0].x < 0 || snake[0].x >= canvas.width || snake[0].y < 0 || snake[0].y >= canvas.height) {
        drawRestart();
        return true;
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            drawRestart();
            return true;
        }
    }

    return false;
};

const gameLoop = () => {
    if (gameOver()) {
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawSnake();
    drawFood();
    drawScore();
    moveSnake();

    setTimeout(gameLoop, 100);
};

gameLoop();

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" || event.keyCode === 87) {
        direction = "up";
    } else if (event.key === "ArrowDown" || event.keyCode === 83) {
        direction = "down";
    } else if (event.key === "ArrowLeft" || event.keyCode === 65) {
        direction = "left";
    } else if (event.key === "ArrowRight" || event.keyCode === 68) {
        direction = "right";
    } else if (event.key === "r" || event.keyCode === 82) {
        location.reload();
    }
});
