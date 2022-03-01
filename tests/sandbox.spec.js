const {test, expect} = require("@playwright/test");
const {AmazonMainPage} = require("../pageObjects/amazonMainPage");

test('testing e2e flow', async ({page}) => {
    const amazonMainPage = new AmazonMainPage(page);
    await amazonMainPage.goto();
    amazonMainPage.searchField.fill('roswear women jeans');
    amazonMainPage.submitButton.click();
    await page.screenshot({path: `list.png`});
    amazonMainPage.firstItemInList.click();
    await expect(amazonMainPage.productTitle).toHaveText('        roswear Women\'s Essentials Ripped Mid Rise Destroyed Skinny Jeans       ');
    await expect(amazonMainPage.productPrice).toHaveText('$38.99');
});
