'use strict';
export { };

import { Car } from "./car";

export class Station {

  gasAmount: number;

  constructor(gasAmount: number) {
    this.gasAmount = gasAmount;
  }

  refill(car: Car){
    if(this.gasAmount > 0 && this.gasAmount>= car.gasAmount) {
      this.gasAmount -= car.gasAmount;
      car.gasAmount += (car.capacity - car.gasAmount);
    } else { console.log('Not enough gas')}
  }

}