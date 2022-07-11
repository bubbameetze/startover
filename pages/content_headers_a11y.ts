import { eventNames } from 'cluster';
import { browser, element, by, ElementFinder} from 'protractor';
import { generic_class } from '../utils/generic_classes';
//import {code as dragAndDrop} from 'html-dnd';


var chai = require('chai'); 
var path = require('path');


let helperFun: generic_class = new generic_class()
let expect = chai.expect;
let unfiledDocumentXPath = '//*[@class="inbox__item interactive focus-dark"]';

export class content_headers {
    public username: any;
    public password: any;
    public login: any;
    public menu: any;
    public area: any;
    public doctypes: any;
    public keyfields: any;
    public newkeyField: any;
    public keyfieldname: any;
    public add: any;
    public title: any;
    public search: any;
    public addProperties: any;
    public rules: any;
    public values: any;
    public documentTypes: any;
    public text: any;
    public number: any;
    public date: any;
    public decimal: any;
    public money: any;
    public lookup: any;
    public default: any;
    public defaultValue: any;
    public apply: any;
    public selectKey: any;
    public docType: any;
    public createDocTyoe:any;
    public inputDoc: any;
    public addKey: any;
    public enterKeyfield: any;
    public select: any;
    public addArea: any;
    public areaName: any;
    public folderLevel: any;
    public folderName: any;
    public save: any;
    public areaDocType: any;
    public addAreaDoc: any;
    public searchDoc: any;
    public newFolderLevel: any;
    public addDocArea: any;
    public imports: any;
    public selectImport: any;
    public importSettings: any;
    public copyImport: any;
    public copy: any;
    public rename: any;
    public editName: any;
    public saveImport: any;
    public runImport:any;
    public fieldMapping: any;
    public fieldValue: any;
    public selectField: any;
    public dropdown: any;
    public about: any;
    public version: any;
    public code: any;
    public delete: any;
    public edit: any;
    public category: any;
    public addCategory: any;
    public categoryname: any;
    public update: any;
    public application: any;
    public autoArea: any;
    public openFolder: any;
    public openSecondFolderLevel: any;
    public thirdFolderLevel: any;
    public uploadedDoc: any;
    public deleteFol: any;
    public close: any;
    public unfiled: any;
    public unfiledDoc: any;
    public selectfol: any;
    public checkDocType: any;
    public checkKeyField: any;
    public selectDocValue: any;
    public selectNewDocumentType: any;
    public newdocType: any;
    public selectfile: any;
    public selectKeyValue: any;
    public selectAutoArea: any;
    public selectfiledoc: any;
    public checkDocTypeold: any;
    public selectNewKeyField: any;
    public selectRenameDoc: any;
    public selectNewDocType: any;
    public automationArea: any;
    public selectold: any;
    public checkoldDocType: any;
    public areaFolder: any;
    public sendText: any;
    public sendConstraint: any;
    public sendIsrequired: any;
    public sendMaxlenght: any;
    public sendMultiLine: any;
    public leftnav: any;
    public scrolledArea: any;
    public zoomin: any;
    public zoomout: any;
    public thumbnail: any;
    public fullImage: any;
    public annotation: any;
    public note: any;
    public download: any;
    public email: any;
    public address: any;
    public subject: any;
    public message: any;
    public sendEmail: any;
    public deleteImportDoc: any;
    public selectimportfile: any;
    public recycle: any;
    public okButton: any;
    public unfiledfile: any;
    public dlFile: any;
    public highSchoolFile: any;
    public notes: any;
    public link: any;
    public linkdoc: any;
    public linktoDoc: any;
    public lookButton: any;
    public sendLookupValue: any;
    public sendLookupValue2: any;
    public highlight: any;
    public color: any;
    public rectangle: any;
    public imageCleaning: any;
    public brightness: any;
    public contrast: any;  
    public stickynote: any; 
    public saveAuto: any;
    public saveLookup: any;
    public keysearch: any;
    public docsearch: any;
    public invert: any;
    public Despeckle: any;
    public RemoveBoards: any;
    public cropMargins: any;
    public autoDeskew: any;
    public changebright: any;
    public changeContrast: any;
    public saveProcessing: any;
    public rotate: any;
    public rotateDegree: any;
    public rotatePage: any;
    public attachPage: any;
    public splitDoc: any;
    public split2Doc: any;
    public next: any;
    public split: any;
    public completeSplit: any;
    public license: any;
    public deployment: any;
    public adv: any;
    public automapper: any;
    public crypto: any;
    public deploymentInfo: any;
    public automations: any;
    public automationsName: any;
    public inputautomationsName: any;
    public searchAutomations: any;
    public enableAutomation: any;
    public automationRule: any;
    public docFieldValueMatch: any;
    public docFIeld: any;
    public equals: any;
    public docFieldvalue: any;
    public matchAllValues: any;
    public action: any;
    public movetoArea: any;
    public doc2Move: any;
    public triggerDoc: any;
    public destArea: any;
    public iputAutomations: any;
    public areaDropdown: any;
    public doctypeDropdown: any;
    public ducumentFieldButton: any;
    public areaDropdownDoc: any;
    public selectDocTypeAutomation: any;
    public selectOperator: any;
    public equal :any;
    public documentFieldDropdown: any;
    public history: any;
    public filter: any;
    public allUsers: any
    public selectAdmin: any;
    public selectCreate: any;
    public docDropdown: any;
    public chooseDoc: any;
    public splitUnfile: any;
    public splitDocType: any;
    public selectLookup: any;
    public addlookup: any;
    public addTextLook: any;
    public addInputText: any;
    public etriveContent: any;
    public changePermission: any;
    public changePermissionUnfiled: any
    public removeAdd: any
    public removeAddUnfiled: any;
    public clicksignout: any;
    public ocrElement: any;
    public trueFlag: any;
    public uncPath: any;
    public fileFIlter: any;
    public BackupPath: any;
    public recordDelimiter: any;
    public doctypeAuto: any;
    public selectDoctypeAuto: any;
    public areaDropdown1: any;
    public area2Drop: any;
    public searchCategory: any;
    public gearIcon: any;
    public areadropdownsp:any;
    public importaddarea: any;
    public auditFilter: any;
    public auditCategory: any;
    public selectImportFilter: any;
    public auditTypes: any;
    public auditMessage: any;
    public logout: any;

    public unfiledHeader: any;
    public treeHeader: any;
    public recycleBinHeader: any;
    public keyFieldsHeader: any;
    public linksHeader: any;
    public historyHeader: any;
    public unfiledDocument: any;
    public unfiledX: any;
    public addButton: any;
    public docTypesSection: any;
    public addNewDocTypeButton: any;
    public newDocTypeNameField: any;
    public keyfieldField1: any;
    public removeValuesIcon: any;
    public keyfieldNameField: any;

