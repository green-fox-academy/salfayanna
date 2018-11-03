'use strict';
export { };

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 6;
let empty = " "
let fill = '%'

for (let row = 0; row < lineCount; row++) {
  if (row === 0 || row === lineCount - 1) {
    console.log(fill.repeat(lineCount));
  } else {
    let strg: string = '';
    strg = fill + strg;

    for (let col = 1; col < lineCount - 1; col++) {
      if (col === row) {
        strg = strg + fill;
      } else {
        strg = strg + empty;
      }
    }

    strg = strg + fill;
    console.log(strg);
  }
}
