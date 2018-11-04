'use strict';
export { };

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let askCount = function () {
  let result: number;
  rl.question('Please enter count of numbers to work with: ', (count) => {
    if (count === '' || isNaN(count) || count < 0) {
      console.log('invalid');
      askCount();
    } else {
      console.log('valid');
      rl.close();
      count = result;
    }
  })
  return result;
};

let numCount: number = askCount();
