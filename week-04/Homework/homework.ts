'use strict'
export { };

class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name?: string, age?: number, gender?: string) {
    this.name = name === undefined ? 'Jane Doe' : name;
    this.age = age === undefined ? 30 : age;
    this.gender = gender === undefined ? 'female' : gender;
  }


  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} year old ${this.gender}.`);
  }

  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
}

class Student {
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;

  constructor(name?: string, age?: number, gender?: string, previousOrganization?: string, skippedDays?: number) {
    this.name = name === undefined ? 'Jane Doe' : name;
    this.age = age === undefined ? 30 : age;
    this.gender = gender === undefined ? 'female' : gender;
    this.previousOrganization = previousOrganization === undefined ? 'The School of Life' : previousOrganization;
    this.skippedDays = skippedDays === undefined ? 0 : skippedDays;
  }

  getGoal() {
    console.log('Be a junior software developer.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
  }

}

class Mentor {
  name: string;
  age: number;
  gender: string;
  level: string;

  constructor(name?: string, age?: number, gender?: string, level?: string) {
    this.name = name === undefined ? 'Jane Doe' : name;
    this.age = age === undefined ? 30 : age;
    this.gender = gender === undefined ? 'female' : gender;
    this.level = level === undefined ? 'intermediate' : level;
  }

  getGoal() {
    console.log('Educate brilliant junior software developers.');
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} level mentor.`)
  }
}

class Sponsor {
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;

  constructor(name?: string, age?: number, gender?: string, company?: string, hiredStudnets?: number) {
    this.name = name === undefined ? 'Jane Doe' : name;
    this.age = age === undefined ? 30 : age;
    this.gender = gender === undefined ? 'female' : gender;
    this.company = company === undefined ? 'Google' : company;
    this.hiredStudents = this.hiredStudents === undefined ? 0 : this.hiredStudents;
  }

  introduce() {
    console.log('Hi, I\'m name, a age year old gender who represents company and hired hiredStudents students so far.');
  }

  hire() {
    this.hiredStudents += 1;
  }

  getGoal() {
    console.log('Hire brilliant junior software developers.');
  }
}

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(sponsor);
people.push(elon);

student.skipDays(3);

for (let i:number = 0; i < 4; i++) {
  elon.hire();
}

for (let i:number = 0; i < 6; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
} 