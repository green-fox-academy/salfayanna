import { stringify } from "querystring";

'use strict';
export { };

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function checkNumber(array: any[], b: any) {
  if (array.includes(b)) {
    return 'Hoorray';
  } else {
    return 'Noooooo';
  }
}

function containsSeven(array: any[]) {
  if (array.indexOf(parseInt('Seven')) === -1) {
    return 'Noooooo'
  }
}

console.log(containsSeven(numbers));
console.log(checkNumber(numbers, 7));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

export = containsSeven;