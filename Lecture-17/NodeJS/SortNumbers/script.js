const fs = require('fs');
const path = require('path');

function getData(fileName) {
    return new Promise((resolve, reject) => {
        let filePath = path.join(__dirname, fileName);
        fs.readFile(
            filePath,
            {
                encoding: 'utf-8',
            },
            (err, data) => {
                if (err) return reject(err)
                resolve(data);
            }
        );
    });
}

function sortArray(arr) {
    arr.sort((a, b) => {
        return a - b;
    })
    console.log(arr);

    fs.writeFile(
        'result.json',
        JSON.stringify(arr),
        (err) => {
            if (err) console.log(err);
            console.log("Sab ho gaya");
        }
    );
}

let result = [];

getData('FileA.txt')
    .then((data) => {
        let arr = data.split('\r\n');
        console.log(arr);
        getData('FileB.txt')
            .then((data2) => {
                let arr2 = data2.split('\r\n');
                console.log(arr2);
                result = [...arr, ...arr2];
                sortArray(result);
            })
    })