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
    revokeBtn: selectorFile.viewAccessCodesPage.revokeBtn,
    historyBtn: selectorFile.viewAccessCodesPage.historyBtn,
    accessCodes: selectorFile.viewAccessCodesPage.accessCodes,
    accessCodeStatus: selectorFile.viewAccessCodesPage.accessCodeStatus,
    modifyBtn: selectorFile.viewAccessCodesPage.modifyBtn,
    deactivateBtn: selectorFile.viewAccessCodesPage.deactivateBtn,
    redeemBtn: selectorFile.viewAccessCodesPage.redeemBtn,
    csvBtn: selectorFile.viewAccessCodesPage.csvBtn,
    printBtn: selectorFile.viewAccessCodesPage.printBtn,
    loadingContainer: selectorFile.common.loadingContainer,
    dialogContent: selectorFile.common.dialogContent,
    cancelDialog: selectorFile.common.cancelDialog,
    confirmDialog: selectorFile.common.confirmDialog,

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        //action.waitForDocumentLoad();
        await action.waitForDisplayed(this.loadingContainer);
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
        res = [{
            accessCode: null,
            accessCodeStatus: null
        }];
        let i, list1, list2;
        list1 = await action.findElements(this.accessCodes);
        list2 = await action.findElements(this.accessCodeStatus);
        for (i = 0; i < list1.length; i++) {
            res[i].accessCode = await action.getText(list1[i]);
            res[i].accessCodeStatus = await action.getText(list2[i])
        }
        return res;
    },

    search_Access_Code: async function (text) {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.accessCodeSearch);
        if (res == true) {
            await action.setValue(this.accessCodeSearch, text);
            res = await action.click(this.searchBtn);
            if (res == true) {
                res = await action.get_ListofAccessCodes();
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Modify_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.modifyBtn);
        if (res == true) {
            res = await require('./generateCodes.page.js').isInitialized();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    /*click_Book: async function (name) {
        logger.logInto((await stackTrace.get()));
        res = null;
        let i, list;
        list = action.findElements(this.bookList);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == name) {
                res = action.click(list[i]);
                if (res == true) {
                    res = await require('./componentList.page.js').isInitialized();
                }
                break;
            }
            res = "book not found ";
        }
        logger.logInto((await stackTrace.get()), res);
        return res;
    },*/

    click_Deactivate_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.deactivateBtn);
        if (res == true) {
            await action.waitForDisplayed(this.dialogContent);
            res = await action.getText(this.dialogContent);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Redeem_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.redeemBtn);
        if (res == true) {
            res = await require('./redeemAccessCode.page.js').isInitialized();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

}