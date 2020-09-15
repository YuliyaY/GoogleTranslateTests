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
exports.MainPage = void 0;
const protractor_1 = require("protractor");
class MainPage {
    clear(elem) {
        return __awaiter(this, void 0, void 0, function* () {
            // Protractor's clear function in conjunction with Chrome browser does not invoke onchange event
            const text = yield elem.getAttribute('value');
            const backspaceSeries = Array(text.length + 1).join(protractor_1.Key.BACK_SPACE);
            yield elem.sendKeys(backspaceSeries);
        });
    }
    get textField() {
        return protractor_1.element(protractor_1.by.id('source'));
    }
    get detectedLang() {
        return protractor_1.element(protractor_1.by.css('a.tlid-open-small-source-language-list'));
    }
    get langListLeft() {
        return protractor_1.element.all(protractor_1.by.css('div.jfk-button-collapse-right')).first();
    }
    get russianLang() {
        return protractor_1.element.all(protractor_1.by.css('div.language_list_item_wrapper-ru')).first();
    }
    get langListRight() {
        return protractor_1.element(protractor_1.by.css('div.sl-wrap div.sl-sugg div.sl-sugg-button-container div.jfk-button-collapse-right'));
    }
    get englishLang() {
        return protractor_1.element(protractor_1.by.css('div.language_list_item_wrapper-en'));
    }
    get langSelectedRight() {
        return protractor_1.element(protractor_1.by.css('div.tl-wrap div.tl-sugg div.sl-sugg-button-container div.jfk-button-collapse-right[aria-pressed="true"]'));
    }
    get langSelectedLeft() {
        return protractor_1.element(protractor_1.by.css('div.sl-wrap div.sl-sugg div.sl-sugg-button-container div.jfk-button-collapse-right[aria-pressed="true"]'));
    }
    get langSwapButton() {
        return protractor_1.element(protractor_1.by.css('div.swap'));
    }
    get clearInputButton() {
        return protractor_1.element(protractor_1.by.css('div.clear'));
    }
    get docsButton() {
        return protractor_1.element(protractor_1.by.css('div.tlid-input-button-docs'));
    }
    /*     get docsBrowseButton(): ElementFinder {
            return element(by.css('label.tlid-select-file-button'))
        } */
    get fileInput() {
        return protractor_1.element(protractor_1.by.css('input[type="file"]'));
    }
    get translateButton() {
        return protractor_1.element(protractor_1.by.css('input[type="submit"]'));
    }
    get translatedText() {
        return protractor_1.element(protractor_1.by.css('body pre'));
    }
}
exports.MainPage = MainPage;
