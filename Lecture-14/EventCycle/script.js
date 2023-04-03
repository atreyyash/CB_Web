const grandFather = document.querySelector('.grandFather');
const father = document.querySelector('.father');
const mother = document.querySelector('.mother');

grandFather.addEventListener('click', (ev) => {
    console.log("Ruk tere papa ko bataunga");
}, true);

father.addEventListener('click', (ev) => {
    console.log("Belt se service ghar baithe baithe");
    ev.stopPropagation();
}, true);

mother.addEventListener('click', () => {
    console.log("Roti bana rahi thi, ussi chimte se pakad liya");
}, true);