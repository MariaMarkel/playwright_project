const { expect } = require('@playwright/test');

exports.UItestingPlaygroundPage = class UItestingPlaygroundPage {

    constructor (page) {
        this.page = page;
        this.btnWithDynamicId = page.locator('.btn.btn-primary');
        this.primaryBlueBtn = page.locator('.btn.btn-primary.btn-test');
        this.greenBtnHiddenLayers = page.locator('#greenButton');
        this.blueBtnHiddenLayers = page.locator('#blueButton');
        this.loadDelayLink = page.locator('a[href$="/loaddelay"]');
        this.buttonAppearingAfterDelay = page.locator('.btn.btn-primary');
        this.buttonTriggeringClientSideLogic = page.locator('.btn.btn-primary');
        this.DataCalculatedOnClientSide = page.locator('.bg-success');
        this.columnNamesArray = page.locator('[role="columnheader"]'); //to be able to find index of CPU column
        this.browserNamesArray = page.locator('[role="row"]>span:nth-child(1)'); //to be able to find the index of Chrome
        this.chromeCPUmessage = page.locator('.bg-warning');
        this.btnIgnoresDOMClickEvent = page.locator('.btn.btn-primary');
        this.btnIgnoresDOMClickEventClicked = page.locator('.btn.btn-success');
        this.progressBarStartBtn = page.locator('#startButton');
        this.progressBarStopBtn = page.locator('#stopButton');
        this.progressBar = page.locator('#progressBar');
        this.progressBarResultMessage = page.locator('#result');
        this.hidingBtn = page.locator('#hidingButton');
        this.nameInputField = page.locator('#name');
        this.hideBtn = page.locator('#hideButton');
        this.opacity0Btn = page.locator('#transparentButton');
        this.removedBtn = page.locator('#removedButton');
        this.visibilityHiddenBtn = page.locator('#invisibleButton');
        this.zeroWidthBtn = page.locator('#zeroWidthButton');
        this.displayNoneBtn = page.locator('#notdisplayedButton');
        this.overlappedBtn = page.locator('#overlappedButton');
        this.offscreenBtn = page.locator('#offscreenButton');
    }

    async gotoHome() {
        await this.page.goto('http://uitestingplayground.com/');
    }
    async gotoDynamicId() {
        await this.page.goto('http://uitestingplayground.com/dynamicid');
    }
    async gotoClassAttr() {
        await this.page.goto('http://uitestingplayground.com/classattr');
    }
    async gotoHiddenLayers() {
        await this.page.goto('http://uitestingplayground.com/hiddenlayers');
    }
    async gotoLoadDelay() {
        await this.page.goto('http://uitestingplayground.com/loaddelay');
    }
    async gotoClientDelay() {
        await this.page.goto('http://uitestingplayground.com/clientdelay');
    }
    async gotoDynamicTable() {
        await this.page.goto('http://uitestingplayground.com/dynamictable');
    }
    async gotoClick() {
        await this.page.goto('http://uitestingplayground.com/click');
    }
    async gotoProgressBar() {
        await this.page.goto('http://uitestingplayground.com/progressbar');
    }
    async gotoScrollbars() {
        await this.page.goto('http://uitestingplayground.com/scrollbars');
    }
    async gotoOverlappedElement() {
        await this.page.goto('http://uitestingplayground.com/overlapped');
    }
    async gotoVisibility() {
        await this.page.goto('http://uitestingplayground.com/visibility');
    }

    async clickBtnWithDynamicId() {
        await this.btnWithDynamicId.click();
    }
    async clickPrimaryBlueBtn() {
        await this.primaryBlueBtn.click();
    }
    async clickBtnHiddenLayers() {
        await this.greenBtnHiddenLayers.click();
        await this.blueBtnHiddenLayers.click();
    }
    async clickLoadDelayLink() {
        await this.loadDelayLink.click();
    }
    async clickButtonAppearingAfterDelay() {
        await this.buttonAppearingAfterDelay.click();
    }
    async clickButtonTriggeringClientSide() {
        await this.buttonTriggeringClientSideLogic.click();
    }
    async scrollAndClickHidingBtn() {
        await this.hidingBtn.scrollIntoViewIfNeeded();
        await this.hidingBtn.click();
    }
    async scrollAndFillUpName(name) {
        await this.nameInputField.scrollIntoViewIfNeeded(2000);
        await this.nameInputField.fill(name);
    }
}