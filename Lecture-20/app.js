const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4444;
let todos = [];

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// To send all the static files of frontend at once.
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

// This is a very tidious task and we do not do this.
/*
app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'styles.css'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'script.js'));
});
*/

app.get('/gettodo', (req, res) => {
    res.send(todos);
});

app.post('/addtodo', (req, res) => {
    const { newtask } = req.body;
    todos.push(neuwtask);
    res.redirect('/gettodo');
});

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
})