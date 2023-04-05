const URL = 'https://cat-fact.herokuapp.com/facts';
const btn = document.querySelector('btn');
const factList = document.querySelector('.factList');

axios.get(URL)
    .then((data) => {
        console.log(data.data);
        const billiKaData = data.data.map((d) => d.text);
        addDataToList(billiKaData);
    })
    .catch(err => {
        console.log(err);
})

async function solve() {
    try {
        const data = await axios.get(URL);
        const billiKaData = data.data.map((d) => d.text);
        addDataToList(billiKaData);
    }
    catch {
        console.log(err);
    }
}

function addDataToList(data) {
    data.forEach(d => {
        let li = document.createElement('li');
        li.innerText = d;
        factList.appendChild(li);
    });
}

btn.addEventListener('click', () => {
    solve();
});