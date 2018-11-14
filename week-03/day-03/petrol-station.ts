'use strict';
export { };

import { Station } from "./station";
import { Car } from "./car";

let omv = new Station(500);
let audi = new Car();

omv.refill(audi);
console.log(audi.gasAmount, omv.gasAmount);