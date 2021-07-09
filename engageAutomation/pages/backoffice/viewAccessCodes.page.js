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

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        //action.waitForDocumentLoad();
        action.waitForDisplayed(this.loadingContainer);
        action.waitForDisplayed(this.loadingContainer, undefined, true);
        let res = {
            batchName: action.getText(this.batchName),
            startDate: action.getText(this.startDate),
            endDate: action.getText(this.endDate),
            totalAccessCodes: action.getText(this.totalAccessCodes),
            consumedAccessCodes: action.getText(this.consumedAccessCodes),
            batchStatus: action.getText(this.batchStatus),
        }
        return res;
    },

    get_ListofAccessCodes: function () {
        logger.logInto(stackTrace.get());
        res = [{
            accessCode: null,
            accessCodeStatus: null
        }];
        let i, list1, list2;
        list1 = action.findElements(this.accessCodes);
        list2 = action.findElements(this.accessCodeStatus);
        for (i = 0; i < list1.length; i++) {
            res[i].accessCode = action.getText(list1[i]);
            res[i].accessCodeStatus = action.getText(list2[i])
        }
        return res;
    },

    click_Modify_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.modifyBtn);
        if (res == true) {
            res = require('./generateCodes.page.js').isInitialized();
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    /*click_Book: function (name) {
        logger.logInto(stackTrace.get());
        res = null;
        let i, list;
        list = action.findElements(this.bookList);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == name) {
                res = action.click(list[i]);
                if (res == true) {
                    res = require('./componentList.page.js').isInitialized();
                }
                break;
            }
            res = "book not found ";
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },*/

    click_Deactivate_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.deactivateBtn);
        if (res == true) {
            action.waitForDisplayed(this.dialogContent);
            res = action.getText(this.dialogContent);
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Redeem_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.redeemBtn);
        if (res == true) {
            res = require('./redeemAccessCode.page.js').isInitialized();
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

}