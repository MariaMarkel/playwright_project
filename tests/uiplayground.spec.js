const { test, expect } = require('@playwright/test');
const { DynamicIdPage } = require('../pageObjects/dynamicIdPage');

// test.beforeEach(async ({ page }) => {
//     const dynamicIdPage = new DynamicIdPage(page); // not sure we need this hook for these tests
// });

test('test 1: dynamic ID', async ({page})  => {
    const dynamicIdPage = new DynamicIdPage(page);
    await dynamicIdPage.gotoDynamicId();
    await dynamicIdPage.clickBtnWithDynamicId();
    //await page.screenshot({ path: 'test-results/clickBtnWithDynamicId.png' });
});

test('test 2: class attribute', async ({page})  => {
    const dynamicIdPage = new DynamicIdPage(page);
    await dynamicIdPage.gotoClassAttr();
    await dynamicIdPage.clickPrimaryBlueBtn();
    await page.screenshot({ path: 'test-results/clickPrimaryBlueBtn.png' });
});

test.skip('test 3', async ({page})  => {
    const dynamicIdPage = new DynamicIdPage(page);
    await dynamicIdPage.clickBtnWithDynamicId();
    await page.screenshot({ path: 'test-results/clickBtnWithDynamicId.png' });
});

test.skip('test 4', async ({page})  => {
    const dynamicIdPage = new DynamicIdPage(page);
    await dynamicIdPage.clickBtnWithDynamicId();
    await page.screenshot({ path: 'test-results/clickBtnWithDynamicId.png' });
});

test.skip('test 5', async ({page})  => {
    const dynamicIdPage = new DynamicIdPage(page);
    await dynamicIdPage.clickBtnWithDynamicId();
    await page.screenshot({ path: 'test-results/clickBtnWithDynamicId.png' });
});