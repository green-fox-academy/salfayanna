'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.

canvas.width
canvas.height

let sideX: number = 10;
let sideY: number = 10;
let startpointX: number = canvas.width / 2 - sideX / 2 ;
let startpointY: number = canvas.height / 2 - sideY / 2;

ctx.fillStyle = 'green';
ctx.fillRect(startpointX, startpointY, sideX, sideY);
