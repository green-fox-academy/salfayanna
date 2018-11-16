'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let width: number = canvas.width;
let height: number = canvas.height;

ctx.translate(width / 2, height / 2);

let points: any[] = [
  { x: 0, y: -300 },
  { x: -300, y: 300 },
  { x: 300, y: 300 }
];

let secondPoints: any[] = [
  {
    x: (points[0].x + points[1].x) / 2,
    y: (points[0].y + points[1].y) / 2
  },
  {
    x: (points[1].x + points[2].x) / 2,
    y: (points[1].y + points[2].y) / 2
  },
  {
    x: (points[2].x + points[0].x) / 2,
    y: (points[2].y + points[0].y) / 2
  }
]

function drawTriangle(p0 , p1 , p2 ) {
  ctx.beginPath()
  ctx.moveTo(points[0].x, points[0].y)
  ctx.lineTo(points[1].x, points[1].y)
  ctx.lineTo(points[2].x, points[2].y)
  ctx.lineTo(points[0].x, points[0].y)
  ctx.fill()
}


//drawTriangle(points[0], points[1], points[2]);

function drawSecondTriangle(p0 , p1 , p2, max){
  drawTriangle(points[0],secondPoints[0], secondPoints[2], max- 1);
  drawTriangle(secondPoints[0], points[1], secondPoints[2], max - 1);
  drawTriangle(secondPoints[2], secondPoints[1], points[2]), max - 1;
}






















// ctx.fillStyle = 'yellow';
// ctx.fillRect(0, 0, 600, 600);

// function draw(x: number, y: number, size: number, i: number): void {
//   // Base horizont
//   ctx.strokeRect(x, y + size / 3, size, size / 3);
//   // Base vertical
//   ctx.strokeRect(x + size / 3, y, size / 3, size);

//   if (i > 1) {
//     // Left
//     draw(x, y + size / 3, size / 3, i - 1);
//     // Top
//     draw(x + size / 3, y, size / 3, i - 1);
//     // Right
//     draw(x + (size * 2) / 3, y + size / 3, size / 3, i - 1);
//     // Bot
//     draw(x + size / 3, y + (size * 2) / 3, size / 3, i - 1);
//   }
// }

// draw(0, 0, 600, 5);