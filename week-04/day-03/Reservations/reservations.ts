'use strict'

import {Reservationy} from "./reservationy-interface";

export class Reservation implements Reservationy{
private days:string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  getDowBooking(): string{
return this.days[Math.floor(Math.random()*this.days.length)];
  }

  getCodeBooking(): string{
   return Math.random().toString(36).substr(2,8).toLocaleUpperCase();
  }
}