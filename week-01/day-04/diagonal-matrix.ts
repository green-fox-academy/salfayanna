'use strict';
export { };

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let block = [];
let index: number = 0;
let zero: string = '0';
let one: string = '1';

function createMatrix(numOfrows: number) {
  for (index = 0; index <= numOfrows; index++) {
    block[index] = zero.repeat(numOfrows-index) + one + zero.repeat(index);
  }
  return block;
}

createMatrix(5).map(e => console.log(e));

