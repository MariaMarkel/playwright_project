const { test, expect } = require('@playwright/test');
const { DemoQaPage } = require('../pageObjects/demoqaPage');
const data = require('../utils/data.json');

test('test 1: dynamic ID', async ({page})  => {
    const demoQaPage = new DemoQaPage(page);
    await demoQaPage.gotoAlerts();
    await page.screenshot({ path: 'test-results/pic.png' });
});