const router = require('express').Router();
const { getCreatePosts, postCreatePosts, getDeletePosts, getUpdatePosts, postUpdatePosts } = require('../../handlers/createPosts/script');

router.get('/createpost', getCreatePosts);
router.post('/createpost', postCreatePosts);

router.get('/deletepost', getDeletePosts);

router.get('/updatepost', getUpdatePosts);
router.post('/updatepost', postUpdatePosts);

module.exports = router;