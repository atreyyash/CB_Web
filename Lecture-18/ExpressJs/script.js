const express = require('express');
const app = express();
const PORT = 4444;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/hello', (req, res) => {
    res.send('Hi there! we are at hello endpoint');
});

app.listen(PORT, () => {
    console.log('http:\\localhost:' + PORT);
});