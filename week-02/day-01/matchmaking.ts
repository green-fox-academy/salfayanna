'use strict';
export { };

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];
let pairs: string[] = [];

function makingMatches(girls: string[], boys: string[]): string[] {
  let longerArray: number = 0;
  if (girls.length < boys.length) {
    longerArray = boys.length;
  } else {
    longerArray = girls.length;
  }
  for (let i = 0; i < longerArray; i++) {
    let newPairs: string = `${girls[i]} + ${boys[i]}`;
    pairs.push(newPairs);
    if (girls[i] === undefined) {
      pairs.push('Jeff is lonely');
    }
  }
  pairs.splice(pairs.length - 2, 1);
  return pairs;
}
console.log(makingMatches(girls, boys));

export = makingMatches;