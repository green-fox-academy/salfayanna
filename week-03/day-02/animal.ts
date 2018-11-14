'use strict';

export class Animal {
  hungerValue: number;
  thirstValue: number;

  constructor(hunger: number = 50, thirst: number = 50) {
    this.hungerValue = hunger;
    this.thirstValue = thirst;
  }
  canEat() {
    this.hungerValue -= 1;
  }

  canDrink() {
    this.thirstValue -= 1;
  }

  canPlay() {
    this.hungerValue += 1;
    this.thirstValue += 1;
  }
}

// let kiskutya = new Animal;
// kiskutya.canDrink();
// console.log(kiskutya.thirstValue);