// Pick all the items where we want to add an Event
const items = document.querySelectorAll('.item');

console.log(items);

items.forEach((item) => {
    item.addEventListener('click', (ev) => {
        console.log("Clicked", ev.target.innerText);
    })
})

// Better way is to add an event on the parent conatainer itself
const container = document.querySelector('.container');
container.addEventListener(() => {
    console.log(ev.target);
});

// Ab agar iske baad container ke andar element add kia toh uske upar bhi event listener apply ho jaega
// kyuki ab event is on parent and not all the individual children

let div = document.createElement('div');
div.classList.add('item', 'item-10');
div.innerText = 10;
container.appendChild(div); // appenChild works on element whereas append works on text