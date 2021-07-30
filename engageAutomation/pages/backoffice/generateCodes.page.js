"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    bookDropdown: selectorFile.generateCodesPage.bookDropdown,
    bookList: selectorFile.generateCodesPage.bookList,
    batchNameTxtbox: selectorFile.generateCodesPage.batchNameTxtbox,
    startDate: selectorFile.generateCodesPage.startDate,
    endDate: selectorFile.generateCodesPage.endDate,
    codeLimitTxtbox: selectorFile.generateCodesPage.codeLimitTxtbox,
    generateBtn: selectorFile.generateCodesPage.generateBtn,
    snackbarLbl: selectorFile.common.snackbarLbl,
    snackbarBtn: selectorFile.common.snackbarBtn,
    buttonLoader: selectorFile.common.buttonLoader,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        //action.waitForDocumentLoad();
        res = action.waitForDisplayed(this.generateBtn);
        return res;
    },

    select_Book: function (name) {
        logger.logInto(stackTrace.get());
        res = action.click(this.bookDropdown);
        action.waitForDisplayed(this.bookList);
        if (res == true) {
            let i, list;
            list = action.findElements(this.bookList);
            for (i = 0; i < list.length; i++) {
                if (action.getText(list[i]) == name) {
                    res = action.click(action.parentElement(list[i]));
                    break;
                }
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },


    set_BatchName: function (name) {
        logger.logInto(stackTrace.get());
        res = action.setValue(this.batchNameTxtbox, name);
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    set_StartDate: function (date) {
        logger.logInto(stackTrace.get());
        res = action.setValue(this.startDate, date);
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    set_EndDate: function (date) {
        logger.logInto(stackTrace.get());
        res = action.setValue(this.endDate, date);
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    set_CodeLimit: function (number) {
        logger.logInto(stackTrace.get());
        res = action.setValue(this.codeLimitTxtbox, number);
        logger.logInto(stackTrace.get(), res);
        return res;
    },
    
    click_Generate_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.waitForClickable(this.generateBtn);
        action.waitForDisplayed(this.buttonLoader, undefined, true);
        if (res == true) {
            res = action.click(this.generateBtn);
            if (res == true) {
                action.waitForDisplayed(this.snackbarLbl);
                res = action.getText(this.snackbarLbl);
                action.click(this.snackbarBtn);
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

}