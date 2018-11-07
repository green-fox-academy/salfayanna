'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

let Start_X: number = 0;
let Start_Y: number = 0;
let X: number = 10;
let Y: number = 10;
let numOfSqurs: number = 6;
let V = 0;
let Z = 0;

for (let i = 0; i < numOfSqurs; i++) {
    ctx.fillStyle ='purple';
    ctx.fillRect(Start_X + V, Start_Y + Z, (i+1)*X, (i+1)*Y);
    ctx.strokeStyle ='black';
    ctx.strokeRect(Start_X + V, Start_Y + Z, (i+1)*X, (i+1)*Y);
    V = V + (i+1)*X;
    Z = Z + (i+1)*Y;
  }