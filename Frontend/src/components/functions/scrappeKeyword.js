const axios = require('axios');
const words = require('./words.js')


const searchUrl = ""
const url = searchUrl

const combineUrl = (keyword1, keyword2) => {
    return `${searchUrl}`
}
const array = []

const getKeywords = (number, keyword) => {
    axios.get(combineUrl(words[number], keyword)).then(async res => {
        const items = res.data.split(',').filter(item => item.includes('u003'));
        items.forEach(item => {
            const chars = [`"`, `[`, `]`, `{`, `}`]
            array.push(item.replace(/["/[}/)]/g, "").replace(/[\\]/g, "").replace('u003cbu003e', "").replace('u003cbu003e', "").replace('u003cbu003e', "").replace('u003cbu003e', "").replace('u003cbu003e', ""));
        })

    })
}



const scrappeKeywords = (limit, keyword) => {
    let i = 1;
    let max = limit;

    function myLoop() {
        setTimeout(function () {
            getKeywords(i, keyword);
            i++;
            if (i < max) {
                myLoop()
                console.log(i)
            } else if (i == max) {
                console.log(array);

            }
        }, 200)
    }

    myLoop()

}

module.exports = scrappeKeywords;