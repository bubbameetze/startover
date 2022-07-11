import { browser, protractor } from "protractor";
import { generic_class } from "../utils/generic_classes";
import { Content } from "../pages/ContentMain_page";
import { STS } from "../pages/STS_page";
import { Before, Given, Then } from 'cucumber';

var { setDefaultTimeout } = require('cucumber');
var { defineSupportCode } = require('cucumber');

const { Given, When, Then } = require('cucumber');
var fs = require('fs-extra');
fs.emptyDir('screenshots/', function (err) {
        console.log(err);
    });

let helperFun: generic_class = new generic_class();
let ContentMain: Content = new Content();
let STSPage: STS = new STS();

Before({timeout: 60 * 1000}, function() {
    setDefaultTimeout(60 * 1000);
    });    

export class Etrieve {
    constructor() {}
}
