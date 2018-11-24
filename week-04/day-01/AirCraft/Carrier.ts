'use strict'

import { Aircraft } from "./Aircrafts";
import { F16 } from "./F16";
import { F35 } from "./F35";

class AircraftCarrier {

  private airCraftList: Aircraft[];
  private storedAmmo: number;
  private health: number;

  constructor(airCraftList: Aircraft[], storedAmmo: number, health: number) {
    this.storedAmmo = storedAmmo;
    this.health = health;
    this.airCraftList = airCraftList.slice();
  }

  add(aircratf: Aircraft): void {
    this.airCraftList.push(aircratf);
  }

  fill() {
    function compare(aircraft1: Aircraft, aircraft2: Aircraft): number {
      if (aircraft1.isPriority()) {
        return -1;
      }
      if (aircraft2.isPriority()) {
        return 1;
      } else {
        return 0;
      }
    }

    this.airCraftList.sort(compare);

    try {
      this.airCraftList.forEach(element => {
        if (this.storedAmmo > 0) {
          this.storedAmmo = element.refill(this.storedAmmo);
        } else {
          throw 'Not enough ammo';
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  fight(enemy: AircraftCarrier): void {
    let carriersDamage: number = 0;
    this.airCraftList.forEach(element => {
      carriersDamage += element.fight();
    })
    enemy.health -= carriersDamage;
    }

  getStatus() {
    if (this.health === 0) {
      return console.log('It\'s dead Jim :( ')
    } else {
      let totalDamage: number = 0;
      this.airCraftList.forEach(element => {
        totalDamage += element.getMaxDamage();
      });
      console.log(`HP:${this.health}, Aircraft count:${this.airCraftList.length}, Ammo Storage:${this.storedAmmo}, Total damage:${totalDamage}`);
      console.log('Aircrafts:')
      for (let i: number = 0; i < this.airCraftList.length; i++) {
        console.log(this.airCraftList[i].getStatus());
      }
    }
  }
}

let newaircraft_01 = new F16();
let newaircraft_02 = new F16();
let newaircraft_03 = new F35();
let newaircraft_04 = new F35();
let newaircraft_05 = new F35();
let testaircraft = new F16();

let aircrafts: Aircraft[] = [
  newaircraft_01,
  newaircraft_02,
  newaircraft_03,
  newaircraft_04,
  newaircraft_05
];

let carrier = new AircraftCarrier(aircrafts, 2300, 5000);
let evilCarrier = new AircraftCarrier(aircrafts, 1000, 4000)

carrier.add(testaircraft);
carrier.fill();
carrier.getStatus();

evilCarrier.fill();
evilCarrier.getStatus()

carrier.fight(evilCarrier);

carrier.getStatus();
evilCarrier.getStatus();