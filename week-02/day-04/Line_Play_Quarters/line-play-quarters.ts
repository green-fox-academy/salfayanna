'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
//1 XP Divide the canvas into 4/16/64 equal parts and repeat the line play pattern in each quarter

let freq2: number = 10;

let startNumbX2: number = 0;
let StartNumbY2: number = 0;

function drawthis2(a: number, b: number, c: number) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(a, b);
  ctx.lineTo(b ,c);
  ctx.stroke();
}

function drawthisPurple2(a: number, b: number, c: number) {
  ctx.strokeStyle = "purple";
  ctx.beginPath();
  ctx.moveTo(b, a);
  ctx.lineTo(c, b);
  ctx.stroke();}

  function drawthis3(a: number, b: number, c: number) {
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(a , b + canvas.height / 2);
    ctx.lineTo(b + canvas.height / 2,c);
    ctx.stroke();
  }
  
  function drawthisPurple3(a: number, b: number, c: number) {
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.moveTo(b + canvas.width / 2, a);
    ctx.lineTo(c, b + canvas.width / 2);
    ctx.stroke();}

for (let i: number = 0; i <= canvas.width / 20; i++) {
  drawthis2(startNumbX2, StartNumbY2, canvas.width / 2);
  drawthisPurple2(startNumbX2, StartNumbY2, canvas.width /2);
  StartNumbY2 += freq2;
}

for (let i: number = 0; i <= canvas.width / 20; i++) {
  drawthis2(startNumbX2 + canvas.width / 2, StartNumbY2, canvas.width);
  drawthisPurple2(startNumbX2 + canvas.width / 2, StartNumbY2, canvas.width);
  StartNumbY2 += freq2;
}

