const express = require('express');
const router = express.Router();
const createPost = require('../functions/wordpress');

router.post('/create', async (req, res) => {

    console.log(req.body)
    const {
        keyword,
        title,
        intro,
        desc,
        h2,
        feature
    } = req.body;

    createPost(keyword,
        title,
        intro,
        desc,
        h2,
        feature)

    res.json({
        message: 'Request Received'
    });
})

module.exports = router;