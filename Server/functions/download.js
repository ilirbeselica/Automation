const download = require('image-downloader');
const pinterest = require('./pinterest')




const promises = (keyword) => {
    return new Promise((resolve, reject) => {
        let i = 0;
        let names = [];
        let images = [];

        const start = async (keyword) => {
            for (let i = 0; i < 100; i++) {
                names.push(`${keyword.split(" ").join("-")}-${i}`)
            }
            console.log(names)
            images = await pinterest(keyword);
            niceLoop()
        }

        start(keyword)

        function niceLoop() {
            i++;
            setTimeout(() => {
                downloadImage(images[i], `./images/${names[i]}.jpg`)
                if (i <= images.length) {
                    niceLoop();
                } else {
                    resolve('Done')
                }
            }, 1000)
        }

        function downloadImage(image, folder) {
            console.log(image)
            const options = {
                url: image,
                dest: folder,
            }
            download.image(options)
                .then(({
                    filename
                }) => {
                    console.log('Saved to', filename)
                })
                .catch((err) => console.error(err))
            console.log('test')
        }
    })
}



module.exports = promises;