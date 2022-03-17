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
        this.dropdownBoxCategory = page.locator('#nav-search-label-id');
        this.donateLink = page.locator('text=Donate now.');
        this.allDropdown = page.locator('.hm-icon-label');
        this.seeAllDepartmentsDropdown = page.locator('.nav-sprite.hmenu-arrow-more');
        this.computersDropdown = page.locator('[data-menu-id="16"]');
        this.computersCategories = page.locator('ul[data-menu-id="16"]>li');
        this.appleCheckbox = page.locator('ul.a-unordered-list.a-nostyle.a-vertical.a-spacing-medium>li:nth-child(6)');
    }

    async goto() {
        await this.page.goto('https://amazon.com');
    }
    async selectAppleMouse() {
        await this.allDropdown.click();
        await this.seeAllDepartmentsDropdown.click();
        await this.computersDropdown.click();
        await this.accessoriesDropdown.click();
    }
}

