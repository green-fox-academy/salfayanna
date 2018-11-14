'use strict';
export { };
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
let doIndex: number = words.indexOf('do');
let cannotIndex: number = words.indexOf('cannot');

function quoteSwap(array: string[]): string {
  let temp: string = '';
  temp = words[doIndex];
  words[doIndex] = words[cannotIndex];
  words[cannotIndex] = temp;
  return array.join(' ');
}

console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."

//export = quoteSwap;