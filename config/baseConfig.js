"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

const protractor = require("protractor");

var baseConfig = {

    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    baseUrl:'https://mbetcontent.softdocs-dev.com/',
    framework: 'custom',

    capabilities: {
        'browserName': 'firefox',
        unexpectedAlertBehaviour: 'accept',
        sharedTestFiles: true,
      },

    // multiCapabilities: [{
    //    'browserName': 'firefox'
    //   }, {
    //    'browserName': 'chrome'
    //  }],

  
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  

    onPrepare() {

        require('ts-node').register({
            project: './tsconfig.json'})
            browser.ignoreSynchronization = true;
            var width = 1450;
            var height = 1080;
            browser.driver.manage().window().setSize(width, height);
            // browser.driver.manage().window().maximize();
       },
       params: {
        login : {
            user : 'vnadmin',
            pwd : 'N57RXzfXQcQZ*'
        }
    }
}
module.exports = baseConfig;