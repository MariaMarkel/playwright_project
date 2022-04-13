const { test, expect } = require('@playwright/test');
const { UItestingPlaygroundPage } = require('../pageObjects/uiTestingPlaygroundPage');
const data = require('../utils/data.json');

test('test 1: dynamic ID', async ({page})  => {
    const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
    await uiTestingPlaygroundPage.gotoDynamicId();
    await uiTestingPlaygroundPage.clickBtnWithDynamicId();
    //await page.screenshot({ path: 'test-results/clickBtnWithDynamicId.png' });
});

test('test 2: class attribute', async ({page})  => {
    const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
    await uiTestingPlaygroundPage.gotoClassAttr();
    page.on('dialog', dialog => dialog.dismiss());
    await uiTestingPlaygroundPage.clickPrimaryBlueBtn();
    //await page.screenshot({ path: 'test-results/clickPrimaryBlueBtn2.png' });
});

test('test 3: hidden layers', async ({page})  => {
    const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
    await uiTestingPlaygroundPage.gotoHiddenLayers();
    await uiTestingPlaygroundPage.clickBtnHiddenLayers();
    //expect(uiTestingPlaygroundPage.greenBtnHiddenLayers).not.toBeVisible;
    //expect(uiTestingPlaygroundPage.blueBtnHiddenLayers).not.toBeVisible; //what assertion do i need? everything passes
    //await page.screenshot({ path: 'test-results/clickBtnHiddenLayers.png' });
});

test.fixme('test 4: load delay', async ({page})  => {
    const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
    await uiTestingPlaygroundPage.gotoHome();
    await uiTestingPlaygroundPage.clickLoadDelayLink(); 
    //await page.waitForLoadState();
    //await uiTestingPlaygroundPage.buttonAppearingAfterDelay.waitFor();
    await uiTestingPlaygroundPage.clickButtonAppearingAfterDelay(); // intentionally remove awaits and add waitFor()
    //await page.screenshot({ path: 'test-results/loadDelay.png' });
});

test.fixme('test 5: client delay', async ({page})  => {
    const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
    await uiTestingPlaygroundPage.gotoClientDelay();
    await uiTestingPlaygroundPage.clickButtonTriggeringClientSide();
    await page.waitForSelector('.bg-success'); // i had to hardcode it
    expect(await uiTestingPlaygroundPage.DataCalculatedOnClientSide).toBeVisible();
    //await page.screenshot({ path: 'test-results/clientDelay.png' });
});

test.only('test 6: dynamic table', async ({page})  => {
    // cy.visit('http://uitestingplayground.com/dynamictable');
    // const homePage = new HomePage();
    // let cpuColumnIndex;
    // let cpuPercentArray = [];
    // let chromeRowIndex;
    // let allCPUs;
    // let chromeCPU;
    // homePage.browserNamesArray().each((el, i) => {
    //     if (el.text() === 'Chrome') {
    //         chromeRowIndex = i;
    //         console.log("*****************chromeRowIndex "+ chromeRowIndex);
    //     }
    // });
    // homePage.columnNamesArray().each( (el, i) => {
    //     if (el.text() === 'CPU') {
    //         cpuColumnIndex = i;
    //         console.log("*****************cpuColumnIndex "+ cpuColumnIndex);
    //         allCPUs = cy.get(`[role="row"]>span:nth-child(${cpuColumnIndex+1})`); //CPU column elements = array
    //         allCPUs.each((el, i) => {
    //             //console.log(el.text());
    //             cpuPercentArray.push(el.text());
    //         })
    //             .then(function () {
    //                 chromeCPU = cpuPercentArray[chromeRowIndex];
    //                 console.log(chromeCPU);
    //                 homePage.chromeCPUmessage().should('contain', chromeCPU)
    //             });
    //     }
    // });

    const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
    await uiTestingPlaygroundPage.gotoDynamicTable();
    let cpuColumnIndex;
    let cpuPercentArray = [];
    let chromeRowIndex;
    let allCPUs;
    let chromeCPU;
    let browserNamesArray = await page.$$('[role="row"]>span:nth-child(1)');
    browserNamesArray.forEach((el, i) => {        //uiTestingPlaygroundPage.browserNamesArray
            // if (el.innerText() === 'Chrome') {
            //     chromeRowIndex = i;
            //     console.log("*****************chromeRowIndex "+ chromeRowIndex);
            // }
            //console.log(el); //(await this._elementChannel.innerText()).value;

            console.log(el.innerText);
            });
});

test('test 7: click', async ({page})  => {
    const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
    await uiTestingPlaygroundPage.gotoClick();
    await uiTestingPlaygroundPage.btnIgnoresDOMClickEvent.click()
    expect(await uiTestingPlaygroundPage.btnIgnoresDOMClickEventClicked).toBeVisible();
    await page.waitForTimeout(2000); //for screenshot
    //await page.screenshot({ path: 'test-results/btnClicked.png' });
});

test.fixme('test 8: progress bar', async ({page})  => {
    const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
    await uiTestingPlaygroundPage.gotoProgressBar();
    const progressPercent = parseInt(await uiTestingPlaygroundPage.progressBar.innerText()); // 25 initially
    console.log("***********" + progressPercent)
    await uiTestingPlaygroundPage.progressBarStartBtn.click();
    //await page.waitForTimeout(5000);
    await uiTestingPlaygroundPage.progressBarStopBtn.click();
    await page.screenshot({ path: 'test-results/progress1.png' });
});

test('test 9: scrollbars', async ({page})  => {
    const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
    await uiTestingPlaygroundPage.gotoScrollbars();
    await uiTestingPlaygroundPage.scrollAndClickHidingBtn();
    //await page.screenshot({ path: 'test-results/scrollbar1.png' });
});

test('test 10: overlapped element', async ({page})  => {
    const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
    await uiTestingPlaygroundPage.gotoOverlappedElement();
    await uiTestingPlaygroundPage.scrollAndFillUpName(data.name);
    //await page.screenshot({ path: 'test-results/overlapped.png' });
});