'use strict'

export class Plant {
  protected currentWaterAmount: number;
  protected color: string;
  protected waterMultiplier: number;
  protected type: string;

  constructor(color: string, currentWaterAmount: number) {
    this.currentWaterAmount = currentWaterAmount;
    this.color = color;
  }

  getWaterNeeds(): boolean {
    return true;
  }
  
  setWaterLevel(waterAmount: number): void {
    this.currentWaterAmount += waterAmount;
  }

  getWaterLevel(): number {
    return this.currentWaterAmount;
  }

  getColor() {
    return this.color;
  }

  getType(){
    return this.type;
  }

  getWaterMiltiplier(){
    return this.waterMultiplier;
  }

}
