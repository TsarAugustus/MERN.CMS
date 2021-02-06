const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/', function(req, res) {
    console.log(req.body);

    const post = new Post({
        title: req.body.title,
        text: req.body.desc
    });

    post.save().then(() => res.sendStatus(200));
});

router.get('/', function(req, res) {
    Post.find({}, function(err, posts) {
        return res.send(posts)
    })
})

module.exports = router;