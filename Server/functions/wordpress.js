const WPAPI = require('wpapi')
const getKeyword = require('./scrapeKeywords');
const getImages = require('./download')
const fs = require('fs');
const {
    image
} = require('image-downloader');

const featureImage = require('./feature');
const setFeatureWp = require('./setFeatureWp');

const wp = new WPAPI({
    endpoint: 'https://exampledomain.com/wp-json',
    username: 'adminUser',
    password: 'Access Key',
});

let postId;
let featureId;


const generatePost = async (keyword, mainTitle, intro, desc, h2, featureImg) => {
    await featureImage(featureImg)
    await getImages(keyword);
    const mailformedKeywords = await getKeyword(keyword, 100)
    const keywords = mailformedKeywords.map(item => item.replace(/\W+/g, " "))

    const listOfImages = fs.readdirSync('./images/')

    for (imagefile of listOfImages) {

        wp.media().file(`./images/${imagefile}`)
            .create({
                title: imagefile.replace('.jpg', ""),
                alt_text: imagefile.replace('.jpg', "")
            }).then(res => console.log(res.id))
    }

    wp.posts().create({
        title: mainTitle,
        content: `
        ${intro} \n
        <h2>${h2}</h2> \n
        ${desc} \n

        ${listOfImages.map((file, index) => {
            return `
            <img class="size-full aligncenter" src="http://exampledomain.com/wp-content/uploads/${new Date().getFullYear()}/0${new Date().getMonth() + 1}/${file.replace(" ", "-")}" alt="${keywords[index] || keyword}" />
            `
        }).join("")}
        `
    }).then((res) => {
        var postiId = res.id;
        console.log(postiId)
        setFeatureWp(postiId)
        listOfImages.forEach(file => fs.unlink(`./images/${file}`, (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log('File deleted')
            }
        }))
    })






}

module.exports = generatePost;