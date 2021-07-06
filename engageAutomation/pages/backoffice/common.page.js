"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    dialogContent: selectorFile.common.dialogContent,
    confirmDialog: selectorFile.common.confirmDialog,
    snackbarLbl: selectorFile.common.snackbarLbl,
    snackbarBtn: selectorFile.common.snackbarBtn,
    breadcrumbLevel1: selectorFile.common.breadcrumbLevel1,
    breadcrumbLevel2: selectorFile.common.breadcrumbLevel2,
    loadingContainer: selectorFile.common.loadingContainer,
    backBtn: selectorFile.common.backBtn,
    pageContent: selectorFile.common.pageContent,
    menuBtn: selectorFile.common.menuBtn,
    signOutBtn: selectorFile.common.signOutBtn,
    closeBtn: selectorFile.common.closeBtn,

    click_confirmDialog_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.confirmDialog);
        if (res == true) {
            res = action.waitForDisplayed(this.snackbarLbl);
            if (res == true) {
                res = action.getText(this.snackbarLbl);
                action.click(this.snackbarBtn);
            }
            browser.pause(10000);
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Back_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.backBtn);
        if (res == true) {
            res = action.waitForDisplayed(this.pageContent);
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Close_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.closeBtn);
        if (res == true) {
            res = action.waitForDisplayed(this.pageContent);
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Level1Breadcrumb: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.breadcrumbLevel1);
        if (res == true) {
            res = require('./componentList.page.js').isInitialized();
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Level2Breadcrumb: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.breadcrumbLevel2);
        if (res == true) {
            res = require('./learningPath.page.js').isInitialized();
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    signout_from_app: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.menuBtn);
        if (res == true) {
            res = action.click(this.signOutBtn);
            if (res == true) {
                res = require('./login.page.js').isInitialized();
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },
}