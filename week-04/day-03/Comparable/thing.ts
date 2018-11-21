'use strict';
import { Comparable } from "./comparable";

class Thing implements Comparable {
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

  compareTo(other: Thing): number {
    if (this.completed < other.completed) {
      return -1;
    } else if (this.completed > other.completed) {
      return 1;
    } else {
      return 0;
    }
  }
}

export { Thing };
