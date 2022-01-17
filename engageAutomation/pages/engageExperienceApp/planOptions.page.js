"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
    cardNumber_text : selectorFile.css.ComproEngage.planOptions.cardNumber_text,

    isInitialized: function() {
        var res;
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.cardNumber_text),
        };
        return res;
    },

    getData_PlanOptionsPage: function() {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            cardNumber_text: (action.getElementCount(this.cardNumber_text) > 0) ? action.getText(this.cardNumber_text) : null,
           
        }
        return obj;
    },

}