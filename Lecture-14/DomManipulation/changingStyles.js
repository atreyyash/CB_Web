const body = document.querySelector('body');

console.log(body);

const ul = document.querySelector('ul');

console.log(ul);

console.log(ul.classList);
// ClassList mei class: add, delete
ul.classList.add("meriList");


setInterval(() => {
    // ul.classList.toggle('meriList');
    // body.classList.toggle('meriBody');
}, 100);