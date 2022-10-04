"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    dialogContent: selectorFile.common.dialogContent,
    confirmDialog: selectorFile.common.confirmDialog,
    cancelDialog: selectorFile.common.cancelDialog,
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
    publishBtn : selectorFile.common.publishBtn,
    bannerCloseBtn: selectorFile.common.bannerCloseBtn,

    click_confirmDialog_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.confirmDialog);
        if (res == true) {
            res = await action.waitForDisplayed(this.snackbarLbl);
            if (res == true) {
                res = await action.getText(this.snackbarLbl);
                //await action.click(this.snackbarBtn);
            }
            await browser.pause(25000);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_CancelDialog_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.cancelDialog);
        if (res == true) {
            res = await action.waitForDisplayed(this.cancelDialog, undefined, true);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Back_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.backBtn);
        if (res == true) {
            res = await action.waitForDisplayed(this.pageContent);
            await browser.pause(5000);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Close_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.switchToParentFrame();
        res = await action.click(this.closeBtn + "," + this.snackbarBtn + "," + this.bannerCloseBtn);
        if (res == true) {
            res = await action.waitForDisplayed(this.pageContent);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Level1Breadcrumb: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.breadcrumbLevel1);
        if (res == true) {
            res = await require('./viewBook.page.js').isInitialized();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Level2Breadcrumb: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.breadcrumbLevel2);
        if (res == true) {
            res = await require('./viewLearningPath.page.js').isInitialized();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    signout_from_app: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.menuBtn);
        if (res == true) {
            res = await action.click(this.signOutBtn);
            if (res == true) {
                res = await require('./login.page.js').isInitialized();
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_PreviewAndPublish_button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.publishBtn);
        if (res == true) {
            res = await require('./publishComponent.page.js').isInitialized();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },
}