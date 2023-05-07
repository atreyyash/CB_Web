const postController = require('../controller/posts');

const router = require('express').Router();

router.get('/addpost', postController.getAddPost);
router.post('/addpost', postController.postAddPost);
router.get('/', postController.getPost);


module.exports = router;