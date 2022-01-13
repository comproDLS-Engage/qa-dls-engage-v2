"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
    upgradetoPremium_btn: selectorFile.css.ComproEngage.billing.upgradetoPremium_btn,
    close_btn: selectorFile.css.ComproEngage.billing.close_btn,

    isInitialized: function() {
        var res;
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.upgradetoPremium_btn),
        };
        return res;
    },

    getData_billingPage: function() {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            upgradetoPremium_btn: (action.getElementCount(this.upgradetoPremium_btn) > 0) ? action.getText(this.upgradetoPremium_btn) : null,
           
        }
        return obj;
    },

    click_close_btn: function() {
        let res;
        logger.logInto(stackTrace.get());
        res = action.click(this.close_btn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " close button is clicked");
        } else {
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;

    }

}