let URL = 'http://cat-fact.herokuapp.com/facts';
const factList = document.querySelector('.factList');
const btn = document.querySelector('btn');

btn.addEventListener('click', () => {
    fetch(URL)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            data.forEach(d => {
                console.log(d);
                let li = document.createElement('li');
                li.innerText = d.text;
                factList.appendChild(li);
            });
        })
        .catch((err) => {
            console.log(err.message);
        })
});