    constructor () {
        this.unfiledHeader = element(by.xpath('//*[@id="showInbox"]'));
        this.treeHeader = element(by.xpath('//*[@id="showTree"]'));
        this.recycleBinHeader = element(by.xpath('//*[@id="showRecycleBin"]'));
        this.keyFieldsHeader = element(by.xpath('//*[@id="showKeyFields"]'));
        this.linksHeader = element(by.xpath('//*[@id="showKeyLinkedDocuments"]'));
        this.historyHeader = element(by.xpath('//*[@id="showDocumentHistory"]'));
        this.unfiledDocument = element(by.xpath('(//*[@class="inbox__item interactive focus-dark"])[1]'));
        this.addButton = element(by.xpath("//button[@class='btn btn-default' and contains(., 'Add')]"));
        this.docTypesSection = element(by.xpath("//span[@data-bind='text: shortTitle' and contains(text(),'Doc Types')]"));
        this.addNewDocTypeButton = element(by.xpath("//button[@title='Enter a name and click Add to create a new Document Type']"));
        this.newDocTypeNameField = element(by.xpath("//input[@id='newListItemNameField']"));
        this.keyfieldField1 = element(by.xpath("(//input[@placeholder='Enter or Select'])[1]"));
        this.removeValuesIcon = element(by.xpath('//*[@id="fieldValueOptions"]/span'));
        this.keyfieldNameField = element(by.xpath("//input[@aria-label='Search Key Fields']"));

        this.username = element(by.xpath('//input[@name="UserName"]'));
        this.password = element(by.xpath('//input[@name="Password"]')); 
        this.login = element(by.xpath('//input[@class="login-button"]')) 
        this.application = element(by.xpath('//*[@class="application-icon"]'));
        //this.application = element(by.xpath('//*[@class="custom-application-name"]'));     
        this.menu = element(by.xpath('//*[@class="gear-menu-icon"]'));
        this.area = element(by.xpath('//span[contains(.,"Areas")]'));
        this.logout = element(by.xpath('//span[@class="user-menu-text" and contains(., "Sign Out")]'));
        this.importaddarea = element(by.xpath('//*[@id="Area"]'));
        this.scrolledArea = element(by.xpath('(//span[@class="tree-node__header__label" and contains (.,"SP Test Area 2uk")])[1]'));
        this.close = element(by.xpath('//button[@id="confirmButton-Close"]'))
        this.doctypeDropdown = element(by.xpath('//select[@title="document field value rule requires a document type to be set"]'))
        this.clicksignout = element(by.xpath('//span[contains(., "Sign Out")]'))
        this.gearIcon = element(by.xpath('//*[@class="list-view-item-config"]'))
        this.doctypeAuto = element(by.xpath('(//*[@class="property-selector form-control"])[1]'))
        this.selectDoctypeAuto = element(by.xpath('(//option[contains (., "Document Type")])[1]'))
        this.leftnav = element(by.xpath('(//*[@class="sdLoadIndicator-wrapper"])[2]'))
        this.etriveContent = element(by.xpath('//a[contains(.,"Etrieve Content")]'))
        this.changePermission = element(by.xpath('(//input[@type="checkbox" and @title="Grant all privileges"])[1]'))
        this.changePermissionUnfiled = element(by.xpath('(//input[@type="checkbox" and @title="Grant all privileges"])[2]'))
        this.removeAdd = element(by.xpath('(//a[@title="View"])[1]'))
        this.removeAddUnfiled = element(by.xpath('(//a[@title="View"])[3]'))
        this.ocrElement = element(by.xpath('//*[@data-bind="text: DataSourceParameterTranslatedName" and contains(., "OCR")]'))
        this.selectKeyValue = element(by.xpath('//*[@class="ui-menu-item-wrapper" and contains(., "Test Automation")]'))
        this.docsearch = element(by.xpath('//input[@placeholder="Search Document Types"]'))
        this.keysearch = element(by.xpath('//input[@placeholder="Search Key Fields"]'))
        //this.docsearch = element(by.xpath('//input[@placeholder="Search"]'))
        //this.keysearch = element(by.xpath('//input[@placeholder="Search"]'))
        this.selectfile = element(by.xpath('//span[@class="tree-node__header__label" and contains(., "Testdoc")]'))
        this.selectimportfile = element(by.xpath('//span[@class="tree-node__header__label" and contains(., "vndoc")]'))
        this.selectold = element(by.xpath('//span[@class="tree-node__header__label" and contains(., "vndoc")]'))
        this.selectfiledoc = element(by.xpath('//span[@class="tree-node__header__label" and contains(., "Test Rename")]'))
        this.autoArea = element(by.xpath('(//*[@class="koTree-icon koTree-node-toggle icon-toggle-arrow"])[1]'));
        this.selectAutoArea = element(by.xpath('(//span[@class="tree-node__header__label" and contains (.,".AutoArea")])[1]'));
        this.openFolder = element(by.xpath('(//*[@class="koTree-icon koTree-node-toggle icon-toggle-arrow"])[2]'));
        this.openSecondFolderLevel = element(by.xpath('(//*[@class="koTree-icon koTree-node-toggle icon-toggle-arrow"])[3]'));
        this.selectfol = element(by.xpath(' (//*[@class="tree-node__header__label" and contains(., "Test Folder")])[3]'));
        this.thirdFolderLevel = element(by.xpath('(//*[@class="koTree-icon koTree-node-toggle icon-toggle-arrow"])[4]'));
        this.uploadedDoc = element(by.xpath('//span[contains(., "Testdoc")]'));
        this.automationArea = element(by.xpath('//*[@class="tree-node__header__label" and contains(., ".Automation")]'));
        this.areaFolder = element(by.xpath('(//button[@class="koTree-button koTree-node-toggle"])[1]'));
        this.addArea = element(by.xpath('//*[@class="icon-tiny"]'));
        this.destArea = element(by.xpath('//select[@id="areaSelector"]'));
        this.areaDropdown = element(by.xpath("//select[@title='document field value rule requires a value to match with']"));
        this.areadropdownsp = element(by.xpath('(//select[@class="property-selector form-control"])[3]'))
        this.areaDropdown1 = element(by.xpath("//*[@title='document field search requires a value to search for']"));
        //*[@id="areaSelector"]
        this.area2Drop = element(by.xpath('//*[@id="areaSelector"]'))
        this.sendText = element(by.xpath('(//input[@class="select2-input"])[3]'))
        this.sendConstraint = element(by.xpath('(//input[@class="combobox ui-autocomplete-input"])[1]'))
        this.sendIsrequired = element(by.xpath('//input[@class="combobox ui-autocomplete-input errorState"]'))
        this.sendMaxlenght = element(by.xpath('(//input[@class="combobox ui-autocomplete-input"])[2]'))
        this.sendMultiLine = element(by.xpath('//div[@class="input-container"]//child::textarea'))
        this.selectRenameDoc = element(by.xpath('(//input[@type="checkbox"])[2]'));
        this.areaName = element(by.xpath('//input[@id="newListItemNameField"]'));
        this.unfiled = element(by.xpath('//*[@class="panelHeaderText" and contains(., "Unfiled")]'));
        this.unfiledDoc = element(by.xpath('(//*[@class="inboxSectionContent interactive"])[1]'));
        this.newFolderLevel = element(by.xpath('//div[@class="add-to-folder-list" and contains(.,"New Folder Level")]'));
        this.folderLevel = element(by.xpath('//li[@class="folder-level-name"]'));
        this.folderName = element(by.xpath('//label[contains(., "Static Text")]/following-sibling::input[@type="text"]'));
        this.save = element(by.xpath('(//button[@class="btn btn-default" and contains(.,"Save")])[2]'));
        this.areaDocType = element(by.xpath('//*[@class="nav-text" and contains(., "Document Types")]'));
        this.addAreaDoc = element(by.xpath('//*[@class="icon-left-add"]'));
        this.searchDoc = element(by.xpath('(//input[@placeholder="Search"])[2]'));
        this.addDocArea = element(by.xpath('//input[@type="checkbox"]'));
        this.doctypes = element(by.xpath('//span[contains(.,"Doc Types")]'));
        this.keyfields = element(by.xpath('//span[contains(.,"Key Fields")]'));
        this.newkeyField = element(by.xpath('//span[contains(.,"New Key Field")]'));
        this.keyfieldname = element(by.xpath('//input[@id="newListItemNameField"]'));
        this.add = element(by.xpath('//button[@class="btn btn-default" and contains(., "Add")]'));
        this.title = element(by.xpath('//*[@class="application-icon"]'))
        this.addTextLook = element(by.xpath('//input[@class="combobox ui-autocomplete-input errorState"]'))
        this.search = element(by.xpath('//input[@placeholder="Search Areas"]'))
        this.searchCategory = element(by.xpath('//input[@placeholder="Search Document Type Categories"]'))
        //this.search = element(by.xpath('//input[@placeholder="Search"]'))
        this.addProperties = element(by.xpath('//*[@class="nav-text" and contains(., "Properties")]'))
        this.rules = element(by.xpath('//*[@class="nav-text" and contains(., "Rules")]'))
        this.values = element(by.xpath('//*[@class="nav-text" and contains(., "Values")]'))
        this.documentTypes = element(by.xpath('//*[@class="nav-text" and contains(., "Document Types")]'))
        this.text = element(by.xpath('//select[contains(., "Text")]'))
        this.number = element(by.xpath('//option[contains(., "Number")]'))
        this.date = element(by.xpath('//option[contains(., "Date")]'))
        this.decimal = element(by.xpath('//option[contains(., "Decimal")]'))
        this.money = element(by.xpath('//option[contains(., "Money")]'))
        this.lookup = element(by.xpath('//option[contains(., "Lookup")]'))
        this.default = element(by.xpath('//span[contains(., "Default Value")]'))
        this.defaultValue = element(by.xpath('//input[@type="text" and @data-bind="value: Value"]'))
        this.apply = element(by.xpath('//button[@type="button" and contains(.,"Apply")]'))
        this.selectKey = element(by.xpath('//span[@data-bind="text: Name"]'))
        this.createDocTyoe = element(by.xpath('//span[contains(., "New Document Type")]'))
        this.inputDoc=  element(by.xpath('//input[@id="newListItemNameField"]'))
        this.addKey=  element(by.xpath('//*[@class="icon-left-add"]'))
        this.enterKeyfield = element(by.xpath('//*[@title="Search or filter the list of all fields."]//child::input[@placeholder="Search"]'))
        this.select = element(by.xpath('(//input[@type="checkbox"])[2]'))
        this.imports=  element(by.xpath('//span[contains(., "Imports")]'))
        this.importSettings=  element(by.xpath('//*[@id="additionalHeaderSettings"]'))
        this.copyImport = element(by.xpath('//button[contains(., "Copy")]'))
        this.copy = element(by.xpath('//span[contains(., "copy 1")]'))
        this.rename = element(by.xpath('//button[contains(., "Rename")]'))
        this.editName = element(by.xpath('//input[@placeholder="New Name"]')) 
        this.saveImport = element(by.xpath('//button[contains(., "Save")]')) 
        this.runImport = element(by.xpath('//*[@class="nav-text" and contains(., "Run Import")]')) 
        this.fieldMapping = element(by.xpath('//*[@class="nav-text" and contains(., "Field Mapping")]')) 
        this.fieldValue = element(by.xpath('(//input[@data-bind="enable: $root.monitoredOff, value: Value"])[1]')) 
        this.selectField = element(by.xpath('(//*[@class="col-md-4"])[7]')) 
        this.dropdown = element(by.xpath('//*[@class="dropdown-toggle user-menu-toggle focus-light"]')) 
        this.about = element(by.xpath('//span[contains(., "About")]'))
        this.version = element(by.xpath('//*[@id="aboutEtrieveContent"]'))
        this.edit = element(by.xpath('//button[contains(., "Edit")]')) 
        this.delete = element(by.xpath('//button[contains(., "Delete")]')) 
        this.code = element(by.xpath("//body/div[@id='applicationHost']/div[1]/div[3]/section[1]/div[1]/section[1]/nav[1]/div[2]/div[2]/div[1]/div[2]/input[1]"))
        this.category = element(by.xpath('//span[contains(., "Categories")]')) 
        this.addCategory = element(by.xpath('//span[contains(., "New Document Type Category")]')) 
        this.categoryname = element(by.xpath('//input[@id="newListItemNameField"]')) 
        this.update = element(by.xpath('//button[contains(., "Update Existing Data")]')) 
        this.deleteFol = element(by.xpath('//*[@class="folder-level-remove"]')) 
        this.unfiledfile = element(by.xpath('//span[@class="select2-chosen" and contains(., "Unfiled")]'))
        this.splitUnfile = element(by.xpath('(//span[@class="select2-chosen" and contains(., "Unfiled")])[2]'))
        this.splitDocType = element(by.xpath('//*[@class="select2-result-label" and contains (., "Doc Type")]'))
        this.selectLookup = element(by.xpath('(//span[@class="comboSelect k-icon k-i-arrow-s"])[1]'))
        this.addlookup = element(by.xpath('//*[@class="ui-menu-item-wrapper" and contains(., "Bub00000001-1")]'))
        this.addInputText = element(by.xpath('//input[@placeholder="Enter or Select"]'))
        this.dlFile = element(by.xpath('//*[@class="select2-result-label" and contains (., "Driver")]'))
        this.highSchoolFile = element(by.xpath('//*[@class="select2-result-label" and contains (., "High")]'))
        this.checkDocType = element(by.xpath('//span[@class="select2-chosen" and contains(., "Testdoc")]'))
        this.checkDocTypeold = element(by.xpath('//span[@class="select2-chosen" and contains(., "Test Rename")]'))
        this.checkoldDocType = element(by.xpath('//span[@class="select2-chosen" and contains(., "vndoc")]'))
        this.checkKeyField = element(by.xpath('//span[@class="comboSelect k-icon k-i-arrow-s"]'))
        this.selectDocValue = element(by.xpath('//*[@class="select2-result-label" and contains (., "Testdoc")]'))
        this.selectNewDocumentType = element(by.xpath('//*[@class="select2-result-label" and contains (., "Test Rename")]'))
        this.newdocType = element(by.xpath('//*[@class="select2-result-label" and contains (., "Driver")]'))
        this.selectNewDocType = element(by.xpath('//*[@class="select2-result-label" and contains (., "vndoc")]'))
        this.selectNewKeyField = element(by.xpath('//*[@class="select2-result-label" and contains (., "Testdoc")]'))
        this.zoomin = element(by.xpath('//*[@class="icon medium icon-zoom-in"]')) 
        this.zoomout= element(by.xpath('//*[@class="icon medium icon-zoom-out"]')) 
        this.thumbnail= element(by.xpath('//*[@class="icon medium icon-thumbnail"]')) 
        this.fullImage= element(by.xpath('//*[@class="icon medium icon-full-image"]')) 
        this.annotation= element(by.xpath('//*[@class="icon medium icon-annotation-bar-toggle"]')) 
        this.note= element(by.xpath('//*[@class="icon medium icon-note"]')) 
        this.download= element(by.xpath('//*[@class="icon medium icon-download"]')) 
        this.email= element(by.xpath('//*[@class="icon medium icon-email-toggle"]')) 
        this.address= element(by.xpath('//input[@id="toAddress"]')) 
        this.subject= element(by.xpath('//input[@class="subject-line"]')) 
        this.message= element(by.xpath('//textarea[@class="message-box"]')) 
        this.sendEmail= element(by.xpath('//button[@id="email-message-button"]')) 
        this.deleteImportDoc= element(by.xpath('(//button[@id="delete-document-button"])[1]')) 
        this.recycle = element(by.xpath('//span[@title="Empty recycle bin"]')) 
        this.okButton = element(by.xpath('//button[@type="button" and @id="confirmButton-OK"]')) 
        this.notes = element(by.xpath('(//textarea)[1]')) 
        this.link = element(by.xpath('//button[@title="Start linking"]')) 
        this.linkdoc = element(by.xpath('(//*[@class="tree-node__header__label" and contains (., "Driver")])[2]')) 
        this.linktoDoc = element(by.xpath('//*[@class="linked-documents-commit linked-doc-icon"]')) 
        this.lookButton = element(by.xpath('(//*[@ class="comboSelect k-icon k-i-arrow-s"])[1]'))
        this.sendLookupValue = element(by.xpath('//*[@ class="ui-menu-item-wrapper" and contains(., "Abbe")]'))
        this.sendLookupValue2 = element(by.xpath('//*[@ class="ui-menu-item-wrapper" and contains(., "Ashley")]'))
        this.stickynote = element(by.xpath('//button[@title="Note"]'));
        this.highlight = element(by.xpath('//button[@title="Highlight"]'));
        this.color = element(by.xpath('//span[contains(., "Yellow")]'));
        this.rectangle = element(by.xpath('//button[@title="Rectangle"]'));
        this.imageCleaning = element(by.xpath('//button[@id="toggle-ice-bar"]'));
        this.brightness = element(by.xpath('(//input[@type="number"])[1]'));
        this.changebright = element(by.xpath('(//button[@class="actionBar-button button interactive"])[1]'));
        this.changeContrast = element(by.xpath('(//button[@class="actionBar-button button interactive"])[2]'));
        this.contrast = element(by.xpath('(//input[@type="number"])[2]'));
        this.rotate = element(by.xpath('(//input[@type="number"])[3]'));
        this.rotateDegree = element(by.xpath('(//button[@class="actionBar-button button interactive"])[3]'));
        this.invert = element(by.xpath('//button[@title="Invert Color"]'));
        this.Despeckle = element(by.xpath('//button[@title="Despeckle"]'));
        this.RemoveBoards = element(by.xpath('//button[@title="Remove Borders"]'));
        this.cropMargins = element(by.xpath('//button[@title="Crop Margins"]'));
        this.autoDeskew = element(by.xpath('//button[@title="Auto-Deskew"]'));
        this.saveAuto = element(by.xpath('//button[@id="SaveAnnotations"]'));
        this.saveProcessing = element(by.xpath('//button[@title="Save Processing (Ctrl+S)"]'))
        this.saveLookup = element(by.xpath('//button[@class="partyVersion-SaveAddedVersion"]'))
        this.rotatePage = element(by.xpath('//button[@class="actionBar-item interactive" and @title="Rotate 90° Clockwise"]'))
        this.attachPage = element(by.xpath('//button[@class="actionBar-item interactive" and @title="Attach Page(s)"]'))
        this.splitDoc = element(by.xpath('//button[@class="splitDoc-button actionBar-item interactive"]'))
        this.split2Doc = element(by.xpath('//span[@class="page-label" and contains(.,"2")]'))
        this.next = element(by.xpath('//button[@data-i18n="SplitDocumentDialog.Next_Button"]'))
        this.split = element(by.xpath('//button[@class="execute-split-document"]'))
        this.completeSplit = element(by.xpath('//button[@id="confirmButton-Yes-and-complete"]'))
        this.license = element(by.xpath('//*[@data-i18n="about:Licenses.Title"]'))
        this.deployment = element(by.xpath('//*[@href="#assemblies"]'))
        this.adv = element(by.xpath('//a[@href="#advaccordion"]'))
        this.automapper = element(by.xpath('//a[@href="#automapper"]'))
        this.crypto = element(by.xpath('//a[@href="#crypto"]'))
        this.deploymentInfo = element(by.xpath('//*[@data-bind="foreach: assemblyInfos"]'))
        this.automations = element(by.xpath('//span[contains (., "Automations")]'))
        this.automationsName = element(by.xpath('//button[@title="Enter a name and click Add to create a new Automation"]'))
        this.iputAutomations = element(by.xpath('//input[@id="newListItemNameField"]'))
        this.searchAutomations = element(by.xpath('//input[@placeholder="Search Automations"]'))
        //this.searchAutomations = element(by.xpath('//input[@placeholder="Search"]'))
        this.enableAutomation  = element(by.xpath('(//input[@type="checkbox"])[1]'))
        this.automationRule = element(by.xpath('//button[@type="button" and contains (., "+ Rule")]'))
        this.docFieldValueMatch = element(by.xpath('//a[contains (., "Document field value match")]'))
        this.docFIeld = element(by.xpath('(//select[@class="property-selector form-control"])[2]'))
        this.equals = element(by.xpath('//option[contains(., "Equals")]'))
        this.docFieldvalue = element(by.xpath('(//select[@class="property-selector form-control"])[3]'))
        this.matchAllValues = element(by.xpath('//input[@data-bind="checked: MatchAllValues"]'))
        this.action = element(by.xpath('//button[@type="button" and contains (., "+ Action")]'))
        this.movetoArea = element(by.xpath('//li[contains (., "Move to Area")]'))
        this.doc2Move = element(by.xpath('//select[contains (., "select which documents to move...")]'))
        this.triggerDoc = element(by.xpath('//select[contains (., "destination Area")]'))
        this.ducumentFieldButton = element(by.xpath('//button[contains(., "+ Document field")]'))
        this.areaDropdownDoc = element(by.xpath('(//select[@class="property-selector form-control"])[5]'))
        this.selectDocTypeAutomation = element(by.xpath('//option[@value="DocumentType" and contains(., "Document Type")]'))
        this.selectOperator = element(by.xpath('//select[@title="document field search comparison operator not set"]'))
        this.equal = element(by.xpath('(//option[contains(., "Equals")])[3]'))
        this.documentFieldDropdown = element(by.xpath('//select[@title="document field search requires a value to search for"]'))
        this.history = element(by.xpath('//span[@class="panelHeaderText" and contains(., "History")]'))
        this.docDropdown = element(by.xpath('(//select[@class="property-selector form-control" and contains(., "Area")])[1]'))
        this.chooseDoc = element(by.xpath('(//option[@data-bind="text: Name, value: $data.FieldID" and contains(., "Document Type")])[1]'))
        this.trueFlag = element(by.xpath('(//option[contains(., "True")])[1]'))
        this.uncPath = element(by.xpath('(//input[@type="text"])[3]'))
        this.fileFIlter = element(by.xpath('(//input[@type="text"])[4]'))
        this.BackupPath = element(by.xpath('(//input[@type="text"])[6]'))
        this.recordDelimiter = element(by.xpath('(//input[@type="text"])[7]'))
        this.auditFilter = element(by.xpath('//div[@class="filter-bar-toggle"]'))
        this.auditCategory = element(by.xpath('//select[@id="auditCategories"]'))
        this.selectImportFilter = element(by.xpath('//option[contains(., "IMPORT")]'))
        this.auditTypes = element(by.xpath('//input[@id="auditTypes"]'))
        this.auditMessage = element(by.xpath('(//td[@class="col-message" and contains(., "Downloaded control file: Image Types3.txt")])[1]'))



    }

