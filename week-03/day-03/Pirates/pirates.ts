'use strict';
export { };
// Pirates
// Create a Pirate class. While you can add other fields and methods, you must have these methods:-

// drinkSomeRum() - intoxicates the Pirate some
// howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
// 0 to 4 times, "Pour me anudder!"
// else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.
// If you manage to get this far, then you can try to do the following.
//  - die() - this kills off the pirate, in which case, DrinkSomeRum, etc. just result in he's dead. 
//  - brawl(x) - where pirate fights another pirate (if that other pirate is alive) 
//  and there's a 1/3 chance, 1 dies, the other dies or they both pass out.

// And... if you get that far...

// Add a parrot.

class Pirate {
  intoxication: number = 0;
  isPassedOut: boolean = false;
  isAlive: boolean = true;
  parrot: Parrot = new Parrot();

  drinkSomeRum() {
    this.intoxication++;
  }

  howsItGoingMate() {
    if (this.intoxication < 5) {
      console.log('Pour me anudder!');
    } else {
      console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
      this.isPassedOut = true;
    }
  }

  die() {
    this.isAlive = false;
  }

  brawl(pirateFightingAgainst: Pirate) {
    let results: any[] = [
      [pirateFightingAgainst.die()],
      [this.die()],
      [pirateFightingAgainst.isPassedOut = true, this.isPassedOut = true]
    ];
    if (pirateFightingAgainst.isAlive) {
      let index: number = getRandomInt(3);
      results[index];
    }
  }
}

class Parrot {

}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let pirate = new Pirate();
console.log(pirate.parrot);

export { Pirate };

// Armada
// Create an Armada class
// Contains Ship-s as a list
// Have a armada.war(otherArmada) method where two armada can engage in war
// it should work like merge sort
// first ship from the first armada battles the first of the other
// the loser gets skipped so the next ship comes in play from that armada
// whichever armada gets to the end of its ships loses the war
// return true if this is the winner

// WarApp
// Create a WarApp class, where you can fight with armadas
// Create 2 armadas, fill them with ships
// Have a war!