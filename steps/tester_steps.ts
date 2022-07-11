import { Etrieve } from "../steps/xApp"
// import { browser, protractor } from "protractor";
// import { generic_class } from "../utils/generic_classes";
// import { Content } from "../pages/ContentMain_page";
// import { STS } from "../pages/STS_page";
// import { Before, Given, Then } from 'cucumber';

// var {setDefaultTimeout} = require('cucumber');
// var {defineSupportCode} = require('cucumber');

// const { Given, When, Then } = require('cucumber');

// var fs = require('fs-extra');
// fs.emptyDir('screenshots/', function (err) {
//         console.log(err);
//     });

// let helperFun: generic_class = new generic_class();
// let ContentMain: Content = new Content();
// let STSPage: STS = new STS();

// Before({timeout: 60 * 1000}, function() {
//     setDefaultTimeout(60 * 1000);
//     });


Given('That Jim navigates to {string}', async function (string) {
    browser.get(string);
    helperFun.waitforelement(STSPage.signIn);
    return browser.sleep(3000);
});

When('Jim logs in with {string} and {string}', async function (string, string2) {
    helperFun.waitforelement(STSPage.signIn);
    STSPage.username.sendKeys(string);
    STSPage.password.sendKeys(string2);
    return browser.sleep(3000);
});

Then('Clicks on the Sign in button.', async function () {
    helperFun.waitforelement(STSPage.signIn);
    STSPage.signIn.click();
    return browser.sleep(3000);
});



Given('User is on the target content import screen.', async function () {
    // Write code here that turns the phrase above into concrete actions
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
    return browser.sleep(3000);
});

When('User clicks on the Run Import menu option', function () {
    // Write code here that turns the phrase above into concrete actions
});

Then('The content import will be executed.', function () {
    // Write code here that turns the phrase above into concrete actions
});