    public async verifyHeaderRole (headerID, roleName) {
        helperFun.waitforelement(this.unfiledHeader)
        console.log("bubba");
        this.unfiledHeader.getAttribute('role').then(function(value) {
            console.log('this is the value after bubba ' + value);
        });
        
        element(by.xpath('//*[@id="'+headerID+'"]')).getAttribute('role').then(function(val) {
            console.log("this is the val = " + val);
            console.log("this is the rolename = " + roleName);
            expect(val).to.equal(roleName)
        });
    }



    public async contentLogin (username, password){
         helperFun.waitforelement(this.username)
         this.username.click().sendKeys(username)
         helperFun.waitforelement(this.password)
         this.password.click().sendKeys(password)
         helperFun.waitforelement(this.login)
         this.login.click();
         browser.sleep(2000);
    }

    public async keyfield (){
        helperFun.waitforelement(this.menu)
        this.menu.click();
        helperFun.waitforelement(this.keyfields)
        this.keyfields.click();
        helperFun.waitforelement(this.newkeyField)
        this.newkeyField.click();
        browser.sleep(2000);

   }

   public async createkeyfield (name){
        browser.sleep(2000);
        helperFun.waitforelement(this.keyfieldname)
        this.keyfieldname.click().clear()
        helperFun.waitforelement(this.keyfieldname)
        this.keyfieldname.sendKeys(name)
        browser.sleep(2000);
        helperFun.waitforelement(this.add)
        this.add.click();
        browser.sleep(2000);

}

public async searchFeild(name){
    helperFun.waitforelement(this.search)
    this.search.click().sendKeys(name)
    helperFun.waitforelement(this.selectKey);
    this.selectKey.click();
    browser.sleep(2000);
}

public keyfieldName(noOfKeyfields){
   var randomkeyfieldnames = []
   for(var i = 0; i < noOfKeyfields; i++) {
    randomkeyfieldnames.push(".AutoTest" +i+ helperFun.randomDataGenerator())
   }
 return randomkeyfieldnames;
}

public async rule(){
    helperFun.waitforelement(this.rules)
    this.rules.click()
    helperFun.waitforelement(this.default)
    this.default.click()
    helperFun.waitforelement(this.defaultValue)
    this.defaultValue.click().sendKeys("Automation");
    helperFun.waitforelement(this.apply)
    this.apply.click()
    browser.sleep(2000);
}

public async numberProperties(name){
    helperFun.waitforelement(this.menu)
    this.menu.click();
    helperFun.waitforelement(this.keyfields)
    this.keyfields.click();
    helperFun.waitforelement(this.search)
    this.search.click().sendKeys(name)
    helperFun.waitforelement(this.selectKey);
    this.selectKey.click();
    helperFun.waitforelement(this.addProperties)
    this.addProperties.click()
    helperFun.waitforelement(this.text)
    this.text.click()
    helperFun.waitforelement(this.number);
    this.number.click();
    helperFun.waitforelement(this.rules)
    this.rules.click()
    helperFun.waitforelement(this.default)
    this.default.click()
    helperFun.waitforelement(this.defaultValue)
    this.defaultValue.click().sendKeys("35464");
    browser.sleep(2000)
    helperFun.waitforelement(this.apply)
    this.apply.click()
    browser.sleep(2000);
}

public async dateProperties(name){
    helperFun.waitforelement(this.menu)
    this.menu.click();
    helperFun.waitforelement(this.keyfields)
    this.keyfields.click();
    helperFun.waitforelement(this.search)
    this.search.click().sendKeys(name)
    helperFun.waitforelement(this.selectKey);
    this.selectKey.click();
    helperFun.waitforelement(this.addProperties)
    this.addProperties.click()
    helperFun.waitforelement(this.text)
    this.text.click()
    helperFun.waitforelement(this.date);
    this.date.click();
    helperFun.waitforelement(this.rules)
    this.rules.click()
    helperFun.waitforelement(this.default)
    this.default.click()
    helperFun.waitforelement(this.defaultValue)
    this.defaultValue.click().sendKeys("5/26/2021");
    browser.sleep(2000)
    helperFun.waitforelement(this.apply)
    this.apply.click()
    browser.sleep(2000);
}

public async decimalProperties(name){
    helperFun.waitforelement(this.menu)
    this.menu.click();
    helperFun.waitforelement(this.keyfields)
    this.keyfields.click();
    helperFun.waitforelement(this.search)
    this.search.click().sendKeys(name)
    helperFun.waitforelement(this.selectKey);
    this.selectKey.click();
    helperFun.waitforelement(this.addProperties)
    this.addProperties.click()
    helperFun.waitforelement(this.text)
    this.text.click()
    helperFun.waitforelement(this.decimal);
    this.decimal.click();
    helperFun.waitforelement(this.rules)
    this.rules.click()
    helperFun.waitforelement(this.default)
    this.default.click()
    helperFun.waitforelement(this.defaultValue)
    this.defaultValue.click().sendKeys("0.0001");
    helperFun.waitforelement(this.apply)
    this.apply.click()
    browser.sleep(2000);
}

public async moneyProperties(name){
    helperFun.waitforelement(this.menu)
    this.menu.click();
    helperFun.waitforelement(this.keyfields)
    this.keyfields.click();
    helperFun.waitforelement(this.search)
    this.search.click().sendKeys(name)
    helperFun.waitforelement(this.selectKey);
    this.selectKey.click();
    helperFun.waitforelement(this.addProperties)
    this.addProperties.click()
    helperFun.waitforelement(this.text)
    this.text.click()
    browser.sleep(2000)
    helperFun.waitforelement(this.money);
    this.money.click();
    browser.sleep(2000)
    helperFun.waitforelement(this.rules)
    this.rules.click()
    browser.sleep(2000)
    helperFun.waitforelement(this.default)
    this.default.click()
    helperFun.waitforelement(this.defaultValue)
    this.defaultValue.click().sendKeys("$1250");
    helperFun.waitforelement(this.apply)
    this.apply.click()
    browser.sleep(2000);
}


public async doctype (doc){
    helperFun.waitforelement(this.menu)
    this.menu.click();
    helperFun.waitforelement(this.doctypes)
    this.doctypes.click();
    helperFun.waitforelement(this.createDocTyoe)
    this.createDocTyoe.click();
    helperFun.waitforelement(this.inputDoc)
    this.inputDoc.click().sendKeys(doc)
    browser.sleep(3000)
    helperFun.waitforelement(this.add)
    this.add.click();
    helperFun.waitforelement(this.search)
    this.search.click().sendKeys(doc)
    helperFun.waitforelement(this.selectKey);
    this.selectKey.click();
    helperFun.waitforelement(this.addKey)
    this.addKey.click();
    browser.sleep(2000);

}

public async addTypes(names){
    for(var i = 0; i < 1; i++) {
    browser.sleep(2000)
    helperFun.waitforelement(this.enterKeyfield)
    this.enterKeyfield.click().clear();
    browser.sleep(2000)
    this.enterKeyfield.click().sendKeys(names[i])
    helperFun.waitforelement(this.select)
    this.select.click();
}
return browser.sleep(1000)
}

////span[@class="list-view-item-title" and contains(., "")]

public async createArea (name){
    helperFun.waitforelement(this.menu)
    this.menu.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.area)
    this.area.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.addArea)
    this.addArea.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.areaName)
    this.areaName.click().sendKeys(name)
    browser.sleep(1000)
    helperFun.waitforelement(this.add)
    this.add.click();
    helperFun.waitforelement(this.search)
    this.search.click().sendKeys(name)
    helperFun.waitforelement(this.selectKey);
    this.selectKey.click();
    browser.sleep(2000);

}


public async addFolderDoc(name){
    helperFun.waitforelement(this.newFolderLevel)
    this.newFolderLevel.click();
    helperFun.waitforelement(this.folderLevel)
    this.folderLevel.click();
    helperFun.waitforelement(this.folderName)
    this.folderName.click().sendKeys(name)
    helperFun.waitforelement(this.save)
    this.save.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.areaDocType )
    this.areaDocType.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.addAreaDoc )
    this.addAreaDoc.click();
    helperFun.waitforelement(this.searchDoc)
    this.searchDoc.click().sendKeys(name)
    helperFun.waitforelement(this.addDocArea)
    this.addDocArea.click();
    browser.sleep(2000);
    
}

public async existingArea(area){
    helperFun.waitforelement(this.search)
    this.search.click().sendKeys(area);
    browser.sleep(1000);
    helperFun.waitforelement(this.selectKey);
    this.selectKey.click();
    browser.sleep(2000);
}

public async selectArea(){
    browser.sleep(2000);
    helperFun.waitforelement(this.search)
    this.search.click().sendKeys("TestArea");
    browser.sleep(2000);
    helperFun.waitforelement(this.edit);
    this.edit.click();
    browser.sleep(2000);
    for(var i =1; i<=5; i++){
    var selectArea = element(by.xpath('(//span[contains(., "TestArea")])['+i+']'));
    helperFun.waitforelement(selectArea);
    selectArea.click();
    browser.sleep(1000);
    }
    browser.sleep(1000);
}

public async batchDelete(){
    browser.sleep(2000);
    helperFun.waitforelement(this.delete);
    this.delete.click();
    var myAlert = browser.switchTo().alert();
    myAlert.accept();
    browser.sleep(2000);
}

public async clickExistingArea(name){
    helperFun.waitforelement(this.search)
    this.search.click().sendKeys(name);
    browser.sleep(1000);
    helperFun.waitforelement(this.selectKey);
    this.selectKey.click();
    browser.sleep(2000);
}

public async unassociateDoc(name){
    helperFun.waitforelement(this.menu)
    this.menu.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.area)
    this.area.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.search)
    this.search.click().sendKeys(name);
    browser.sleep(1000);
    helperFun.waitforelement(this.selectKey);
    this.selectKey.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.areaDocType )
    this.areaDocType.click();
    browser.sleep(2000);
    browser.refresh()
    browser.sleep(5000)
    var selectDocument = element(by.xpath('//*[@type="checkbox"]'));
    helperFun.waitforelement(selectDocument);
    selectDocument.click();
    browser.sleep(2000);
}

public async clickExisArea(area){
    helperFun.waitforelement(this.search)
    this.search.click().sendKeys(area);
    browser.sleep(1000);
    helperFun.waitforelement(this.selectKey);
    this.selectKey.click();
    browser.sleep(2000);
}

public async clickAreaexisting(){
    helperFun.waitforelement(this.search)
    this.search.click().sendKeys(".Automation");
    browser.sleep(1000);
    helperFun.waitforelement(this.selectKey);
    this.selectKey.click();
    browser.sleep(2000);
}

public async clickexistingarea(area){
    browser.sleep(1000)
    helperFun.waitforelement(this.search)
    this.search.click().sendKeys(area);
    browser.sleep(1000);
    helperFun.waitforelement(this.selectKey);
    this.selectKey.click();
    browser.sleep(2000);
}

public async selectCreatedArea(area){
    helperFun.waitforelement(this.search)
    this.search.click().sendKeys(area);
    browser.sleep(1000);
    helperFun.waitforelement(this.selectKey);
    this.selectKey.click();
    browser.sleep(2000);
}

public async selectCategory(area){
    helperFun.waitforelement(this.searchCategory)
    this.searchCategory.click().sendKeys(area);
    browser.sleep(1000);
    helperFun.waitforelement(this.selectKey);
    this.selectKey.click();
    browser.sleep(2000);
}

