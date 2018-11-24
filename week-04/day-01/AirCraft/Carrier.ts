'use strict'

import { Aircraft } from "./Aircrafts";

class AircraftCarrier {

  private airCraftList: Aircraft[];
  private storedAmmo: number;
  private health: number;

  constructor(storedAmmo: number, health: number) {
    this.storedAmmo = storedAmmo;
    this.health = health;
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

    this.airCraftList.forEach(element => {
      if (this.storedAmmo > 0) {
        element.refill(this.storedAmmo);
      } else {
        throw 'Not enough ammo';
      }
    });
  }

  fight(enemy: AircraftCarrier): void {
    let carriersDamage: number = 0;
    this.airCraftList.forEach(element => {
      element.fight();
      carriersDamage += element.getAllDamage();
      enemy.health - carriersDamage;
    })
  }

  getStatus() {
    if (this.health === 0) {
      return console.log('It\'s dead Jim :( ')
    } else {
      let totalDamage: number = 0;
      this.airCraftList.forEach(element => {
        totalDamage += element.getAllDamage();
      })
      console.log(`HP:${this.health}, Aircraft count:${this.airCraftList.length}, Ammo Storage:${this.storedAmmo}, Total damage:${totalDamage}`);
      console.log(this.airCraftList.forEach(element => {
        element.getStatus();
      }));
    }
  }
}