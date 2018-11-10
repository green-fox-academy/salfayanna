'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function drawTwoLines(startVertical: number, startHorizontalLeft: number, startHorizontalRight: number, color: string) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, startVertical);
  ctx.lineTo(startHorizontalLeft, canvas.height / 2);
  ctx.moveTo(canvas.width / 2, startVertical);
  ctx.lineTo(startHorizontalRight, canvas.height / 2);
  ctx.stroke();
}

function drawEnvelopeStar(stepFrequency: number, colorTop: string, colorBottom: string) {
  let maxWidth = canvas.width / 2;
  let maxWidth2 = canvas.width / 2;

  for (let i = 0; i < canvas.width / 2 / stepFrequency; i++) {
    drawTwoLines(i * stepFrequency, maxWidth, maxWidth2, colorTop);
    drawTwoLines(canvas.width - i * stepFrequency, maxWidth, maxWidth2, colorBottom);
    maxWidth += stepFrequency;
    maxWidth2 -= stepFrequency;
  }
}

drawEnvelopeStar(6, 'aquamarine', 'indianred' );





