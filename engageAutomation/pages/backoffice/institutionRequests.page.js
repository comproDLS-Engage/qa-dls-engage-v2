"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
const findInstitutionPage = require('./findInstitution.page.js');
var res;

module.exports = {

    createNewBtn: selectorFile.institutionRequestPage.createNewBtn,
    pendingTab: selectorFile.institutionRequestPage.pendingTab,
    acceptedTab: selectorFile.institutionRequestPage.acceptedTab,
    processingTab: selectorFile.institutionRequestPage.processingTab,
    completedTab: selectorFile.institutionRequestPage.completedTab,
    rejectedTab: selectorFile.institutionRequestPage.rejectedTab,
    rejectBtn: selectorFile.institutionRequestPage.rejectBtn,
    acceptBtn: selectorFile.institutionRequestPage.acceptBtn,
    processBtn: selectorFile.institutionRequestPage.processBtn,
    completeBtn: selectorFile.institutionRequestPage.completeBtn,
    logsBtn: selectorFile.institutionRequestPage.logsBtn,
    instituteName: selectorFile.institutionRequestPage.instituteName,
    confirmDialog: selectorFile.institutionRequestPage.confirmDialog,
    cancelDialog: selectorFile.institutionRequestPage.cancelDialog,
    reasonInput: selectorFile.institutionRequestPage.reasonInput,
    snackbarLbl: selectorFile.common.snackbarLbl,
    snackbarBtn: selectorFile.common.snackbarBtn,

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        await action.waitForDisplayed(this.loadingContainer);
        await action.waitForDisplayed(this.loadingContainer, undefined, true);
        res = await action.waitForDisplayed(this.createNewBtn);
        await browser.pause(3000);
        return res;
    },

    getInstitutionList: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.findElements(this.instituteName);
        let list = [];
        for (var i = 0; i < res.length; i++) {
            list[i] = await action.getText(res[i]);
        }
        return list;
    },

    search_Institution: async function (val) {
        await logger.logInto((await stackTrace.get()));
        res = await findInstitutionPage.search_Institution(val);
        return res;
    },

    click_CreateNewInstitution_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.createNewBtn);
        if (res == true) {
            res = await require('./createNewInstitution.page.js').isInitialized();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_PendingTab: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.pendingTab);
        if (res == true) {
            res = await this.getInstitutionList();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_AcceptedTab: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.acceptedTab);
        if (res == true) {
            res = await this.getInstitutionList();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_ProcessingTab: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.processingTab);
        if (res == true) {
            res = await this.getInstitutionList();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_CompletedTab: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.completedTab);
        if (res == true) {
            res = await this.getInstitutionList();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_RejectedTab: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.rejectedTab);
        if (res == true) {
            res = await this.getInstitutionList();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Accept_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.acceptBtn);
        if (res == true) {
            res = await action.waitForDisplayed(this.confirmDialog);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Process_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.processBtn);
        if (res == true) {
            res = await action.waitForDisplayed(this.confirmDialog);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Complete_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.completeBtn);
        if (res == true) {
            res = await action.waitForDisplayed(this.confirmDialog);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Logs_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.completeBtn);
        if (res == true) {
            res = await action.waitForDisplayed(this.confirmDialog);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    set_Reject_Reason: async function (text) {
        await logger.logInto((await stackTrace.get()));
        let res;
        res = await action.setValue(this.reasonInput, text);
        if (res == true) {
            res = await action.isClickable(this.confirmDialog);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Reject_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.rejectBtn);
        if (res == true) {
            await action.waitForDisplayed(this.confirmDialog);
            res = await action.isClickable(this.confirmDialog);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_ConfirmDialog_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.confirmDialog);
        if (res == true) {
            res = await action.waitForDisplayed(this.confirmDialog, undefined, true);
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
}