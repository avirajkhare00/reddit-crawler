import { launch } from 'puppeteer';

async function pageCrawler(url){
    const browser = await launch();
    const page = await browser.newPage();
    await page.goto(url);
    const crawledText = await page.evaluate(() => Array.from(document.querySelectorAll('p'), element => element.textContent));
    await browser.close();
    return crawledText.toString();
}

export default pageCrawler;
