'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

let numberOfSquares: number = 3;
let squareSideX: number = 50;
let squareSideY: number = 50;
let dupl: number = 60;

function drawSquare(x: number, y: number) {
  ctx.fillRect(x, y, squareSideX, squareSideY);
}

for (let i = 0; i < numberOfSquares; i++) {
  drawSquare(30 + i * dupl, 40 + i * dupl);
}