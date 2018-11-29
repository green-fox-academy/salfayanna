'use strict'

import {FileIO} from "./file_IO";

// Car
// it should have 3 main properties: an id, a license plate, and a manufacture year
// create a constructor for setting those values
// use acces modifiers, to protect the object's values

export class Car {
private id: number;
private licensePlate: string;
private manufactureYear: number;
private hasTicket: number;

constructor(id:number, licensePlate: string, manufactureYear: number, hasTicket: number){
  this.id = id;
  this.licensePlate = licensePlate;
  this.manufactureYear = manufactureYear;
  this.hasTicket = hasTicket;
}

getId(): number{
return this.id;
}

getLicensePlate(): string{
return this.licensePlate;
}

getManufactureYear(): number{
return this.manufactureYear;
}

getHasTicket(): number{
return this.hasTicket;
}

}