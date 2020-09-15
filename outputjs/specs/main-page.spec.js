"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const main_page_1 = require("../pageobjects/main-page");
describe("Text translation functions", () => __awaiter(void 0, void 0, void 0, function* () {
    const mainPage = new main_page_1.MainPage();
    it("should test automatic language detection", () => __awaiter(void 0, void 0, void 0, function* () {
        yield mainPage.textField.sendKeys('impact');
        yield protractor_1.browser.sleep(2000);
        expect(yield mainPage.detectedLang.getAttribute('outerText')).toEqual('English - detected');
        yield mainPage.clear(mainPage.textField);
        yield mainPage.textField.sendKeys('na shledanou');
        yield protractor_1.browser.sleep(2000);
        expect(yield mainPage.detectedLang.getAttribute('outerText')).toEqual('Czech - detected');
        yield mainPage.clear(mainPage.textField);
    }));
    it("should test manual language picker", () => __awaiter(void 0, void 0, void 0, function* () {
        yield mainPage.langListLeft.click();
        yield mainPage.russianLang.click();
        expect(yield mainPage.detectedLang.getAttribute('outerText')).toEqual('Russian');
    }));
    it("should test language swap", () => __awaiter(void 0, void 0, void 0, function* () {
        let leftLang = yield mainPage.langSelectedLeft.getText();
        let rightLang = yield mainPage.langSelectedRight.getText();
        yield mainPage.langSwapButton.click();
        expect(yield mainPage.langSelectedRight.getText()).toEqual(leftLang);
        expect(yield mainPage.langSelectedLeft.getText()).toEqual(rightLang);
    }));
    it("should test delete text button", () => __awaiter(void 0, void 0, void 0, function* () {
        yield mainPage.textField.sendKeys('abracadabra');
        yield mainPage.clearInputButton.click();
        expect(yield mainPage.textField.getAttribute('value')).toEqual('');
    }));
    it("should test file translation functionality", () => __awaiter(void 0, void 0, void 0, function* () {
        yield mainPage.docsButton.click();
        let path = require('path');
        let fileToUpload = 'sample.txt';
        let absolutePath = path.resolve(fileToUpload);
        yield mainPage.fileInput.sendKeys(absolutePath);
        yield mainPage.translateButton.click();
        expect(yield mainPage.translatedText.getText()).toEqual('Привет мир');
    }));
}));
