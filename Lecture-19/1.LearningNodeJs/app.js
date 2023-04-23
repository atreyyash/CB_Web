const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

// To see the body data of POST request
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/hello', (req, res) => {
    res.send("Hello Welcome Again");
})

// We have 2 ways to get data via get request 
// 1. Params
app.get('/hello/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
})

// 2. Query Params
app.get('/bye', (req, res) => {
    res.send(`Bye ${req.query.name}, age: ${req.query.age}`);
});

// POST REQUEST
app.post('/', (req, res) => {
    const { contact, email } = req.body;
    res.send(`Post Success ${contact}, ${email}`);
});

app.listen(PORT, () => {
    console.log(`http:\\localhost:` + PORT)
})