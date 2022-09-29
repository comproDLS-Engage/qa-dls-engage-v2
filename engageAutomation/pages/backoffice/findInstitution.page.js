"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    searchbox: selectorFile.findInstitutionPage.searchbox,
    institutionList: selectorFile.findInstitutionPage.institutionList,
    componentTypeList: selectorFile.findInstitutionPage.componentTypeList,
    moreOptionsBtn: selectorFile.findInstitutionPage.moreOptionsBtn,
    changeNameOption: selectorFile.findInstitutionPage.changeNameOption,
    changeKeyOption: selectorFile.findInstitutionPage.changeKeyOption,
    loginAsAdminOption: selectorFile.findInstitutionPage.loginAsAdminOption,
    dialogChangeBtn: dialogChangeBtn,
    dialogCancelBtn: this.dialogCancelBtn,

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        await action.waitForDisplayed(this.loadingContainer);
        await action.waitForDisplayed(this.loadingContainer, undefined, true);
        res = await action.getText(selectorFile.common.pageTitle);
        return res;
    },

    getInstitutionList: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.getElementCount(this.institutionList);
		return res;
    },

    click_ChangeName_Option: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.moreOptionsBtn);
        if (res == true) {
            res = await action.click(this.changeNameOption);
            if (res == true) {
                // call change name 
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
                res = await action.waitForDisplayed(this.dialogChangeBtn);
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_DialogChangeKey_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.dialogChangeBtn);
        if (res == true) {
            res = await require('./addTitle.page.js').isInitialized();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_DialogCancel_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.dialogCancelBtn);
        if (res == true) {
            res = await action.waitForDisplayed(this.dialogChangeBtn, undefined, true);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    change_Institution_Name: async function () {

    }

}