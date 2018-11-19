'use strict'
import { Plant } from "./Plant";
import { Tree } from "./tree";
import { Flower } from "./flower";

class Garden {
  listOfPlants: Plant[] = [];
  constructor(listOfPlants: Plant[]) {
    this.listOfPlants = listOfPlants;
  }

  giveWater(amountOfGivenWater: number, listOfPlants: number[]): void {
    let numberOfFlowers: number = 0;
    let numberOfTrees: number = 0;

    for (let i: number = 0; i < this.listOfPlants.length; i++) {
      if (this instanceof Tree) {
        numberOfTrees++;
      } else {
        numberOfFlowers++;
      }
    }

//     listOfPlants.forEach(function(element, index,) => {
// this.listOfPlants.currentWaterAmount < 5
    }
  }
}


// if (this instanceof Tree && listOfPlants[inddex].getWaterNeeds() < 10) {
//   plant.currentWaterAmount += (amountOfGivenWater / numberOfTrees) * 0.4;
//   return console.log(`The ${plant.getColor()} Tree needs water`);
// } else if (this instanceof Flower && plant.getWaterNeeds() < 5) {
//   plant.currentWaterAmount += (amountOfGivenWater / numberOfFlowers) * 0.75;
//   return console.log(`The ${plant.getColor()} Flower needs water`);
// } else {
//   console.log(`The ${plant.getColor} ${} doesn't need water`);
// }