public async addDocCategory(area){
    browser.sleep(2000);
    helperFun.waitforelement(this.addAreaDoc )
    this.addAreaDoc.click();
    helperFun.waitforelement(this.searchDoc)
    this.searchDoc.click().sendKeys(area)
    browser.sleep(2000);
    helperFun.waitforelement(this.addDocArea)
    this.addDocArea.click();
    browser.sleep(2000);
}

public async unassociateCat(area){
    browser.sleep(2000);
    helperFun.waitforelement(this.addDocArea)
    this.addDocArea.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.gearIcon)
    this.gearIcon.click();
    browser.sleep(2000);
}


public async updateFolder(){
    helperFun.waitforelement(this.update)
    this.update.click();
    var myAlert = browser.switchTo().alert();
    myAlert.accept();
    browser.sleep(2000);
    var myAlert = browser.switchTo().alert();
    myAlert.accept();
    browser.sleep(4000);
    helperFun.waitforelement(this.application);
    this.application.click();
    browser.sleep(2000);
}

public async addPermissiontoUser(area){
    //browser.driver.actions().mouseDown()
    // .mouseMove({x: -350, y: -150})
    // .perform()
   
    helperFun.waitforelement(this.etriveContent)
    this.etriveContent.click();
    browser.sleep(5000);
    var gotoArea = element(by.xpath('//h4[contains(., "'+area+'")]'));
    helperFun.waitforelement(gotoArea);
    gotoArea.click();
    // browser.sleep(2000);
    // helperFun.waitforelement(this.changePermission);
    // this.changePermission.click();
    // browser.sleep(2000);
    // helperFun.waitforelement(this.changePermissionUnfiled);
    // this.changePermissionUnfiled.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.removeAdd);
    this.removeAdd.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.removeAddUnfiled);
    this.removeAddUnfiled.click();
    browser.sleep(2000);
}

public async signout(){
    helperFun.waitforelement(this.dropdown)
    this.dropdown.click()
    browser.sleep(2000);
    helperFun.waitforelement(this.clicksignout)
    this.clicksignout.click()
    browser.sleep(2000);
}

public async Import(){
    browser.sleep(2000);
    helperFun.waitforelement(this.runImport);
    this.runImport.click();
    var myAlert = browser.switchTo().alert();
    myAlert.accept();
    browser.sleep(2000);
}

public async ImportFile(area){
    helperFun.waitforelement(this.importaddarea);
    this.importaddarea.click();
    browser.sleep(1000);
    var selectVal = element(by.xpath('//option[contains(., "'+area+'")]'))
    helperFun.waitforelement(selectVal);
    selectVal.click();
    browser.sleep(1000);
    helperFun.waitforelement(this.runImport);
    this.runImport.click();
    var myAlert = browser.switchTo().alert();
    myAlert.accept();
    browser.sleep(2000);
}

//a[@data-bind="click: $root.getControlFile, clickBubble: false, text: StrippedName, title: FullName" and contains(., "/Image Types3")]

public async downloadControl(){
    var controlFile = element(by.xpath('//a[@data-bind="click: $root.getControlFile, clickBubble: false, text: StrippedName, title: FullName" and contains(., "/Image Types3")]'));
    helperFun.waitforelement(controlFile);
    
    
    controlFile.isDisplayed().then(function (isVisible) {
        if (isVisible) {
            console.log ('Download control file is Present')
        } else {
            console.log ('Download control file is not Present')
        }
    });
    browser.sleep(2000);
    controlFile.click();
    browser.sleep(2000);

}

public async downloadControlemail(){
    var controlFile = element(by.xpath('//a[@data-bind="click: $root.getControlFile, clickBubble: false, text: StrippedName, title: FullName" and contains(., "/eComm - eDocsFinAid-282478-_(eDocsFinAid@elon.edu)__03212022_165326_BN8PR07MB59850F7384A06165BCDDC036A5169@BN8PR07MB5985.namprd07.prod.outlook.com.txt")]'));
    helperFun.waitforelement(controlFile);
    
    
    controlFile.isDisplayed().then(function (isVisible) {
        if (isVisible) {
            console.log ('Download control file is Present')
        } else {
            console.log ('Download control file is not Present')
        }
    });
    browser.sleep(2000);
    controlFile.click();
    browser.sleep(2000);

}

public async disabledControlFile(){
    var controlFiledis = element(by.xpath('(//span[@data-i18n="[title]Imports.Management.Cannot_Download_Control_File"])[1]'));
    helperFun.waitforelement(controlFiledis);
    browser.actions().mouseMove(controlFiledis).mouseMove(controlFiledis).perform();
    browser.sleep(2000);
    controlFiledis.isPresent().then(function (isVisible){
        if (isVisible) {
            console.log ('Diasabled control fIle')
        } else {
            console.log ('Download control file')
        }
    });
    browser.sleep(2000);

}

public async downloadControlexist(){
    var controlFile = element(by.xpath('(//a[@data-bind="click: $root.getControlFile, clickBubble: false, text: StrippedName, title: FullName" and contains(., "/Image Types3")])[1]'));
    controlFile.isPresent().then(function (isVisible){
        if (isVisible) {
            console.log ('Download control file is Present')
        } else {
            console.log ('Download control file is not Present')
        }
    });

}

public async checkOCR(){
    this.ocrElement.isDisplayed().then(function (isVisible) {
        if (isVisible) {
            console.log ('OCR is Present')
        } else {
            console.log ('OCR is Hidden')
        }
    });
}

public async importcheck(){
    let flag = element(by.xpath('(//*[@class="col-importname"])[4]'))
    helperFun.waitforelement(flag);
    flag.getText().then(function(text){
        //expect(text).to.include("testImport2")
        console.log("Import history---------- "+ text)
        return text;
    })

}

public async reloadpage(){
    browser.sleep(2000)
        browser.refresh()
        browser.sleep(2000)
        browser.refresh()
        browser.sleep(2000)
        browser.refresh()
        browser.sleep(2000)
        browser.refresh()
        browser.sleep(3000)

    }

public async import100mb(){
    browser.sleep(3000)
    browser.sleep(2000)
    browser.refresh()
    browser.sleep(2000)
    browser.refresh()
    browser.sleep(2000)
    browser.refresh()
    browser.sleep(2000)
    browser.refresh()
    browser.sleep(2000)    
    let flag = element(by.xpath('(//span[@data-bind="text: Status.Name"])[1]'))
    helperFun.waitforelement(flag);
    flag.getText().then(function(text){
        expect(text).to.include("Completed")
        console.log("Import Status---------- "+ text)
        return text;
    })
    browser.sleep(3000)
}

public async importcheckstatus(){
    browser.sleep(3000)
    let flag = element(by.xpath('(//span[@data-bind="text: Status.Name"])[1]'))
    helperFun.waitforelement(flag);
    flag.getText().then(function(text){
        //expect(text).to.include("Completed")
        console.log("Import Status is ---------- "+ text)
        return text;
    })

}

public async importverify(){
    let flag = element(by.xpath('(//*[@class="col-importname"])[4]'))
    helperFun.waitforelement(flag);
    flag.getText().then(function(text){
       // expect(text).to.include("testImport1")
        console.log("Import history---------- "+ text)
        return text;
    })

}

public async purge(){
    browser.sleep(1000);
    let purgeimport = element(by.xpath('(//input[@title="Add to purge list"])[1]'))
    helperFun.waitforelement(purgeimport);
    purgeimport.click()
    browser.sleep(1000);
    let purgeselected = element(by.xpath('//button[contains(., "Purge Selected")]'))
    helperFun.waitforelement(purgeselected);
    purgeselected.click()
    browser.sleep(2000);
}

public async errorcheck(){
    let flag = element(by.xpath('(//*[@class="col-area"])[4]'))
    browser.sleep(2000);
    helperFun.waitforelement(flag);
    flag.click();
    browser.sleep(2000);
    // let error = element(by.xpath('//td[contains(., "Document 1")]'))
    // helperFun.waitforelement(error);
    // error.getText().then(function(error){
    //     console.log("Import history---------- "+ error)
    //     expect(error).to.include("Document 1; testText is a Required Field that wasn't supplied. Value: ''.")
    //     return error;
   // })

}

public async doclink(){
    let docerror = element(by.xpath('(//span[contains(., ".../Image Types3.txt")])[1]'))
    browser.sleep(2000);
    helperFun.waitforelement(docerror);
    docerror.click();
    browser.sleep(2000);

}

public async gotoDocArea(){
    browser.sleep(2000);
    let clickDocID = element(by.xpath('(//a[@data-bind="attr: { href: DocumentURL , title: DocumentID }, text: DocumentID"])[1]'))
    helperFun.waitforelement(clickDocID);
    clickDocID.click();
    browser.sleep(2000);


}

public async monitorFlag(){
    let flag = element(by.xpath('(//select[contains(., "False")])[1]'))
    helperFun.waitforelement(flag);
    flag.getText().then(function(text){
        //expect(text).to.include("Testdoc")
        console.log("monitor Flag is---------- "+ text)
        return text;
    })

}

public async monitorFlagTrue(){
    let flag = element(by.xpath('(//select[contains(., "False")])[1]'))
    helperFun.waitforelement(flag);
    flag.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.trueFlag);
    this.trueFlag.click();
    browser.sleep(2000);
}

public async checkPath(){
    browser.sleep(1000);
    this.uncPath.isEnabled().then(function (isVisible) {
    if (isVisible) {
        console.log ('UNC Path is editable')
    } else {
        console.log ('UNC Path is not editable')
    }
});
}

public async file(){
    browser.sleep(1000);
    this.fileFIlter.isEnabled().then(function (isVisible) {
    if (isVisible) {
        console.log ('File Filter is editable')
    } else {
        console.log ('File Filter not editable')
    }
});
}

public async backup(){
    browser.sleep(1000);
    this.BackupPath.isEnabled().then(function (isVisible) {
    if (isVisible) {
        console.log ('Back Up Path is editable')
    } else {
        console.log ('Back Up Path  not editable')
    }
});
}

public async record(){
    browser.sleep(1000);
    this.recordDelimiter.isEnabled().then(function (isVisible) {
    if (isVisible) {
        console.log ('Back Up Path is editable')
    } else {
        console.log ('Back Up Path  not editable')
    }
});

let flag = element(by.xpath('(//select[contains(., "True")])[1]'))
    helperFun.waitforelement(flag);
    flag.click();
    browser.sleep(2000);
    let Falseflag = element(by.xpath('(//option[contains(., "False")])[1]'))
    helperFun.waitforelement(Falseflag);
    Falseflag.click();
    browser.sleep(2000);
}

public async updFolder(){
    helperFun.waitforelement(this.update)
    this.update.click();
    var myAlert = browser.switchTo().alert();
    myAlert.accept();
    browser.sleep(2000);
    var myAlert = browser.switchTo().alert();
    myAlert.accept();
    browser.sleep(4000);
    helperFun.waitforelement(this.application);
    this.application.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.menu)
    this.menu.click();
    browser.sleep(1000)
    
}

public async deleteFolder(){
    for(var i = 0; i < 3; i++) {
    helperFun.waitforelement(this.deleteFol)
    this.deleteFol.click();
    var myAlert = browser.switchTo().alert();
    myAlert.accept();
    browser.sleep(2000);
    }
}

public async deleteFolderforArea(){
    for(var i = 0; i < 2; i++) {
    helperFun.waitforelement(this.deleteFol)
    this.deleteFol.click();
    var myAlert = browser.switchTo().alert();
    myAlert.accept();
    browser.sleep(2000);
    }
}

public async folderDelete(){
    helperFun.waitforelement(this.deleteFol)
    this.deleteFol.click();
    var myAlert = browser.switchTo().alert();
    myAlert.accept();
    browser.sleep(2000);

}

public async areaTree(){
    helperFun.waitforelement(this.application);
    this.application.click();
    // helperFun.waitforelement(this.close)
    // this.close.click();
    browser.sleep(5000);
    helperFun.waitforelement(this.autoArea);
    this.autoArea.click();
    helperFun.waitforelement(this.openFolder);
    this.openFolder.click();
    helperFun.waitforelement(this.openSecondFolderLevel);
    this.openSecondFolderLevel.click();
    helperFun.waitforelement(this.thirdFolderLevel);
    this.thirdFolderLevel.click();
    helperFun.waitforelement(this.uploadedDoc);
    this.uploadedDoc.getText().then(function(text){
        //expect(text).to.include("Testdoc")
        console.log("Document name" + text)
        return text;
    })
    helperFun.waitforelement(this.selectfile);
    this.selectfile.click();
    
    
}

public async importTree(){
    helperFun.waitforelement(this.application);
    this.application.click();
    // helperFun.waitforelement(this.close)
    // this.close.click();
    browser.sleep(5000);
    var Area = element(by.xpath('(//*[@class="koTree-icon koTree-node-toggle icon-toggle-arrow"])[1]'));
    helperFun.waitforelement(Area);
    Area.click();
    helperFun.waitforelement(this.openFolder);
    this.openFolder.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.selectimportfile);
    this.selectimportfile.click();
    browser.sleep(2000);
}

public async treeStructure(){
    helperFun.waitforelement(this.application);
    this.application.click();
    // helperFun.waitforelement(this.close)
    // this.close.click();
    browser.sleep(5000);
    var Area = element(by.xpath('(//*[@class="koTree-icon koTree-node-toggle icon-toggle-arrow"])[1]'));
    helperFun.waitforelement(Area);
    Area.click();
    helperFun.waitforelement(this.openFolder);
    this.openFolder.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.selectimportfile);
    this.selectimportfile.click();
    browser.sleep(2000);
}

