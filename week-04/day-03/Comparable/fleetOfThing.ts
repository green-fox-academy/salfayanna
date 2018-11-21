'use strict';
export { };

import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

let thing1 = new Thing('Get milk');
let thing2 = new Thing('Remove the obstacles');
let thing3 = new Thing('Stand up');
let thing4 = new Thing('Eat lunch');

thing3.complete();
thing4.complete();

fleet.add(thing1);
fleet.add(thing2);
fleet.add(thing3);
fleet.add(thing4);

fleet.things.sort(function (a: Thing, b: Thing): number {
  return a.compareTo(b);
});

console.log(fleet.things.sort());


/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */