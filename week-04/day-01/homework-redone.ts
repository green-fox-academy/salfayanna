'use strict'
export { };

class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }


  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} year old ${this.gender}.`);
  }

  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
}

class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life', skippedDays: number = 0) {
    super(name, age, gender)
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }

  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
  }

}

class Mentor extends Person {
  level: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate') {
    super(name, age, gender)
    this.level = level;
  }

  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.');
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`)
  }
}

class Sponsor extends Person {
  company: string;
  hiredStudents: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google', hiredStudents: number = 0) {
    super(name, age, gender)
    this.company = company;
    this.hiredStudents = hiredStudents;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  hire() {
    this.hiredStudents += 1;
  }

  getGoal() {
    console.log('My goal is: Hire brilliant junior software developers.');
  }
}

class Cohort {
  name: string;
  students: Student[]
  mentors: Mentor[]

  constructor(name: string, students: Student[] = [], mentors: Mentor[] = []) {
    this.name = name;
    this.students = students;
    this.mentors = mentors;
  }

  addStudent(student) {
    this.students.push(student);
  }
  addMentor(mentor) {
    this.mentors.push(mentor);
  }
  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)
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

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();