const { test, expect } = require("@playwright/test");
const { AmazonMainPage } = require("../pageObjects/amazonMainPage");
const { ProductPage } = require("../pageObjects/productPage");

test('testing e2e flow', async ({page}) => {
    const amazonMainPage = new AmazonMainPage(page);
    const productPage = new ProductPage(page);
    await amazonMainPage.goto();
    amazonMainPage.searchField.fill('roswear women jeans');
    amazonMainPage.submitButton.click();
    await page.screenshot({path: `list.png`});
    amazonMainPage.firstItemInList.click();
    await expect(productPage.productTitle).toHaveText('        roswear Women\'s Essentials Ripped Mid Rise Destroyed Skinny Jeans       ');
    await expect(productPage.productPrice).toHaveText('$38.99');
});
