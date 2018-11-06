'use strict';
export { };

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];
let animals: string[] = [];

function appendA(list: string[]) {
  list.forEach(function (item, index, array) {
    animals.push(item + 'a');
  })
  return animals
}


console.log(appendA(far));

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'

export = appendA;