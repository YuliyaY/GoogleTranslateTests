import { element, by, ElementFinder, Key } from 'protractor';

export class MainPage {

    async clear(elem: ElementFinder) {
        // Protractor's clear function in conjunction with Chrome browser does not invoke onchange event
        const text = await elem.getAttribute('value');
        const backspaceSeries = Array(text.length + 1).join(Key.BACK_SPACE);
        await elem.sendKeys(backspaceSeries);
    }

    get textField(): ElementFinder {
        return element(by.id('source'))
    }

    get detectedLang(): ElementFinder {
        return element(by.css('a.tlid-open-small-source-language-list'))        
    }

    get langListLeft(): ElementFinder {
        return element.all(by.css('div.jfk-button-collapse-right')).first()       
    }

    get russianLang(): ElementFinder {
        return element.all(by.css('div.language_list_item_wrapper-ru')).first()
    }

    get langListRight(): ElementFinder {
        return element(by.css('div.sl-wrap div.sl-sugg div.sl-sugg-button-container div.jfk-button-collapse-right'))        
    }

    get englishLang(): ElementFinder {
        return element(by.css('div.language_list_item_wrapper-en'))
    }

    get langSelectedRight(): ElementFinder {
        return element(by.css('div.tl-wrap div.tl-sugg div.sl-sugg-button-container div.jfk-button-collapse-right[aria-pressed="true"]'))      
    }

    get langSelectedLeft(): ElementFinder {
        return element(by.css('div.sl-wrap div.sl-sugg div.sl-sugg-button-container div.jfk-button-collapse-right[aria-pressed="true"]'))      
    }

    get langSwapButton(): ElementFinder {
        return element(by.css('div.swap'))
    }

    get clearInputButton(): ElementFinder {
        return element(by.css('div.clear'))
    }

    get docsButton(): ElementFinder {
        return element(by.css('div.tlid-input-button-docs'))
    }

    get fileInput(): ElementFinder {
        return element(by.css('input[type="file"]'))
    }

    get translateButton(): ElementFinder {
        return element(by.css('input[type="submit"]'))
    }

    get translatedText(): ElementFinder {
        return element(by.css('body pre'))
    }
    
}
