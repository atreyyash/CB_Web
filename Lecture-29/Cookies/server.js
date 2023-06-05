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

const session = require('express-session');
let MongoDBStore = require('connect-mongodb-session')(session);

let store = new MongoDBStore({
    uri: 'mongodb://127.0.0.1:27017/testdb',
    collection: 'mySession'
});

app.use(session({
    secret: 'sdasbdabkbd akdkabsdbashkvdjavsjdv',
    resave: false,
    saveUninitialized: true,
    store: store
}));

app.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        return res.redirect('/profile');
    }
    res.render('login');
});

app.post('/login', (req, res) => {
    if (req.session.loggedIn) {
        return res.redirect('/profile');
    }
    req.session.loggedIn = true;
    req.session.username = req.body.username;
    req.session.count = 1;
    res.render('profile', {
        username: req.session.username,
        count: req.session.count
    })
})

app.get('/profile', (req, res) => {
    if (req.session.loggedIn) {
        req.session.count++;
        res.render('profile', {
            username: req.session.username,
            count: req.session.count
        })
    }
    else res.redirect('/login');
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
})