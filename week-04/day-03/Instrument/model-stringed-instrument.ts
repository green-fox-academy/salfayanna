'use strict'

import { Instrument } from "./instrument-class";
import { StringedInstrument } from "./stringedinstrument-class";

class ElectricGuitar extends StringedInstrument {


  constructor(numberOfStrings: number = 6, name: string = 'Electric Guitar') {
    super(numberOfStrings, name)
  }

  sound(): string {
    return 'Twang';
  }

  play(): void {
    return console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }

}

class BassGuitar extends StringedInstrument {


  constructor(numberOfStrings: number = 4, name: string = 'Bass Guitar') {
    super(numberOfStrings, name)
  }

  sound(): string {
    return 'Duum-duum-duum';
  }

  play(): void {
    return console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }

}

class Violin extends StringedInstrument {


  constructor(numberOfStrings: number = 4, name: string = 'Violin') {
    super(numberOfStrings, name)
  }

  sound(): string {
    return 'Screech';
  }

  play(): void {
    return console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }

}

export { ElectricGuitar, BassGuitar, Violin };