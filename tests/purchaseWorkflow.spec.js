// @ts-check
const { test, expect } = require('@playwright/test');
const { AmazonMainPage } = require('./../pageObjects/amazonMainPage');
const { ProductPage } = require("../pageObjects/productPage");
// const {computer} = require('./../utils/consts')

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
    expect(page.url()).toBe('https://www.amazon.com/');
    //expect(await page.screenshot()).toMatchSnapshot('amazon-maim.png');
});


test('2: go to all computer accessories', async ({ page }) => {
    const amazonMainPage = new AmazonMainPage(page);
    await amazonMainPage.allDropdown.click();
    await amazonMainPage.seeAllDepartmentsDropdown.first().click();
    await amazonMainPage.computersDropdown.nth(0).click();
    await page.screenshot({ path: `screen1.png` });
    await amazonMainPage.computersCategories.nth(4).click();
    expect(amazonMainPage.dropdownBoxCategory).toHaveText("Computer");
});

test('3: select Apple computer mouse', async ({ page }) => {
    const amazonMainPage = new AmazonMainPage(page);
    const productPage = new ProductPage(page);
    amazonMainPage.appleCheckbox.nth(2).click();
    //await page.screenshot({ path: `selectAppleCheck.png` });
    productPage.appleMagicMouse.click();
    await page.screenshot({ path: `scr2.png` });
    expect(productPage.addToCartButton).toBeVisible;
});



test.fixme('4: add Apple computer mouse to cart', async ({ page }) => {
    const amazonMainPage = new AmazonMainPage(page);
    const productPage = new ProductPage(page);
    productPage.addToCart();
    //await page.screenshot({ path: addedToCart.png });
    expect(productPage.addedToCartNotification).toBeVisible;
});

test.afterAll(async () => {
    await context.close(); //Used context for video recording
})