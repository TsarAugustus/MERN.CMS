const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/', function(req, res) {
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
});

router.delete('/:id', function(req, res) {
    Post.deleteOne({_id: req.params.id}, function(err) {
        console.log('Deleteing Post')
        if(err) {
            console.log(err);
        } else {
            return res.sendStatus(200)
        }
    })
})

module.exports = router;