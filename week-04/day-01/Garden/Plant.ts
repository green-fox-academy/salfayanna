'use strict'

export class Plant {
  currentWaterAmount: number;
  protected color: string;

  constructor(color: string, currentWaterAmount: number) {
    this.currentWaterAmount = currentWaterAmount;
    this.color = color;
  }

  getWaterNeeds() {
    return this.currentWaterAmount;
  }

  getColor(){
    return this.color;
  }
}
