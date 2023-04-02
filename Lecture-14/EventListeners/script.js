const btn = document.querySelector('.btn');
const p = document.querySelector('p');

// Event Listener lagane ka tareeka
// This can add multiple eventListener on same element

btn.addEventListener('dblclick', () => {
    console.log("I am double click event!");
}); 

p.addEventListener('mouseenter', (ev) => {
    console.log(ev.target);
    ev.target.classList.add('changeColor');
});

p.addEventListener('mouseleave', (ev) => {
    // console.log(ev.target);
    ev.target.classList.remove('changeColor');
});

p.addEventListener('click', (ev) => {
    // ev.target.remove();
});

// btn.addEventListener('click', () => {
//     console.log("I a clicked!");
// });

// btn.addEventListener('click', () => {
//     console.log("I am 2nd event!");
// });

// btn.onClick = () => {
//     console.log("Rajas ne 1 Kalol ka sapna dekhna");
// }

// this will override the second event Listener
// btn.onClick = () => {
//     console.log("I am second eventListener");
// }