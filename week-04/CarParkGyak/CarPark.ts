'use strict'

import { FileIO } from "./file_IO";
import { Car } from "./Car";

// it should have a carPark array of Cars
// addCar() method which add's a new car to the carPark
// addCarToFile() method which add's a new car to the file, with 3 parameter: license plate, year of manufacture, and a parking ticket(0 or 1)
// removeCar() method which removes a car, by ID
// getOldest() method which returns the oldest car's license plate from the file
// getPenalty() method which returns a new array of car's who hasn't got a parking ticket from the file

class CarPark {
  private cars: Car[] = [];

  constructor(cars: Car[]) {
    this.cars = cars;
  }

  addCar(car: Car): void {
    this.cars.push(car);
  }

  addCarToFile(filename: string, car: Car): void {
    file.appendToFile(filename, `${car.getLicensePlate()},${car.getManufactureYear()},${car.getHasTicket()}`)
  }

  removeCar(id: number): void {
    this.cars.forEach((e, i) => {
      if (id === e.getId()) {
        this.cars.splice(e[i], 1);
      }
    });
  }

  getOldest() {
    let year: number = 9999;
    let index: number = 0;
    this.cars.forEach((e, i) => {
      if (year > e['manufactureYear']) {
        year = e['manufactureYear'];
        index = i;
      }
    })
    return this.cars[index]['licensePlate'];
  }

  getPenalty(filename: string) {
    let noTicket: string[][] = []
    let allCars: string[][] = [];
    file.getContent().split('\r\n').forEach(e => {
      allCars.push(e.split(','));
    });
    allCars.forEach(e => {
      if (e[2] === '0') {
        noTicket.push(e);
      }
    })

    console.log(noTicket)
  }

  getCarList() {
    return this.cars;
  }
}

let file = new FileIO('cars.csv');

let car01 = new Car(1, 'HUN-124', 1989, 1);
let car02 = new Car(2, 'HUG-999', 1999, 0);
let car03 = new Car(3, 'HEL-666', 1966, 1);
let car04 = new Car(4, 'MAD-123', 2011, 1);
let car05 = new Car(5, 'FUN-432', 2012, 0);
let car06 = new Car(6, 'BMW-444', 2017, 0);
let car07 = new Car(7, 'LOP-007', 2010, 0);
let car08 = new Car(8, 'BAL-002', 2011, 1);
let car09 = new Car(9, 'BLE-987', 2000, 1);
let car10 = new Car(10, 'HAL-621', 1991, 0);

let myCars: Car[] = [
  car01,
  car02,
  car03,
  car04,
  car05,
  car06,
  car07,
  car08,
  car09,
  car10
];

let park = new CarPark(myCars);
//console.log(park.getOldest());

//park.removeCar(1);
//park.addCar(car01);
park.getPenalty('test.csv');
//console.log(park.getCarList());