public async Tree(){
    helperFun.waitforelement(this.application);
    this.application.click();
    // helperFun.waitforelement(this.close)
    // this.close.click();
    browser.sleep(5000);
    helperFun.waitforelement(this.automationArea);
    this.automationArea.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.openFolder);
    this.openFolder.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.uploadedDoc);
    this.uploadedDoc.getText().then(function(text){
        //expect(text).to.include("Testdoc")
        console.log("Document name" + text)
        return text;
    })
    browser.sleep(2000);
    helperFun.waitforelement(this.selectfile);
    this.selectfile.click();
    
    
}


public async oldTree(){
    helperFun.waitforelement(this.application);
    this.application.click();
    // helperFun.waitforelement(this.close)
    // this.close.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.areaFolder);
    this.areaFolder.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.openFolder);
    this.openFolder.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.selectold);
    this.selectold.click();   
    return browser.sleep(2000);
}

public async old(){
    helperFun.waitforelement(this.application);
    this.application.click();
    // helperFun.waitforelement(this.close)
    // this.close.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.areaFolder);
    this.areaFolder.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.openFolder);
    this.openFolder.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.openSecondFolderLevel);
    this.openSecondFolderLevel.click();
    browser.sleep(4000);
    helperFun.waitforelement(this.selectold);
    this.selectold.click();   
    return browser.sleep(2000);
}


public async areaTreeStructure(){
    helperFun.waitforelement(this.application);
    this.application.click();
    // helperFun.waitforelement(this.close)
    // this.close.click();
    browser.sleep(4000);
    helperFun.waitforelement(this.autoArea);
    this.autoArea.click();
    helperFun.waitforelement(this.openFolder);
    this.openFolder.click();
    helperFun.waitforelement(this.openSecondFolderLevel);
    this.openSecondFolderLevel.click();
    helperFun.waitforelement(this.thirdFolderLevel);
    this.thirdFolderLevel.click();
    helperFun.waitforelement(this.selectfiledoc);
    this.selectfiledoc.click();
    
    
}

public async checkFields(){
    helperFun.waitforelement(this.checkDocType);
    this.checkDocType.click();
    helperFun.waitforelement(this.selectDocValue);
    this.selectDocValue.getText().then(function(text){
        //expect(text).to.include("Testdoc")
        console.log("Document Type name------------" + text)
        return text;
    })
    this.selectDocValue.click();
    helperFun.waitforelement(this.checkKeyField);
    this.checkKeyField.click();
    helperFun.waitforelement(this.selectKeyValue);
    this.selectKeyValue.getText().then(function(text){
        //expect(text).to.include("test key field")
        console.log("Keyfield Field value----------" + text)
        return text;
    })
    this.selectKeyValue.click();
    
    
}

public async selectOldDoc(){
    helperFun.waitforelement(this.checkDocTypeold);
    this.checkDocTypeold.click();
    helperFun.waitforelement(this.selectDocValue)
    this.selectDocValue.click();
}

public async selectNewDoc(){
        helperFun.waitforelement(this.checkDocType);
        this.checkDocType.click();
        helperFun.waitforelement(this.selectNewDocumentType);
        this.selectNewDocumentType.click();
}

public async selectNewDocement(){
    helperFun.waitforelement(this.checkDocType);
    this.checkDocType.click();
    helperFun.waitforelement(this.selectNewDocType);
    this.selectNewDocType.click()
    browser.sleep(1000)
    // helperFun.waitforelement(this.sendText);
    // this.sendText.click().sendKeys("Test Text Value")
    browser.sleep(1000)
    helperFun.waitforelement(this.sendConstraint);
    this.sendConstraint.click().sendKeys("1005")
    browser.sleep(1000)
    helperFun.waitforelement(this.sendIsrequired);
    this.sendIsrequired.click().sendKeys("Isrequired")
    browser.sleep(1000)
    helperFun.waitforelement(this.sendMaxlenght);
    this.sendMaxlenght.click().sendKeys("rghfhfjdkkdlkdldldldldlldldldyeiwomzndnalapfifj")
    browser.sleep(1000)
    helperFun.waitforelement(this.sendMultiLine);
    this.sendMultiLine.click().sendKeys("testmultiLine1, testmultiline2")
    browser.sleep(1000)
    helperFun.waitforelement(this.checkoldDocType);
    this.checkoldDocType.click();
    browser.sleep(2000)
    helperFun.waitforelement(this.selectNewKeyField);
    this.selectNewKeyField.click();
}

public async selectoldDocement(){
    helperFun.waitforelement(this.checkoldDocType);
    this.checkoldDocType.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.selectNewKeyField);
    this.selectNewKeyField.click();
}

public async selectNewKey(){
    helperFun.waitforelement(this.checkDocType);
    this.checkDocType.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.selectNewDocType);
    this.selectNewDocType.click();
}

public async checkTree(){
    helperFun.waitforelement(this.application);
    this.application.click();
    // helperFun.waitforelement(this.close)
    // this.close.click();
    browser.sleep(5000);
    }

public async refreshpage(folder){
    helperFun.waitforelement(this.close)
    this.close.click();
    browser.sleep(5000);
    helperFun.waitforelement(this.autoArea);
    this.autoArea.click();
    helperFun.waitforelement(this.openFolder);
    this.openFolder.click();
    helperFun.waitforelement(this.openSecondFolderLevel);
    this.openSecondFolderLevel.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.selectfol);
    this.selectfol.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.unfiled);
    this.unfiled.click();
    helperFun.waitforelement(this.unfiledDoc);
    this.unfiledDoc.getText().then(function(text){
        expect(text).to.include("Testdoc")
        console.log("Document name ---------- "+ text)
        return text;
    })
}

public async validateSplit(area, look, doc1, folder){
    browser.sleep(2000);
    helperFun.waitforelement(this.application);
    this.application.click();
    browser.sleep(2000);
    let element1 = element(by.xpath('//span[@class="tree-node__header__label" and contains (., "'+area+'")]'))
    browser.sleep(2000)
    browser.actions().doubleClick(element1.getWebElement()).perform();
    browser.sleep(2000);
    let secondFolder = element(by.xpath('//span[@class="tree-node__header__label" and contains(., "'+look+'")]'))
    browser.sleep(2000)
    browser.actions().doubleClick(secondFolder.getWebElement()).perform();
    browser.sleep(1000)
    let thirdFolder = element(by.xpath('//span[@class="tree-node__header__label" and contains(., "'+doc1+'")]'))
    browser.sleep(1000)
    browser.actions().doubleClick(thirdFolder.getWebElement()).perform();
    browser.sleep(2000);
    let secondAreaDoc = element(by.xpath('//span[@class="tree-node__header__label" and contains(., "'+folder+'")]'))
    browser.sleep(1000)
    secondAreaDoc.click()
    browser.sleep(2000)

}

public async secondAreaAutomation(area, doc1, folder){
    browser.sleep(2000);
    helperFun.waitforelement(this.application);
    this.application.click();
    browser.sleep(2000);
    let element1 = element(by.xpath('//span[@class="tree-node__header__label" and contains (., "'+area+'")]'))
    browser.sleep(2000)
    browser.actions().doubleClick(element1.getWebElement()).perform();
    browser.sleep(2000);
    let secondFolder = element(by.xpath('//span[@class="tree-node__header__label" and contains(., "'+folder+'")]'))
    browser.sleep(2000)
    browser.actions().doubleClick(secondFolder.getWebElement()).perform();
    browser.sleep(1000)
    let thirdFolder = element(by.xpath('//span[@class="tree-node__header__label" and contains(., "'+doc1+'")]'))
    browser.sleep(1000)
    browser.actions().doubleClick(thirdFolder.getWebElement()).perform();
    browser.sleep(2000);
    let secondAreaDoc = element(by.xpath('(//span[@class="tree-node__header__label" and contains(., "'+doc1+'")])[2]'))
    browser.sleep(1000)
    secondAreaDoc.click()
    browser.sleep(2000)

}


public async unfile(folder){
    // helperFun.waitforelement(this.close)
    // this.close.click();
    // browser.sleep(5000);
    helperFun.waitforelement(this.selectAutoArea);
    this.selectAutoArea.click();
    helperFun.waitforelement(this.unfiled);
    this.unfiled.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.unfiledDoc);
    this.unfiledDoc.getText().then(function(text){
        expect(text).to.include("Testdoc")
        console.log("Document name ---------- "+ text)
        return text;
    })
}

public async checkPermission(){
    this.attachPage.isEnabled().then(function (isVisible) {
        if (isVisible) {
            console.log ('Attach file and Split is enabled')
        } else {
            console.log ('Attach file and Split is disabled')
        }
    });
}

public async checkTreeDocs(area){
    // helperFun.waitforelement(this.close)
    // this.close.click();
    // browser.sleep(5000);
    var selectVal = element(by.xpath('//span[@class="tree-node__header__label" and contains (.,"'+area+'")]'))
    helperFun.waitforelement(selectVal);
    selectVal.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.unfiled);
    this.unfiled.click();
    browser.sleep(2000);
    var unfile1 = element(by.xpath('(//*[@data-keydown="InboxKeyDown"])[1]'))
    helperFun.waitforelement(unfile1);
    unfile1.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.unfiledfile);
    this.unfiledfile.click();
    helperFun.waitforelement(this.selectNewDocType);
    this.selectNewDocType.click();
    browser.sleep(2000);
    // helperFun.waitforelement(this.lookButton);
    // this.lookButton.click();
    // browser.sleep(2000);
    // helperFun.waitforelement(this.sendLookupValue)
    // this.sendLookupValue.click().sendKeys("DL 32081200")
    // browser.sleep(2000);
    // helperFun.waitforelement(this.saveLookup)
    // this.saveLookup.click()
    // browser.sleep(2000);
}

public async unfiledocs(area){
    // helperFun.waitforelement(this.close)
    // this.close.click();
    // browser.sleep(5000);
    var selectVal = element(by.xpath('//span[@class="tree-node__header__label" and contains (.,"'+area+'")]'))
    helperFun.waitforelement(selectVal);
    selectVal.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.unfiled);
    this.unfiled.click();
    browser.sleep(2000);
    var unfile1 = element(by.xpath('//*[@data-keydown="InboxKeyDown"]'))
    helperFun.waitforelement(unfile1);
    unfile1.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.unfiledfile);
    this.unfiledfile.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.dlFile);
    this.dlFile.click();
    browser.sleep(2000);
    // helperFun.waitforelement(this.lookButton);
    // this.lookButton.click();
    // browser.sleep(2000);
    // helperFun.waitforelement(this.sendLookupValue)
    // this.sendLookupValue.click().sendKeys("DL 32081200")
    // browser.sleep(2000);
    // helperFun.waitforelement(this.saveLookup)
    // this.saveLookup.click()
    // browser.sleep(2000);

    browser.sleep(3000)
    helperFun.waitforelement(unfile1);
    unfile1.click();
    helperFun.waitforelement(this.unfiledfile);
    this.unfiledfile.click();
    helperFun.waitforelement(this.highSchoolFile);
    this.highSchoolFile.click();
    browser.sleep(2000);
    // helperFun.waitforelement(this.lookButton);
    // this.lookButton.click();
    // browser.sleep(2000);
    // this.sendLookupValue.click().sendKeys("Test")
    // browser.sleep(2000);
    // helperFun.waitforelement(this.saveLookup)
    // this.saveLookup.click()
    browser.sleep(2000)
}

public async CheckImageOnly(area){
    var selectVal = element(by.xpath('//span[@class="tree-node__header__label" and contains (.,"'+area+'")]'))
    helperFun.waitforelement(selectVal);
    selectVal.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.unfiled);
    this.unfiled.click();
    browser.sleep(2000);
    var unfile1 = element(by.xpath('//*[@data-keydown="InboxKeyDown"]'))
    helperFun.waitforelement(unfile1);
    unfile1.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.unfiledfile);
    this.unfiledfile.click();
    var vndoctype = element(by.xpath('//*[@class="select2-result-label" and contains (., "VN Doc")]'))
    helperFun.waitforelement(vndoctype);
    vndoctype.click();
    browser.sleep(2000);
}

public async verifyPageNumberInFullViewer(){
    browser.waitForAngular();
    var pageNum1 = element(by.xpath("(//div[@class='atala_page_number'])[5]"));
    browser.executeScript("arguments[0].scrollIntoView();",pageNum1.getWebElement());
    browser.sleep(1000)
    pageNum1.isPresent();
}

public async auditFilters(){
    helperFun.waitforelement(this.auditFilter);
    this.auditFilter.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.auditCategory);
    this.auditCategory.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.selectImportFilter);
    this.selectImportFilter.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.auditTypes);
    this.auditTypes.click();
    browser.sleep(1000)
}

public async auditCreate(){
    helperFun.waitforelement(this.auditFilter);
    this.auditFilter.click();
    browser.sleep(1000)
    var create = element(by.xpath('(//input[@id="auditTypes"])[1]'))
    helperFun.waitforelement(create);
    create.click();
    browser.sleep(1000)
}

public async createCheck(area){
    var controlFile = element(by.xpath('(//td[contains(., "Created area '+area+'")])[2]')).isPresent();
    controlFile.then(function(present){
    expect(present).to.equal(false);
})
}

public async logoutUser(){
    helperFun.waitforelement(this.dropdown)
    this.dropdown.click()
    browser.sleep(1000)
    helperFun.waitforelement(this.logout);
    this.logout.click();
    browser.sleep(1000)
}

public async auditText(){
    helperFun.waitforelement(this.auditMessage);
    this.auditMessage.click();
    browser.sleep(1000)
    this.auditMessage.getText().then(function(text){
        console.log("Download Control File in Audit: " + text)
        })
    browser.sleep(1000)
}

