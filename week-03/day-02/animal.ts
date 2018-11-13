'use strict';
export { };

class Animal {
  hungerValue: number = 50;
  thirstValue: number = 50;

  constructor() {


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

let kiskutya = new Animal;
kiskutya.canDrink();
console.log(kiskutya.thirstValue);