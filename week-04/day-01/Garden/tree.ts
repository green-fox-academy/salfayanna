'use strict'
import {Plant} from "./Plant";


export class Tree extends Plant {

  constructor(color: string, currentWaterAmount: number){
    super(color, currentWaterAmount);
    this.waterMultiplier = 0.4;
    this.type = 'tree';

    }

    getWaterNeeds(): boolean{
    return this.currentWaterAmount < 10;
    }
  }