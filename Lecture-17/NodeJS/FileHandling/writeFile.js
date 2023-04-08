const fs = require('fs');
const path = require('path');
const fileName = 'humansDetails.json';

let humans = [
    { name: 'Vaibhav', age: 23, hobby: 'Singing' },
    { name: 'Kartikey', age: 27, hobby: 'Kuwara Baap' },
    { name: 'Nitish', age: 20, hobby: 'Smuggling' },
    { name: 'Farhan Akhtar', age: 25, hobby: 'Acting' }
]

let filePath = path.join(__dirname, 'Data', fileName);

fs.writeFile(
    filePath,
    JSON.stringify(humans),
    {
        encoding: 'utf-8',
        flag: 'w'
    },
    (err) => {
        if (err) throw new Error("Nahi Likh paaye");
        console.log('Sahi hai ho gaya sab');
    }
);