const express = require('express');
const router = express.Router();
const scrappeKeywords = require('../functions/scrapeKeywords.js')




router.get('/:keyword/:limit', async (req, res) => {
    const {
        keyword,
        limit
    } = req.params
    console.log(keyword, limit)
    const data = await scrappeKeywords(keyword, limit);
    res.json(data)
})


module.exports = router;