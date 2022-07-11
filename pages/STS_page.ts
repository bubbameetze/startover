import { browser, element, by, ElementFinder} from 'protractor';

var chai = require('chai'); 
var path = require('path');


let expect = chai.expect;

export class STS {
    public logo: any;
    public username: any;
    public password: any;
    public signIn: any;
    public forgotPassword: any;

    constructor () {
        this.logo = element(by.id('appLogo'));
        this.username = element(by.id('UserName'));
        this.password = element(by.id('Password')); 
        this.signIn = element(by.id('checkUser'));
        this.forgotPassword = element(by.xpath('//*[@id="addl-links"]/li/a'));

    }

//     public async verifyHeaderRole (headerID, roleName) {
//         helperFun.waitforelement(this.unfiledHeader)
//         console.log("bubba");
//         this.unfiledHeader.getAttribute('role').then(function(value) {
//             console.log('this is the value after bubba ' + value);
//         });
        
//         element(by.xpath('//*[@id="'+headerID+'"]')).getAttribute('role').then(function(val) {
//             console.log("this is the val = " + val);
//             console.log("this is the rolename = " + roleName);
//             expect(val).to.equal(roleName)
//         });
//     }



//     public async contentLogin (username, password){
//          helperFun.waitforelement(this.username)
//          this.username.click().sendKeys(username)
//          helperFun.waitforelement(this.password)
//          this.password.click().sendKeys(password)
//          helperFun.waitforelement(this.login)
//          this.login.click();
//          browser.sleep(2000);
//     }

//     public async keyfield (){
//         helperFun.waitforelement(this.menu)
//         this.menu.click();
//         helperFun.waitforelement(this.keyfields)
//         this.keyfields.click();
//         helperFun.waitforelement(this.newkeyField)
//         this.newkeyField.click();
//         browser.sleep(2000);

//    }

//    public async createkeyfield (name){
//         browser.sleep(2000);
//         helperFun.waitforelement(this.keyfieldname)
//         this.keyfieldname.click().clear()
//         helperFun.waitforelement(this.keyfieldname)
//         this.keyfieldname.sendKeys(name)
//         browser.sleep(2000);
//         helperFun.waitforelement(this.add)
//         this.add.click();
//         browser.sleep(2000);

// }

// public async searchFeild(name){
//     helperFun.waitforelement(this.search)
//     this.search.click().sendKeys(name)
//     helperFun.waitforelement(this.selectKey);
//     this.selectKey.click();
//     browser.sleep(2000);
// }

// public keyfieldName(noOfKeyfields){
//    var randomkeyfieldnames = []
//    for(var i = 0; i < noOfKeyfields; i++) {
//     randomkeyfieldnames.push(".AutoTest" +i+ helperFun.randomDataGenerator())
//    }
//  return randomkeyfieldnames;
// }

// public async rule(){
//     helperFun.waitforelement(this.rules)
//     this.rules.click()
//     helperFun.waitforelement(this.default)
//     this.default.click()
//     helperFun.waitforelement(this.defaultValue)
//     this.defaultValue.click().sendKeys("Automation");
//     helperFun.waitforelement(this.apply)
//     this.apply.click()
//     browser.sleep(2000);
// }

// public async numberProperties(name){
//     helperFun.waitforelement(this.menu)
//     this.menu.click();
//     helperFun.waitforelement(this.keyfields)
//     this.keyfields.click();
//     helperFun.waitforelement(this.search)
//     this.search.click().sendKeys(name)
//     helperFun.waitforelement(this.selectKey);
//     this.selectKey.click();
//     helperFun.waitforelement(this.addProperties)
//     this.addProperties.click()
//     helperFun.waitforelement(this.text)
//     this.text.click()
//     helperFun.waitforelement(this.number);
//     this.number.click();
//     helperFun.waitforelement(this.rules)
//     this.rules.click()
//     helperFun.waitforelement(this.default)
//     this.default.click()
//     helperFun.waitforelement(this.defaultValue)
//     this.defaultValue.click().sendKeys("35464");
//     browser.sleep(2000)
//     helperFun.waitforelement(this.apply)
//     this.apply.click()
//     browser.sleep(2000);
// }

// public async dateProperties(name){
//     helperFun.waitforelement(this.menu)
//     this.menu.click();
//     helperFun.waitforelement(this.keyfields)
//     this.keyfields.click();
//     helperFun.waitforelement(this.search)
//     this.search.click().sendKeys(name)
//     helperFun.waitforelement(this.selectKey);
//     this.selectKey.click();
//     helperFun.waitforelement(this.addProperties)
//     this.addProperties.click()
//     helperFun.waitforelement(this.text)
//     this.text.click()
//     helperFun.waitforelement(this.date);
//     this.date.click();
//     helperFun.waitforelement(this.rules)
//     this.rules.click()
//     helperFun.waitforelement(this.default)
//     this.default.click()
//     helperFun.waitforelement(this.defaultValue)
//     this.defaultValue.click().sendKeys("5/26/2021");
//     browser.sleep(2000)
//     helperFun.waitforelement(this.apply)
//     this.apply.click()
//     browser.sleep(2000);
// }

// public async decimalProperties(name){
//     helperFun.waitforelement(this.menu)
//     this.menu.click();
//     helperFun.waitforelement(this.keyfields)
//     this.keyfields.click();
//     helperFun.waitforelement(this.search)
//     this.search.click().sendKeys(name)
//     helperFun.waitforelement(this.selectKey);
//     this.selectKey.click();
//     helperFun.waitforelement(this.addProperties)
//     this.addProperties.click()
//     helperFun.waitforelement(this.text)
//     this.text.click()
//     helperFun.waitforelement(this.decimal);
//     this.decimal.click();
//     helperFun.waitforelement(this.rules)
//     this.rules.click()
//     helperFun.waitforelement(this.default)
//     this.default.click()
//     helperFun.waitforelement(this.defaultValue)
//     this.defaultValue.click().sendKeys("0.0001");
//     helperFun.waitforelement(this.apply)
//     this.apply.click()
//     browser.sleep(2000);
// }

// public async moneyProperties(name){
//     helperFun.waitforelement(this.menu)
//     this.menu.click();
//     helperFun.waitforelement(this.keyfields)
//     this.keyfields.click();
//     helperFun.waitforelement(this.search)
//     this.search.click().sendKeys(name)
//     helperFun.waitforelement(this.selectKey);
//     this.selectKey.click();
//     helperFun.waitforelement(this.addProperties)
//     this.addProperties.click()
//     helperFun.waitforelement(this.text)
//     this.text.click()
//     browser.sleep(2000)
//     helperFun.waitforelement(this.money);
//     this.money.click();
//     browser.sleep(2000)
//     helperFun.waitforelement(this.rules)
//     this.rules.click()
//     browser.sleep(2000)
//     helperFun.waitforelement(this.default)
//     this.default.click()
//     helperFun.waitforelement(this.defaultValue)
//     this.defaultValue.click().sendKeys("$1250");
//     helperFun.waitforelement(this.apply)
//     this.apply.click()
//     browser.sleep(2000);
// }


// public async doctype (doc){
//     helperFun.waitforelement(this.menu)
//     this.menu.click();
//     helperFun.waitforelement(this.doctypes)
//     this.doctypes.click();
//     helperFun.waitforelement(this.createDocTyoe)
//     this.createDocTyoe.click();
//     helperFun.waitforelement(this.inputDoc)
//     this.inputDoc.click().sendKeys(doc)
//     browser.sleep(3000)
//     helperFun.waitforelement(this.add)
//     this.add.click();
//     helperFun.waitforelement(this.search)
//     this.search.click().sendKeys(doc)
//     helperFun.waitforelement(this.selectKey);
//     this.selectKey.click();
//     helperFun.waitforelement(this.addKey)
//     this.addKey.click();
//     browser.sleep(2000);

// }

// public async addTypes(names){
//     for(var i = 0; i < 1; i++) {
//     browser.sleep(2000)
//     helperFun.waitforelement(this.enterKeyfield)
//     this.enterKeyfield.click().clear();
//     browser.sleep(2000)
//     this.enterKeyfield.click().sendKeys(names[i])
//     helperFun.waitforelement(this.select)
//     this.select.click();
// }
// return browser.sleep(1000)
// }

// ////span[@class="list-view-item-title" and contains(., "")]

// public async createArea (name){
//     helperFun.waitforelement(this.menu)
//     this.menu.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.area)
//     this.area.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.addArea)
//     this.addArea.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.areaName)
//     this.areaName.click().sendKeys(name)
//     browser.sleep(1000)
//     helperFun.waitforelement(this.add)
//     this.add.click();
//     helperFun.waitforelement(this.search)
//     this.search.click().sendKeys(name)
//     helperFun.waitforelement(this.selectKey);
//     this.selectKey.click();
//     browser.sleep(2000);

// }


// public async addFolderDoc(name){
//     helperFun.waitforelement(this.newFolderLevel)
//     this.newFolderLevel.click();
//     helperFun.waitforelement(this.folderLevel)
//     this.folderLevel.click();
//     helperFun.waitforelement(this.folderName)
//     this.folderName.click().sendKeys(name)
//     helperFun.waitforelement(this.save)
//     this.save.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.areaDocType )
//     this.areaDocType.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.addAreaDoc )
//     this.addAreaDoc.click();
//     helperFun.waitforelement(this.searchDoc)
//     this.searchDoc.click().sendKeys(name)
//     helperFun.waitforelement(this.addDocArea)
//     this.addDocArea.click();
//     browser.sleep(2000);
    
// }

// public async existingArea(area){
//     helperFun.waitforelement(this.search)
//     this.search.click().sendKeys(area);
//     browser.sleep(1000);
//     helperFun.waitforelement(this.selectKey);
//     this.selectKey.click();
//     browser.sleep(2000);
// }

// public async selectArea(){
//     browser.sleep(2000);
//     helperFun.waitforelement(this.search)
//     this.search.click().sendKeys("TestArea");
//     browser.sleep(2000);
//     helperFun.waitforelement(this.edit);
//     this.edit.click();
//     browser.sleep(2000);
//     for(var i =1; i<=5; i++){
//     var selectArea = element(by.xpath('(//span[contains(., "TestArea")])['+i+']'));
//     helperFun.waitforelement(selectArea);
//     selectArea.click();
//     browser.sleep(1000);
//     }
//     browser.sleep(1000);
// }

// public async batchDelete(){
//     browser.sleep(2000);
//     helperFun.waitforelement(this.delete);
//     this.delete.click();
//     var myAlert = browser.switchTo().alert();
//     myAlert.accept();
//     browser.sleep(2000);
// }

// public async clickExistingArea(name){
//     helperFun.waitforelement(this.search)
//     this.search.click().sendKeys(name);
//     browser.sleep(1000);
//     helperFun.waitforelement(this.selectKey);
//     this.selectKey.click();
//     browser.sleep(2000);
// }

// public async unassociateDoc(name){
//     helperFun.waitforelement(this.menu)
//     this.menu.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.area)
//     this.area.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.search)
//     this.search.click().sendKeys(name);
//     browser.sleep(1000);
//     helperFun.waitforelement(this.selectKey);
//     this.selectKey.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.areaDocType )
//     this.areaDocType.click();
//     browser.sleep(2000);
//     browser.refresh()
//     browser.sleep(5000)
//     var selectDocument = element(by.xpath('//*[@type="checkbox"]'));
//     helperFun.waitforelement(selectDocument);
//     selectDocument.click();
//     browser.sleep(2000);
// }

// public async clickExisArea(area){
//     helperFun.waitforelement(this.search)
//     this.search.click().sendKeys(area);
//     browser.sleep(1000);
//     helperFun.waitforelement(this.selectKey);
//     this.selectKey.click();
//     browser.sleep(2000);
// }

// public async clickAreaexisting(){
//     helperFun.waitforelement(this.search)
//     this.search.click().sendKeys(".Automation");
//     browser.sleep(1000);
//     helperFun.waitforelement(this.selectKey);
//     this.selectKey.click();
//     browser.sleep(2000);
// }

// public async clickexistingarea(area){
//     browser.sleep(1000)
//     helperFun.waitforelement(this.search)
//     this.search.click().sendKeys(area);
//     browser.sleep(1000);
//     helperFun.waitforelement(this.selectKey);
//     this.selectKey.click();
//     browser.sleep(2000);
// }

// public async selectCreatedArea(area){
//     helperFun.waitforelement(this.search)
//     this.search.click().sendKeys(area);
//     browser.sleep(1000);
//     helperFun.waitforelement(this.selectKey);
//     this.selectKey.click();
//     browser.sleep(2000);
// }

// public async selectCategory(area){
//     helperFun.waitforelement(this.searchCategory)
//     this.searchCategory.click().sendKeys(area);
//     browser.sleep(1000);
//     helperFun.waitforelement(this.selectKey);
//     this.selectKey.click();
//     browser.sleep(2000);
// }

// public async addDocCategory(area){
//     browser.sleep(2000);
//     helperFun.waitforelement(this.addAreaDoc )
//     this.addAreaDoc.click();
//     helperFun.waitforelement(this.searchDoc)
//     this.searchDoc.click().sendKeys(area)
//     browser.sleep(2000);
//     helperFun.waitforelement(this.addDocArea)
//     this.addDocArea.click();
//     browser.sleep(2000);
// }

// public async unassociateCat(area){
//     browser.sleep(2000);
//     helperFun.waitforelement(this.addDocArea)
//     this.addDocArea.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.gearIcon)
//     this.gearIcon.click();
//     browser.sleep(2000);
// }


// public async updateFolder(){
//     helperFun.waitforelement(this.update)
//     this.update.click();
//     var myAlert = browser.switchTo().alert();
//     myAlert.accept();
//     browser.sleep(2000);
//     var myAlert = browser.switchTo().alert();
//     myAlert.accept();
//     browser.sleep(4000);
//     helperFun.waitforelement(this.application);
//     this.application.click();
//     browser.sleep(2000);
// }

// public async addPermissiontoUser(area){
//     //browser.driver.actions().mouseDown()
//     // .mouseMove({x: -350, y: -150})
//     // .perform()
   
//     helperFun.waitforelement(this.etriveContent)
//     this.etriveContent.click();
//     browser.sleep(5000);
//     var gotoArea = element(by.xpath('//h4[contains(., "'+area+'")]'));
//     helperFun.waitforelement(gotoArea);
//     gotoArea.click();
//     // browser.sleep(2000);
//     // helperFun.waitforelement(this.changePermission);
//     // this.changePermission.click();
//     // browser.sleep(2000);
//     // helperFun.waitforelement(this.changePermissionUnfiled);
//     // this.changePermissionUnfiled.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.removeAdd);
//     this.removeAdd.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.removeAddUnfiled);
//     this.removeAddUnfiled.click();
//     browser.sleep(2000);
// }

// public async signout(){
//     helperFun.waitforelement(this.dropdown)
//     this.dropdown.click()
//     browser.sleep(2000);
//     helperFun.waitforelement(this.clicksignout)
//     this.clicksignout.click()
//     browser.sleep(2000);
// }

// public async Import(){
//     browser.sleep(2000);
//     helperFun.waitforelement(this.runImport);
//     this.runImport.click();
//     var myAlert = browser.switchTo().alert();
//     myAlert.accept();
//     browser.sleep(2000);
// }

// public async ImportFile(area){
//     helperFun.waitforelement(this.importaddarea);
//     this.importaddarea.click();
//     browser.sleep(1000);
//     var selectVal = element(by.xpath('//option[contains(., "'+area+'")]'))
//     helperFun.waitforelement(selectVal);
//     selectVal.click();
//     browser.sleep(1000);
//     helperFun.waitforelement(this.runImport);
//     this.runImport.click();
//     var myAlert = browser.switchTo().alert();
//     myAlert.accept();
//     browser.sleep(2000);
// }

// //a[@data-bind="click: $root.getControlFile, clickBubble: false, text: StrippedName, title: FullName" and contains(., "/Image Types3")]

// public async downloadControl(){
//     var controlFile = element(by.xpath('//a[@data-bind="click: $root.getControlFile, clickBubble: false, text: StrippedName, title: FullName" and contains(., "/Image Types3")]'));
//     helperFun.waitforelement(controlFile);
    
    
//     controlFile.isDisplayed().then(function (isVisible) {
//         if (isVisible) {
//             console.log ('Download control file is Present')
//         } else {
//             console.log ('Download control file is not Present')
//         }
//     });
//     browser.sleep(2000);
//     controlFile.click();
//     browser.sleep(2000);

// }

// public async downloadControlemail(){
//     var controlFile = element(by.xpath('//a[@data-bind="click: $root.getControlFile, clickBubble: false, text: StrippedName, title: FullName" and contains(., "/eComm - eDocsFinAid-282478-_(eDocsFinAid@elon.edu)__03212022_165326_BN8PR07MB59850F7384A06165BCDDC036A5169@BN8PR07MB5985.namprd07.prod.outlook.com.txt")]'));
//     helperFun.waitforelement(controlFile);
    
    
//     controlFile.isDisplayed().then(function (isVisible) {
//         if (isVisible) {
//             console.log ('Download control file is Present')
//         } else {
//             console.log ('Download control file is not Present')
//         }
//     });
//     browser.sleep(2000);
//     controlFile.click();
//     browser.sleep(2000);

// }

// public async disabledControlFile(){
//     var controlFiledis = element(by.xpath('(//span[@data-i18n="[title]Imports.Management.Cannot_Download_Control_File"])[1]'));
//     helperFun.waitforelement(controlFiledis);
//     browser.actions().mouseMove(controlFiledis).mouseMove(controlFiledis).perform();
//     browser.sleep(2000);
//     controlFiledis.isPresent().then(function (isVisible){
//         if (isVisible) {
//             console.log ('Diasabled control fIle')
//         } else {
//             console.log ('Download control file')
//         }
//     });
//     browser.sleep(2000);

// }

// public async downloadControlexist(){
//     var controlFile = element(by.xpath('(//a[@data-bind="click: $root.getControlFile, clickBubble: false, text: StrippedName, title: FullName" and contains(., "/Image Types3")])[1]'));
//     controlFile.isPresent().then(function (isVisible){
//         if (isVisible) {
//             console.log ('Download control file is Present')
//         } else {
//             console.log ('Download control file is not Present')
//         }
//     });

// }

// public async checkOCR(){
//     this.ocrElement.isDisplayed().then(function (isVisible) {
//         if (isVisible) {
//             console.log ('OCR is Present')
//         } else {
//             console.log ('OCR is Hidden')
//         }
//     });
// }

// public async importcheck(){
//     let flag = element(by.xpath('(//*[@class="col-importname"])[4]'))
//     helperFun.waitforelement(flag);
//     flag.getText().then(function(text){
//         //expect(text).to.include("testImport2")
//         console.log("Import history---------- "+ text)
//         return text;
//     })

// }

// public async reloadpage(){
//     browser.sleep(2000)
//         browser.refresh()
//         browser.sleep(2000)
//         browser.refresh()
//         browser.sleep(2000)
//         browser.refresh()
//         browser.sleep(2000)
//         browser.refresh()
//         browser.sleep(3000)

//     }

// public async import100mb(){
//     browser.sleep(3000)
//     browser.sleep(2000)
//     browser.refresh()
//     browser.sleep(2000)
//     browser.refresh()
//     browser.sleep(2000)
//     browser.refresh()
//     browser.sleep(2000)
//     browser.refresh()
//     browser.sleep(2000)    
//     let flag = element(by.xpath('(//span[@data-bind="text: Status.Name"])[1]'))
//     helperFun.waitforelement(flag);
//     flag.getText().then(function(text){
//         expect(text).to.include("Completed")
//         console.log("Import Status---------- "+ text)
//         return text;
//     })
//     browser.sleep(3000)
// }

// public async importcheckstatus(){
//     browser.sleep(3000)
//     let flag = element(by.xpath('(//span[@data-bind="text: Status.Name"])[1]'))
//     helperFun.waitforelement(flag);
//     flag.getText().then(function(text){
//         //expect(text).to.include("Completed")
//         console.log("Import Status is ---------- "+ text)
//         return text;
//     })

// }

// public async importverify(){
//     let flag = element(by.xpath('(//*[@class="col-importname"])[4]'))
//     helperFun.waitforelement(flag);
//     flag.getText().then(function(text){
//        // expect(text).to.include("testImport1")
//         console.log("Import history---------- "+ text)
//         return text;
//     })

// }

// public async purge(){
//     browser.sleep(1000);
//     let purgeimport = element(by.xpath('(//input[@title="Add to purge list"])[1]'))
//     helperFun.waitforelement(purgeimport);
//     purgeimport.click()
//     browser.sleep(1000);
//     let purgeselected = element(by.xpath('//button[contains(., "Purge Selected")]'))
//     helperFun.waitforelement(purgeselected);
//     purgeselected.click()
//     browser.sleep(2000);
// }

// public async errorcheck(){
//     let flag = element(by.xpath('(//*[@class="col-area"])[4]'))
//     browser.sleep(2000);
//     helperFun.waitforelement(flag);
//     flag.click();
//     browser.sleep(2000);
//     // let error = element(by.xpath('//td[contains(., "Document 1")]'))
//     // helperFun.waitforelement(error);
//     // error.getText().then(function(error){
//     //     console.log("Import history---------- "+ error)
//     //     expect(error).to.include("Document 1; testText is a Required Field that wasn't supplied. Value: ''.")
//     //     return error;
//    // })

// }

// public async doclink(){
//     let docerror = element(by.xpath('(//span[contains(., ".../Image Types3.txt")])[1]'))
//     browser.sleep(2000);
//     helperFun.waitforelement(docerror);
//     docerror.click();
//     browser.sleep(2000);

// }

// public async gotoDocArea(){
//     browser.sleep(2000);
//     let clickDocID = element(by.xpath('(//a[@data-bind="attr: { href: DocumentURL , title: DocumentID }, text: DocumentID"])[1]'))
//     helperFun.waitforelement(clickDocID);
//     clickDocID.click();
//     browser.sleep(2000);


// }

// public async monitorFlag(){
//     let flag = element(by.xpath('(//select[contains(., "False")])[1]'))
//     helperFun.waitforelement(flag);
//     flag.getText().then(function(text){
//         //expect(text).to.include("Testdoc")
//         console.log("monitor Flag is---------- "+ text)
//         return text;
//     })

// }

// public async monitorFlagTrue(){
//     let flag = element(by.xpath('(//select[contains(., "False")])[1]'))
//     helperFun.waitforelement(flag);
//     flag.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.trueFlag);
//     this.trueFlag.click();
//     browser.sleep(2000);
// }

// public async checkPath(){
//     browser.sleep(1000);
//     this.uncPath.isEnabled().then(function (isVisible) {
//     if (isVisible) {
//         console.log ('UNC Path is editable')
//     } else {
//         console.log ('UNC Path is not editable')
//     }
// });
// }

// public async file(){
//     browser.sleep(1000);
//     this.fileFIlter.isEnabled().then(function (isVisible) {
//     if (isVisible) {
//         console.log ('File Filter is editable')
//     } else {
//         console.log ('File Filter not editable')
//     }
// });
// }

// public async backup(){
//     browser.sleep(1000);
//     this.BackupPath.isEnabled().then(function (isVisible) {
//     if (isVisible) {
//         console.log ('Back Up Path is editable')
//     } else {
//         console.log ('Back Up Path  not editable')
//     }
// });
// }

// public async record(){
//     browser.sleep(1000);
//     this.recordDelimiter.isEnabled().then(function (isVisible) {
//     if (isVisible) {
//         console.log ('Back Up Path is editable')
//     } else {
//         console.log ('Back Up Path  not editable')
//     }
// });

// let flag = element(by.xpath('(//select[contains(., "True")])[1]'))
//     helperFun.waitforelement(flag);
//     flag.click();
//     browser.sleep(2000);
//     let Falseflag = element(by.xpath('(//option[contains(., "False")])[1]'))
//     helperFun.waitforelement(Falseflag);
//     Falseflag.click();
//     browser.sleep(2000);
// }

// public async updFolder(){
//     helperFun.waitforelement(this.update)
//     this.update.click();
//     var myAlert = browser.switchTo().alert();
//     myAlert.accept();
//     browser.sleep(2000);
//     var myAlert = browser.switchTo().alert();
//     myAlert.accept();
//     browser.sleep(4000);
//     helperFun.waitforelement(this.application);
//     this.application.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.menu)
//     this.menu.click();
//     browser.sleep(1000)
    
// }

// public async deleteFolder(){
//     for(var i = 0; i < 3; i++) {
//     helperFun.waitforelement(this.deleteFol)
//     this.deleteFol.click();
//     var myAlert = browser.switchTo().alert();
//     myAlert.accept();
//     browser.sleep(2000);
//     }
// }

// public async deleteFolderforArea(){
//     for(var i = 0; i < 2; i++) {
//     helperFun.waitforelement(this.deleteFol)
//     this.deleteFol.click();
//     var myAlert = browser.switchTo().alert();
//     myAlert.accept();
//     browser.sleep(2000);
//     }
// }

// public async folderDelete(){
//     helperFun.waitforelement(this.deleteFol)
//     this.deleteFol.click();
//     var myAlert = browser.switchTo().alert();
//     myAlert.accept();
//     browser.sleep(2000);

// }

// public async areaTree(){
//     helperFun.waitforelement(this.application);
//     this.application.click();
//     // helperFun.waitforelement(this.close)
//     // this.close.click();
//     browser.sleep(5000);
//     helperFun.waitforelement(this.autoArea);
//     this.autoArea.click();
//     helperFun.waitforelement(this.openFolder);
//     this.openFolder.click();
//     helperFun.waitforelement(this.openSecondFolderLevel);
//     this.openSecondFolderLevel.click();
//     helperFun.waitforelement(this.thirdFolderLevel);
//     this.thirdFolderLevel.click();
//     helperFun.waitforelement(this.uploadedDoc);
//     this.uploadedDoc.getText().then(function(text){
//         //expect(text).to.include("Testdoc")
//         console.log("Document name" + text)
//         return text;
//     })
//     helperFun.waitforelement(this.selectfile);
//     this.selectfile.click();
    
    
// }

// public async importTree(){
//     helperFun.waitforelement(this.application);
//     this.application.click();
//     // helperFun.waitforelement(this.close)
//     // this.close.click();
//     browser.sleep(5000);
//     var Area = element(by.xpath('(//*[@class="koTree-icon koTree-node-toggle icon-toggle-arrow"])[1]'));
//     helperFun.waitforelement(Area);
//     Area.click();
//     helperFun.waitforelement(this.openFolder);
//     this.openFolder.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.selectimportfile);
//     this.selectimportfile.click();
//     browser.sleep(2000);
// }

// public async treeStructure(){
//     helperFun.waitforelement(this.application);
//     this.application.click();
//     // helperFun.waitforelement(this.close)
//     // this.close.click();
//     browser.sleep(5000);
//     var Area = element(by.xpath('(//*[@class="koTree-icon koTree-node-toggle icon-toggle-arrow"])[1]'));
//     helperFun.waitforelement(Area);
//     Area.click();
//     helperFun.waitforelement(this.openFolder);
//     this.openFolder.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.selectimportfile);
//     this.selectimportfile.click();
//     browser.sleep(2000);
// }

// public async Tree(){
//     helperFun.waitforelement(this.application);
//     this.application.click();
//     // helperFun.waitforelement(this.close)
//     // this.close.click();
//     browser.sleep(5000);
//     helperFun.waitforelement(this.automationArea);
//     this.automationArea.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.openFolder);
//     this.openFolder.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.uploadedDoc);
//     this.uploadedDoc.getText().then(function(text){
//         //expect(text).to.include("Testdoc")
//         console.log("Document name" + text)
//         return text;
//     })
//     browser.sleep(2000);
//     helperFun.waitforelement(this.selectfile);
//     this.selectfile.click();
    
    
// }


// public async oldTree(){
//     helperFun.waitforelement(this.application);
//     this.application.click();
//     // helperFun.waitforelement(this.close)
//     // this.close.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.areaFolder);
//     this.areaFolder.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.openFolder);
//     this.openFolder.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.selectold);
//     this.selectold.click();   
//     return browser.sleep(2000);
// }

// public async old(){
//     helperFun.waitforelement(this.application);
//     this.application.click();
//     // helperFun.waitforelement(this.close)
//     // this.close.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.areaFolder);
//     this.areaFolder.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.openFolder);
//     this.openFolder.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.openSecondFolderLevel);
//     this.openSecondFolderLevel.click();
//     browser.sleep(4000);
//     helperFun.waitforelement(this.selectold);
//     this.selectold.click();   
//     return browser.sleep(2000);
// }


// public async areaTreeStructure(){
//     helperFun.waitforelement(this.application);
//     this.application.click();
//     // helperFun.waitforelement(this.close)
//     // this.close.click();
//     browser.sleep(4000);
//     helperFun.waitforelement(this.autoArea);
//     this.autoArea.click();
//     helperFun.waitforelement(this.openFolder);
//     this.openFolder.click();
//     helperFun.waitforelement(this.openSecondFolderLevel);
//     this.openSecondFolderLevel.click();
//     helperFun.waitforelement(this.thirdFolderLevel);
//     this.thirdFolderLevel.click();
//     helperFun.waitforelement(this.selectfiledoc);
//     this.selectfiledoc.click();
    
    
// }

// public async checkFields(){
//     helperFun.waitforelement(this.checkDocType);
//     this.checkDocType.click();
//     helperFun.waitforelement(this.selectDocValue);
//     this.selectDocValue.getText().then(function(text){
//         //expect(text).to.include("Testdoc")
//         console.log("Document Type name------------" + text)
//         return text;
//     })
//     this.selectDocValue.click();
//     helperFun.waitforelement(this.checkKeyField);
//     this.checkKeyField.click();
//     helperFun.waitforelement(this.selectKeyValue);
//     this.selectKeyValue.getText().then(function(text){
//         //expect(text).to.include("test key field")
//         console.log("Keyfield Field value----------" + text)
//         return text;
//     })
//     this.selectKeyValue.click();
    
    
// }

// public async selectOldDoc(){
//     helperFun.waitforelement(this.checkDocTypeold);
//     this.checkDocTypeold.click();
//     helperFun.waitforelement(this.selectDocValue)
//     this.selectDocValue.click();
// }

// public async selectNewDoc(){
//         helperFun.waitforelement(this.checkDocType);
//         this.checkDocType.click();
//         helperFun.waitforelement(this.selectNewDocumentType);
//         this.selectNewDocumentType.click();
// }

// public async selectNewDocement(){
//     helperFun.waitforelement(this.checkDocType);
//     this.checkDocType.click();
//     helperFun.waitforelement(this.selectNewDocType);
//     this.selectNewDocType.click()
//     browser.sleep(1000)
//     // helperFun.waitforelement(this.sendText);
//     // this.sendText.click().sendKeys("Test Text Value")
//     browser.sleep(1000)
//     helperFun.waitforelement(this.sendConstraint);
//     this.sendConstraint.click().sendKeys("1005")
//     browser.sleep(1000)
//     helperFun.waitforelement(this.sendIsrequired);
//     this.sendIsrequired.click().sendKeys("Isrequired")
//     browser.sleep(1000)
//     helperFun.waitforelement(this.sendMaxlenght);
//     this.sendMaxlenght.click().sendKeys("rghfhfjdkkdlkdldldldldlldldldyeiwomzndnalapfifj")
//     browser.sleep(1000)
//     helperFun.waitforelement(this.sendMultiLine);
//     this.sendMultiLine.click().sendKeys("testmultiLine1, testmultiline2")
//     browser.sleep(1000)
//     helperFun.waitforelement(this.checkoldDocType);
//     this.checkoldDocType.click();
//     browser.sleep(2000)
//     helperFun.waitforelement(this.selectNewKeyField);
//     this.selectNewKeyField.click();
// }

// public async selectoldDocement(){
//     helperFun.waitforelement(this.checkoldDocType);
//     this.checkoldDocType.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.selectNewKeyField);
//     this.selectNewKeyField.click();
// }

// public async selectNewKey(){
//     helperFun.waitforelement(this.checkDocType);
//     this.checkDocType.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.selectNewDocType);
//     this.selectNewDocType.click();
// }

// public async checkTree(){
//     helperFun.waitforelement(this.application);
//     this.application.click();
//     // helperFun.waitforelement(this.close)
//     // this.close.click();
//     browser.sleep(5000);
//     }

// public async refreshpage(folder){
//     helperFun.waitforelement(this.close)
//     this.close.click();
//     browser.sleep(5000);
//     helperFun.waitforelement(this.autoArea);
//     this.autoArea.click();
//     helperFun.waitforelement(this.openFolder);
//     this.openFolder.click();
//     helperFun.waitforelement(this.openSecondFolderLevel);
//     this.openSecondFolderLevel.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.selectfol);
//     this.selectfol.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.unfiled);
//     this.unfiled.click();
//     helperFun.waitforelement(this.unfiledDoc);
//     this.unfiledDoc.getText().then(function(text){
//         expect(text).to.include("Testdoc")
//         console.log("Document name ---------- "+ text)
//         return text;
//     })
// }

// public async validateSplit(area, look, doc1, folder){
//     browser.sleep(2000);
//     helperFun.waitforelement(this.application);
//     this.application.click();
//     browser.sleep(2000);
//     let element1 = element(by.xpath('//span[@class="tree-node__header__label" and contains (., "'+area+'")]'))
//     browser.sleep(2000)
//     browser.actions().doubleClick(element1.getWebElement()).perform();
//     browser.sleep(2000);
//     let secondFolder = element(by.xpath('//span[@class="tree-node__header__label" and contains(., "'+look+'")]'))
//     browser.sleep(2000)
//     browser.actions().doubleClick(secondFolder.getWebElement()).perform();
//     browser.sleep(1000)
//     let thirdFolder = element(by.xpath('//span[@class="tree-node__header__label" and contains(., "'+doc1+'")]'))
//     browser.sleep(1000)
//     browser.actions().doubleClick(thirdFolder.getWebElement()).perform();
//     browser.sleep(2000);
//     let secondAreaDoc = element(by.xpath('//span[@class="tree-node__header__label" and contains(., "'+folder+'")]'))
//     browser.sleep(1000)
//     secondAreaDoc.click()
//     browser.sleep(2000)

// }

// public async secondAreaAutomation(area, doc1, folder){
//     browser.sleep(2000);
//     helperFun.waitforelement(this.application);
//     this.application.click();
//     browser.sleep(2000);
//     let element1 = element(by.xpath('//span[@class="tree-node__header__label" and contains (., "'+area+'")]'))
//     browser.sleep(2000)
//     browser.actions().doubleClick(element1.getWebElement()).perform();
//     browser.sleep(2000);
//     let secondFolder = element(by.xpath('//span[@class="tree-node__header__label" and contains(., "'+folder+'")]'))
//     browser.sleep(2000)
//     browser.actions().doubleClick(secondFolder.getWebElement()).perform();
//     browser.sleep(1000)
//     let thirdFolder = element(by.xpath('//span[@class="tree-node__header__label" and contains(., "'+doc1+'")]'))
//     browser.sleep(1000)
//     browser.actions().doubleClick(thirdFolder.getWebElement()).perform();
//     browser.sleep(2000);
//     let secondAreaDoc = element(by.xpath('(//span[@class="tree-node__header__label" and contains(., "'+doc1+'")])[2]'))
//     browser.sleep(1000)
//     secondAreaDoc.click()
//     browser.sleep(2000)

// }


// public async unfile(folder){
//     // helperFun.waitforelement(this.close)
//     // this.close.click();
//     // browser.sleep(5000);
//     helperFun.waitforelement(this.selectAutoArea);
//     this.selectAutoArea.click();
//     helperFun.waitforelement(this.unfiled);
//     this.unfiled.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.unfiledDoc);
//     this.unfiledDoc.getText().then(function(text){
//         expect(text).to.include("Testdoc")
//         console.log("Document name ---------- "+ text)
//         return text;
//     })
// }

// public async checkPermission(){
//     this.attachPage.isEnabled().then(function (isVisible) {
//         if (isVisible) {
//             console.log ('Attach file and Split is enabled')
//         } else {
//             console.log ('Attach file and Split is disabled')
//         }
//     });
// }

// public async checkTreeDocs(area){
//     // helperFun.waitforelement(this.close)
//     // this.close.click();
//     // browser.sleep(5000);
//     var selectVal = element(by.xpath('//span[@class="tree-node__header__label" and contains (.,"'+area+'")]'))
//     helperFun.waitforelement(selectVal);
//     selectVal.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.unfiled);
//     this.unfiled.click();
//     browser.sleep(2000);
//     var unfile1 = element(by.xpath('(//*[@data-keydown="InboxKeyDown"])[1]'))
//     helperFun.waitforelement(unfile1);
//     unfile1.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.unfiledfile);
//     this.unfiledfile.click();
//     helperFun.waitforelement(this.selectNewDocType);
//     this.selectNewDocType.click();
//     browser.sleep(2000);
//     // helperFun.waitforelement(this.lookButton);
//     // this.lookButton.click();
//     // browser.sleep(2000);
//     // helperFun.waitforelement(this.sendLookupValue)
//     // this.sendLookupValue.click().sendKeys("DL 32081200")
//     // browser.sleep(2000);
//     // helperFun.waitforelement(this.saveLookup)
//     // this.saveLookup.click()
//     // browser.sleep(2000);
// }

// public async unfiledocs(area){
//     // helperFun.waitforelement(this.close)
//     // this.close.click();
//     // browser.sleep(5000);
//     var selectVal = element(by.xpath('//span[@class="tree-node__header__label" and contains (.,"'+area+'")]'))
//     helperFun.waitforelement(selectVal);
//     selectVal.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.unfiled);
//     this.unfiled.click();
//     browser.sleep(2000);
//     var unfile1 = element(by.xpath('//*[@data-keydown="InboxKeyDown"]'))
//     helperFun.waitforelement(unfile1);
//     unfile1.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.unfiledfile);
//     this.unfiledfile.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.dlFile);
//     this.dlFile.click();
//     browser.sleep(2000);
//     // helperFun.waitforelement(this.lookButton);
//     // this.lookButton.click();
//     // browser.sleep(2000);
//     // helperFun.waitforelement(this.sendLookupValue)
//     // this.sendLookupValue.click().sendKeys("DL 32081200")
//     // browser.sleep(2000);
//     // helperFun.waitforelement(this.saveLookup)
//     // this.saveLookup.click()
//     // browser.sleep(2000);

//     browser.sleep(3000)
//     helperFun.waitforelement(unfile1);
//     unfile1.click();
//     helperFun.waitforelement(this.unfiledfile);
//     this.unfiledfile.click();
//     helperFun.waitforelement(this.highSchoolFile);
//     this.highSchoolFile.click();
//     browser.sleep(2000);
//     // helperFun.waitforelement(this.lookButton);
//     // this.lookButton.click();
//     // browser.sleep(2000);
//     // this.sendLookupValue.click().sendKeys("Test")
//     // browser.sleep(2000);
//     // helperFun.waitforelement(this.saveLookup)
//     // this.saveLookup.click()
//     browser.sleep(2000)
// }

// public async CheckImageOnly(area){
//     var selectVal = element(by.xpath('//span[@class="tree-node__header__label" and contains (.,"'+area+'")]'))
//     helperFun.waitforelement(selectVal);
//     selectVal.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.unfiled);
//     this.unfiled.click();
//     browser.sleep(2000);
//     var unfile1 = element(by.xpath('//*[@data-keydown="InboxKeyDown"]'))
//     helperFun.waitforelement(unfile1);
//     unfile1.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.unfiledfile);
//     this.unfiledfile.click();
//     var vndoctype = element(by.xpath('//*[@class="select2-result-label" and contains (., "VN Doc")]'))
//     helperFun.waitforelement(vndoctype);
//     vndoctype.click();
//     browser.sleep(2000);
// }

// public async verifyPageNumberInFullViewer(){
//     browser.waitForAngular();
//     var pageNum1 = element(by.xpath("(//div[@class='atala_page_number'])[5]"));
//     browser.executeScript("arguments[0].scrollIntoView();",pageNum1.getWebElement());
//     browser.sleep(1000)
//     pageNum1.isPresent();
// }

// public async auditFilters(){
//     helperFun.waitforelement(this.auditFilter);
//     this.auditFilter.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.auditCategory);
//     this.auditCategory.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.selectImportFilter);
//     this.selectImportFilter.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.auditTypes);
//     this.auditTypes.click();
//     browser.sleep(1000)
// }

// public async auditCreate(){
//     helperFun.waitforelement(this.auditFilter);
//     this.auditFilter.click();
//     browser.sleep(1000)
//     var create = element(by.xpath('(//input[@id="auditTypes"])[1]'))
//     helperFun.waitforelement(create);
//     create.click();
//     browser.sleep(1000)
// }

// public async createCheck(area){
//     var controlFile = element(by.xpath('(//td[contains(., "Created area '+area+'")])[2]')).isPresent();
//     controlFile.then(function(present){
//     expect(present).to.equal(false);
// })
// }

// public async logoutUser(){
//     helperFun.waitforelement(this.dropdown)
//     this.dropdown.click()
//     browser.sleep(1000)
//     helperFun.waitforelement(this.logout);
//     this.logout.click();
//     browser.sleep(1000)
// }

// public async auditText(){
//     helperFun.waitforelement(this.auditMessage);
//     this.auditMessage.click();
//     browser.sleep(1000)
//     this.auditMessage.getText().then(function(text){
//         console.log("Download Control File in Audit: " + text)
//         })
//     browser.sleep(1000)
// }

// public async multipage(area){
//     let element1 = element(by.xpath('//span[@class="tree-node__header__label" and contains (., "'+area+'")]'))
//     browser.sleep(2000)
//     browser.actions().doubleClick(element1.getWebElement()).perform();
//     browser.sleep(2000);
//     let secondFolder = element(by.xpath('//span[@class="tree-node__header__label" and contains(., "Students:")]'))
//     browser.sleep(2000)
//     browser.actions().doubleClick(secondFolder.getWebElement()).perform();
//     browser.sleep(1000)
//     let thirdFolder = element(by.xpath('//span[@class="tree-node__header__label" and contains(., "VN Doc")]'))
//     browser.sleep(1000)
//     browser.actions().doubleClick(thirdFolder.getWebElement()).perform();
//     browser.sleep(2000);
//     let secondAreaDoc = element(by.xpath('(//span[@class="tree-node__header__label" and contains(., "VN Doc")])[2]'))
//     browser.sleep(1000)
//     secondAreaDoc.click()
//     browser.sleep(2000);
// }

// public async addAnnotations(area){
//     // helperFun.waitforelement(this.close)
//     // this.close.click();
//     // browser.sleep(5000);
//     // var selectVal = element(by.xpath('//span[@class="tree-node__header__label" and contains (.,"'+area+'")]'))
//     // helperFun.waitforelement(selectVal);
//     // selectVal.click();
//     // browser.sleep(2000);
//     // helperFun.waitforelement(this.unfiled);
//     // this.unfiled.click();
//     browser.sleep(2000);
//     var unfile1 = element(by.xpath('//span[@class="inbox-document-header"]'))
//     helperFun.waitforelement(unfile1);
//     unfile1.click();
//     browser.sleep(2000);
//     let annotate = element(by.xpath('//button[@id="toggle-annotation-bar"]'))
//     helperFun.waitforelement(annotate)
//     annotate.click()
//     browser.sleep(1000);
//     let stamp = element(by.xpath('//button[@title="Rubber Stamp"]'))
//     helperFun.waitforelement(stamp)
//     stamp.click()
//     browser.sleep(1000);
//     let stamp1 = element(by.xpath('//button[contains(.,"Approved")]'))
//     helperFun.waitforelement(stamp1)
//     stamp1.click()
//     browser.sleep(1000);
//     let stamp2 = element(by.xpath('//*[@class="atala_page_div atala_active_page"]'))
//     helperFun.waitforelement(stamp2)
//     stamp2.click()
//     browser.sleep(1000);
//     helperFun.waitforelement(this.saveAuto);
//     this.saveAuto.click();
//     browser.sleep(1000);
    
// }

// public async Sticky(){
//     browser.sleep(2000);
//     helperFun.waitforelement(this.stickynote);
//     this.stickynote.click();
//     let stamp2 = element(by.xpath('//*[@class="atala_page_div atala_active_page"]'))
//     helperFun.waitforelement(stamp2)
//     stamp2.click()
//     browser.sleep(1000);
//     helperFun.waitforelement(this.highlight);
//     this.highlight.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.color);
//     this.color.click();
//     browser.sleep(2000);
//     stamp2.click()
//     browser.sleep(2000);
//     helperFun.waitforelement(this.rectangle);
//     this.rectangle.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(stamp2)
//     stamp2.click()
//     browser.sleep(1000);
//     helperFun.waitforelement(this.saveAuto);
//     this.saveAuto.click();
//     browser.sleep(1000);
    
// }


// public async splitDocument(){
//     browser.sleep(2000);
//     helperFun.waitforelement(this.rotatePage);
//     this.rotatePage.click();
//     browser.sleep(1000);
//     helperFun.waitforelement(this.attachPage);
//     this.attachPage.click();
//     browser.sleep(2000);
//     var fileToUpload = '../dark.jpg';
//     var absolutePath = path.resolve(__dirname, fileToUpload);
//     var fileElem = element(by.css('input[type="file"]'));
//     browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
//     fileElem.sendKeys(absolutePath);
//     browser.sleep(3000);
//     browser.refresh();
//     browser.sleep(3000);
//     helperFun.waitforelement(this.splitDoc);
//     this.splitDoc.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.split2Doc);
//     this.split2Doc.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.next);
//     this.next.click();
//     browser.sleep(2000);
//     browser.sleep(2000);
//     helperFun.waitforelement(this.split);
//     this.split.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.completeSplit);
//     this.completeSplit.click();
//     browser.sleep(2000);
    
// }

// public async splitDocuments(){
//     helperFun.waitforelement(this.attachPage);
//     this.attachPage.click();
//     browser.sleep(2000);
//     var fileToUpload = '../dark.jpg';
//     var absolutePath = path.resolve(__dirname, fileToUpload);
//     var fileElem = element(by.css('input[type="file"]'));
//     browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
//     fileElem.sendKeys(absolutePath);
//     browser.sleep(3000);
//     browser.refresh();
//     browser.sleep(3000);
//     helperFun.waitforelement(this.splitDoc);
//     this.splitDoc.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.split2Doc);
//     this.split2Doc.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.next);
//     this.next.click();
//     browser.sleep(2000);
//     browser.sleep(2000);
//     helperFun.waitforelement(this.split);
//     this.split.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.completeSplit);
//     this.completeSplit.click();
//     browser.sleep(2000);
    
// }

// public async disableSplit(){
//     browser.sleep(1000);
//     helperFun.waitforelement(this.attachPage);
//     this.attachPage.click();
//     browser.sleep(2000);
//     var fileToUpload = '../dark.jpg';
//     var absolutePath = path.resolve(__dirname, fileToUpload);
//     var fileElem = element(by.css('input[type="file"]'));
//     browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
//     fileElem.sendKeys(absolutePath);
//     browser.sleep(3000);
//     browser.refresh();
//     browser.sleep(3000);
//     expect(this.splitDoc.isDisplayed()).toBe(false);
//     browser.sleep(3000); 
// }



// public async attachdoc() {
//     browser.sleep(2000);
//     var unfile1 = element(by.xpath('//span[@class="inbox-document-header"]'))
//     helperFun.waitforelement(unfile1);
//     unfile1.click();
//     browser.sleep(2000);

// }

// public async navigate() {
//     browser.sleep(2000);
//     var navigate = element(by.xpath('//*[@class="col-importname" and contains (., "Bubba")]'))
//     helperFun.waitforelement(navigate);
//     navigate.click();
//     browser.sleep(2000);
//     this.runImport.isDisplayed().then(function (isVisible) {
//         if (isVisible) {
//             console.log ('Run Import is Present')
//         } else {
//             console.log ('Run Import is not present')
//         }
//     });

// }

// public async backButton() {
//     browser.sleep(2000);
//     var navigate = element(by.xpath('//*[@id="content"]/div/section/nav/div[1]/div[1]'))
//     helperFun.waitforelement(navigate);
//     browser.actions().doubleClick(navigate.getWebElement()).perform();
//     //navigate.click();
//     browser.sleep(3000);
//     var importConfig = element(by.xpath('//span[contains (., "New Import Configuration")]'))
//     importConfig.isDisplayed().then(function (isVisible) {
//         if (isVisible) {
//             console.log ('back button takes to import configuration page')
//         } else {
//             console.log ('back button is not working')
//         }
//     });

// }


// public async splitDocu(){
//     browser.sleep(1000);
//     helperFun.waitforelement(this.attachPage);
//     this.attachPage.click();
//     browser.sleep(2000);
//     var fileToUpload = '../dark.jpg';
//     var absolutePath = path.resolve(__dirname, fileToUpload);
//     var fileElem = element(by.css('input[type="file"]'));
//     browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
//     fileElem.sendKeys(absolutePath);
//     browser.sleep(3000);
//     browser.refresh();
//     browser.sleep(3000);
//     helperFun.waitforelement(this.splitDoc);
//     this.splitDoc.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.split2Doc);
//     this.split2Doc.click();
//     // browser.sleep(2000);
//     // let zoom = element(by.xpath('//span[@class="slider-text slider-text-plus" and contains(., "+")]'))
//     // helperFun.waitforelement(zoom);
//     // zoom.click()
//     // browser.sleep(2000);
//     // let zoomout = element(by.xpath('//span[@class="slider-text slider-text-plus" and contains(., "-")]'))
//     // helperFun.waitforelement(zoomout);
//     // zoomout.click()
//     // browser.sleep(2000);
//     helperFun.waitforelement(this.next);
//     this.next.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.splitUnfile);
//     this.splitUnfile.click();
//     browser.sleep(2000);
//     let zoomout = element(by.xpath('//span[@class="ui-slider-tick-mark"]'))
//     helperFun.waitforelement(zoomout);
//     //zoomout.click()
//     browser.driver.actions()
//         .mouseDown(this.zoomout)
//         .mouseMove({x: -150, y: 0})
//     browser.sleep(2000);
//     helperFun.waitforelement(this.splitDocType);
//     this.splitDocType.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.selectLookup);
//     this.selectLookup.click();
//     browser.sleep(2000);
//     // helperFun.waitforelement(this.addlookup);
//     // this.addlookup.click();
//     // browser.sleep(2000);
//     // helperFun.waitforelement(this.addInputText);
//     // this.addInputText.click().sendKeys("Test")
//     // browser.sleep(2000);
//     helperFun.waitforelement(this.split);
//     this.split.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.completeSplit);
//     this.completeSplit.click();
//     browser.sleep(2000);
    
// }

// public async clickError() {
//     browser.sleep(2000);
//     var error = element(by.xpath('(//*[@class="col-errors"])[1]'))
//     helperFun.waitforelement(error);
//     error.click();
//     browser.sleep(2000);
//     var downArrow = element(by.xpath('//*[@class="glyphicon glyphicon-chevron-down"]'))
//     downArrow.isDisplayed().then(function (isVisible) {
//         if (isVisible) {
//             console.log ('Down arrow is present')
//         } else {
//             console.log ('Down arrow name is not Present')
//         }
//     });

// }

// public async upArrow() {
//     browser.sleep(2000);
//     var error = element(by.xpath('(//*[@class="col-errors"])[1]'))
//     helperFun.waitforelement(error);
//     error.click();
//     browser.sleep(2000);
//     var downArrow = element(by.xpath('//*[@class="glyphicon glyphicon-chevron-up"]'))
//     downArrow.isDisplayed().then(function (isVisible) {
//         if (isVisible) {
//             console.log ('Up arrow is present')
//         } else {
//             console.log ('Up arrow name is not Present')
//         }
//     });

// }

// public async checkError() {
//     browser.sleep(2000);
//     var error = element(by.xpath('(//*[@class="col-errors"])[1]'))
//     helperFun.waitforelement(error);
//     //error.click();
//     browser.sleep(2000);
//     error.isDisplayed().then(function (isVisible) {
//         if (isVisible) {
//             console.log ('Column name is Errors')
//         } else {
//             console.log ('Column name is not Errors')
//         }
//     });

// }

// public async checkHistorySplit() {
//     browser.sleep(2000);
//     var unfile1 = element(by.xpath('//span[@class="inbox-document-header"]'))
//     helperFun.waitforelement(unfile1);
//     unfile1.click();
//     browser.sleep(5000);
//     var unfile1 = element(by.xpath('//span[@class="panelHeaderText" and contains(., "History")]'))
//     helperFun.waitforelement(unfile1);
//     unfile1.click();
//     browser.sleep(4000);
//     let flag = element(by.xpath('//span[contains(., "Split Update")]'))
//     helperFun.waitforelement(flag);
//     flag.getText().then(function(text){
//         //expect(text).to.include("Testdoc")
//         console.log("Check Audit History---------- "+ text)
//         return text;
//     })

// }


// public async bright(){
//     browser.sleep(2000);
//     helperFun.waitforelement(this.imageCleaning);
//     this.imageCleaning.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.brightness);
//     this.brightness.click().clear().sendKeys("20")
//     browser.sleep(2000);
//     helperFun.waitforelement(this.contrast);
//     this.contrast.click().clear().sendKeys("20")
//     browser.sleep(1000)
//     helperFun.waitforelement(this.changebright);
//     this.changebright.click();
//     browser.sleep(2000)
//     helperFun.waitforelement(this.changeContrast);
//     this.changeContrast.click();
//     browser.sleep(2000)
//     helperFun.waitforelement(this.invert);
//     this.invert.click();
//     browser.sleep(2000)
//     helperFun.waitforelement(this.Despeckle);
//     this.Despeckle.click();
//     browser.sleep(2000)
//     helperFun.waitforelement(this.RemoveBoards);
//     this.RemoveBoards.click();
//     browser.sleep(2000)
//     helperFun.waitforelement(this.cropMargins);
//     this.cropMargins.click();
//     browser.sleep(2000)
//     helperFun.waitforelement(this.autoDeskew);
//     this.autoDeskew.click();
//     browser.sleep(2000)
//     helperFun.waitforelement(this.rotate);
//     this.rotate.click().clear().sendKeys("20")
//     browser.sleep(2000)
//     helperFun.waitforelement(this.rotateDegree);
//     this.rotateDegree.click();
//     browser.sleep(3000)
//     helperFun.waitforelement(this.saveProcessing);
//     this.saveProcessing.click();
//     browser.sleep(3000);
//     helperFun.waitforelement(this.download);
//     this.download.click();
//     browser.sleep(1000);
    
// }


// public async linktodocuments(){
//     // helperFun.waitforelement(this.close)
//     // this.close.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.link);
//     this.link.click();
//     console.log("Step1")
//     helperFun.waitforelement(this.linkdoc);
//     this.linkdoc.click();
//     browser.sleep(2000);
//     console.log("Step2")
//     helperFun.waitforelement(this.linktoDoc);
//     this.linktoDoc.click();
//     browser.sleep(2000);
//     console.log("Step3")
//     // let linkeddoc = element(by.xpath('//*[@class="linked-documents-commit linked-doc-icon"]'))
//     // helperFun.waitforelement(linkeddoc);
//     // linkeddoc.click();
//     // browser.sleep(2000);
//     // console.log("Step4")
//     // let highSchool = element(by.xpath('(//*[@class="tree-node__header__label" and contains (., "High")])[2]'))
//     // helperFun.waitforelement(highSchool);
//     // highSchool.click();
//     // browser.sleep(2000);
//     console.log("Step5")
//     let flag = element(by.xpath("//span[@class='panelHeaderInfo linked-documents-count']"))
//     helperFun.waitforelement(flag);
//     flag.getText().then(function(text){
//         //expect(text).to.include("testImport2")
//         console.log("link count--------- "+ text)
//         return text;
//     })    
// }

// public async unlinkdocuments(){
//     browser.sleep(2000);
//     let unlink = element(by.xpath('//*[@class="linkedDocuments-delete icon-unlink"]'))
//     helperFun.waitforelement(unlink);
//     unlink.click();
//     browser.sleep(2000);
    
// }



// public async checkKeyfield(folder){
//     // helperFun.waitforelement(this.close)
//     // this.close.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.selectAutoArea);
//     this.selectAutoArea.click();
//     helperFun.waitforelement(this.unfiled);
//     this.unfiled.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.unfiledDoc);
//     this.unfiledDoc.click();
//     browser.sleep(2000);
    
// }


// public async renameArea(){
//     helperFun.waitforelement(this.importSettings);
//     this.importSettings.click();
//     helperFun.waitforelement(this.rename);
//     this.rename.click();
    
// }

// public async settingDoc(){
//     helperFun.waitforelement(this.importSettings);
//     this.importSettings.click();
    
// }

// public async deleteArea(){
//     helperFun.waitforelement(this.importSettings);
//     this.importSettings.click();
//     helperFun.waitforelement(this.delete);
//     this.delete.click();
//     var myAlert = browser.switchTo().alert();
//     myAlert.getText().then(function(text){
//     console.log("Save message" + text)
//     })
//     myAlert.accept();
//     browser.sleep(2000);
    
// }

// public async areaDelete(){
//     browser.sleep(8000);
//     browser.refresh()
//     browser.sleep(3000)
//     browser.refresh()
//     browser.sleep(3000)
//     browser.refresh()
//     browser.sleep(3000)
//     browser.refresh()
//     browser.sleep(8000)
//     browser.refresh()
//     browser.sleep(8000)
//     helperFun.waitforelement(this.importSettings);
//     this.importSettings.click();
//     browser.sleep(8000);
//     helperFun.waitforelement(this.delete);
//     this.delete.click();
//     browser.sleep(2000);
//     var myAlert = browser.switchTo().alert();
//     myAlert.getText().then(function(text){
//     //console.log("Save message" + text)
//     })
//     myAlert.accept();
//     browser.sleep(2000);
// }

// public async renameExistingArea(name){
//     helperFun.waitforelement(this.importSettings);
//     this.importSettings.click();
//     helperFun.waitforelement(this.rename);
//     this.rename.click();
//     browser.sleep(1000);
//     helperFun.waitforelement(this.editName);
//     this.editName.click().clear()
//     browser.sleep(2000);
//     this.editName.sendKeys(name);
//     browser.sleep(1000);
    

// }

// public async renameKey(){
//     helperFun.waitforelement(this.importSettings);
//     this.importSettings.click();
//     helperFun.waitforelement(this.rename);
//     this.rename.click()
//     helperFun.waitforelement(this.editName);
//     this.editName.click().clear()
//     browser.sleep(2000);
//     this.editName.sendKeys("vnkeyfield");
//     browser.sleep(1000);
//     helperFun.waitforelement(this.saveImport);
//     this.saveImport.click();
//     browser.sleep(1000);
//     var myAlert = browser.switchTo().alert();
//     myAlert.getText().then(function(text){
//         console.log("Save error message-----------------" + text)
//         })
//         browser.sleep(1000);
//     myAlert.accept();
    

// }

// public async deleteDocument(name){
//     helperFun.waitforelement(this.delete);
//     this.delete.click();
//     var myAlert = browser.switchTo().alert();
//     myAlert.accept();
//     browser.sleep(2000);
//     // var myAlert = browser.switchTo().alert();
//     // myAlert.getText().then(function(text){
//     // console.log("Failed delete document message" + text)
//     // })
//     // myAlert.accept();
//     browser.sleep(2000);
// }

// public async deleteDocumentType(name){
//     helperFun.waitforelement(this.delete);
//     this.delete.click();
//     var myAlert = browser.switchTo().alert();
//     myAlert.accept();
//     browser.sleep(2000);
// }

// public async UnassociateKeyField(doc){
//     browser.sleep(2000);
//     helperFun.waitforelement(this.menu)
//     this.menu.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.doctypes)
//     this.doctypes.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.docsearch)
//     this.docsearch.click().sendKeys(doc)
//     browser.sleep(2000);
//     helperFun.waitforelement(this.selectKey);
//     this.selectKey.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.selectRenameDoc);
//     this.selectRenameDoc.click();
//     // var myAlert = browser.switchTo().alert();
//     // myAlert.getText().then(function(text){
//     //     //expect(text).to.include("Failed to save Area")
//     //     console.log("Error Message" + text)
//     //     })
//     //     browser.sleep(2000);
//     //     myAlert.accept();
//     browser.sleep(2000);
// }

// public async renameWithNewArea(name1){
//     helperFun.waitforelement(this.editName);
//     this.editName.click().clear()
//     browser.sleep(2000);
//     this.editName.sendKeys(name1);
//     browser.sleep(1000);
    

// }

// public async renameAreaCode(name){
//     helperFun.waitforelement(this.code);
//     this.code.click().clear();
//     this.code.sendKeys(name);
//     browser.sleep(1000);
//     helperFun.waitforelement(this.areaDocType);
//     this.areaDocType.click()
//     browser.sleep(1000);
    
// }

// public async changeCode(name){
//     helperFun.waitforelement(this.editName);
//     this.editName.click().clear()
//     browser.sleep(2000);
//     this.editName.sendKeys(name);
//     browser.sleep(1000);
    

// }

// public async viewHistory(){
//     browser.sleep(1000);
//     helperFun.waitforelement(this.history);
//     this.history.click();
//     browser.sleep(1000);
// }

// public async clickFilter(){
//     browser.sleep(1000);
//     helperFun.waitforelement(this.filter);
//     this.history.click();
//     browser.sleep(1000);
//     helperFun.waitforelement(this.allUsers);
//     this.history.click();
//     browser.sleep(1000);
//     helperFun.waitforelement(this.selectAdmin);
//     this.history.click();
//     browser.sleep(1000);
//     helperFun.waitforelement(this.selectCreate);
//     this.history.click();
//     browser.sleep(1000);
// }

// public async checkHistory(){
//     browser.sleep(1000);
//     let historyData = element(by.xpath('//*[@id="documentHistoryList"]'))
//     helperFun.waitforelement(historyData);
//     historyData.getText().then(function(text){
//         //expect(text).to.include("Testdoc")
//         console.log("History List---------- "+ text)
//         return text;
//     })
//     browser.sleep(1000);
// }

// public async saveButton(){
//     browser.sleep(2000);
//     helperFun.waitforelement(this.saveImport);
//     this.saveImport.click();
//     browser.sleep(2000);
// }

// //Code cannot be empty

// public async codeError(){
//     var myAlert = browser.switchTo().alert();
//     myAlert.getText().then(function(text){
//     //expect(text).to.include("Code cannot be empty or null")
//     console.log("Code Error" + text)
//     })
//     browser.sleep(2000);
// }

// public async errorMessage(){
//     var myAlert = browser.switchTo().alert();
//     browser.sleep(2000);
//     myAlert.getText().then(function(text){
//     expect(text).to.include("Failed to save Area")
//     console.log("Save Message" + text)
//     })
//     browser.sleep(2000);
//     myAlert.accept();
//     browser.sleep(2000);
// }

// public async importDocs(name, areaname, documentname, key){
//     browser.sleep(5000);
//     console.log("==================================================")
//     helperFun.waitforelement(this.menu)
//     this.menu.click()
//     browser.sleep(1000);
//     helperFun.waitforelement(this.imports)
//     this.imports.click()
//     browser.sleep(1000);
//     helperFun.waitforelement(this.search)
//     this.search.click().sendKeys(".Auto Image Types");
//     browser.sleep(1000);
//     helperFun.waitforelement(this.selectKey);
//     this.selectKey.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.importSettings);
//     this.importSettings.click();
//     browser.sleep(1000);
//     helperFun.waitforelement(this.copyImport);
//     this.copyImport.click();
//     browser.sleep(1000);
//     helperFun.waitforelement(this.copy);
//     this.copy.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.importSettings);
//     this.importSettings.click();
//     helperFun.waitforelement(this.rename);
//     this.rename.click();
//     helperFun.waitforelement(this.editName);
//     this.editName.click().clear()
//     browser.sleep(2000);
//     this.editName.sendKeys(name);
//     helperFun.waitforelement(this.saveImport);
//     this.saveImport.click();
//     browser.sleep(2000);
//     var selectArea = element(by.xpath('//select [contains(., ".AutoArea")]'))
//     helperFun.waitforelement(selectArea);
//     selectArea.click();;
//     var selectDocument = element(by.xpath('//option[contains(., "'+areaname+'")]'));
//     helperFun.waitforelement(selectDocument);
//     selectDocument.click();
//     helperFun.waitforelement(this.fieldMapping);
//     this.fieldMapping.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.fieldValue);
//     this.fieldValue.click().clear()
//     browser.sleep(2000);
//     this.fieldValue.sendKeys(documentname)
//     browser.sleep(2000);
//     helperFun.waitforelement(this.selectField);
//     this.selectField.click();
//     browser.sleep(1000);
//     var selectVal = element(by.xpath('(//option[contains(., "'+key+'")])[3]'))
//     helperFun.waitforelement(selectVal);
//     selectVal.click();
//     browser.sleep(1000);
//     helperFun.waitforelement(this.runImport);
//     this.runImport.click();
//     var myAlert = browser.switchTo().alert();
//     myAlert.accept();
// }

//     public async getVersion(){
//     helperFun.waitforelement(this.dropdown)
//     this.dropdown.click()
//     helperFun.waitforelement(this.about);
//     this.about.click();
//     helperFun.waitforelement(this.version);
//     this.version.getText().then(function(text){
//         expect(text).to.include("2022.2.0")
//         console.log("About Content" + text)
//         return text;
//     })
//     browser.sleep(2000);
// }

// public async getLicense(){
//     helperFun.waitforelement(this.license);
//     this.license.click()
//     browser.sleep(2000);
//     helperFun.waitforelement(this.adv);
//     this.adv.click()
//     browser.sleep(2000);
//     helperFun.waitforelement(this.automapper);
//     this.automapper.click()
//     browser.sleep(2000);
//     helperFun.waitforelement(this.crypto);
//     this.crypto.click()
//     browser.sleep(2000);
// }

// public async getDeployment(){
//     helperFun.waitforelement(this.deployment);
//     this.deployment.click()
//     browser.sleep(2000);
//     // this.deploymentInfo.getText().then(function(text){
//     //     console.log("deploymentInfo" + text)
//     //     return text;
//     // })
//     // browser.sleep(2000);
// }

// public async dragdrop(){
//     let element1 = element(by.xpath('//*[@class="tree-node__header__label" and contains(., "Self Service")]'))
//     let element2 = element(by.xpath('(//*[@class="koTree-node-header node-list"])[52]'))

//     var draggable = element(by.xpath('//*[@class="tree-node__header__label" and contains(., "Self Service")]'))
//     var droppable = element(by.xpath('(//*[@class="koTree-node-header node-list"])[52]'))

// //    browser.executeScript(dragAndDrop, draggable, droppable);

//     // browser.actions().
//     // mouseDown(element1).
//     // mouseMove(element2).
//     // mouseUp().
//     // perform();
//     // browser.sleep(5000);

// }

// public async doubleclick(){
//     //AN Area0dvfo6f
//     let element1 = element(by.xpath('//*[@class="tree-node__header__label" and contains (., ".Area Student0ne2iu3")]'))
//     // let element2 = element(by.xpath('//*[@class="tree-node__header__label" and contains (., "AN DocType04aqbblArea 1")]'))
//     // let element3 = element(by.xpath('(//*[@class="tree-node__header__label" and contains (., "AN DocType04aqbbl")])[2]'))
//     browser.sleep(2000)
//     browser.actions().doubleClick(element1.getWebElement()).perform();
//     // browser.sleep(2000)
//     // browser.actions().doubleClick(element2.getWebElement()).perform();
//     // browser.sleep(2000)
//     // browser.actions().doubleClick(element3.getWebElement()).perform();

//     // browser.actions().
//     // mouseDown(element1).
//     // mouseMove(element2).
//     // mouseUp().
//     // perform();
//     // browser.sleep(5000);

// }

// public async newArea (name){
//     helperFun.waitforelement(this.menu)
//     this.menu.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.area)
//     this.area.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.addArea)
//     this.addArea.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.areaName)
//     this.areaName.click().sendKeys(name)
//     browser.sleep(1000)
//     helperFun.waitforelement(this.add)
//     this.add.click();

// }

// public async newAutomation (name){
//     helperFun.waitforelement(this.automations)
//     this.automations.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.automationsName)
//     this.automationsName.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.iputAutomations)
//     this.iputAutomations.click().sendKeys(name)
//     browser.sleep(3000)
//     helperFun.waitforelement(this.add)
//     this.add.click();
//     browser.sleep(1000)
// }
// public async searchAutomation(name){
//     browser.sleep(1000)
//     helperFun.waitforelement(this.menu)
//     this.menu.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.automations)
//     this.automations.click();
//     browser.sleep(3000)
//     helperFun.waitforelement(this.searchAutomations)
//     this.searchAutomations.click().sendKeys(name)
//     browser.sleep(1000)
//     helperFun.waitforelement(this.selectKey)
//     this.selectKey.click();
//     browser.sleep(1000)
// }

// public async backButtonAuto() {
//     browser.sleep(2000);
//     var navigate = element(by.xpath('//*[@id="content"]/div/section/nav/div[1]/div[1]'))
//     helperFun.waitforelement(navigate);
//     navigate.click();
//     browser.sleep(2000);
// }

// public async addRuleAutomation (){
//     helperFun.waitforelement(this.automationRule)
//     this.automationRule.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.docFieldValueMatch)
//     this.docFieldValueMatch.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.doctypeAuto)
//     this.doctypeAuto.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.selectDoctypeAuto)
//     this.selectDoctypeAuto.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.docFIeld)
//     this.docFIeld.click();
//     browser.sleep(1000)
//     helperFun.waitforelement(this.equals)
//     this.equals.click();
//     browser.sleep(2000)

// }

// public async movetoAreaAutomation(area){
//     browser.sleep(2000)
//     helperFun.waitforelement(this.areadropdownsp)
//     this.areadropdownsp.click()
//     browser.sleep(2000)
//     let areaToSelect = element(by.xpath('//option[contains(., "'+area+'")]'));
//     helperFun.waitforelement(areaToSelect)
//     areaToSelect.click();
//     browser.sleep(3000)

// }

// public async movetodoc(area){
//     browser.sleep(2000)
//     helperFun.waitforelement(this.doctypeDropdown)
//     this.doctypeDropdown.click()
//     browser.sleep(2000)
//     let areaToSelect = element(by.xpath('//option[contains(., "'+area+'")]'));
//     helperFun.waitforelement(areaToSelect)
//     areaToSelect.click();
//     browser.sleep(3000)

// }

// public async docAutomation(){
//     helperFun.waitforelement(this.ducumentFieldButton)
//     this.ducumentFieldButton.click();
//     browser.sleep(2000)

// }

// public async docFieldDropdown(doc, name){
//     browser.sleep(2000)
//     helperFun.waitforelement(this.searchAutomations)
//     this.searchAutomations.click().sendKeys(name)
//     browser.sleep(1000)
//     helperFun.waitforelement(this.selectKey)
//     this.selectKey.click();
//     browser.sleep(2000)
//     helperFun.waitforelement(this.docDropdown)
//     this.docDropdown.click();
//     browser.sleep(2000)
//     helperFun.waitforelement(this.chooseDoc)
//     this.chooseDoc.click();
//     browser.sleep(2000)
//     var document = element(by.xpath('//option[contains(., "'+doc+'")]'));
//     helperFun.waitforelement(document);
//     document.click();
//     browser.sleep(2000)

// }

// public async areaDrop(){
//     helperFun.waitforelement(this.ducumentFieldButton)
//     this.ducumentFieldButton.click();
//     browser.sleep(2000)

// }

// public async docselectAutomation(){
//     helperFun.waitforelement(this.areaDropdownDoc)
//     this.areaDropdownDoc.click();
//     browser.sleep(2000)
//     helperFun.waitforelement(this.selectDocTypeAutomation)
//     this.selectDocTypeAutomation.click();
//     browser.sleep(2000)

// }

// public async docEqual(){
//     helperFun.waitforelement(this.selectOperator)
//     this.selectOperator.click();
//     browser.sleep(2000)
//     helperFun.waitforelement(this.equal)
//     this.equal.click();
//     browser.sleep(2000)

// }

// public async selectDocFieldAutomation(doc){
//     helperFun.waitforelement(this.documentFieldDropdown)
//     this.documentFieldDropdown.click();
//     browser.sleep(2000)
//     var document = element(by.xpath('(//option[contains(., "'+doc+'")])[2]'));
//     helperFun.waitforelement(document);
//     document.click();
//     browser.sleep(2000)
// }

// public async actionAutomation(){
//     helperFun.waitforelement(this.action)
//     this.action.click();
//     browser.sleep(2000)

// }


// public async actionTrigger(){
//     helperFun.waitforelement(this.movetoArea)
//     this.movetoArea.click();
//     browser.sleep(2000)
//     helperFun.waitforelement(this.triggerDoc)
//     this.triggerDoc.click();
//     browser.sleep(2000)

//     }
 
//     public async dropdownAutomation(){
//     browser.sleep(2000)
//     helperFun.waitforelement(this.destArea)
//     this.destArea.click();
//     browser.sleep(2000)
// }

// public async destAreaAutomation(area1){
//     browser.sleep(2000)
//     helperFun.waitforelement(this.areaDropdown1)
//     this.areaDropdown1.click();
//     browser.sleep(2000)
//     var automationarea2 = element(by.xpath('(//option[contains(., "'+area1+'")])[1]'));
//     helperFun.waitforelement(automationarea2);
//     automationarea2.click();
//     browser.sleep(3000)

// }

// public async destAreaAutomation2(area1){
//     browser.sleep(2000)
//     helperFun.waitforelement(this.area2Drop)
//     this.area2Drop.click();
//     browser.sleep(2000)
//     var automationarea2 = element(by.xpath('(//option[contains(., "'+area1+'")])[2]'));
//     helperFun.waitforelement(automationarea2);
//     automationarea2.click();
//     browser.sleep(3000)

// }
// public async saveAutomation() {
//     browser.sleep(2000)
//     helperFun.waitforelement(this.save)
//     this.save.click();
//     browser.sleep(1000)
//     var myAlert = browser.switchTo().alert();
//     myAlert.accept();
//     browser.sleep(1000)
// }

// public async enableAreaAutomation(){
//     browser.sleep(2000)
//     helperFun.waitforelement(this.enableAutomation)
//     this.enableAutomation.click();
//     browser.sleep(1000)

// }

// public async runAutomation(){
//     browser.sleep(2000)
//     var run = element(by.xpath('//*[@class="nav-text" and contains(.,"Run Automation")]'))
//     helperFun.waitforelement(run);
//     run.click();
//     browser.sleep(2000)
//     var runButton = element(by.xpath('//button[contains(., "Run")]'))
//     helperFun.waitforelement(runButton);
//     runButton.click();
//     browser.sleep(1000)
// }

// public async run(){
//     browser.sleep(2000)
//     var runButton = element(by.xpath('//button[contains(., "Run")]'))
//     helperFun.waitforelement(runButton);
//     runButton.click();
//     browser.sleep(1000)
// }

// public async clickMenu(){
//     helperFun.waitforelement(this.menu)
//     this.menu.click();
//     browser.sleep(1000)

// }

// public async clickArea(){
//     browser.sleep(1000)
//     helperFun.waitforelement(this.area)
//     this.area.click();
//     browser.sleep(1000)

// }

// public async clickCategory(){
//     helperFun.waitforelement(this.category)
//     this.category.click();
//     browser.sleep(1000)

// }

// public async clickNewCategory(){
//     helperFun.waitforelement(this.addCategory)
//     this.addCategory.click();
//     browser.sleep(1000)
// }

// public async typeNewCategory(name){
//     helperFun.waitforelement(this.categoryname)
//     this.categoryname.click().sendKeys(name)
//     browser.sleep(1000)
// }

// public async saveCategory(){   
//     helperFun.waitforelement(this.add)
//     this.add.click();
// }

// public async clickNewArea(){
//     browser.sleep(2000)
//     helperFun.waitforelement(this.addArea)
//     this.addArea.click();
//     browser.sleep(2000)
// }

// public async typeNewArea(name){
//     helperFun.waitforelement(this.areaName)
//     browser.sleep(1000)
//     this.areaName.click().clear().sendKeys(name)
//     browser.sleep(2000)
// }

// public async scrollArea(name){
//     // helperFun.waitforelement(this.selectAutoArea);
//     // this.selectAutoArea.click();
//     // browser.driver.actions()
//     // .mouseDown(this.scrolledArea).perform()
//     browser.actions().mouseDown(element(by.xpath('(//span[@class="tree-node__header__label" and contains (.,"SP Test Area 2uk")])[1]')).getWebElement()).perform()
// //(//span[@class="tree-node__header__label" and contains (.,"SP Test Area 2uk")])[1]
//     browser.sleep(2000)
// }


// public async saveArea(){   
//     helperFun.waitforelement(this.add)
//     this.add.click();
// }


// public async annotationsImport(){
//     browser.sleep(2000);
//     helperFun.waitforelement(this.zoomin)
//     this.zoomin.click()
//     browser.sleep(1000);
//     helperFun.waitforelement(this.zoomout)
//     this.zoomout.click()
//     browser.sleep(1000);
//     helperFun.waitforelement(this.thumbnail)
//     this.thumbnail.click()
//     browser.sleep(1000);
//     helperFun.waitforelement(this.fullImage)
//     this.fullImage.click()
//     browser.sleep(1000);
//     helperFun.waitforelement(this.annotation)
//     this.annotation.click()
//     browser.sleep(1000);
//     helperFun.waitforelement(this.note)
//     this.note.click()
//     browser.sleep(1000);
//     helperFun.waitforelement(this.download)
//     this.download.click()
//     browser.sleep(1000);
//     helperFun.waitforelement(this.email)
//     this.email.click()
//     browser.sleep(1000);
//     helperFun.waitforelement(this.address)
//     this.address.click().sendKeys("MMeetze@softdocs.com")
//     browser.sleep(1000);
//     helperFun.waitforelement(this.subject)
//     this.subject.click().sendKeys("Test")
//     browser.sleep(1000);
//     helperFun.waitforelement(this.message)
//     this.message.click().sendKeys("Test")
//     browser.sleep(1000);
//     helperFun.waitforelement(this.sendEmail)
//     this.sendEmail.click()
//     browser.sleep(1000);
// }

// public async deleteImportfile(){
//     browser.sleep(3000);
//     helperFun.waitforelement(this.deleteImportDoc)
//     this.deleteImportDoc.click()
//     browser.sleep(3000);
//     var recyclefolder = element(by.xpath('//span[@class="ellipsis panelHeaderText" and contains(., "Recycle Bin")]'))
//     helperFun.waitforelement(recyclefolder);
//     recyclefolder.click();
//     browser.sleep(3000);
//     var deletefile = element(by.xpath('//*[@class="icon-empty"]'))
//     helperFun.waitforelement(deletefile);
//     deletefile.click();
//     browser.sleep(3000);
//     helperFun.waitforelement(this.okButton)
//     this.okButton.click()
//     browser.sleep(1000);
// }

// public async deleteallImportfile(){
//     for(var i=0; i<9; i++){
//     browser.sleep(2000);
//     let secondAreaDoc = element(by.xpath('(//span[@class="tree-node__header__label" and contains(., "VN Doc")])[2]'))
//     browser.sleep(1000)
//     secondAreaDoc.click()
//     browser.sleep(3000);
//     helperFun.waitforelement(this.deleteImportDoc)
//     this.deleteImportDoc.click()
//     browser.sleep(3000);
//     console.log(i);
//     browser.refresh();
//     browser.sleep(2000)
//     }
//     var recyclefolder = element(by.xpath('//span[@class="ellipsis panelHeaderText" and contains(., "Recycle Bin")]'))
//     helperFun.waitforelement(recyclefolder);
//     recyclefolder.click();
//     browser.sleep(3000);
//     helperFun.waitforelement(recyclefolder);
//     recyclefolder.click();
//     browser.sleep(1000);
//     helperFun.waitforelement(this.okButton)
//     this.okButton.click()
//     browser.sleep(1000);
// }

// public async deleteImport(){
//     browser.sleep(3000);
//     helperFun.waitforelement(this.deleteImportDoc)
//     this.deleteImportDoc.click()
//     browser.sleep(3000);
//     var recyclefolder = element(by.xpath('//span[@class="ellipsis panelHeaderText" and contains(., "Recycle Bin")]'))
//     helperFun.waitforelement(recyclefolder);
//     recyclefolder.click();
//     browser.sleep(3000);
//     var deletedFile = element(by.xpath('//*[@data-bind="text: DocumentTypeName"]'))
//     helperFun.waitforelement(deletedFile);
//     recyclefolder.click();
//     browser.sleep(3000)
//     this.attachPage.isEnabled().then(function (isVisible) {
//         if (isVisible) {
//             console.log ('Attach file and Split is enabled')
//         } else {
//             console.log ('Attach file and Split is disabled')
//         }
//     });
//     return browser.sleep(3000)
// }

// public async addDoctoFile(area){
//     // helperFun.waitforelement(this.close)
//     // this.close.click();
//     // browser.sleep(5000);
//     helperFun.waitforelement(this.application);
//     this.application.click();
//     browser.sleep(2000);
//     var selectVal = element(by.xpath('//span[@class="tree-node__header__label" and contains (.,"'+area+'")]'))
//     helperFun.waitforelement(selectVal);
//     selectVal.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.unfiled);
//     this.unfiled.click();
//     browser.sleep(2000);
//     var unfile1 = element(by.xpath('(//*[@data-keydown="InboxKeyDown"])[1]'))
//     helperFun.waitforelement(unfile1);
//     unfile1.click();
//     browser.sleep(2000);
//     helperFun.waitforelement(this.unfiledfile);
//     this.unfiledfile.click();
//     helperFun.waitforelement(this.selectNewDocType);
//     this.selectNewDocType.click();
//     browser.sleep(2000);

// }

// //Bubbas functions

// public async clickOnUnfiledDoc(whichDoc){
//     helperFun.waitforelement(this.unfiled);
//     console.log('('+unfiledDocumentXPath+')['+whichDoc+']');
//     element(by.xpath('('+unfiledDocumentXPath+')['+whichDoc+']')).click();
//     //    this.unfiled.click();
//     browser.sleep(500)
// }

// public async checkUnlinkIconAlignment(index, cssVal) {
//     element(by.xpath('//*[@id="linkedDocumentsSectionPartial"]/div/div['+index+']/div/button')).getCssValue(cssVal).then(function(checkVal) {
//         console.log(index + ":" + cssVal + ":" + checkVal);
//         expect(checkVal).to.equal('0px');
//     });

// }

// public async scrollUnfilled(whichDoc){
//     helperFun.waitforelement(this.unfiled);
//     this.unfiledX = element(by.xpath('('+unfiledDocumentXPath+')['+whichDoc+']'));
//     this.unfiledX.click();
//     browser.sleep(5000);
//     browser.sleep(500);
//     return (this.unfiledX.getAttribute('id') as string);
// }

// public async clickOnAddButton(){
//     helperFun.waitforelement(this.addButton)
//     this.addButton.click();
//     browser.sleep(1000)
// }

// public async clickOnDocTypeSection(){
//     helperFun.waitforelement(this.docTypesSection)
//     this.docTypesSection.click();
//     browser.sleep(1000)
// }

// public async clickOnAddDocTypeButton(){
//     helperFun.waitforelement(this.addNewDocTypeButton)
//     this.addNewDocTypeButton.click();
//     browser.sleep(1000)
// }

// public async enterNewDocTypeName(name: string) {
//     helperFun.waitforelement(this.newDocTypeNameField)
//     this.newDocTypeNameField.click().sendKeys(name);
//     browser.sleep(1000)
// }

// public async enterValueInKeyfield(value){
//     helperFun.waitforelement(this.keyfieldField1)
//     this.keyfieldField1.click().clear().sendKeys(value)
//     browser.sleep(1000)
// }

// public async getValueInKeyfield(){
//     helperFun.waitforelement(this.keyfieldField1);
//     return this.keyfieldField1.getText().toString();
// }


// public async removeValues(){
//     // helperFun.waitforelement(this.removeValuesIcon);
//     // this.removeValuesIcon.click();
//     return browser.sleep(1000);
// }

// public async clickOnKeyfield(KFName){
//     helperFun.waitforelement(this.keyfieldNameField)
//     this.keyfieldNameField.click().sendKeys(KFName)
//     // helperFun.waitforelement(element(by.xpath("//input[@id='edit']")));
//     helperFun.waitforelement(element(by.xpath("//*[contains(text(),'"+ KFName +"')]")));
//     // browser.sleep(10000)
//     let box = element(by.xpath("//*[contains(text(),'"+ KFName +"')]"));
//     box.click()
//     browser.sleep(1000)
// }




}
    

 


