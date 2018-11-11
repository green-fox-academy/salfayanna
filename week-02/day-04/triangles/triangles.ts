'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let triangleBottom: number = canvas.height - 100;
let triangleHeight: number = (Math.sqrt(3) / 2) * canvas.width;
let triangleMax: number = triangleBottom - triangleHeight;
let triangleMidPointX: number = (0 + canvas.width / 2 + canvas.width) / 3;
let triangleMidPointY: number = (triangleBottom * 2 + triangleMax) / 3;

function drawLines(x1, x2, y) {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, y);
  ctx.lineTo(x1, y);
  console.log(canvas.width / 2, y, x1, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, y);
  ctx.lineTo(x2, y);
  ctx.stroke();
}

function drawPascalsTriangle(triangleCount: number) {
  for (let i: number = 0; i < 3; i++) {
    let startXPosLeft: number = canvas.width / 2;
    let startXPosRight: number = canvas.width / 2;
    let triangleSize: number = canvas.width / triangleCount / 2;

    for (let j: number = 0; j <= triangleCount; j++) {
      drawLines(startXPosLeft, startXPosRight, triangleMax + j * (triangleHeight / triangleCount));
      startXPosLeft -= triangleSize;
      startXPosRight += triangleSize;
    }

    ctx.translate(triangleMidPointX, triangleMidPointY);
    ctx.rotate(120 * Math.PI / 180);
    ctx.translate(triangleMidPointX * -1, triangleMidPointY * -1);
  }
}

drawPascalsTriangle(10);
