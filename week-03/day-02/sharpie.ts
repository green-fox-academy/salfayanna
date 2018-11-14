'use strict';
export { };

export class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor(color: string, width: number, inkAmount: number = 100) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
  }

  use() {
    if (this.inkAmount > 0) {
      this.inkAmount -= 1;
    }
  }
}

