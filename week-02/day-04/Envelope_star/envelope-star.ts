'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let stepFrequency = 10;
let maxWidth = canvas.width / 2;
let maxWidth2 = canvas.width / 2;

function drawEnvelopeStar(startVertical: number, startHorizontalLeft: number, startHorizontalRight: number, color: string) {
ctx.strokeStyle = color;
ctx.beginPath();
ctx.moveTo(canvas.width / 2, startVertical);
ctx.lineTo(startHorizontalLeft, canvas.height / 2);
ctx.moveTo(canvas.width / 2, startVertical);
ctx.lineTo(startHorizontalRight, canvas.height / 2);
ctx.stroke();
}


for (let i = 0; i < canvas.width / 2 / stepFrequency; i++) {
  drawEnvelopeStar(i * stepFrequency, maxWidth, maxWidth2, 'purple')
  maxWidth += stepFrequency;
  maxWidth2 -= stepFrequency;
}

