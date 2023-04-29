const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
const Posts = require('./database/scripts/script');
const { v4: uuidv4 } = require('uuid');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.use(express.urlencoded({extended:true}));

app.get('/index', (req, res) => {
    res.render('index', {
        title: 'Facebook'
    });
});

app.get('/createpost', (req, res) => {
    res.render('createpost', {
        title: 'My App'
    });
});

app.post('/createpost', async (req, res, next) => {
    let { title, imageUrl, caption } = req.body;
    console.log(title, imageUrl, caption);
    try {
        let posts = await Posts.addposts({
            title,
            imageUrl,
            caption,
            id: uuidv4()
        })
        
        res.render('home', {
            posts
        })
    }
    catch (err) {
        // console.log(err);
        next();
    }
});

app.get('/deletepost', async (req, res) => {
    let { id } = req.query;
    try {
        let posts = await Posts.deletepost(id);
        res.render('home', {
            posts
        });
    }
    catch (err) {
        next();
    }
});

app.get('/home', async (req, res) => {

    try {
        let posts = await Posts.getposts();
        console.log(posts);
        res.render('home', {
            title: 'All Post',
            posts: posts
        });
    }
    catch (err) {
        console.log(err);
        // next();
    }
});

app.use((req, res) => {
    res.render('error');
});

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});