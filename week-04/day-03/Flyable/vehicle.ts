'use strict'

import {Flyable} from "./interface";

export abstract class Vehicle{
  type: string;
  color: string;
  gasAmount: number;

  constructor(type: string, color:string, gasAmount: number){
    this.type = type;
    this.color = color;
    this.gasAmount = gasAmount;
  }

  land(): void{

  }

  fly(): void{

  }

  takeOff(): void{

  }

}