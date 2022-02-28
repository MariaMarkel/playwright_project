// @ts-check
//const { chromium } = require('playwright');
const { test, chromium, expect, Page } = require('@playwright/test');

test.beforeAll(async () => {
    const browser = await chromium.launch({headless: false});
    //const context = await browser.newContext();
    //const page = await context.newPage();
    const page = await browser.newPage();
    await page.goto('https://amazon.com');
    console.log(page.url);
});
    test('1: go to amazon.com', async () => {
        await expect(page).toHaveURL('https://www.amazon.com/');
    });

    test('2: search for roswear jeans', function ({ page }) {
        //await page.click('#nav-hamburger-menu');
         page.fill('#twotabsearchtextbox', 'roswear women jeans');
         page.press('#twotabsearchtextbox', 'Enter');

        //await page.click('img.s-image[data-image-index="1"]');
        //await expect(page.locator('#productTitle')).toHaveText('        roswear Women\'s Essentials Ripped Mid Rise Destroyed Skinny Jeans       ');

    });

    test('3: verify the name of selected item', async ({ page }) => {
        await page.click('img.s-image[data-image-index="1"]');
        //await page.click('//span[contains(text(),"Women\'s Essentials Ripped Mid Rise Destroyed Skinny Jeans")]') //xPath
        await expect(page.locator('#productTitle')).toHaveText('        roswear Women\'s Essentials Ripped Mid Rise Destroyed Skinny Jeans       ');
    });

    test.skip('4: verify the price of selected item', async ({ page }) => {
        await expect(page.locator('')).toHaveText('');
    });
test.afterAll(async () => {
    // await context.close(); //visible only within the hook
    // await browser.close();
})
