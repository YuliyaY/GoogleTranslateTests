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
exports.config = void 0;
const protractor_1 = require("protractor");
const { SpecReporter } = require('jasmine-spec-reporter');
exports.config = {
    framework: "jasmine",
    SELENIUM_PROMISE_MANAGER: false,
    directConnect: true,
    specs: [
        "specs/*.spec.js"
    ],
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.waitForAngularEnabled(false);
            protractor_1.browser.ignoreSynchronization = true;
            yield protractor_1.browser.driver.get("https://translate.google.com/");
            // await browser.wait(ExpectedConditions.visibilityOf(element(by.css('div.container'))),
            // 10000, 'Application did not load in time');
            yield protractor_1.browser.driver.manage().window().maximize();
            jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: 'pretty' } }));
        });
    },
};
