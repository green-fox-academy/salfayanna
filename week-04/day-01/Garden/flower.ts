'use strict'
import { Plant } from "./Plant";

export class Flower extends Plant{

  constructor(color: string, currentWaterAmount: number) {
    super(color, currentWaterAmount);
    }
  }
