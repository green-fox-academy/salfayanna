'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

let canvasWidth = 600;
let canvasHeight = 400;
let lineNumber = 3;
let increaseX: number= 40;

function drawLine(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(canvasWidth / 2, canvasHeight / 2);
  ctx.stroke();
}

for (let i = 0; i < lineNumber; i++) {
  drawLine(100 + i * increaseX, 6);
 }
