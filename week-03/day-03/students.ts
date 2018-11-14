'use strict';
export { };

import { Teacher } from "./teachers";

class Student {

  learn(){
console.log('learn');
  }

question(teacher: Teacher){
teacher.answer();
}
}

export {Student};