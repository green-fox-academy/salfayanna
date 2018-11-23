'use strict'
import { Plant } from "./Plant";

export class Flower extends Plant{

  constructor(color: string, currentWaterAmount: number) {
    super(color, currentWaterAmount);
    this.waterMultiplier = 0.75;
    this.type = 'flower';
    }

    getWaterNeeds(): boolean{
      return this.currentWaterAmount < 5;
      }
  }
