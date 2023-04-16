const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
let todos = [];

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/gettodo', (req, res) => {
    res.send(todos);
});

app.post('/addtodo', (req, res) => {
    const { newtask } = req.body;
    todos.push(newtask);
    res.redirect('/gettodo');
});

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
})