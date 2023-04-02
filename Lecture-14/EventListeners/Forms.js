const form = document.querySelector('form');
const inp = document.querySelector('#inp');
const no = document.querySelector('#no');

form.addEventListener('submit', (ev) => { 
    ev.preventDefault();
    console.log(inp.value);
    console.log(no.value);
    inp.value = "";
    no.value = "";
});