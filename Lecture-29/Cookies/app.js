const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const hbs = require('hbs');
const bodyParser = require('body-parser');
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.setHeader('Set-Cookie', "loggedIn=true");
    let cookie = res.get('Set-Cookie');
    // console.log(cookie.split('='));
    let loggedIn = res.get('Set-Cookie').split('=').pop();
    // res.sendFile(__dirname+'/index.html');
    if (loggedIn == 'true') {
        res.sendFile(__dirname + '/loggedIn.html');
    }
    res.sendFile(__dirname + '/notLoggedIn.html');
});

app.get('/check', (req, res) => {
    let loggedIn = res.get('Set-Cookie').split('=').pop();
    if (loggedIn == 'true') {
        res.sendFile(__dirname + '/loggedIn.html');
    }
    else res.sendFile(__dirname + '/notLoggedIn.html');
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
})