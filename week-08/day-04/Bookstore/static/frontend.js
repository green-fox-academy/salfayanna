'use strict'


const xhr = new XMLHttpRequest();

xhr.open('GET', '/books');
xhr.onload = () => {
  if (xhr.status === 200) {
    const res = JSON.parse(xhr.responseText);
    console.log(res);
    createList(res);
  }
}
xhr.send();

const tableDiv = document.querySelector('.table');

let createList = (data) => {
  let tr = document.createElement('tr');
  let thTitle = document.createElement('th');
  let thAuthor = document.createElement('th');
  let thCategory = document.createElement('th');
  let thPublisher = document.createElement('th');
  let thPrice = document.createElement('th');
  thTitle.textContent = 'Book Title';
  thAuthor.textContent = `Author's Name`;
  thCategory.textContent = 'Category';
  thPublisher.textContent = `Publisher's Name`;
  thPrice.textContent = 'Price';
  tr.appendChild(thTitle);
  tr.appendChild(thAuthor);
  tr.appendChild(thCategory);
  tr.appendChild(thPublisher);
  tr.appendChild(thPrice);
  tableDiv.appendChild(tr);

  data.forEach(e => {
    let bookData = document.createElement('tr');
    let bookTitle = document.createElement('td');
    let bookAuthor = document.createElement('td');
    let bookCategory = document.createElement('td');
    let bookPublisher = document.createElement('td');
    let bookPrice = document.createElement('td');

    bookTitle.textContent = e.book_name;
    bookAuthor.textContent = e.aut_name;
    bookCategory.textContent = e.cate_descrip;
    bookPublisher.textContent = e.pub_name;
    bookPrice.textContent = e.book_price;
    bookData.appendChild(bookTitle);
    bookData.appendChild(bookAuthor);
    bookData.appendChild(bookCategory);
    bookData.appendChild(bookPublisher);
    bookData.appendChild(bookPrice);
    tableDiv.appendChild(bookData);
  });
}