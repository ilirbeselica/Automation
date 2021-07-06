const puppeteer = require('puppeteer');

const getImages = async (keyword) => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = browser.newPage();
    const searchUrl = ""

        (await page).goto(`${searchUrl}`)
    await (await page).waitForTimeout(5000)
    const result = (await page).evaluate(() => {
        const images = Array.from(document.querySelectorAll('img'));
        const newList = images.map(item => item.src.replace('236x', "originals"))
        return newList
    })

    return result;
}


module.exports = getImages;