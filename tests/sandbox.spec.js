const { test, expect } = require("@playwright/test");
const { AmazonMainPage } = require("../pageObjects/amazonMainPage");
const { ProductPage } = require("../pageObjects/productPage");

test('testing e2e flow', async ({ page, context }) => {
    const amazonMainPage = new AmazonMainPage(page);
    const productPage = new ProductPage(page);
    await context.tracing.start({ screenshots: true, snapshots: true });
    await amazonMainPage.goto();
    amazonMainPage.searchField.fill('roswear women jeans');
    amazonMainPage.submitButton.click();
    await page.screenshot({ path: `list.png` });
    amazonMainPage.firstItemInList.click();
    await expect(productPage.productTitle).toContainText('roswear Women\'s Essentials Ripped Mid Rise Destroyed Skinny Jeans');
    await expect(productPage.productPrice).toHaveText('$39.99');
    await context.tracing.stop({ path: 'trace.zip' });
});
