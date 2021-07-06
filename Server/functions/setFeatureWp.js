const WPAPI = require('wpapi')

const wp = new WPAPI({
    endpoint: 'https://exampledomain.com/wp-json',
    username: 'adminUser',
    password: 'Access Key',
});

const setFeatureWp = (postid) => {
    wp.media().file('./feature.jpg').create({
        title: 'feature',
    }).then((media) => {
        return wp.posts().id(postid).update({
            featured_media: media.id
        })
    })
}

module.exports = setFeatureWp;