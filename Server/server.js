const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const getKeywords = require('./routes/keyword')
const wordpressPost = require('./routes/wordpressPost');

const cors = require('cors')

app.use(bodyParser())
app.use(cors())
app.use('/keyword', getKeywords)
app.use('/wordpress', wordpressPost);


app.listen('8899', () => {
    console.log('Running')
})