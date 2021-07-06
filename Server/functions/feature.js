const jimp = require('jimp');
const fs = require('fs');
const {
    AUTO
} = require('jimp');

const background = new jimp('./background.jpg', () => {
    console.log('done')
})

const featureImage = (url) => {
    console.log(url)
    return new Promise((resolve, reject) => {
        jimp.read(url).then(image => {

            if (image.bitmap.width > 1200) {
                image.resize(1200, AUTO)
            }
            if (image.bitmap.height > 628) {
                image.resize(AUTO, 628)
            }

            background.composite(image, 600 - image.bitmap.width / 2, 0)
            console.log(600 - image.bitmap.width / 2)

            resolve(background.write('feature.jpg'))
        }).catch(err => {

        })
    })

}



module.exports = featureImage;