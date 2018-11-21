'use strict'

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy{
days: string[];
letters: string[];

constructor(days: string[]){
  this.days = days;
}

  getDowBooking(): string{

  }

  getCodeBooking(): string{

  }
}

let days:string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
