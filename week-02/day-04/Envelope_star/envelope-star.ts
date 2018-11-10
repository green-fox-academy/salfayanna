'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let stepFrequency = 10;
let maxHeight = canvas.height / 2;
let maxHeight2 = canvas.height / 2;

function drawEnvelopeStar(startHorizontal: number, startVertivalUp: number, startVerticalDown: number, color: string) {
ctx.strokeStyle = color;
ctx.beginPath();
ctx.moveTo(startHorizontal, canvas.height / 2);
ctx.lineTo(canvas.width / 2, startVertivalUp);
ctx.moveTo(startHorizontal, canvas.height / 2);
ctx.lineTo(canvas.width / 2, startVerticalDown);
ctx.stroke();
}


for (let i = 0; i < canvas.height / 2 / stepFrequency; i++) {
  drawEnvelopeStar(i * stepFrequency, maxHeight, maxHeight2, 'purple')
  maxHeight += stepFrequency;
  maxHeight2 -= stepFrequency;
}

// for (let i = 0; i < canvas.height / 2 / stepFrequency; i++) {
//   ctx.beginPath();
//   ctx.moveTo(0, canvas.height / 2);
//   ctx.lineTo(canvas.width / 2, maxHeight2);
//   ctx.moveTo(0, canvas.height / 2);
//   ctx.lineTo(canvas.width / 2, maxHeight);
//   ctx.stroke();
//   maxHeight -= stepFrequency;
//   maxHeight2 += stepFrequency;
// }
