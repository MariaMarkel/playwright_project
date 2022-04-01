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
        this.appleCheckbox = page.locator('div.a-section.a-spacing-none>ul>li >> "Apple"');
    }

    async goto() {
        await this.page.goto('/');
    }

    async gotoComputerAccessoriesPage(department, category) {
        await this.allDropdown.click();
        await this.seeAllDepartmentsDropdown.first().click();
        await this.computersDropdown.nth(department).click(); //clicking Computers
        await this.computersCategories.nth(category).click(); //clicking Accessories
    }
}

