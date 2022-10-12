"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    emailInput: selectorFile.entitleUserPage.emailInput,
    productCodeInput: selectorFile.entitleUserPage.productCodeInput,
    startDate: selectorFile.entitleUserPage.startDate,
    snackbarBtn: selectorFile.entitleUserPage.snackbarBtn,
    endDate: selectorFile.entitleUserPage.endDate,
    okBtn: selectorFile.entitleUserPage.okBtn,
    passkeyInput: selectorFile.entitleUserPage.passkeyInput,
    confirmBtn: selectorFile.entitleUserPage.confirmBtn,

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        let res;
        res = await action.waitForDisplayed(this.confirmBtn);
        return res;
    },

    set_Email: async function (text) {
        await logger.logInto((await stackTrace.get()));
        let res;
        if (text == "" || text == undefined)
            res = true;
        else {
            res = await action.setValue(this.emailInput, text);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    set_ProductCode: async function (text) {
        await logger.logInto((await stackTrace.get()));
        let res;
        res = await action.setValue(this.productCodeInput, text);
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    select_StartDate: async function () {
        await logger.logInto((await stackTrace.get()));
        let res;
        res = await action.click(this.startDate);
        if (res == true) {
            res = await action.click(this.okBtn);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    select_EndDate: async function () {
        await logger.logInto((await stackTrace.get()));
        let res;
        res = await action.click(this.endDate);
        if (res == true) {
            res = await action.click(this.okBtn);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    set_PassKey: async function (text) {
        await logger.logInto((await stackTrace.get()));
        let res;
        res = await action.setValue(this.passkeyInput, text);
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Entitle_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res;
        res = await action.waitForClickable(this.confirmBtn);
        await action.waitForDisplayed(this.buttonLoader, undefined, true)
        if (res == true) {
            res = await action.click(this.confirmBtn);
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