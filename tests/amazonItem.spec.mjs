// @ts-check
import { test, expect } from '@playwright/test';
import {chromium} from '@playwright/test';
//const { test, expect } = require('@playwright/test');

test.beforeAll(async () => {
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://amazon.com');
});
//test.describe('Validate the name and price of item on amazon.com', () => {
    test('1: go to amazon.com', async ({ page }) => {
        await expect(page).toHaveURL('https://www.amazon.com/');
    });

    test('2: search for roswear jeans', async ({ page }) => {
        //await page.click('#nav-hamburger-menu');
        await page.fill('#twotabsearchtextbox', 'roswear women jeans');
        await page.press('#twotabsearchtextbox', 'Enter');

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
//});
test.afterAll(async () => {
    // await context.close();
    // await browser.close();
})
