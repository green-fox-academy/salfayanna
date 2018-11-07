'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

let OfSquares: number = 19;
let squareX: number = 20;
let squareY: number = 20;
let dupl_C: number = 20;

function drawSquarePurple(x: number, y: number) {
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'purple';
  ctx.fillRect(x, y, squareX, squareY);
  ctx.strokeRect(x, y, squareX, squareY);
}

for (let i = 0; i < OfSquares; i++) {
  drawSquarePurple(0+ i * dupl_C, 0 + i * dupl_C)};