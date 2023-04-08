const fs = require('fs');
const path = require('path');
const fileName = 'humansDetails.json';

let filePath = path.join(__dirname, 'Data', fileName);

fs.readFile(
    filePath,
    {
        encoding: 'utf-8',
        flag: 'r'
    },
    (err, data) => {
        if (err) throw new Error("Nahi Likh paaye");
        // console.log(data.toString()); // 
        console.log(data);
    }
);