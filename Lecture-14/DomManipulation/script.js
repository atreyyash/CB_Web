// 1. Pick an element to perform some operation.

// Pick using TagName
let lists = document.getElementsByTagName('li');
console.log(lists);
// Pick using Id
const para1 = document.getElementById('para-1');
console.log(para1);

// Pick using Class
const allPara = document.getElementsByClassName('para');
console.log(allPara);

// querySelector
// querySelector will provide the first element from the top
// const paras = document.querySelector('p');
const paras = document.querySelectorAll('p');
console.log(paras);

const item1 = document.querySelector('.item1');
console.log(item1);

const item2 = document.querySelector('.item2');
console.log(item2);

// READING VALUE OF AN ELEMENT
console.log(item2.innerHTML);
console.log(item2.innerHTML);

// CHANGING THE VALUE AN ELEMENT
// item2.innerText = '<b>Ironman</b>';
item2.innerHTML = '<b>Ironman</b>';

// ADDING A NEW ELEMENT
// MODIFY DOM AS MINIMUM AS POSSIBLE
const movieList = document.querySelector('.list');
console.log(movieList);

// This not a good way to add a element
// movieList.innerHTML += '<li class-"item4 listitem">HULK</li>';


// BEST WAY TO ADD A NEW ELEMENT:

// 1. Ek naya element banao
let li = document.createElement('li');

// 2. Element ke andar ki value update karlo
li.innerText = 'Spiderman';

// 3. Jakar is  element ko parent ke andar append kardo
movieList.appendChild(li);

movieList.removeChild(item2);