'use strict';
import { Printable } from "./Printable-interface";

export class Domino implements Printable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

printAllFields(){
console.log(this.values);
}

}
