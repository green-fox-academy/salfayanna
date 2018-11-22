// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, 
// and numbers as values that shows how many occurrences there are.
// Create a test for that.

export function dictionary(string: string): any {
  let letterArray: string[] = string.split(''), map = {};

  letterArray.join('').split('').forEach(e => map[e] = (map[e] || 0) + 1);
  return map;
}

console.log(dictionary('ahsfczhavchascvha'));

