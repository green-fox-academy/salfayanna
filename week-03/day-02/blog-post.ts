'use strict';

class BlogPost {

  authorName: string
  title: string
  text: string
  publicationDate: string

  constructor(aName: string, titl: string, txt: string, publDate: string) {
    this.authorName = aName;
    this.title = titl;
    this.text = txt;
    this.publicationDate = publDate;
  }
}

let post1 = new BlogPost('John Doe', 'Lorem Ipusum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
let post2 = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
let post3 = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');


export {BlogPost, post1, post2, post3};
//console.log(post1, post2, post3);