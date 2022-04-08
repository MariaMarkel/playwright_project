const { test, expect } = require('@playwright/test');
const { AmazonMainPage } = require('./../pageObjects/amazonMainPage');
const { ProductPage } = require("../pageObjects/productPage");
const data = require('../utils/data.json');

let context;
test.beforeAll(async ({browser}) => {
    context = await browser.newContext({ recordVideo: { dir: 'videos/firstVideo' } }); //I want to record a video!
});

test.beforeEach(async ({ page }) => {
    const amazonMainPage = new AmazonMainPage(page);
    await amazonMainPage.goto();
});

test('1: go to amazon.com', async ({ page }) => {
    //page.video()
    expect(page.url()).toBe(data.url);
    //expect(await page.screenshot()).toMatchSnapshot('amazon-main.png');
});

test('2: go to all computer accessories', async ({ page }) => {
    const amazonMainPage = new AmazonMainPage(page);
    await amazonMainPage.gotoComputerAccessoriesPage(0, 4);
    await page.screenshot({ path: 'test-results/dropdown.png' });
    await expect(amazonMainPage.dropdownBoxCategory).toHaveText(data.computer); //search dropdownn -> computers selected
});

test('3: select Apple computer mouse', async ({ page }) => {
    const amazonMainPage = new AmazonMainPage(page);
    const productPage = new ProductPage(page);
    await amazonMainPage.gotoComputerAccessoriesPage(0, 4);
    await productPage.selectMagicMouse(page);
    expect(productPage.addToCartButton).toBeVisible;
});

test('4: add Apple computer mouse to cart', async ({ page }) => {
    const amazonMainPage = new AmazonMainPage(page);
    const productPage = new ProductPage(page);
    await amazonMainPage.gotoComputerAccessoriesPage(0, 4);
    await productPage.selectMagicMouse(page);
    //productPage.addToCart(); // why is this not working?
    await productPage.addToCartButton.click();
    expect(productPage.addedToCartNotification).toBeVisible;
});

test.afterAll(async () => {
    await context.close(); //Used context for video recording
});