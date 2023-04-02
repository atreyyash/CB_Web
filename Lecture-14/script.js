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