import { browser } from "protractor";
import { MainPage } from "../pageobjects/main-page";

describe("Text translation functions", () => {

    const mainPage = new MainPage();

    it("should test automatic language detection", async () => {
         await mainPage.textField.sendKeys('impact');
         await browser.sleep(2000);
         expect(await mainPage.detectedLang.getAttribute('outerText')).toEqual('English - detected');
         await mainPage.clear(mainPage.textField);
         await mainPage.textField.sendKeys('na shledanou');
         await browser.sleep(2000);
         expect(await mainPage.detectedLang.getAttribute('outerText')).toEqual('Czech - detected');
         await mainPage.clear(mainPage.textField);
    });

    it("should test manual language picker", async () => { 
        await mainPage.langListLeft.click();
        await mainPage.russianLang.click();      
        expect(await mainPage.detectedLang.getAttribute('outerText')).toEqual('Russian');        
   });

   it("should test language swap", async () => {
        let leftLang = await mainPage.langSelectedLeft.getText();
        let rightLang = await mainPage.langSelectedRight.getText();
        await mainPage.langSwapButton.click();
        expect(await mainPage.langSelectedRight.getText()).toEqual(leftLang); 
        expect(await mainPage.langSelectedLeft.getText()).toEqual(rightLang);
   });

   it("should test delete text button", async () => {
     await mainPage.textField.sendKeys('abracadabra');
     await mainPage.clearInputButton.click();
     expect(await mainPage.textField.getAttribute('value')).toEqual('')
   });

   it("should test file translation functionality", async () => {     
     await mainPage.docsButton.click();
     let path = require('path');
     let fileToUpload = 'sample.txt';
     let absolutePath = path.resolve(fileToUpload);     
     await mainPage.fileInput.sendKeys(absolutePath);
     await mainPage.translateButton.click();
     expect(await mainPage.translatedText.getText()).toEqual('Привет мир')
   });

});