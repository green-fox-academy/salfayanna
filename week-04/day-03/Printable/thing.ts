'use strict';
import { Printable } from "./Printable-interface";

class Thing implements Printable {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  public complete() {
    this.completed = true;
  }

  public getName() {
    return this.name;
  }

  public getCompleted() {
    return this.completed;
  }
  public printAllFields() {
    console.log(this.name, this.completed);
  }
}

export { Thing };
