const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const hbs = require('hbs');
const bodyParser = require('body-parser');
hbs.registerPartials(__dirname + '/views/partials');
const session = require('express-session');
const passport = require('./auth/passport');
const mongoose = require('mongoose');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'adqwdfwecsacdsdsdf',
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

// app.use(express.static(path.join(__dirname, 'public')));

app.use('/signup', require('./routes/signup'));

app.use('/', require('./routes/login'));

app.get('/profile', (req, res) => {
    console.log(req.user);
    res.render('profile', {
        username: req.user.username
    });
});

app.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/login');
    });
});

mongoose.connect('mongodb://127.0.0.1/testdb')
    .then(() => {
        app.listen(PORT,()=>{
            console.log(`http://localhost:`+PORT);
        })
    })
    .catch(err => {
        console.log("Connection Error", err);
    })