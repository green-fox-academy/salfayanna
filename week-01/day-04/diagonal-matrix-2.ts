'use strict';
export { };

let block: number[][] = [];

function createMatrix(numOfrows: number) {
  for (let row = 0; row <= numOfrows; row++) {
    let arr: number[] = [];
    for (let col = 0; col <= numOfrows; col++) {
      if (col === numOfrows - row) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }
    block[row] = arr;
  }
  return block;
}

console.log(createMatrix(5));

