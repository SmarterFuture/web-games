
const width = 20;
const height = 20;

const CELL_SIZE = 40;
const SNAKE = "#FFFFFF";
const EMPTY = "#000000";

const canvas = document.getElementById("game-canvas");
canvas.width = CELL_SIZE * width;
canvas.height = CELL_SIZE * height;

const ctx = canvas.getContext("2d");

function drawCells(x, y, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(
        x * width,
        y * height,
        (x + 1) * width,
        (y + 1) * height
    );
    ctx.stroke;
}

