"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

let baseConfig = require('./baseConfig');


exports.config = {
    // set to "custom" instead of cucumber.
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    baseUrl:baseConfig.baseUrl,
    framework: 'custom',

    // capabilities: {
    //     'browserName': 'chrome',
    //     unexpectedAlertBehaviour: 'accept',
    //     sharedTestFiles: true,
    //   },

    capabilities: {
      'browserName': 'chrome',
        unexpectedAlertBehaviour: 'accept',
        sharedTestFiles: true,
        'chromeOptions': {
          'excludeSwitches': ['enable-automation'],
          'args': ['--window-size=1366,768']
        }
      },

    // multiCapabilities: [{
    //    'browserName': 'firefox'
    //   }, {
    //    'browserName': 'chrome'
    //  }],

  
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    // require feature files
    specs: [
       '../features/content_headers_a11y.feature' // accepts a glob
    ],

    onPrepare() {

        require('ts-node').register({
            project: './tsconfig.json'})
            browser.ignoreSynchronization = true;
            browser.driver.manage().window().maximize();
        
    
       },

    cucumberOpts: {

      compiler:"ts:ts-node/register",
      strict: true,
      format: ['json:reports/results.json', require.resolve('cucumber-pretty')],
      require: ['../stepdefinitions/content_headers_a11y_steps.ts', '../support/*.ts'],
        tags:'@regression'
        
    },


    onComplete: () => {
      var reporter = require('cucumber-html-reporter');
      var options = { 
        
        theme: 'bootstrap',
        jsonFile: './reports',
        output: './reports.html',
        screenshotsDirectory: './screenshots/',
        storeScreenshots: true,
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "DEV08",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
      };

      reporter.generate(options);
    },

    ignoreUncaughtExceptions: true,
    params: {
        login : {
          user : baseConfig.params.login.user,
          pwd : baseConfig.params.login.pwd
        }
    }
    
  };

 