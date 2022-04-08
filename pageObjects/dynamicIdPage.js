const { expect } = require('@playwright/test');

exports.DynamicIdPage = class DynamicIdPage {

    constructor (page) {
        this.page = page;
        this.btnWithDynamicId = page.locator('.btn.btn-primary');
        this.primaryBlueBtn = page.locator('.btn.btn-primary.btn-test');
    }

    async gotoDynamicId() {
        await this.page.goto('http://uitestingplayground.com/dynamicid');
    }
    async gotoClassAttr() {
        await this.page.goto('http://uitestingplayground.com/classattr');
    }
    async clickBtnWithDynamicId () {
        await this.btnWithDynamicId.click();
    }
    async clickPrimaryBlueBtn () {
        await this.primaryBlueBtn.click();
    }
}