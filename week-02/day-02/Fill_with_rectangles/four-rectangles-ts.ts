'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let startX: number = 10;
let startY: number = 10;
let side_X: number = 10;
let side_Y: number = 10;
let duplication: number = 20;
let numberOf: number = 4;

for (let i = 0; i < numberOf; i++) {
  for(let j = 0; j <= 255; j++) {
    ctx.fillStyle = `rgb(0, 0, ${(255 / 4) * i}`;
    ctx.fillRect(startX + i * duplication, startY + i * duplication, side_X + i* duplication, side_Y + i * duplication);
  }
}
