'use strict';
export { };
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
let a: number = words.indexOf('do');
let b: number = words.indexOf('cannot');

words[a];
words[b];
let z;

function quoteSwap(array: string[]) {
  z = words[a];
  words[a] = words[b];
  words[b] = z;
  return array.join(' ');
}

console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."

//export = quoteSwap;