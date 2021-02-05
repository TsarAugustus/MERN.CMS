const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MERN');

router.post('/', function(req, res) {
    console.log(req.body);
    const Post = mongoose.model('Post', {
        title: String,
        text: String
    });

    const post = new Post({
        title: req.body.titleData,
        text: req.body.textData
    });

    post.save().then(() => res.sendStatus(200));
})

module.exports = router;