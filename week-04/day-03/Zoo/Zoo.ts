'use strict'

import { Mammal,Bird,Reptile } from "./animaltype-classes";
import { Animal } from "./animal-class";

let reptile = new Reptile("Crocodile", 3, 'female', 6);
let mammal = new Mammal("Koala", 4, 'female', 8);
let bird = new Bird("Parrot", 20, 'female', 10);

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());

console.log(reptile.getPet());
console.log(mammal.getPet());
console.log(bird.getPet());