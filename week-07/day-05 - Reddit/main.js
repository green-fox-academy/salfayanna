'use strict';

//import { timeConverter } from "./timeconverter.js";
//import * as timeConverter from './timeconverter';

const API = "http://secure-reddit.herokuapp.com/simple";

const xhr = new XMLHttpRequest();
let backEndPosts = {};
const posts = document.querySelector(".posts");

console.log(posts);

xhr.open('GET', `${API}/posts`, true);
xhr.onload = function () { 
  backEndPosts = JSON.parse(xhr.response);
 console.log(backEndPosts);
 
 backEndPosts.posts.forEach(element => {
    posts.appendChild(createPost(element));
  });  
}
xhr.send();



let timeConverter = (timeStamp) => {

  return timeStamp;
}

let createPost = (postList) => {

  console.log(postList);

  let post = document.createElement('div');
post.classList.add('post');

let vote = document.createElement('div');
vote.classList.add('vote');

let counter = postList.score;
let voteCount = document.createElement('p');
voteCount.innerText = `${counter}`;

let upvoteLink = document.createElement('img');
upvoteLink.classList.add('upvote');
upvoteLink.src= './upvote.png'

let downvoteLink = document.createElement('img');
downvoteLink.classList.add('downvote');
downvoteLink.src= './downvote.png'

vote.appendChild(upvoteLink);
vote.appendChild(voteCount);
vote.appendChild(downvoteLink);
post.appendChild(vote);

let postText = document.createElement('div');
postText.classList.add('postText');

let title = document.createElement('h2');
let titleLink = document.createElement('a');
titleLink.href = `${postList.url}`;
titleLink.innerHTML = `${postList.title}`;
title.appendChild(titleLink);
postText.appendChild(title);

let postData = document.createElement('p');
let user = document.createElement('span');
let date = document.createElement('span');
user.innerHTML = `${postList.user}`;
date.innerHTML = `${timeConverter(postList.timestamp)}`;
postData.innerText = 'Posted by: ';
postData.appendChild(user);
postData.appendChild(date);
postText.appendChild(postData);

let edit = document.createElement('p');
let modify = document.createElement('span');
let remove = document.createElement('span');
let modifyLink = document.createElement('a');
modify.classList.add('modify');
remove.classList.add('remove');
modifyLink.href = '#';
modifyLink.innerText = 'Modify';
remove.innerText = 'Remove';
modify.appendChild(modifyLink);
edit.appendChild(modify);
edit.appendChild(remove);

postText.appendChild(postData);
postText.appendChild(edit);
postData.appendChild(user);
postData.appendChild(date);
post.appendChild(postText);

remove.addEventListener('click', (event) => {
  xhr.open('DELETE', `${API}/posts/${postList.id}`, true);
  console.log(xhr);
  xhr.send();
});

upvoteLink.addEventListener('click', (event) => {
xhr.open('PUT', `${API}/posts/${postList.id}/upvote`, true);
xhr.send();
upvoteLink.src = './upvoted.png';
counter++;
voteCount.innerText = `${counter}`;
});

downvoteLink.addEventListener('click', (event) => {
xhr.open('PUT', `${API}/posts/${postList.id}/downvote`, true);
xhr.send();
downvoteLink.src= './downvoted.png';
counter--;
voteCount.innerText = `${counter}`;
});

return post;
}

