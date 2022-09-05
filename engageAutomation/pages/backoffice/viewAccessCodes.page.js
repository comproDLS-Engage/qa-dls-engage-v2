"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    batchName: selectorFile.viewAccessCodesPage.batchName,
    startDate: selectorFile.viewAccessCodesPage.startDate,
    endDate: selectorFile.viewAccessCodesPage.endDate,
    duration: selectorFile.viewAccessCodesPage.duration,
    totalAccessCodes: selectorFile.viewAccessCodesPage.totalAccessCodes,
    consumedAccessCodes: selectorFile.viewAccessCodesPage.consumedAccessCodes,
    batchStatus: selectorFile.viewAccessCodesPage.batchStatus,
    accessCodeSearch: selectorFile.viewAccessCodesPage.accessCodeSearch,
    searchBtn: selectorFile.viewAccessCodesPage.searchBtn,
    prevPageBtn: selectorFile.viewAccessCodesPage.prevPageBtn,
    nextPageBtn: selectorFile.viewAccessCodesPage.nextPageBtn,
    sortBtn: selectorFile.viewAccessCodesPage.sortBtn,
    sortByStatus: selectorFile.viewAccessCodesPage.sortByStatus,
    sortByCode: selectorFile.viewAccessCodesPage.sortByCode,
    redeemedBtn: selectorFile.viewAccessCodesPage.redeemedBtn,
    revokeBtn: selectorFile.viewAccessCodesPage.revokeBtn,
    resumeBtn: selectorFile.viewAccessCodesPage.resumeBtn,
    historyBtn: selectorFile.viewAccessCodesPage.historyBtn,
    historyRecords: selectorFile.viewAccessCodesPage.historyRecords,
    accessCodes: selectorFile.viewAccessCodesPage.accessCodes,
    accessCodeStatus: selectorFile.viewAccessCodesPage.accessCodeStatus,
    copyIcon: selectorFile.viewAccessCodesPage.copyIcon,
    generateBtn: selectorFile.viewAccessCodesPage.generateBtn,
    modifyBtn: selectorFile.viewAccessCodesPage.modifyBtn,
    deactivateBtn: selectorFile.viewAccessCodesPage.deactivateBtn,
    activateBtn: selectorFile.viewAccessCodesPage.activateBtn,
    redeemBtn: selectorFile.viewAccessCodesPage.redeemBtn,
    csvBtn: selectorFile.viewAccessCodesPage.csvBtn,
    printBtn: selectorFile.viewAccessCodesPage.printBtn,
    loadingContainer: selectorFile.common.loadingContainer,
    dialogContent: selectorFile.common.dialogContent,
    snackbarLbl: selectorFile.common.snackbarLbl,
    snackbarBtn: selectorFile.common.snackbarBtn,

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        //action.waitForDocumentLoad();
        //await action.waitForDisplayed(this.loadingContainer);
        await action.waitForDisplayed(this.loadingContainer, undefined, true);
        let res = {
            batchName: await action.getText(this.batchName),
            startDate: await action.getText(this.startDate),
            endDate: await action.getText(this.endDate),
            duration: await action.getText(this.duration),
            totalAccessCodes: await action.getText(this.totalAccessCodes),
            consumedAccessCodes: await action.getText(this.consumedAccessCodes),
            batchStatus: await action.getText(this.batchStatus),
        }
        return res;
    },

    get_ListofAccessCodes: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = [];
        let i, list1, list2;
        list1 = await action.findElements(this.accessCodes);
        list2 = await action.findElements(this.accessCodeStatus);
        for (i = 0; i < list1.length; i++) {
            res[i] = {
                accessCode: await action.getText(list1[i]),
                accessCodeStatus: await action.getText(list2[i])
            }
        }
        return res;
    },

    search_AccessCode: async function (text) {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.accessCodeSearch);
        if (res == true) {
            await action.setValue(this.accessCodeSearch, text);
            res = await action.click(this.searchBtn);
            if (res == true) {
                res = await this.get_ListofAccessCodes();
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    sort_AccessCode_By_Status: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.sortBtn);
        if (res == true) {
            res = await action.click(this.sortByStatus);
            if (res == true) {
                res = await this.get_ListofAccessCodes();
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    sort_AccessCode_By_Code: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.sortBtn);
        if (res == true) {
            res = await action.click(this.sortByCode);
            if (res == true) {
                res = await this.get_ListofAccessCodes();
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Copy_AccessCode_Icon: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.copyIcon);
        if (res == true) {
            await action.waitForDisplayed(this.snackbarLbl);
            res = await action.getText(this.snackbarLbl);
            await action.click(this.snackbarBtn);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Prevpage_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.prevPageBtn);
        if (res == true) {
            res = await this.get_ListofAccessCodes();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Nextpage_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.nextPageBtn);
        if (res == true) {
            res = await this.get_ListofAccessCodes();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_History_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.historyBtn);
        if (res == true) {
            res = await action.waitForDisplayed(this.historyRecords);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Redeemed_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.redeemedBtn);
        if (res == true) {
            //return user details page
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Revoke_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.revokeBtn);
        if (res == true) {
            await action.waitForDisplayed(this.dialogContent);
            res = await action.getText(this.dialogContent);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Resume_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.resumeBtn);
        if (res == true) {
            await action.waitForDisplayed(this.dialogContent);
            res = await action.getText(this.dialogContent);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Generate_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.generateBtn);
        if (res == true) {
            res = await require('./generateCodes.page.js').isInitialized();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Modify_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.modifyBtn);
        if (res == true) {
            res = await require('./generateCodes.page.js').isInitialized();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Deactivate_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.deactivateBtn);
        if (res == true) {
            await action.waitForDisplayed(this.dialogContent);
            res = await action.getText(this.dialogContent);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Activate_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.activateBtn);
        if (res == true) {
            await action.waitForDisplayed(this.dialogContent);
            res = await action.getText(this.dialogContent);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Redeem_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.redeemBtn);
        if (res == true) {
            res = await require('./redeemAccessCode.page.js').isInitialized();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

}