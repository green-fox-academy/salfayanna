' use strict'

import {Reservation} from "./reservations";
import {Reservationy} from "./reservationy-interface";

function getBookingNumber(reservation: Reservationy, amountOfBookings: number){
  for(let i: number = 1; i <= amountOfBookings; i++) {
   console.log(`Booking# ${reservation.getCodeBooking()} for ${reservation.getDowBooking()}`);   
  }
}

let reservations = new Reservation();

getBookingNumber(reservations, 3);