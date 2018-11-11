'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

async function delay(milliseconds: number) {
  return new Promise<void>(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

function drawMainLines(firstPosition: number, secondPosition: number, bottomColor: string, topColor: string, step: number, tileSize: number) {
  ctx.strokeStyle = bottomColor;
  ctx.beginPath();
  ctx.moveTo(firstPosition, secondPosition + step);
  ctx.lineTo(firstPosition + step, secondPosition + tileSize);
  ctx.stroke();
  ctx.strokeStyle = topColor;
  ctx.beginPath();
  ctx.moveTo(firstPosition + step, secondPosition);
  ctx.lineTo(firstPosition + tileSize, secondPosition + step);
  ctx.stroke();
}

async function drawTile(bottomColor: string, topColor: string, frequency: number, tileSize: number, xPos: number, yPos: number, tileCount: number) {
  let lineCount: number = canvas.width / tileCount / frequency;

  for (let k: number = 0; k <= lineCount; k++) {
    drawMainLines(xPos, yPos, bottomColor, topColor, k * frequency, tileSize);
    await delay(50);
  }
}


function drawMosaic(tileCount: number, bottomColor: string, topColor: string, frequency: number) {
  let tileSize: number = canvas.width / tileCount;

  for (let i: number = 0; i < tileCount; i++) {
    for (let j: number = 0; j < tileCount; j++) {
      drawTile(bottomColor, topColor, frequency, tileSize, tileSize * i, tileSize * j, tileCount);
    }
  }
}

drawMosaic(10, 'orange', 'violet', 5);