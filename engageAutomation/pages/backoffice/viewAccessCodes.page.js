"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    batchName: selectorFile.viewAccessCodesPage.batchName,
    startDate: selectorFile.viewAccessCodesPage.startDate,
    endDate: selectorFile.viewAccessCodesPage.endDate,
    totalAccessCodes: selectorFile.viewAccessCodesPage.totalAccessCodes,
    consumedAccessCodes: selectorFile.viewAccessCodesPage.consumedAccessCodes,
    batchStatus: selectorFile.viewAccessCodesPage.batchStatus,
    accessCodes: selectorFile.viewAccessCodesPage.accessCodes,
    accessCodeStatus: selectorFile.viewAccessCodesPage.accessCodeStatus,
    modifyBtn: selectorFile.viewAccessCodesPage.modifyBtn,
    deactivateBtn: selectorFile.viewAccessCodesPage.deactivateBtn,
    redeemBtn: selectorFile.viewAccessCodesPage.redeemBtn,
    loadingContainer: selectorFile.common.loadingContainer,
    dialogContent: selectorFile.common.dialogContent,

    isInitialized: async function () {
        await logger.logInto(stackTrace.get());
        //action.waitForDocumentLoad();
        await action.waitForDisplayed(this.loadingContainer);
        await action.waitForDisplayed(this.loadingContainer, undefined, true);
        let res = {
            batchName: await action.getText(this.batchName),
            startDate: await action.getText(this.startDate),
            endDate: await action.getText(this.endDate),
            totalAccessCodes: await action.getText(this.totalAccessCodes),
            consumedAccessCodes: await action.getText(this.consumedAccessCodes),
            batchStatus: await action.getText(this.batchStatus),
        }
        return res;
    },

    get_ListofAccessCodes: async function () {
        await logger.logInto(stackTrace.get());
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

    click_Modify_Button: async function () {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.modifyBtn);
        if (res == true) {
            res = await require('./generateCodes.page.js').isInitialized();
        }
        await logger.logInto(stackTrace.get(), res);
        return res;
    },

    /*click_Book: async function (name) {
        logger.logInto(stackTrace.get());
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
        logger.logInto(stackTrace.get(), res);
        return res;
    },*/

    click_Deactivate_Button: async function () {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.deactivateBtn);
        if (res == true) {
            await action.waitForDisplayed(this.dialogContent);
            res = await action.getText(this.dialogContent);
        }
        await logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Redeem_Button: async function () {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.redeemBtn);
        if (res == true) {
            res = await require('./redeemAccessCode.page.js').isInitialized();
        }
        await logger.logInto(stackTrace.get(), res);
        return res;
    },

}