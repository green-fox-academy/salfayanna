'use strict';
export { };

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];
let pairs: string[] = [];

function makingMatches(array1: string[], array2: string[]) {
  let longerArray;
  if (array1.length < array2.length) {
    longerArray = array2.length;
  } else {
    longerArray = array1.length;
  }
  for (let i = 0; i < longerArray; i++) {
    let newPairs: string = array1[i] + ' + ' + array2[i];
    pairs.push(newPairs);
    if (array1[i] === undefined) {
      pairs.push('Jeff is lonely');
    }
  }
  pairs.splice(pairs.length - 2, 1);
  return pairs;
}
console.log(makingMatches(girls, boys));

export = makingMatches;