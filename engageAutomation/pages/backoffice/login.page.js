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

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        //action.waitForDocumentLoad();
        action.waitForDisplayed(this.appLoader, undefined, true);
        res = action.waitForDisplayed(this.login_btn);
        return res;
    },

    set_UserName: function (userName) {
        logger.logInto(stackTrace.get());
        res = action.setValue(this.email_tbox, userName);
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- UserName is entered");
        }
        else {
            res = res + " -- UserName is NOT entered";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    set_Password: function (password) {
        logger.logInto(stackTrace.get());
        res = action.setValue(this.password_tbox, password);
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- Password is entered");
        }
        else {
            res = res + " -- Password is NOT entered";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_Login_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.login_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- Login button is clicked");
            action.waitForDisplayed(this.buttonLoader, undefined, true)
            res = require('./home.page.js').isInitialized();
        }
        else {
            res = res + " -- Login button is NOT clicked ";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    }

}