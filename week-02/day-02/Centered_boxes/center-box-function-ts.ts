'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

canvas.height
canvas.width
let numberOfCenterSquare: number = 3;

function drawSquareBy(x: number) {
  ctx.strokeRect((canvas.width / 2) - (x / 2), (canvas.height / 2) - (x / 2), x, x);
}

for (let i = 1; i <= numberOfCenterSquare; i++) {
  drawSquareBy(50 * i);
}