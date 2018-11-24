'use strict'

import { Aircraft } from "./Aircrafts";

export class F16 extends Aircraft {

  constructor() {
    super();
    this.maxAmmo = 8;
    this.baseDamage = 30;
    this.type = 'F16';
  }
  
  isPriority(): boolean {
    return false;
  }

}