'use strict';
export { };

import { Animal } from "../day-02/animal";

// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

class Farm {

  listOfAnimals: Animal[] = [];
  slots: number;

  constructor(list: Animal[], freeSpace: number) {
    this.listOfAnimals = list;
    this.slots = freeSpace;
  }

  // breed(animal: Animal) {
  //   if (this.listOfAnimals.length < this.slots) {
  //     this.listOfAnimals.push(animal);
  //     this.slots--;
  //   }
  //   return this.listOfAnimals;
  // }
  breed() {
    if (this.listOfAnimals.length < this.slots) {
      let newAnimal = new Animal();
      this.listOfAnimals.push(newAnimal);
      this.slots--;
    }
    return this.listOfAnimals;
  }

  slaughter() {
    let hungerValuesOfAnimals: number[] = [];
    for (let i: number = 0; i < this.listOfAnimals.length; i++) {
      hungerValuesOfAnimals.push(this.listOfAnimals[i].hungerValue);
    }
    let leastHungryAnimalIndex: number = hungerValuesOfAnimals.indexOf(Math.min(...hungerValuesOfAnimals));
    this.listOfAnimals.splice(leastHungryAnimalIndex, 1);
    this.slots++;
    return this.listOfAnimals;
  }
}

function initializeAnimals(): Animal[] {
  return [
      new Animal(),
      new Animal(25, 30),
      new Animal(40, 1),
      new Animal(23, 12),
      new Animal(7)
  ];
}
 let animals: Animal[] = initializeAnimals();
 let bambi: Animal = new Animal(14,5);

 let aFarmAholElunk = new Farm(animals, 20);
//  console.log(aFarmAholElunk);
//  aFarmAholElunk.breed(bambi);
console.log(aFarmAholElunk.breed());
//  console.log(aFarmAholElunk);
// console.log(aFarmAholElunk.slaughter());
 //console.log(aFarmAholElunk);