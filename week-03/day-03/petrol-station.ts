'use strict';
export { };

import { Station } from "./station";
import { Car } from "./car";

let omv = new Station(12);
let audi = new Car(50);

omv.refill(audi);
console.log(audi.gasAmount, omv.gasAmount);