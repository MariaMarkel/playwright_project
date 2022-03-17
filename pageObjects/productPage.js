const { expect } = require('@playwright/test');

exports.ProductPage = class ProductPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.productTitle = page.locator('#productTitle');
        this.productPrice = page.locator('div#corePriceDisplay_desktop_feature_div>div>span>span.a-offscreen');
        this.appleMagicMouse = page.locator('h2 a[href*="Apple-Magic-Mouse-Wireless-Rechargable"]');
        this.addToCartButton = page.locator('#add-to-cart-button');
        this.noThanksButton = page.locator('#attachSiNoCoverage');
        this.addedToCartNotification = page.locator('#attachDisplayAddBaseAlert');
    }

    async addToCart() {
        await this.addToCart.click();
        await this.noThanksButton.click();
    }
}
