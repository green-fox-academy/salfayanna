'use strict'

// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

export function anagram(string: string, secondString: string): boolean {
  return string.toLowerCase().split('').sort().join('') === secondString.toLowerCase().split('').sort().join('');
}

console.log(anagram('dog', 'god'));