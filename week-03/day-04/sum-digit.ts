'use strict'
export { };
// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumDigit(number: number): number {
  if (number <= 1) {
    return number;
  } else {
    return (number % 10 + sumDigit(Math.floor(number / 10)));
  }
}
console.log(sumDigit(57));