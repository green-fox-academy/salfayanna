'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

function getRandomAmmount(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomPosition(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

for (let i = 0; i < getRandomAmmount(120000); i++) {
  ctx.fillStyle = `rgba(255, 255, 255, ${Math.random()})`;
  ctx.fillRect(getRandomPosition(canvas.width), getRandomPosition(canvas.height), 2, 2);
}