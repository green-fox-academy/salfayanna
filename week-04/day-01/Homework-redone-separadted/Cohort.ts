'use strict'
import { Mentor } from "./Mentor";
import { Student } from "./Student";

export class Cohort {
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