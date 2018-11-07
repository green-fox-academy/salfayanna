'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

//ctx.strokeStyle = "green";

function drawStrokes(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(canvas.width / 2, canvas.height / 2);
  ctx.stroke();
}

for (let i = 0; i <= canvas.width; i+=20) {
  for (let j = 0; j <= canvas.height; j+=20) {
    if (i === 0 || j === 0 || i === canvas.width || j === canvas.height ) {
      drawStrokes(i, j);
    }
  }
}