public async multipage(area){
    let element1 = element(by.xpath('//span[@class="tree-node__header__label" and contains (., "'+area+'")]'))
    browser.sleep(2000)
    browser.actions().doubleClick(element1.getWebElement()).perform();
    browser.sleep(2000);
    let secondFolder = element(by.xpath('//span[@class="tree-node__header__label" and contains(., "Students:")]'))
    browser.sleep(2000)
    browser.actions().doubleClick(secondFolder.getWebElement()).perform();
    browser.sleep(1000)
    let thirdFolder = element(by.xpath('//span[@class="tree-node__header__label" and contains(., "VN Doc")]'))
    browser.sleep(1000)
    browser.actions().doubleClick(thirdFolder.getWebElement()).perform();
    browser.sleep(2000);
    let secondAreaDoc = element(by.xpath('(//span[@class="tree-node__header__label" and contains(., "VN Doc")])[2]'))
    browser.sleep(1000)
    secondAreaDoc.click()
    browser.sleep(2000);
}

public async addAnnotations(area){
    // helperFun.waitforelement(this.close)
    // this.close.click();
    // browser.sleep(5000);
    // var selectVal = element(by.xpath('//span[@class="tree-node__header__label" and contains (.,"'+area+'")]'))
    // helperFun.waitforelement(selectVal);
    // selectVal.click();
    // browser.sleep(2000);
    // helperFun.waitforelement(this.unfiled);
    // this.unfiled.click();
    browser.sleep(2000);
    var unfile1 = element(by.xpath('//span[@class="inbox-document-header"]'))
    helperFun.waitforelement(unfile1);
    unfile1.click();
    browser.sleep(2000);
    let annotate = element(by.xpath('//button[@id="toggle-annotation-bar"]'))
    helperFun.waitforelement(annotate)
    annotate.click()
    browser.sleep(1000);
    let stamp = element(by.xpath('//button[@title="Rubber Stamp"]'))
    helperFun.waitforelement(stamp)
    stamp.click()
    browser.sleep(1000);
    let stamp1 = element(by.xpath('//button[contains(.,"Approved")]'))
    helperFun.waitforelement(stamp1)
    stamp1.click()
    browser.sleep(1000);
    let stamp2 = element(by.xpath('//*[@class="atala_page_div atala_active_page"]'))
    helperFun.waitforelement(stamp2)
    stamp2.click()
    browser.sleep(1000);
    helperFun.waitforelement(this.saveAuto);
    this.saveAuto.click();
    browser.sleep(1000);
    
}

public async Sticky(){
    browser.sleep(2000);
    helperFun.waitforelement(this.stickynote);
    this.stickynote.click();
    let stamp2 = element(by.xpath('//*[@class="atala_page_div atala_active_page"]'))
    helperFun.waitforelement(stamp2)
    stamp2.click()
    browser.sleep(1000);
    helperFun.waitforelement(this.highlight);
    this.highlight.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.color);
    this.color.click();
    browser.sleep(2000);
    stamp2.click()
    browser.sleep(2000);
    helperFun.waitforelement(this.rectangle);
    this.rectangle.click();
    browser.sleep(1000)
    helperFun.waitforelement(stamp2)
    stamp2.click()
    browser.sleep(1000);
    helperFun.waitforelement(this.saveAuto);
    this.saveAuto.click();
    browser.sleep(1000);
    
}


public async splitDocument(){
    browser.sleep(2000);
    helperFun.waitforelement(this.rotatePage);
    this.rotatePage.click();
    browser.sleep(1000);
    helperFun.waitforelement(this.attachPage);
    this.attachPage.click();
    browser.sleep(2000);
    var fileToUpload = '../dark.jpg';
    var absolutePath = path.resolve(__dirname, fileToUpload);
    var fileElem = element(by.css('input[type="file"]'));
    browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
    fileElem.sendKeys(absolutePath);
    browser.sleep(3000);
    browser.refresh();
    browser.sleep(3000);
    helperFun.waitforelement(this.splitDoc);
    this.splitDoc.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.split2Doc);
    this.split2Doc.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.next);
    this.next.click();
    browser.sleep(2000);
    browser.sleep(2000);
    helperFun.waitforelement(this.split);
    this.split.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.completeSplit);
    this.completeSplit.click();
    browser.sleep(2000);
    
}

public async splitDocuments(){
    helperFun.waitforelement(this.attachPage);
    this.attachPage.click();
    browser.sleep(2000);
    var fileToUpload = '../dark.jpg';
    var absolutePath = path.resolve(__dirname, fileToUpload);
    var fileElem = element(by.css('input[type="file"]'));
    browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
    fileElem.sendKeys(absolutePath);
    browser.sleep(3000);
    browser.refresh();
    browser.sleep(3000);
    helperFun.waitforelement(this.splitDoc);
    this.splitDoc.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.split2Doc);
    this.split2Doc.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.next);
    this.next.click();
    browser.sleep(2000);
    browser.sleep(2000);
    helperFun.waitforelement(this.split);
    this.split.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.completeSplit);
    this.completeSplit.click();
    browser.sleep(2000);
    
}

public async disableSplit(){
    browser.sleep(1000);
    helperFun.waitforelement(this.attachPage);
    this.attachPage.click();
    browser.sleep(2000);
    var fileToUpload = '../dark.jpg';
    var absolutePath = path.resolve(__dirname, fileToUpload);
    var fileElem = element(by.css('input[type="file"]'));
    browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
    fileElem.sendKeys(absolutePath);
    browser.sleep(3000);
    browser.refresh();
    browser.sleep(3000);
    expect(this.splitDoc.isDisplayed()).toBe(false);
    browser.sleep(3000); 
}



public async attachdoc() {
    browser.sleep(2000);
    var unfile1 = element(by.xpath('//span[@class="inbox-document-header"]'))
    helperFun.waitforelement(unfile1);
    unfile1.click();
    browser.sleep(2000);

}

public async navigate() {
    browser.sleep(2000);
    var navigate = element(by.xpath('//*[@class="col-importname" and contains (., "Bubba")]'))
    helperFun.waitforelement(navigate);
    navigate.click();
    browser.sleep(2000);
    this.runImport.isDisplayed().then(function (isVisible) {
        if (isVisible) {
            console.log ('Run Import is Present')
        } else {
            console.log ('Run Import is not present')
        }
    });

}

public async backButton() {
    browser.sleep(2000);
    var navigate = element(by.xpath('//*[@id="content"]/div/section/nav/div[1]/div[1]'))
    helperFun.waitforelement(navigate);
    browser.actions().doubleClick(navigate.getWebElement()).perform();
    //navigate.click();
    browser.sleep(3000);
    var importConfig = element(by.xpath('//span[contains (., "New Import Configuration")]'))
    importConfig.isDisplayed().then(function (isVisible) {
        if (isVisible) {
            console.log ('back button takes to import configuration page')
        } else {
            console.log ('back button is not working')
        }
    });

}


public async splitDocu(){
    browser.sleep(1000);
    helperFun.waitforelement(this.attachPage);
    this.attachPage.click();
    browser.sleep(2000);
    var fileToUpload = '../dark.jpg';
    var absolutePath = path.resolve(__dirname, fileToUpload);
    var fileElem = element(by.css('input[type="file"]'));
    browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
    fileElem.sendKeys(absolutePath);
    browser.sleep(3000);
    browser.refresh();
    browser.sleep(3000);
    helperFun.waitforelement(this.splitDoc);
    this.splitDoc.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.split2Doc);
    this.split2Doc.click();
    // browser.sleep(2000);
    // let zoom = element(by.xpath('//span[@class="slider-text slider-text-plus" and contains(., "+")]'))
    // helperFun.waitforelement(zoom);
    // zoom.click()
    // browser.sleep(2000);
    // let zoomout = element(by.xpath('//span[@class="slider-text slider-text-plus" and contains(., "-")]'))
    // helperFun.waitforelement(zoomout);
    // zoomout.click()
    // browser.sleep(2000);
    helperFun.waitforelement(this.next);
    this.next.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.splitUnfile);
    this.splitUnfile.click();
    browser.sleep(2000);
    let zoomout = element(by.xpath('//span[@class="ui-slider-tick-mark"]'))
    helperFun.waitforelement(zoomout);
    //zoomout.click()
    browser.driver.actions()
        .mouseDown(this.zoomout)
        .mouseMove({x: -150, y: 0})
    browser.sleep(2000);
    helperFun.waitforelement(this.splitDocType);
    this.splitDocType.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.selectLookup);
    this.selectLookup.click();
    browser.sleep(2000);
    // helperFun.waitforelement(this.addlookup);
    // this.addlookup.click();
    // browser.sleep(2000);
    // helperFun.waitforelement(this.addInputText);
    // this.addInputText.click().sendKeys("Test")
    // browser.sleep(2000);
    helperFun.waitforelement(this.split);
    this.split.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.completeSplit);
    this.completeSplit.click();
    browser.sleep(2000);
    
}

public async clickError() {
    browser.sleep(2000);
    var error = element(by.xpath('(//*[@class="col-errors"])[1]'))
    helperFun.waitforelement(error);
    error.click();
    browser.sleep(2000);
    var downArrow = element(by.xpath('//*[@class="glyphicon glyphicon-chevron-down"]'))
    downArrow.isDisplayed().then(function (isVisible) {
        if (isVisible) {
            console.log ('Down arrow is present')
        } else {
            console.log ('Down arrow name is not Present')
        }
    });

}

public async upArrow() {
    browser.sleep(2000);
    var error = element(by.xpath('(//*[@class="col-errors"])[1]'))
    helperFun.waitforelement(error);
    error.click();
    browser.sleep(2000);
    var downArrow = element(by.xpath('//*[@class="glyphicon glyphicon-chevron-up"]'))
    downArrow.isDisplayed().then(function (isVisible) {
        if (isVisible) {
            console.log ('Up arrow is present')
        } else {
            console.log ('Up arrow name is not Present')
        }
    });

}

public async checkError() {
    browser.sleep(2000);
    var error = element(by.xpath('(//*[@class="col-errors"])[1]'))
    helperFun.waitforelement(error);
    //error.click();
    browser.sleep(2000);
    error.isDisplayed().then(function (isVisible) {
        if (isVisible) {
            console.log ('Column name is Errors')
        } else {
            console.log ('Column name is not Errors')
        }
    });

}

public async checkHistorySplit() {
    browser.sleep(2000);
    var unfile1 = element(by.xpath('//span[@class="inbox-document-header"]'))
    helperFun.waitforelement(unfile1);
    unfile1.click();
    browser.sleep(5000);
    var unfile1 = element(by.xpath('//span[@class="panelHeaderText" and contains(., "History")]'))
    helperFun.waitforelement(unfile1);
    unfile1.click();
    browser.sleep(4000);
    let flag = element(by.xpath('//span[contains(., "Split Update")]'))
    helperFun.waitforelement(flag);
    flag.getText().then(function(text){
        //expect(text).to.include("Testdoc")
        console.log("Check Audit History---------- "+ text)
        return text;
    })

}


public async bright(){
    browser.sleep(2000);
    helperFun.waitforelement(this.imageCleaning);
    this.imageCleaning.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.brightness);
    this.brightness.click().clear().sendKeys("20")
    browser.sleep(2000);
    helperFun.waitforelement(this.contrast);
    this.contrast.click().clear().sendKeys("20")
    browser.sleep(1000)
    helperFun.waitforelement(this.changebright);
    this.changebright.click();
    browser.sleep(2000)
    helperFun.waitforelement(this.changeContrast);
    this.changeContrast.click();
    browser.sleep(2000)
    helperFun.waitforelement(this.invert);
    this.invert.click();
    browser.sleep(2000)
    helperFun.waitforelement(this.Despeckle);
    this.Despeckle.click();
    browser.sleep(2000)
    helperFun.waitforelement(this.RemoveBoards);
    this.RemoveBoards.click();
    browser.sleep(2000)
    helperFun.waitforelement(this.cropMargins);
    this.cropMargins.click();
    browser.sleep(2000)
    helperFun.waitforelement(this.autoDeskew);
    this.autoDeskew.click();
    browser.sleep(2000)
    helperFun.waitforelement(this.rotate);
    this.rotate.click().clear().sendKeys("20")
    browser.sleep(2000)
    helperFun.waitforelement(this.rotateDegree);
    this.rotateDegree.click();
    browser.sleep(3000)
    helperFun.waitforelement(this.saveProcessing);
    this.saveProcessing.click();
    browser.sleep(3000);
    helperFun.waitforelement(this.download);
    this.download.click();
    browser.sleep(1000);
    
}


public async linktodocuments(){
    // helperFun.waitforelement(this.close)
    // this.close.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.link);
    this.link.click();
    console.log("Step1")
    helperFun.waitforelement(this.linkdoc);
    this.linkdoc.click();
    browser.sleep(2000);
    console.log("Step2")
    helperFun.waitforelement(this.linktoDoc);
    this.linktoDoc.click();
    browser.sleep(2000);
    console.log("Step3")
    // let linkeddoc = element(by.xpath('//*[@class="linked-documents-commit linked-doc-icon"]'))
    // helperFun.waitforelement(linkeddoc);
    // linkeddoc.click();
    // browser.sleep(2000);
    // console.log("Step4")
    // let highSchool = element(by.xpath('(//*[@class="tree-node__header__label" and contains (., "High")])[2]'))
    // helperFun.waitforelement(highSchool);
    // highSchool.click();
    // browser.sleep(2000);
    console.log("Step5")
    let flag = element(by.xpath("//span[@class='panelHeaderInfo linked-documents-count']"))
    helperFun.waitforelement(flag);
    flag.getText().then(function(text){
        //expect(text).to.include("testImport2")
        console.log("link count--------- "+ text)
        return text;
    })    
}

