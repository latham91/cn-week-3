const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const grid = 40; // The size of each grid square
canvas.height = 32 * grid; // 32 grid squares high
canvas.width = 32 * grid; // 32 grid squares wide

// This is the snake object which will contain the x and y coordinates of each segment of the snake.
const snake = [
    {
        // This is the head of the snake.
        x: 16 * grid,
        y: 16 * grid,
    },
];

// This is the food object
// This has an x and y coordinate which is random.
let food = {
    x: Math.floor(Math.random() * 32) * grid,
    y: Math.floor(Math.random() * 32) * grid,
};

// global variables
let score = 0;
let direction = "up";

// FUNCTIONS //
const drawSnake = () => {
    // This function draws the snake onto the canvas element.
    snake.forEach((segment) => {
        ctx.fillStyle = `rgba(0, 255, 0, ${1 - (snake.indexOf(segment) / snake.length) * 0.5})`;
        ctx.fillRect(segment.x, segment.y, grid, grid);
    });
};

const drawFood = () => {
    // This function draws the food onto the canvas element.
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, grid, grid);
};

const drawScore = () => {
    // This function draws the score onto the canvas element.
    ctx.fillStyle = "black";
    ctx.font = "40px Monospace";
    ctx.fillText(`Score: ${score}`, 32, 64);
};

const moveSnake = () => {
    // This function has the snake movement logic.
    const head = {
        x: snake[0].x,
        y: snake[0].y,
    };

    // This is the movement of the snake
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
    // This function draws the game over screen.
    ctx.fillStyle = "black";
    ctx.font = "40px Monospace";

    // Fill in center of grid
    ctx.textAlign = "center";
    ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2 - 40);
    ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2);
    ctx.fillText("Press R to restart", canvas.width / 2, canvas.height / 2 + 80);
};

const gameOver = () => {
    // This function checks if the lose conditions are met.
    if (snake[0].x < 0 || snake[0].x >= canvas.width || snake[0].y < 0 || snake[0].y >= canvas.height) {
        // If the snake goes out of bounds
        drawRestart();
        return true;
    }

    for (let i = 1; i < snake.length; i++) {
        // If the snake hits itself
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            drawRestart();
            return true;
        }
    }

    return false;
};

const gameLoop = () => {
    // This is the main game loop.
    if (gameOver()) {
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawSnake();
    drawFood();
    drawScore();
    moveSnake();

    setTimeout(gameLoop, 100); // The timer fires the gameLoop function every 100ms.
};

gameLoop(); // Initial call to the game loop function.

// Keydown events for the arrow keys and WASD keys.
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" || (event.keyCode === 87 && direction != "down")) {
        direction = "up";
    } else if (event.key === "ArrowDown" || (event.keyCode === 83 && direction != "up")) {
        direction = "down";
    } else if (event.key === "ArrowLeft" || (event.keyCode === 65 && direction != "right")) {
        direction = "left";
    } else if (event.key === "ArrowRight" || (event.keyCode === 68 && direction != "left")) {
        direction = "right";
    } else if (event.key === "r" || event.keyCode === 82) {
        location.reload();
    }
});
