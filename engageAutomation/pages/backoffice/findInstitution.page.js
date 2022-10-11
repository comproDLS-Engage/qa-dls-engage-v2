"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    pageTitle: selectorFile.common.pageTitle,
    instituteSearchInput: selectorFile.findInstitutionPage.instituteSearchInput,
    searchIconBtn: selectorFile.findInstitutionPage.searchIconBtn,
    institutionList: selectorFile.findInstitutionPage.institutionList,
    componentTypeList: selectorFile.findInstitutionPage.componentTypeList,
    moreOptionsBtn: selectorFile.findInstitutionPage.moreOptionsBtn,
    changeNameOption: selectorFile.findInstitutionPage.changeNameOption,
    changeKeyOption: selectorFile.findInstitutionPage.changeKeyOption,
    loginAsAdminOption: selectorFile.findInstitutionPage.loginAsAdminOption,
    changeBtn: selectorFile.findInstitutionPage.changeBtn,
    cancelBtn: selectorFile.findInstitutionPage.cancelBtn,
    institutionNameInput: selectorFile.findInstitutionPage.institutionNameInput,
    snackbarLbl: selectorFile.common.snackbarLbl,
    snackbarBtn: selectorFile.common.snackbarBtn,

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        await action.waitForDisplayed(this.loadingContainer);
        await action.waitForDisplayed(this.loadingContainer, undefined, true);
        res = await action.waitForDisplayed(this.pageTitle);
        await browser.pause(3000);
        return res;
    },

    getInstitutionList: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.getElementCount(this.institutionList);
        return res;
    },

    search_Institution: async function (val) {
        await logger.logInto((await stackTrace.get()));
        res = await action.setValue(this.instituteSearchInput, val);
        if (res == true) {
            res = await action.click(this.searchIconBtn);
            if (res == true) {
                res = await this.isInitialized();
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_ChangeName_Option: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.moreOptionsBtn);
        if (res == true) {
            res = await action.click(this.changeNameOption);
            if (res == true) {
                res = await action.waitForClickable(this.changeBtn);
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_ChangeKey_Option: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.moreOptionsBtn);
        if (res == true) {
            res = await action.click(this.changeKeyOption);
            if (res == true) {
                res = await action.waitForDisplayed(this.changeBtn);
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_DialogChangeKey_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.changeBtn);
        if (res == true) {
            await action.waitForDisplayed(this.snackbarLbl);
            res = await action.getText(this.snackbarLbl);
            await action.click(this.snackbarBtn);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_DialogCancel_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.cancelBtn);
        if (res == true) {
            res = await action.waitForDisplayed(this.changeBtn, undefined, true);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    change_Institution_Name: async function (name) {
        await logger.logInto((await stackTrace.get()));
        let res = await action.setValue(this.institutionNameInput, name);
        if (res == true) {
            let res = await action.click(this.changeBtn);
            if (res == true) {
                res = await action.waitForDisplayed(this.changeBtn, undefined, true);
                //should call for snackbar message - bug in app
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    }

}