public async unlinkdocuments(){
    browser.sleep(2000);
    let unlink = element(by.xpath('//*[@class="linkedDocuments-delete icon-unlink"]'))
    helperFun.waitforelement(unlink);
    unlink.click();
    browser.sleep(2000);
    
}



public async checkKeyfield(folder){
    // helperFun.waitforelement(this.close)
    // this.close.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.selectAutoArea);
    this.selectAutoArea.click();
    helperFun.waitforelement(this.unfiled);
    this.unfiled.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.unfiledDoc);
    this.unfiledDoc.click();
    browser.sleep(2000);
    
}


public async renameArea(){
    helperFun.waitforelement(this.importSettings);
    this.importSettings.click();
    helperFun.waitforelement(this.rename);
    this.rename.click();
    
}

public async settingDoc(){
    helperFun.waitforelement(this.importSettings);
    this.importSettings.click();
    
}

public async deleteArea(){
    helperFun.waitforelement(this.importSettings);
    this.importSettings.click();
    helperFun.waitforelement(this.delete);
    this.delete.click();
    var myAlert = browser.switchTo().alert();
    myAlert.getText().then(function(text){
    console.log("Save message" + text)
    })
    myAlert.accept();
    browser.sleep(2000);
    
}

public async areaDelete(){
    browser.sleep(8000);
    browser.refresh()
    browser.sleep(3000)
    browser.refresh()
    browser.sleep(3000)
    browser.refresh()
    browser.sleep(3000)
    browser.refresh()
    browser.sleep(8000)
    browser.refresh()
    browser.sleep(8000)
    helperFun.waitforelement(this.importSettings);
    this.importSettings.click();
    browser.sleep(8000);
    helperFun.waitforelement(this.delete);
    this.delete.click();
    browser.sleep(2000);
    var myAlert = browser.switchTo().alert();
    myAlert.getText().then(function(text){
    //console.log("Save message" + text)
    })
    myAlert.accept();
    browser.sleep(2000);
}

public async renameExistingArea(name){
    helperFun.waitforelement(this.importSettings);
    this.importSettings.click();
    helperFun.waitforelement(this.rename);
    this.rename.click();
    browser.sleep(1000);
    helperFun.waitforelement(this.editName);
    this.editName.click().clear()
    browser.sleep(2000);
    this.editName.sendKeys(name);
    browser.sleep(1000);
    

}

public async renameKey(){
    helperFun.waitforelement(this.importSettings);
    this.importSettings.click();
    helperFun.waitforelement(this.rename);
    this.rename.click()
    helperFun.waitforelement(this.editName);
    this.editName.click().clear()
    browser.sleep(2000);
    this.editName.sendKeys("vnkeyfield");
    browser.sleep(1000);
    helperFun.waitforelement(this.saveImport);
    this.saveImport.click();
    browser.sleep(1000);
    var myAlert = browser.switchTo().alert();
    myAlert.getText().then(function(text){
        console.log("Save error message-----------------" + text)
        })
        browser.sleep(1000);
    myAlert.accept();
    

}

public async deleteDocument(name){
    helperFun.waitforelement(this.delete);
    this.delete.click();
    var myAlert = browser.switchTo().alert();
    myAlert.accept();
    browser.sleep(2000);
    // var myAlert = browser.switchTo().alert();
    // myAlert.getText().then(function(text){
    // console.log("Failed delete document message" + text)
    // })
    // myAlert.accept();
    browser.sleep(2000);
}

public async deleteDocumentType(name){
    helperFun.waitforelement(this.delete);
    this.delete.click();
    var myAlert = browser.switchTo().alert();
    myAlert.accept();
    browser.sleep(2000);
}

public async UnassociateKeyField(doc){
    browser.sleep(2000);
    helperFun.waitforelement(this.menu)
    this.menu.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.doctypes)
    this.doctypes.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.docsearch)
    this.docsearch.click().sendKeys(doc)
    browser.sleep(2000);
    helperFun.waitforelement(this.selectKey);
    this.selectKey.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.selectRenameDoc);
    this.selectRenameDoc.click();
    // var myAlert = browser.switchTo().alert();
    // myAlert.getText().then(function(text){
    //     //expect(text).to.include("Failed to save Area")
    //     console.log("Error Message" + text)
    //     })
    //     browser.sleep(2000);
    //     myAlert.accept();
    browser.sleep(2000);
}

public async renameWithNewArea(name1){
    helperFun.waitforelement(this.editName);
    this.editName.click().clear()
    browser.sleep(2000);
    this.editName.sendKeys(name1);
    browser.sleep(1000);
    

}

public async renameAreaCode(name){
    helperFun.waitforelement(this.code);
    this.code.click().clear();
    this.code.sendKeys(name);
    browser.sleep(1000);
    helperFun.waitforelement(this.areaDocType);
    this.areaDocType.click()
    browser.sleep(1000);
    
}

public async changeCode(name){
    helperFun.waitforelement(this.editName);
    this.editName.click().clear()
    browser.sleep(2000);
    this.editName.sendKeys(name);
    browser.sleep(1000);
    

}

public async viewHistory(){
    browser.sleep(1000);
    helperFun.waitforelement(this.history);
    this.history.click();
    browser.sleep(1000);
}

public async clickFilter(){
    browser.sleep(1000);
    helperFun.waitforelement(this.filter);
    this.history.click();
    browser.sleep(1000);
    helperFun.waitforelement(this.allUsers);
    this.history.click();
    browser.sleep(1000);
    helperFun.waitforelement(this.selectAdmin);
    this.history.click();
    browser.sleep(1000);
    helperFun.waitforelement(this.selectCreate);
    this.history.click();
    browser.sleep(1000);
}

public async checkHistory(){
    browser.sleep(1000);
    let historyData = element(by.xpath('//*[@id="documentHistoryList"]'))
    helperFun.waitforelement(historyData);
    historyData.getText().then(function(text){
        //expect(text).to.include("Testdoc")
        console.log("History List---------- "+ text)
        return text;
    })
    browser.sleep(1000);
}

public async saveButton(){
    browser.sleep(2000);
    helperFun.waitforelement(this.saveImport);
    this.saveImport.click();
    browser.sleep(2000);
}

//Code cannot be empty

public async codeError(){
    var myAlert = browser.switchTo().alert();
    myAlert.getText().then(function(text){
    //expect(text).to.include("Code cannot be empty or null")
    console.log("Code Error" + text)
    })
    browser.sleep(2000);
}

public async errorMessage(){
    var myAlert = browser.switchTo().alert();
    browser.sleep(2000);
    myAlert.getText().then(function(text){
    expect(text).to.include("Failed to save Area")
    console.log("Save Message" + text)
    })
    browser.sleep(2000);
    myAlert.accept();
    browser.sleep(2000);
}

public async importDocs(name, areaname, documentname, key){
    browser.sleep(5000);
    console.log("==================================================")
    helperFun.waitforelement(this.menu)
    this.menu.click()
    browser.sleep(1000);
    helperFun.waitforelement(this.imports)
    this.imports.click()
    browser.sleep(1000);
    helperFun.waitforelement(this.search)
    this.search.click().sendKeys(".Auto Image Types");
    browser.sleep(1000);
    helperFun.waitforelement(this.selectKey);
    this.selectKey.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.importSettings);
    this.importSettings.click();
    browser.sleep(1000);
    helperFun.waitforelement(this.copyImport);
    this.copyImport.click();
    browser.sleep(1000);
    helperFun.waitforelement(this.copy);
    this.copy.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.importSettings);
    this.importSettings.click();
    helperFun.waitforelement(this.rename);
    this.rename.click();
    helperFun.waitforelement(this.editName);
    this.editName.click().clear()
    browser.sleep(2000);
    this.editName.sendKeys(name);
    helperFun.waitforelement(this.saveImport);
    this.saveImport.click();
    browser.sleep(2000);
    var selectArea = element(by.xpath('//select [contains(., ".AutoArea")]'))
    helperFun.waitforelement(selectArea);
    selectArea.click();;
    var selectDocument = element(by.xpath('//option[contains(., "'+areaname+'")]'));
    helperFun.waitforelement(selectDocument);
    selectDocument.click();
    helperFun.waitforelement(this.fieldMapping);
    this.fieldMapping.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.fieldValue);
    this.fieldValue.click().clear()
    browser.sleep(2000);
    this.fieldValue.sendKeys(documentname)
    browser.sleep(2000);
    helperFun.waitforelement(this.selectField);
    this.selectField.click();
    browser.sleep(1000);
    var selectVal = element(by.xpath('(//option[contains(., "'+key+'")])[3]'))
    helperFun.waitforelement(selectVal);
    selectVal.click();
    browser.sleep(1000);
    helperFun.waitforelement(this.runImport);
    this.runImport.click();
    var myAlert = browser.switchTo().alert();
    myAlert.accept();
}

    public async getVersion(){
    helperFun.waitforelement(this.dropdown)
    this.dropdown.click()
    helperFun.waitforelement(this.about);
    this.about.click();
    helperFun.waitforelement(this.version);
    this.version.getText().then(function(text){
        expect(text).to.include("2022.2.0")
        console.log("About Content" + text)
        return text;
    })
    browser.sleep(2000);
}

public async getLicense(){
    helperFun.waitforelement(this.license);
    this.license.click()
    browser.sleep(2000);
    helperFun.waitforelement(this.adv);
    this.adv.click()
    browser.sleep(2000);
    helperFun.waitforelement(this.automapper);
    this.automapper.click()
    browser.sleep(2000);
    helperFun.waitforelement(this.crypto);
    this.crypto.click()
    browser.sleep(2000);
}

public async getDeployment(){
    helperFun.waitforelement(this.deployment);
    this.deployment.click()
    browser.sleep(2000);
    // this.deploymentInfo.getText().then(function(text){
    //     console.log("deploymentInfo" + text)
    //     return text;
    // })
    // browser.sleep(2000);
}

public async dragdrop(){
    let element1 = element(by.xpath('//*[@class="tree-node__header__label" and contains(., "Self Service")]'))
    let element2 = element(by.xpath('(//*[@class="koTree-node-header node-list"])[52]'))

    var draggable = element(by.xpath('//*[@class="tree-node__header__label" and contains(., "Self Service")]'))
    var droppable = element(by.xpath('(//*[@class="koTree-node-header node-list"])[52]'))

//    browser.executeScript(dragAndDrop, draggable, droppable);

    // browser.actions().
    // mouseDown(element1).
    // mouseMove(element2).
    // mouseUp().
    // perform();
    // browser.sleep(5000);

}

public async doubleclick(){
    //AN Area0dvfo6f
    let element1 = element(by.xpath('//*[@class="tree-node__header__label" and contains (., ".Area Student0ne2iu3")]'))
    // let element2 = element(by.xpath('//*[@class="tree-node__header__label" and contains (., "AN DocType04aqbblArea 1")]'))
    // let element3 = element(by.xpath('(//*[@class="tree-node__header__label" and contains (., "AN DocType04aqbbl")])[2]'))
    browser.sleep(2000)
    browser.actions().doubleClick(element1.getWebElement()).perform();
    // browser.sleep(2000)
    // browser.actions().doubleClick(element2.getWebElement()).perform();
    // browser.sleep(2000)
    // browser.actions().doubleClick(element3.getWebElement()).perform();

    // browser.actions().
    // mouseDown(element1).
    // mouseMove(element2).
    // mouseUp().
    // perform();
    // browser.sleep(5000);

}

public async newArea (name){
    helperFun.waitforelement(this.menu)
    this.menu.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.area)
    this.area.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.addArea)
    this.addArea.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.areaName)
    this.areaName.click().sendKeys(name)
    browser.sleep(1000)
    helperFun.waitforelement(this.add)
    this.add.click();

}

public async newAutomation (name){
    helperFun.waitforelement(this.automations)
    this.automations.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.automationsName)
    this.automationsName.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.iputAutomations)
    this.iputAutomations.click().sendKeys(name)
    browser.sleep(3000)
    helperFun.waitforelement(this.add)
    this.add.click();
    browser.sleep(1000)
}
public async searchAutomation(name){
    browser.sleep(1000)
    helperFun.waitforelement(this.menu)
    this.menu.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.automations)
    this.automations.click();
    browser.sleep(3000)
    helperFun.waitforelement(this.searchAutomations)
    this.searchAutomations.click().sendKeys(name)
    browser.sleep(1000)
    helperFun.waitforelement(this.selectKey)
    this.selectKey.click();
    browser.sleep(1000)
}

public async backButtonAuto() {
    browser.sleep(2000);
    var navigate = element(by.xpath('//*[@id="content"]/div/section/nav/div[1]/div[1]'))
    helperFun.waitforelement(navigate);
    navigate.click();
    browser.sleep(2000);
}

public async addRuleAutomation (){
    helperFun.waitforelement(this.automationRule)
    this.automationRule.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.docFieldValueMatch)
    this.docFieldValueMatch.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.doctypeAuto)
    this.doctypeAuto.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.selectDoctypeAuto)
    this.selectDoctypeAuto.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.docFIeld)
    this.docFIeld.click();
    browser.sleep(1000)
    helperFun.waitforelement(this.equals)
    this.equals.click();
    browser.sleep(2000)

}

public async movetoAreaAutomation(area){
    browser.sleep(2000)
    helperFun.waitforelement(this.areadropdownsp)
    this.areadropdownsp.click()
    browser.sleep(2000)
    let areaToSelect = element(by.xpath('//option[contains(., "'+area+'")]'));
    helperFun.waitforelement(areaToSelect)
    areaToSelect.click();
    browser.sleep(3000)

}

public async movetodoc(area){
    browser.sleep(2000)
    helperFun.waitforelement(this.doctypeDropdown)
    this.doctypeDropdown.click()
    browser.sleep(2000)
    let areaToSelect = element(by.xpath('//option[contains(., "'+area+'")]'));
    helperFun.waitforelement(areaToSelect)
    areaToSelect.click();
    browser.sleep(3000)

}

