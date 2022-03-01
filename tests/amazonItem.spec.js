// @ts-check
//const { chromium } = require('playwright');
const { test, chromium, expect } = require('@playwright/test');
const  { AmazonMainPage }  = require('./../pageObjects/amazonMainPage');

test.beforeEach(async ({ page }) => { //а ты уверена что хочешь не beforeAll?
     // const browser = await chromium.launch({ headless: false });
     // const context = await browser.newContext({
     //     recordVideo: {dir: `videos`}
     // });
    //const page = await context.newPage();

    const amazonMainPage = new AmazonMainPage(page);
    await amazonMainPage.goto(); //можно вынести в переменную URL
    console.log(page.url);
});

test('0: go to amazon.com', async ({page}) => {
    expect(page.url()).toBe('https://www.amazon.com/');
});

test('1: go to amazon.com', async ({page}) => {
    await expect(page).toHaveURL('https://www.amazon.com/');
});

test('2: search for roswear jeans', async ({page}) => {
    const amazonMainPage = new AmazonMainPage(page);
    const input = await page.isVisible('input#twotabsearchtextbox');
    amazonMainPage.searchField.fill('roswear women jeans');
    amazonMainPage.submitButton.click();

    // amazonMainPage.firstItemInList.click();
    // await page.screenshot({path: `item.png`});
    // console.log(amazonMainPage.productTitle)
    // await expect(amazonMainPage.productTitle).toHaveText('        roswear Women\'s Essentials Ripped Mid Rise Destroyed Skinny Jeans       ');
});

test('3: verify the name of selected item', async ({page}) => {
    const amazonMainPage = new AmazonMainPage(page);
    amazonMainPage.firstItemInList.click();
    await page.screenshot({path: `selectedItem.png`});
    console.log(amazonMainPage.productTitle)
    await expect(amazonMainPage.productTitle).toHaveText('        roswear Women\'s Essentials Ripped Mid Rise Destroyed Skinny Jeans       ');
});

test('4: verify the price of selected item', async ({ page }) => {
    const amazonMainPage = new AmazonMainPage(page);
    await expect(amazonMainPage.productPrice).toHaveText('$38.99');
    console.log(amazonMainPage.productPrice);
});
test.afterEach(async () => {
    // await context.close(); //visible only within the hook
    // await browser.close();
    console.log("we finish")
})
