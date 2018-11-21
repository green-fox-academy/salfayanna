'use strict'

import { Animal } from "./animal-class";

class Mammal extends Animal {

  constructor(name: string, age: number, gender: string, mood: number) {
    super(name, age, gender, mood)
  }

  getName(): string {
return this.name;
  }

  breed(): string {
    return 'pushing miniature versions out';
  }
}

class Bird extends Animal {

  constructor(name: string, age: number, gender: string, mood: number) {
    super(name, age, gender, mood)
  }

  getName(): string {
return this.name;
  }

  breed(): string {
    return 'laying eggs';
  }
}

class Reptile extends Animal {

  constructor(name: string, age: number, gender: string, mood: number) {
    super(name, age, gender, mood)
  }

  getName(): string {
return this.name;
  }

  breed(): string {
    return 'laying eggs';
  }
}

export{Mammal,Bird,Reptile};