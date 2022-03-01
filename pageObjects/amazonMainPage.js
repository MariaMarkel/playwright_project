const { expect } = require('@playwright/test');

exports.AmazonMainPage = class AmazonMainPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.searchField = page.locator('input#twotabsearchtextbox');
        this.submitButton = page.locator('[type="submit"]');
        this.firstItemInList = page.locator('img.s-image[data-image-index="1"]');
        this.productTitle = page.locator('#productTitle');
    }

    async goto() {
        await this.page.goto('https://amazon.com');
    }
}

