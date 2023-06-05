const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const http = require('http');
const hbs = require('hbs');
const bodyParser = require('body-parser');
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.setHeader('Set-Cookie', "name=Shresth");
    res.send("Ghoomne Jayenge Hum");
});

app.get('/anotherpath', (req, res) => {
    console.log(res.getHeader('Set-Cookie'));   
    res.send("aNOTHER PATH");
});

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
})