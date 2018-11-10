'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
//1 XP Divide the canvas into 4/16/64 equal parts and repeat the line play pattern in each quarter

let freq: number = 10;

let startNumbX: number = 0;
let StartNumbY: number = 0;

function drawthis(startPos: number, endPos: number, maxPos: number, colorBottom: string, colorTop: string) {
  ctx.strokeStyle = colorBottom;
  ctx.beginPath();
  ctx.moveTo(startPos, endPos);
  ctx.lineTo(endPos, maxPos);
  ctx.stroke();
  ctx.strokeStyle = colorTop;
  ctx.beginPath();
  ctx.moveTo(endPos, startPos);
  ctx.lineTo(maxPos, endPos);
  ctx.stroke();
}

for (let i: number = 0; i <= canvas.width / freq; i++) {
  drawthis(startNumbX, StartNumbY, canvas.width, 'lime', 'turquoise');
  StartNumbY += freq;
}
