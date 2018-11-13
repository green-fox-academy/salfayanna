'use strict';
export { };

class PostIt {
backgroundColor: string
textOnIt: string
textColor: string

constructor(bgCol: string, txtOn: string, txtCol: string) {
  this.backgroundColor = bgCol;
  this.textOnIt = txtOn;
  this.textColor = txtCol;
}
}

let post1 = new PostIt('orange', 'blue', 'Idea1');
let post2 = new PostIt('pink', 'black', 'Awesome');
let post3 = new PostIt('yellow', 'green', 'Superb');

console.log(post1, post2, post3);