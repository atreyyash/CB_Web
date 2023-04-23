const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const hbs = require('hbs');
const Posts = require('./database/scripts/script');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));


app.get('/index', (req, res) => {
    res.render('index', {
        title: 'Facebook'
    });
});

app.get('/home', async (req, res, next) => {

    try {
        let posts = await Posts.getposts();
        // console.log(JSON.parse(posts));
        res.render('home', {
            title: 'All Post',
            posts: JSON.parse(posts)
        });
    }
    catch (err) {
        // console.log(err);
        next();
    }
});

app.use('/posts', require('./routes/posts/posts'));
app.use((req, res) => {
    res.render('error');
});

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});