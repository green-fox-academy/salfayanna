'use strict'

import { Flyable } from "./interface";
import { Vehicle } from "./vehicle";

class Helikopter extends Vehicle implements Flyable {

  constructor(type: string, color: string, gasAmount: number) {
    super(type, color, gasAmount);
  }

  land(): void {

  }

  fly(): void {

  }

  takeOff(): void {

  }

}