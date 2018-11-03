'use strict';
export {};

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let rowOdd: string = ' %';
let rowEven: string = '% ';
let rowCount: number = 8;

for (let line: number = 0; line < rowCount; line++) {
  if( line % 2 === 0) {
    console.log(rowEven.repeat(rowCount / 2));
  } else {
    console.log(rowOdd.repeat(rowCount / 2));
  }
}