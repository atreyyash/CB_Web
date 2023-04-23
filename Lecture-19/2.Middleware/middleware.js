// Middleware :- These are functions that we want should run for every incoming request or for some path specific requests.

const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

// To see the body data of POST request
app.use(express.urlencoded({ extended: true }));

// General Middleware
app.use((req, res, next) => {
    console.log("Inside middleware-1");
    req.cnt = 1;
    next();
});

app.use((req, res, next) => {
    console.log("Inside middleware-2");
    req.cnt++;
    next();
})

// Path Specific

// Path: ['/listen', '/listen/a', '/listen/a/b/c/d'] works on these
// Path: ['/listena', '/listen1/a/b', '/listen1/a/b/c/d'] Don't works on these
app.use('/listen', (req, res, next) => {
    console.log("Alexa is converting the audio to text");
    next();
})
app.get('/listen', (req, res) => {
    res.send('Sunn lia maine jo tune bola');
});

app.get('/', (req, res) => {
    res.send(`Hello World We are coming through middleware ${req.cnt}`);
})

app.listen(PORT, () => {
    console.log(`http:\\localhost:` + PORT)
})