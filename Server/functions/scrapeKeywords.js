const axios = require('axios');
const words = require('./words.js')
const cleanArray = require('./cleanArray.js');
const searchUrl = ""

const returnUrl = (keyword1, keyword2) => {
    return `${searchUrl}`
}

const handleRequest = async (keyword, limit) => {
    return new Promise(async (resolve, reject) => {
        const array = [];
        let i = 1;
        let max = limit;

        const myLoop = async () => {
            setTimeout(function () {

                axios.get(returnUrl(words[i], keyword)).then(async res => {
                    const items = res.data.split(',').filter(item => item.includes('u003'));
                    items.forEach(item => {
                        array.push(item.replace(/["/[}/)]/g, "").replace(/[\\]/g, ""));
                    })

                })

                i++;
                if (i < max) {
                    myLoop()
                } else if (i == max) {

                    resolve(cleanArray(array));

                }
            }, 200)
        }

        myLoop();



    })
}


module.exports = handleRequest;