public async docAutomation(){
    helperFun.waitforelement(this.ducumentFieldButton)
    this.ducumentFieldButton.click();
    browser.sleep(2000)

}

public async docFieldDropdown(doc, name){
    browser.sleep(2000)
    helperFun.waitforelement(this.searchAutomations)
    this.searchAutomations.click().sendKeys(name)
    browser.sleep(1000)
    helperFun.waitforelement(this.selectKey)
    this.selectKey.click();
    browser.sleep(2000)
    helperFun.waitforelement(this.docDropdown)
    this.docDropdown.click();
    browser.sleep(2000)
    helperFun.waitforelement(this.chooseDoc)
    this.chooseDoc.click();
    browser.sleep(2000)
    var document = element(by.xpath('//option[contains(., "'+doc+'")]'));
    helperFun.waitforelement(document);
    document.click();
    browser.sleep(2000)

}

public async areaDrop(){
    helperFun.waitforelement(this.ducumentFieldButton)
    this.ducumentFieldButton.click();
    browser.sleep(2000)

}

public async docselectAutomation(){
    helperFun.waitforelement(this.areaDropdownDoc)
    this.areaDropdownDoc.click();
    browser.sleep(2000)
    helperFun.waitforelement(this.selectDocTypeAutomation)
    this.selectDocTypeAutomation.click();
    browser.sleep(2000)

}

public async docEqual(){
    helperFun.waitforelement(this.selectOperator)
    this.selectOperator.click();
    browser.sleep(2000)
    helperFun.waitforelement(this.equal)
    this.equal.click();
    browser.sleep(2000)

}

public async selectDocFieldAutomation(doc){
    helperFun.waitforelement(this.documentFieldDropdown)
    this.documentFieldDropdown.click();
    browser.sleep(2000)
    var document = element(by.xpath('(//option[contains(., "'+doc+'")])[2]'));
    helperFun.waitforelement(document);
    document.click();
    browser.sleep(2000)
}

public async actionAutomation(){
    helperFun.waitforelement(this.action)
    this.action.click();
    browser.sleep(2000)

}


public async actionTrigger(){
    helperFun.waitforelement(this.movetoArea)
    this.movetoArea.click();
    browser.sleep(2000)
    helperFun.waitforelement(this.triggerDoc)
    this.triggerDoc.click();
    browser.sleep(2000)

    }
 
    public async dropdownAutomation(){
    browser.sleep(2000)
    helperFun.waitforelement(this.destArea)
    this.destArea.click();
    browser.sleep(2000)
}

public async destAreaAutomation(area1){
    browser.sleep(2000)
    helperFun.waitforelement(this.areaDropdown1)
    this.areaDropdown1.click();
    browser.sleep(2000)
    var automationarea2 = element(by.xpath('(//option[contains(., "'+area1+'")])[1]'));
    helperFun.waitforelement(automationarea2);
    automationarea2.click();
    browser.sleep(3000)

}

public async destAreaAutomation2(area1){
    browser.sleep(2000)
    helperFun.waitforelement(this.area2Drop)
    this.area2Drop.click();
    browser.sleep(2000)
    var automationarea2 = element(by.xpath('(//option[contains(., "'+area1+'")])[2]'));
    helperFun.waitforelement(automationarea2);
    automationarea2.click();
    browser.sleep(3000)

}
public async saveAutomation() {
    browser.sleep(2000)
    helperFun.waitforelement(this.save)
    this.save.click();
    browser.sleep(1000)
    var myAlert = browser.switchTo().alert();
    myAlert.accept();
    browser.sleep(1000)
}

public async enableAreaAutomation(){
    browser.sleep(2000)
    helperFun.waitforelement(this.enableAutomation)
    this.enableAutomation.click();
    browser.sleep(1000)

}

public async runAutomation(){
    browser.sleep(2000)
    var run = element(by.xpath('//*[@class="nav-text" and contains(.,"Run Automation")]'))
    helperFun.waitforelement(run);
    run.click();
    browser.sleep(2000)
    var runButton = element(by.xpath('//button[contains(., "Run")]'))
    helperFun.waitforelement(runButton);
    runButton.click();
    browser.sleep(1000)
}

public async run(){
    browser.sleep(2000)
    var runButton = element(by.xpath('//button[contains(., "Run")]'))
    helperFun.waitforelement(runButton);
    runButton.click();
    browser.sleep(1000)
}

public async clickMenu(){
    helperFun.waitforelement(this.menu)
    this.menu.click();
    browser.sleep(1000)

}

public async clickArea(){
    browser.sleep(1000)
    helperFun.waitforelement(this.area)
    this.area.click();
    browser.sleep(1000)

}

public async clickCategory(){
    helperFun.waitforelement(this.category)
    this.category.click();
    browser.sleep(1000)

}

public async clickNewCategory(){
    helperFun.waitforelement(this.addCategory)
    this.addCategory.click();
    browser.sleep(1000)
}

public async typeNewCategory(name){
    helperFun.waitforelement(this.categoryname)
    this.categoryname.click().sendKeys(name)
    browser.sleep(1000)
}

public async saveCategory(){   
    helperFun.waitforelement(this.add)
    this.add.click();
}

public async clickNewArea(){
    browser.sleep(2000)
    helperFun.waitforelement(this.addArea)
    this.addArea.click();
    browser.sleep(2000)
}

public async typeNewArea(name){
    helperFun.waitforelement(this.areaName)
    browser.sleep(1000)
    this.areaName.click().clear().sendKeys(name)
    browser.sleep(2000)
}

public async scrollArea(name){
    // helperFun.waitforelement(this.selectAutoArea);
    // this.selectAutoArea.click();
    // browser.driver.actions()
    // .mouseDown(this.scrolledArea).perform()
    browser.actions().mouseDown(element(by.xpath('(//span[@class="tree-node__header__label" and contains (.,"SP Test Area 2uk")])[1]')).getWebElement()).perform()
//(//span[@class="tree-node__header__label" and contains (.,"SP Test Area 2uk")])[1]
    browser.sleep(2000)
}


public async saveArea(){   
    helperFun.waitforelement(this.add)
    this.add.click();
}


public async annotationsImport(){
    browser.sleep(2000);
    helperFun.waitforelement(this.zoomin)
    this.zoomin.click()
    browser.sleep(1000);
    helperFun.waitforelement(this.zoomout)
    this.zoomout.click()
    browser.sleep(1000);
    helperFun.waitforelement(this.thumbnail)
    this.thumbnail.click()
    browser.sleep(1000);
    helperFun.waitforelement(this.fullImage)
    this.fullImage.click()
    browser.sleep(1000);
    helperFun.waitforelement(this.annotation)
    this.annotation.click()
    browser.sleep(1000);
    helperFun.waitforelement(this.note)
    this.note.click()
    browser.sleep(1000);
    helperFun.waitforelement(this.download)
    this.download.click()
    browser.sleep(1000);
    helperFun.waitforelement(this.email)
    this.email.click()
    browser.sleep(1000);
    helperFun.waitforelement(this.address)
    this.address.click().sendKeys("MMeetze@softdocs.com")
    browser.sleep(1000);
    helperFun.waitforelement(this.subject)
    this.subject.click().sendKeys("Test")
    browser.sleep(1000);
    helperFun.waitforelement(this.message)
    this.message.click().sendKeys("Test")
    browser.sleep(1000);
    helperFun.waitforelement(this.sendEmail)
    this.sendEmail.click()
    browser.sleep(1000);
}

public async deleteImportfile(){
    browser.sleep(3000);
    helperFun.waitforelement(this.deleteImportDoc)
    this.deleteImportDoc.click()
    browser.sleep(3000);
    var recyclefolder = element(by.xpath('//span[@class="ellipsis panelHeaderText" and contains(., "Recycle Bin")]'))
    helperFun.waitforelement(recyclefolder);
    recyclefolder.click();
    browser.sleep(3000);
    var deletefile = element(by.xpath('//*[@class="icon-empty"]'))
    helperFun.waitforelement(deletefile);
    deletefile.click();
    browser.sleep(3000);
    helperFun.waitforelement(this.okButton)
    this.okButton.click()
    browser.sleep(1000);
}

public async deleteallImportfile(){
    for(var i=0; i<9; i++){
    browser.sleep(2000);
    let secondAreaDoc = element(by.xpath('(//span[@class="tree-node__header__label" and contains(., "VN Doc")])[2]'))
    browser.sleep(1000)
    secondAreaDoc.click()
    browser.sleep(3000);
    helperFun.waitforelement(this.deleteImportDoc)
    this.deleteImportDoc.click()
    browser.sleep(3000);
    console.log(i);
    browser.refresh();
    browser.sleep(2000)
    }
    var recyclefolder = element(by.xpath('//span[@class="ellipsis panelHeaderText" and contains(., "Recycle Bin")]'))
    helperFun.waitforelement(recyclefolder);
    recyclefolder.click();
    browser.sleep(3000);
    helperFun.waitforelement(recyclefolder);
    recyclefolder.click();
    browser.sleep(1000);
    helperFun.waitforelement(this.okButton)
    this.okButton.click()
    browser.sleep(1000);
}

public async deleteImport(){
    browser.sleep(3000);
    helperFun.waitforelement(this.deleteImportDoc)
    this.deleteImportDoc.click()
    browser.sleep(3000);
    var recyclefolder = element(by.xpath('//span[@class="ellipsis panelHeaderText" and contains(., "Recycle Bin")]'))
    helperFun.waitforelement(recyclefolder);
    recyclefolder.click();
    browser.sleep(3000);
    var deletedFile = element(by.xpath('//*[@data-bind="text: DocumentTypeName"]'))
    helperFun.waitforelement(deletedFile);
    recyclefolder.click();
    browser.sleep(3000)
    this.attachPage.isEnabled().then(function (isVisible) {
        if (isVisible) {
            console.log ('Attach file and Split is enabled')
        } else {
            console.log ('Attach file and Split is disabled')
        }
    });
    return browser.sleep(3000)
}

public async addDoctoFile(area){
    // helperFun.waitforelement(this.close)
    // this.close.click();
    // browser.sleep(5000);
    helperFun.waitforelement(this.application);
    this.application.click();
    browser.sleep(2000);
    var selectVal = element(by.xpath('//span[@class="tree-node__header__label" and contains (.,"'+area+'")]'))
    helperFun.waitforelement(selectVal);
    selectVal.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.unfiled);
    this.unfiled.click();
    browser.sleep(2000);
    var unfile1 = element(by.xpath('(//*[@data-keydown="InboxKeyDown"])[1]'))
    helperFun.waitforelement(unfile1);
    unfile1.click();
    browser.sleep(2000);
    helperFun.waitforelement(this.unfiledfile);
    this.unfiledfile.click();
    helperFun.waitforelement(this.selectNewDocType);
    this.selectNewDocType.click();
    browser.sleep(2000);

}

//Bubbas functions

public async clickOnUnfiledDoc(whichDoc){
    helperFun.waitforelement(this.unfiled);
    console.log('('+unfiledDocumentXPath+')['+whichDoc+']');
    element(by.xpath('('+unfiledDocumentXPath+')['+whichDoc+']')).click();
    //    this.unfiled.click();
    browser.sleep(500)
}

public async checkUnlinkIconAlignment(index, cssVal) {
    element(by.xpath('//*[@id="linkedDocumentsSectionPartial"]/div/div['+index+']/div/button')).getCssValue(cssVal).then(function(checkVal) {
        console.log(index + ":" + cssVal + ":" + checkVal);
        expect(checkVal).to.equal('0px');
    });

}

public async scrollUnfilled(whichDoc){
    helperFun.waitforelement(this.unfiled);
    this.unfiledX = element(by.xpath('('+unfiledDocumentXPath+')['+whichDoc+']'));
    this.unfiledX.click();
    browser.sleep(5000);
    browser.sleep(500);
    return (this.unfiledX.getAttribute('id') as string);
}

public async clickOnAddButton(){
    helperFun.waitforelement(this.addButton)
    this.addButton.click();
    browser.sleep(1000)
}

public async clickOnDocTypeSection(){
    helperFun.waitforelement(this.docTypesSection)
    this.docTypesSection.click();
    browser.sleep(1000)
}

public async clickOnAddDocTypeButton(){
    helperFun.waitforelement(this.addNewDocTypeButton)
    this.addNewDocTypeButton.click();
    browser.sleep(1000)
}

public async enterNewDocTypeName(name: string) {
    helperFun.waitforelement(this.newDocTypeNameField)
    this.newDocTypeNameField.click().sendKeys(name);
    browser.sleep(1000)
}

public async enterValueInKeyfield(value){
    helperFun.waitforelement(this.keyfieldField1)
    this.keyfieldField1.click().clear().sendKeys(value)
    browser.sleep(1000)
}

public async getValueInKeyfield(){
    helperFun.waitforelement(this.keyfieldField1);
    return this.keyfieldField1.getText().toString();
}


public async removeValues(){
    // helperFun.waitforelement(this.removeValuesIcon);
    // this.removeValuesIcon.click();
    return browser.sleep(1000);
}

public async clickOnKeyfield(KFName){
    helperFun.waitforelement(this.keyfieldNameField)
    this.keyfieldNameField.click().sendKeys(KFName)
    // helperFun.waitforelement(element(by.xpath("//input[@id='edit']")));
    helperFun.waitforelement(element(by.xpath("//*[contains(text(),'"+ KFName +"')]")));
    // browser.sleep(10000)
    let box = element(by.xpath("//*[contains(text(),'"+ KFName +"')]"));
    box.click()
    browser.sleep(1000)
}




}
    

 


