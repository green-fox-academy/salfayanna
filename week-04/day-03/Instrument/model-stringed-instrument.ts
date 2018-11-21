'use strict'

import { Instrument } from "./instrument-class";
import { StringedInstrument } from "./stringedinstrument-class";

class ElectricGuitar extends StringedInstrument {


  constructor(numberOfStrings: number = 6, name: string) {
    super(numberOfStrings, name)
  }
}

class BassGuitar extends StringedInstrument {


  constructor(numberOfStrings: number = 4, name: string) {
    super(numberOfStrings, name)
  }
}

class Violin extends StringedInstrument {


  constructor(numberOfStrings: number = 4, name: string) {
    super(numberOfStrings, name)
  }
}
export {ElectricGuitar, BassGuitar, Violin};