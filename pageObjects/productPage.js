const { expect } = require('@playwright/test');

exports.ProductPage = class ProductPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.productTitle = page.locator('#productTitle');
        this.productPrice = page.locator('div#corePriceDisplay_desktop_feature_div>div>span>span.a-offscreen');
    }

    async someMethod() {
        await this.page.goto('https://amazon.com');
    }
}
