const puppeteer = require('puppeteer');

(async () => {
 const browser = await puppeteer.launch();
 const page = await browser.newPage();
 // resp = await page.goto('https://detail.tmall.com/item.htm?id=529568314085&ali_refid=a3_430406_1007:1121029051:N:705131073_0_100:24421b260dc2a31a2ca49bc5c1ec8eb8&ali_trackid=1_24421b260dc2a31a2ca49bc5c1ec8eb8&skuId=3154464727259');
 let resp = await page.goto('http://www.so.com');
 // await page.screenshot({path: 'example.png'});
 let text = await resp.text();
 console.log(text);
 await browser.close();
})();

