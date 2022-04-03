// @ts-check
const { test, chromium, expect, Page } = require('@playwright/test');
const  { AmazonMainPage }  = require('./../pageObjects/amazonMainPage');
const { ProductPage } = require("../pageObjects/productPage");
const data = require('../utils/data.json');

let page;
test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    const amazonMainPage = new AmazonMainPage(page);
    await amazonMainPage.goto();
    console.log(page.url)
})

test('0: go to amazon.com', async () => {
    expect(page.url()).toBe(data.url);
});

test('1: go to amazon.com', async () => {
    await expect(page).toHaveURL(data.url);
});

test('2: search for roswear jeans', async () => {
    const amazonMainPage = new AmazonMainPage(page);
    amazonMainPage.searchField.fill(data.jeans);
    //amazonMainPage.searchField.press('Enter'); // why is this not working??
    amazonMainPage.submitButton.click();
});

test('3: verify the name of selected item', async () => {
    const amazonMainPage = new AmazonMainPage(page);
    const productPage = new ProductPage(page);
    amazonMainPage.firstItemInList.click();
    await page.screenshot({path: `test-results/selectedItem.png`});
    await expect(productPage.productTitle).toContainText(data.brandName);
});

test('4: verify the price of selected item', async () => {
    const productPage = new ProductPage(page);
    await expect(productPage.productPrice).toHaveText(data.productPrice);
    console.log(productPage.productPrice);
});

test.afterAll(async () => {
    await page.close();
  });
