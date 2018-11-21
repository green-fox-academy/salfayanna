'use strict'

import { Instrument } from "./instrument-class";

export abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;

  constructor(numberOfStrings: number, name: string) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }

  abstract play(): void;

  abstract sound(): void;
}
