'use strict'

import { Aircraft } from "./Aircrafts";

export class F35 extends Aircraft {

  constructor() {
    super();
    this.maxAmmo = 12;
    this.baseDamage = 50;
    this.type = 'F35';
  }

}