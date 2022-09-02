"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    accessCodeInput: selectorFile.redeemCodePage.accessCodeInput,
    emailInput: selectorFile.redeemCodePage.emailInput,
    cancelBtn: selectorFile.redeemCodePage.cancelBtn,
    redeemBtn: selectorFile.redeemCodePage.redeemBtn,
    snackbarLbl: selectorFile.common.snackbarLbl,
    snackbarBtn: selectorFile.common.snackbarBtn,
    
    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        //action.waitForDocumentLoad();
        res = await action.waitForDisplayed(this.accessCodeInput);
        return res;
    },

    set_AccessCode: async function (val) {
        await logger.logInto((await stackTrace.get()));
        res = await action.setValue(this.accessCodeInput, val);
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    set_Email: async function (val) {
        await logger.logInto((await stackTrace.get()));
        res = await action.setValue(this.emailInput, val);
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Redeem_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.waitForClickable(this.redeemBtn);
        await action.waitForDisplayed(this.buttonLoader, undefined, true);
        if (res == true) {
            res = await action.click(this.redeemBtn);
            if (res == true) {
                await action.waitForDisplayed(this.snackbarLbl);
                res = await action.getText(this.snackbarLbl);
                await action.click(this.snackbarBtn);
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

}