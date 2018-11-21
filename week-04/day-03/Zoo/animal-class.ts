'use strict'

export abstract class Animal {
  protected name: string;
  protected age: number;
  protected gender: string;
  protected mood: number;

  constructor(name: string, age: number, gender: string, mood: number){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.mood = mood;
  }

  abstract getName(): string;

  abstract breed(): string;

  getPet(): string {
    if(this.mood < 10){
      this.mood ++;
      return `Your animal is happier because you petted It. It's mood increased to ${this.mood}`;
    } else {
      return `Your animal is happy enough and doesn't want to be petted. Let It sleep!`;
    }
  }
}