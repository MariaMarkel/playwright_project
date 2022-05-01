const { expect } = require('@playwright/test');

exports.DemoQaPage = class DemoQaPage {

    constructor (page) {
        this.page = page;
        this.btnWithDynamicId = page.locator('.btn.btn-primary');
        this.primaryBlueBtn = page.locator('.btn.btn-primary.btn-test');
        this.greenBtnHiddenLayers = page.locator('#greenButton');
    }

    async gotoAlerts() {
        await this.page.goto('https://demoqa.com/alerts');
    }
    async sampleAppLogin(name, password) {
        await this.sampleAppNameInputField.fill(name);
        await this.sampleAppPswInputField.fill(password);
        await this.sampleAppLoginBtn.click();
    }
}