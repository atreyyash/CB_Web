const postController = require('../controller/posts');

const router = require('express').Router();

router.get('/addpost', postController.getAddPost);
router.post('/addpost', postController.postAddPost);
router.get('/', postController.getPost);

router.post('/deletepost', postController.postDeletePost);

router.get('/updatepost', postController.getUpdatePost);
router.post('/updatepost', postController.postUpdatePost);

router.get('/viewinfo', postController.getViewInfo);
router.post('/addcomment', postController.postAddComment);


module.exports = router;