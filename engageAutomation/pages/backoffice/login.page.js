"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    email_tbox: selectorFile.loginPage.email_tbox,
    password_tbox: selectorFile.loginPage.password_tbox,
    login_btn: selectorFile.loginPage.login_btn,
    appLoader: selectorFile.common.appLoader,
    buttonLoader: selectorFile.common.buttonLoader,

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        //action.waitForDocumentLoad();
        await action.waitForDisplayed(this.appLoader, undefined, true);
        res = await action.waitForDisplayed(this.login_btn);
        return res;
    },

    set_UserName: async function (userName) {
        await logger.logInto((await stackTrace.get()));
        res = await action.setValue(this.email_tbox, userName);
        if (res == true) {
            await logger.logInto((await stackTrace.get()), " -- UserName is entered");
        }
        else {
            res = res + " -- UserName is NOT entered";
            await logger.logInto((await stackTrace.get()), res, 'error');
        }
        return res;
    },

    set_Password: async function (password) {
        await logger.logInto((await stackTrace.get()));
        res = await action.setValue(this.password_tbox, password);
        if (res == true) {
            await logger.logInto((await stackTrace.get()), " -- Password is entered");
        }
        else {
            res = res + " -- Password is NOT entered";
            await logger.logInto((await stackTrace.get()), res, 'error');
        }
        return res;
    },

    click_Login_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.login_btn);
        if (res == true) {
            await logger.logInto((await stackTrace.get()), " -- Login button is clicked");
            await action.waitForDisplayed(this.buttonLoader, undefined, true)
            res = await require('./home.page.js').isInitialized();
            await browser.pause(5000)
        }
        else {
            res = res + " -- Login button is NOT clicked ";
            await logger.logInto((await stackTrace.get()), res, 'error');
        }
        return res;
    }

}