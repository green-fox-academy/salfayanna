'use strict'

export abstract class Instrument {
  protected name: string = '';

  constructor(name: string) {
    this.name = name;
  }


  abstract play(): void;
}