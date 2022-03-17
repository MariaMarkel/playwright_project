// @ts-check
const { test, chromium, expect, Page } = require('@playwright/test');
const  { AmazonMainPage }  = require('./../pageObjects/amazonMainPage');
const { ProductPage } = require("../pageObjects/productPage");

let page;
test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    const amazonMainPage = new AmazonMainPage(page);
    await amazonMainPage.goto();
    console.log(page.url)
})

test('0: go to amazon.com', async () => {
    expect(page.url()).toBe('https://www.amazon.com/');
});

test('1: go to amazon.com', async () => {
    await expect(page).toHaveURL('https://www.amazon.com/');
});

test('2: search for roswear jeans', async () => {
    const amazonMainPage = new AmazonMainPage(page);
    const input = await page.isVisible('input#twotabsearchtextbox');
    amazonMainPage.searchField.fill('roswear women jeans');
    //amazonMainPage.searchField.press('Enter'); // why is this not working??
    amazonMainPage.submitButton.click();
});

test('3: verify the name of selected item', async () => {
    const amazonMainPage = new AmazonMainPage(page);
    const productPage = new ProductPage(page);
    amazonMainPage.firstItemInList.click();
    await page.screenshot({path: `selectedItem.png`});
    await expect(productPage.productTitle).toContainText('roswear Women\'s Essentials Ripped Mid Rise Destroyed Skinny Jeans');
});

test('4: verify the price of selected item', async () => {
    const productPage = new ProductPage(page);
    await expect(productPage.productPrice).toHaveText('$39.99');
    console.log(productPage.productPrice);
});

test.afterAll(async () => {
    await page.close();
  });
