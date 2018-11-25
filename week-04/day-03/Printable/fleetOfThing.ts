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

fleet.things.forEach(element => {
  element.printAllFields();
});