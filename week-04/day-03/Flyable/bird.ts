'use strict'

import { Animal } from "../Zoo/animal-class";
import { Flyable } from "./interface";

class Bird extends Animal implements Flyable{

  constructor(name: string, age: number, gender: string, mood: number) {
    super(name, age, gender, mood)
  }

  getName(): string {
return this.name;
  }

  breed(): string {
    return 'laying eggs';
  }

  land(): void{

  }

  fly(): void{

  }

  takeOff(): void{
    
  }
}