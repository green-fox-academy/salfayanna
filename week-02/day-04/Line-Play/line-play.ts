'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
//1 XP Divide the canvas into 4/16/64 equal parts and repeat the line play pattern in each quarter

let freq: number = 10;

let startNumbX: number = 0;
let StartNumbY: number = 0;

function drawthis(a: number, b: number, c: number) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(a, b);
  ctx.lineTo(b, c);
  ctx.stroke();
}

function drawthisPurple(a: number, b: number, c: number) {
  ctx.strokeStyle = "purple";
  ctx.beginPath();
  ctx.moveTo(b, a);
  ctx.lineTo(c, b);
  ctx.stroke();}

for (let i: number = 0; i <= canvas.width; i++) {
  drawthis(startNumbX, StartNumbY, canvas.width);
  drawthisPurple(startNumbX, StartNumbY, canvas.width);
  StartNumbY += freq;
}
