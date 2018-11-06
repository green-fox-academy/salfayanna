'use strict';
export { };

// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'
let missingPart: string = 'always takes longer than';

let splitedQuote: string[] = quote.split(' ');
console.log(splitedQuote);

let startPosition: number = splitedQuote.indexOf('you');
console.log(splitedQuote.indexOf('you'));

splitedQuote.splice(startPosition, 0, missingPart);
quote = splitedQuote.join(' ');

console.log(quote);