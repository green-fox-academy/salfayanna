'use strict';
export { };

import { Sharpie } from "../day-02/sharpie";

// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

class SharpieSet {

  listOfSharpie: Sharpie[] = [];

  constructor(list: Sharpie[] = []) {
    this.listOfSharpie = list;
  }

  countUseable() {
    for (let i: number = 0; i < this.listOfSharpie.length; i++) {
      if (this.listOfSharpie[i].inkAmount > 0) {
        console.log(`${this.listOfSharpie[i].color} is useable`);
      }
    }
  }

  removeTrash() {
    for (let i: number = 0; i < this.listOfSharpie.length; i++) {
      if (this.listOfSharpie[i].inkAmount === 0) {
        this.listOfSharpie.splice(i, 1);
      }
    }
  }
}

let sharpies: Sharpie[] = initializeSharpie();

function initializeSharpie(): Sharpie[] {
  return [
    new Sharpie('blue', 1),
    new Sharpie('black', 1, 0),
    new Sharpie('yellow', 1, 50),
    new Sharpie('orange', 1, 15),
    new Sharpie('pink', 1, 3),
    new Sharpie('violet', 1, 0),
    new Sharpie('purple', 1, 4),
    new Sharpie('turquoise', 1, 73),
    new Sharpie('darkblue', 1, 44),
    new Sharpie('brown', 1, 52),
  ];
}

let set = new SharpieSet(sharpies);
//set.removeTrash();
set.countUseable();
//console.log(set);