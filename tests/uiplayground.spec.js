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

test('test 6: dynamic table', async ({page})  => {
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
    let columnNamesArray = await page.$$('[role="columnheader"]');
    let browser;
    let columnName;
    //browserNamesArray.forEach((el, i) => {        //uiTestingPlaygroundPage.browserNamesArray IS NOT WORKING
            // if (el.innerText() === 'Chrome') {   // forEach() IS NOT WORKING
            //     chromeRowIndex = i;
            //     console.log("*****************chromeRowIndex "+ chromeRowIndex);
            // }
            // console.log(el); //(await this._elementChannel.innerText()).value;

        //     console.log(el.innerText);
        //    });

    for (let i = 1; i < browserNamesArray.length; i++) {
            browser = await page.locator('[role="row"]>span:nth-child(1)').nth(i).textContent();
                if (browser === 'Chrome') {
                chromeRowIndex = i;
            }
        }

    for (let i = 0; i < columnNamesArray.length; i++) {
        columnName = await page.locator('[role="columnheader"]').nth(i).textContent();
        if (columnName === 'CPU') {
                    cpuColumnIndex = i;           
                }
        }
    allCPUs = await page.$$(`[role="row"]>span:nth-child(${cpuColumnIndex+1})`);     //CPU column elements = array
    //console.log("################### " + allCPUs.length)

    for(let i = 0; i < allCPUs.length; i++) {
        let cpuValue = await page.locator(`[role="row"]>span:nth-child(${cpuColumnIndex+1})`).nth(i).textContent();
        cpuPercentArray.push(cpuValue);
        }

    chromeCPU = cpuPercentArray[chromeRowIndex];
    //console.log("############### " + chromeCPU);
    //expect( await uiTestingPlaygroundPage.chromeCPUmessage).toBeVisible();
    expect( await uiTestingPlaygroundPage.chromeCPUmessage).toContainText(chromeCPU);
    await page.screenshot({ path: 'test-results/CPU.png' });
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

test.describe('test 11: visibility', ()  => {
    test.beforeEach(async ({page}) => {
        const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
        await uiTestingPlaygroundPage.gotoVisibility();
        await uiTestingPlaygroundPage.hideBtn.click();
    });
    
    test('1: opacity0', async({page}) => {
        const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
        expect(await uiTestingPlaygroundPage.opacity0Btn).toBeVisible(); //visible
        await page.screenshot({ path: 'test-results/overlapped1.png' });
    });
    
    test('2: removed button', async({page}) => {
        const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
        expect(await uiTestingPlaygroundPage.removedBtn).toBeVisible(); //not
        await page.screenshot({ path: 'test-results/overlapped2.png' });
    });

    test('3: visibility hidden btn', async({page}) => {
        const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
        expect(await uiTestingPlaygroundPage.visibilityHiddenBtn).toBeVisible(); //not 
        await page.screenshot({ path: 'test-results/overlapped3.png' });
    });
    
    test('4: zero width btn', async({page}) => {
        const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
        expect(await uiTestingPlaygroundPage.zeroWidthBtn).toBeVisible(); //not
        await page.screenshot({ path: 'test-results/overlapped4.png' });
    });

    test('5: display none btn', async({page}) => {
        const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
        expect(await uiTestingPlaygroundPage.displayNoneBtn).toBeVisible(); //not
        await page.screenshot({ path: 'test-results/overlapped5.png' });
    });

    test('6: overlapped btn', async({page}) => {
        const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
        expect(await uiTestingPlaygroundPage.overlappedBtn).toBeVisible(); //visible
        await page.screenshot({ path: 'test-results/overlapped6.png' });
    });
    
    test('7: offscreen btn', async({page}) => {
        const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
        expect(await uiTestingPlaygroundPage.offscreenBtn).toBeVisible(); //visible
        await page.screenshot({ path: 'test-results/overlapped7.png' });
    });  
});

test('test 12: sample app', async ({page})  => {
    const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
    await uiTestingPlaygroundPage.gotoSampleApp();
    await uiTestingPlaygroundPage.sampleAppLogin(data.name, data.password); //WHY PRESSING ENTER NOT WORKING?
    await page.screenshot({ path: 'test-results/sampleApp.png' });
    expect(await uiTestingPlaygroundPage.loginStatusMessage.innerText()).toBe(data.welcome + `${data.name}!`); //WHY toContainText() DIDNT WORK?
});

test('test 13: verify text', async ({page})  => {
    const uiTestingPlaygroundPage = new UItestingPlaygroundPage(page);
    await uiTestingPlaygroundPage.gotoVerifyText();
    expect(await uiTestingPlaygroundPage.welcomeUserNameMessage).toContainText(data.welcomeText);
    await page.screenshot({ path: 'test-results/verifytext.png' });
});