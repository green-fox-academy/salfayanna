'use strict';
export { };

import { Car } from "./car";

export class Station {

  gasAmount: number;

  constructor(gasAmount: number) {
    this.gasAmount = gasAmount;
  }

  refill(car: Car){
    this.gasAmount -= car.capacity;
    car.gasAmount += car.capacity;
  }

}