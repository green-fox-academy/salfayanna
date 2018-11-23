'use strict'
import { Plant } from "./Plant";
import { Tree } from "./tree";
import { Flower } from "./flower";

class Garden {
  private plantList: Plant[] = [];
  constructor(plantList: Plant[]) {
    this.plantList = plantList;
  }

  giveWater(givenWater: number) {
    console.log(`Watering with ${givenWater}`);
    this.plantList.forEach(element => {
            if (element.getWaterNeeds()) {
        console.log(`The ${element.getColor()} ${element.getType()} needs water.`)
        element.setWaterLevel((givenWater / this.plantList.length) * element.getWaterMiltiplier());
      } else {
        console.log(`The ${element.getColor()} ${element.getType()} doesn't need water.`);
      }
    });
    console.log('\r\n');
  }
}

let blue = new Flower('blue', 4);
let yellow = new Flower('yellow', 3.2);
let orange = new Tree('orange', 9);
let purple = new Tree('purple', 7.3);

let plants: Plant[] = [blue, yellow, orange, purple];

let garden = new Garden(plants);
//console.log(garden);
garden.giveWater(40);
garden.giveWater(70);