'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

let side: number = 25;
let chessBoard_X: number = 0;
let chessBoard_Y: number = 0;

for (let i = 0; i < canvas.width / side; i++) {
  for (let j = 0; j < canvas.height / side; j++) {
    if ((i+j) % 2 === 0) {
      ctx.fillStyle = 'black';
      ctx.fillRect(i*side, j*side, side, side);
    }
  }
}
