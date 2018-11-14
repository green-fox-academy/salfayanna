'use strict';
export { };

import { BlogPost, post1, post2, post3 } from "../day-02/blog-post";

class Blog {
  list: BlogPost[] = [];

  constructor(list: BlogPost[]) {
    this.list = list;
  }

  delete(int: number) {
    if (int <= this.list.length) {
      this.list.splice(int, 1);
      return console.log(this.list);
    } else {
      return console.log(`Blogpost with index: ${int} does not exist`);
    }
  }

  update(int: number, post: BlogPost) {
    if (int <= this.list.length) {
      this.list.splice(int, 1, post)
      return console.log(this.list);
    } else {
      return console.log(`Blogpost with index: ${int} does not exist`);
    }
  }

}

let posts: BlogPost[] = [
  post1, post2, post3
];

let myBlog = new Blog(posts);
let post4 = new BlogPost('Bohemian', 'Rapsody', 'Easy come, Easy Go...', '2018.11.14.');

myBlog.delete(2);
//myBlog.update(0, post4);
//myBlog.update(6, post4);