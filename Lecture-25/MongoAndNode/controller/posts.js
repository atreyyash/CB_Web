const Posts = require("../models/posts");

module.exports.getAddPost = (req, res, next) => {
    res.render('addpost');
}

module.exports.postAddPost = (req, res, next) => {
    const { title, imageUrl, desc } = req.body;
    let newPost = new Posts(title, imageUrl, desc);
    newPost.save()
        .then(() => {
            res.redirect('/post');
        })
        .catch((err) => {
            next(err);
        });
}

module.exports.getPost = (req, res, next) => {
    Posts.getPosts()
        .then((data) => {
            console.log(data);
            res.render('posts', {
                data: data
            })
        })
        .catch(err => {
            next(err);
        });
}