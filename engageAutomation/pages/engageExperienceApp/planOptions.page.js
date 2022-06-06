"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
    cardNumber_text: selectorFile.css.ComproEngage.planOptions.cardNumber_text,

    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.cardNumber_text),
        };
        return res;
    },

    getData_PlanOptionsPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            cardNumber_text: ((await action.getElementCount(this.cardNumber_text)) > 0) ? await action.getText(this.cardNumber_text) : null,

        }
        return obj;
    },

}