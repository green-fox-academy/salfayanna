// The Pirate Ship
// The place for the Pirates
'use strict';

import { Pirate, getRandomInt } from "./pirates";

class Ship {
  pirates: Pirate[] = [];
  captain: Pirate;

  fillShip() {
    let pirateNumber: number = getRandomInt(50);
    for (let i: number = 0; i < pirateNumber; i++) {
      this.pirates.push(new Pirate());
    }
    this.captain = new Pirate();
  }

  log() {
    console.log(`Captain's consumed rum: ${this.captain.intoxication}\r\n 
    Captain's state: ${this.captain.isPassedOut} / ${this.captain.isAlive}\r\n
    Number of alive pirates in the crew: ${this.pirates.filter(e => e.isAlive === true).length}`);
  }

  battle(otherShip: Ship) {
    let enemyPiratesAlive: number = otherShip.pirates.filter(e => e.isAlive === true).length;
    let piratesAlive: number = this.pirates.filter(e => e.isAlive === true).length;
    if ((piratesAlive - this.captain.intoxication) > (enemyPiratesAlive - otherShip.captain.intoxication)) {
      let deadenemies = getRandomInt(enemyPiratesAlive);
      for (let i: number = 0; i < deadenemies; i++) {
        otherShip.pirates[i].isAlive = false;
      }
      return true;
    } else {
      let deadpirates = getRandomInt(piratesAlive);
      for (let i: number = 0; i < deadpirates; i++) {
        this.pirates[i].isAlive = false;
      }
      return false;
    }

  }

// Ships should have a method to battle other ships: ship.battle(otherShip)
// should return true if the actual ship (this) wins
// the ship should win if its calculated score is higher
// calculate score: Number of Alive pirates in the crew - Number of consumed rum by the captain
// The loser crew has a random number of losses (deaths).
// The winner captain and crew has a party, including a random number of rum :)

// BattleApp
// Create a BattleApp class, where you can fight with ships
// Create 2 ships, fill them with pirates
// Have a battle!
