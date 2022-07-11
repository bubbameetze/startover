import { browser, element, by, ElementFinder, ElementArrayFinder} from 'protractor';

var chai = require('chai'); 
var path = require('path');


let expect = chai.expect;

export class Content {
    public unfiled: any;
    public unfiledDocs: any;
    public tree: any;
    public recycleBin: any;
    public keyFields: any;
    public links: any;
    public history: any;

    constructor () {
        this.unfiled = element(by.id('showInbox'));
        this.unfiledDocs = element.all(by.xpath('//li[contains(@class,"inbox__item")]'));
        this.tree = element(by.id('showTree'));
        this.recycleBin = element(by.id('showRecycleBin'));
        this.keyFields = element(by.id('showKeyFields'));
        this.links = element(by.id('showKeyLinkedDocuments'));
        this.history = element(by.id('showDocumentHistory'));

    }

    public async openUnfiledDocument(index) {
        if(this.unfiled.getAttribute('aria-expanded') == 'false') {
            this.unfiled.click();
        }
    //     try {
    //         if(this.unfiledDocs.count() > 1) {
    //             this.unfiledDocs[index].click();
    //         }
    //     }
    }
}