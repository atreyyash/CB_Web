const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { mongoConnect } = require("./database/database");
const PORT = 4444;
const hbs = require("hbs");
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
const postRouter = require('./routes/posts');

app.use('/post', postRouter);

mongoConnect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    });