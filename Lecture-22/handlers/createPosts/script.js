const Posts = require('../../database/scripts/script');
const { v4: uuidv4 } = require('uuid');

module.exports.getCreatePosts = (req, res) => {
    res.render('createpost', {
        title: 'My App'
    });
}

module.exports.postCreatePosts = async (req, res, next) => {
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
}

module.exports.getDeletePosts = async (req, res) => {
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
}

module.exports.getUpdatePosts = async (req, res) => {
    let { id } = req.query;

    try {
        let item = await Posts.getOnePost(id);
        res.render('updatepost', {
            title: 'Update Post',
            item
        });
    }
    catch (err) {
        next();
    }
}

module.exports.postUpdatePosts = async (req, res, next) => {
    let { title, imageUrl, caption, id } = req.body;
    const post = {
        id, title, imageUrl, caption
    }

    try {
        let data = await Posts.updatePost(post);
        res.render('home', {
            title: 'All POSTS',
            posts: data
        });
    }
    catch (err) {
        next();
    }
}