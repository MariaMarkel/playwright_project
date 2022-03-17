// @ts-check
const { test, chromium, expect, Page } = require('@playwright/test');
const  { AmazonMainPage }  = require('./../pageObjects/amazonMainPage');
const { ProductPage } = require("../pageObjects/productPage");

let page;
let context;
test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    context = await browser.newContext({
        recordVideo: {dir: `videos`}
    });
    const amazonMainPage = new AmazonMainPage(page);
    await context.tracing.start({ screenshots: true, snapshots: true });
    await amazonMainPage.goto();
})

test('1: go to amazon.com', async () => {
    expect(page.url()).toBe('https://www.amazon.com/');
});

test('2: go to all computer accessories', async () => {
    const amazonMainPage = new AmazonMainPage(page);
    await amazonMainPage.allDropdown.click();
    await amazonMainPage.seeAllDepartmentsDropdown.first().click();
    await amazonMainPage.computersDropdown.nth(0).click();
    await page.screenshot({ path: `seeComputers.png` });
    await amazonMainPage.computersCategories.nth(4).click();
    expect(amazonMainPage.dropdownBoxCategory).toHaveText('Computers');
});

test('3: select Apple computer mouse', async () => {
    const amazonMainPage = new AmazonMainPage(page);
    const productPage = new ProductPage(page);
    amazonMainPage.appleCheckbox.nth(2).click();
    //await page.screenshot({ path: `selectAppleCheck.png` });
    productPage.appleMagicMouse.click();
    await page.screenshot({ path: `seeMouse.png` });
    expect(productPage.addToCartButton).toBeVisible;
});

test.fixme('4: add Apple computer mouse to cart', async () => {
    const productPage = new ProductPage(page);
    productPage.addToCart();
    //await page.screenshot({ path: `addedToCart.png` });
    await expect(productPage.addedToCartNotification).toBeVisible;
});

test.afterAll(async () => {
    await page.close();
    await context.tracing.stop({ path: 'newTrace.zip' });
  });