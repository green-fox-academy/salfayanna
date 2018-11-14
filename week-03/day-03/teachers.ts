'use strict';
export { };

import { Student } from "./students";

class Teacher {

  teach(student){
student.learn();
  }

  answer(){
console.log('answer');
  }
}

let zolika = new Student();
let bélabá = new Teacher();
bélabá.teach(zolika);

export {Teacher};