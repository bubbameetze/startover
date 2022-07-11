import { browser, element, by } from 'protractor';

export class generic_class{

    public waitforelement(element) {
    browser.driver.wait(function() {
      return element.isPresent();
    }, 60000);
}

    public randomDataGenerator() {
    return Math.random().toString(36).substring(2, 8);
}

public randomString(length) {
  var result = "";
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}}