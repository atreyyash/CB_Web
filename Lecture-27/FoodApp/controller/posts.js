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

module.exports.postDeletePost = (req, res, next) => {
    const { id } = req.body;
    Posts.deletepost(id)
        .then((data) => {
            res.send(data);
        })
        .catch(err => {
            next(err);
        })
}

module.exports.getUpdatePost = (req, res, next) => {
    const { id } = req.query;
    Posts.getPost(id)
        .then((data) => {
            res.render('updatepost', {
                data: data
            });
        })
        .catch(err => {
            next(err);
        });
}

module.exports.postUpdatePost = (req, res, next) => {
    const { id, title, imageUrl, desc } = req.body;
    let newPost = {
        id: id,
        title: title,
        imageUrl: imageUrl,
        desc: desc
    };
    Posts.updatepost(newPost)
        .then(() => {
            res.redirect('/post');
        })
        .catch(err => {
            next(err);
        });
}

module.exports.getViewInfo = async (req, res, next) => {
    const { id } = req.query;
    Posts.getPost(id)
        .then((data) => {
            console.log("Inside view post", data);
            res.render('postinfo', {
                data
            });
        })
        .catch(err => {
            next(err);
        });
}

module.exports.postAddComment = (req, res, next) => {
    const { id, comment } = req.body;
    Posts.addComment(id, comment)
        .then((newComments) => {
            res.send(newComments);
        })
        .catch(err => {
            next(err);
        })
}