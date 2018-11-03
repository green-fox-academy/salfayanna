'use strict';
export { };

let lineCount: number = 6;
let empty = " "
let fill = '%'

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let row = 0; row < lineCount; row++) {
  if (row === 0 || row === lineCount - 1) {
    console.log(fill.repeat(lineCount));
  } else {
    console.log(fill + empty.repeat(lineCount - 2) + fill);
  }
}