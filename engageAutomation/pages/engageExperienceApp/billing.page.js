"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
    upgradetoPremium_btn: selectorFile.css.ComproEngage.billing.upgradetoPremium_btn,
    close_btn: selectorFile.css.ComproEngage.billing.close_btn,

    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.upgradetoPremium_btn),
        };
        return res;
    },

    getData_billingPage: async function () {
        await logger.logInto(stackTrace.get());
        var obj;
        obj = {
            upgradetoPremium_btn: ((await action.getElementCount(this.upgradetoPremium_btn)) > 0) ? await action.getText(this.upgradetoPremium_btn) : null,
           
        }
        return obj;
    },

    click_close_btn: async function () {
        let res;
        await logger.logInto(stackTrace.get());
        res = await action.click(this.close_btn);
        if (true == res) {
            await logger.logInto(stackTrace.get(), " close button is clicked");
        } else {
            await logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;

    }

}