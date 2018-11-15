'use strict'
export { };
// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function numberAdder(number: number): number {
  if (number <= 1) {
    console.log(number);
    return number;
  } else {
    console.log(numberAdder(number - 1) + number);
    return numberAdder(number - 1) + number;
  }
}

console.log(numberAdder(4));