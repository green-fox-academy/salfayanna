'use strict';
export { };

// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"

let missingPlanet: string = 'Saturn';
function putSaturn(array: string[]): string[] {
  array.splice(5, 0, missingPlanet);
  return array;
}

console.log(putSaturn(planetList));

export = putSaturn;