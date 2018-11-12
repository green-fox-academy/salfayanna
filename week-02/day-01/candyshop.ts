'use strict';
export { };

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"
let candies: string[] = [];

function sweets(list: string[]) {
  list.forEach(function (element) {
    if (typeof element === 'string') {
      candies.push(element);
    }
   if ( typeof element === 'number') {
     candies.push('Croissant')
   }
   if (typeof element === 'boolean') {
     candies.push('Ice cream')
   }
  })
  return candies
}
sweets(shopItems);
console.log(candies);

export = sweets;