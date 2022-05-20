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

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        //action.waitForDocumentLoad();
        res = await action.waitForDisplayed(this.generateBtn);
        return res;
    },

    select_Book: async function (name) {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.bookDropdown);
        await action.waitForDisplayed(this.bookList);
        if (res == true) {
            let i, list;
            list = await action.findElements(this.bookList);
            for (i = 0; i < list.length; i++) {
                if ((await action.getText(list[i])) == name) {
                    res = await action.click((await action.parentElement(list[i])));
                    break;
                }
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },


    set_BatchName: async function (name) {
        await logger.logInto((await stackTrace.get()));
        res = await action.setValue(this.batchNameTxtbox, name);
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    set_StartDate: async function (date) {
        await logger.logInto((await stackTrace.get()));
        res = await action.setValue(this.startDate, date);
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    set_EndDate: async function (date) {
        await logger.logInto((await stackTrace.get()));
        res = await action.setValue(this.endDate, date);
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    set_CodeLimit: async function (number) {
        await logger.logInto((await stackTrace.get()));
        res = await action.setValue(this.codeLimitTxtbox, number);
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },
    
    click_Generate_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.waitForClickable(this.generateBtn);
        await action.waitForDisplayed(this.buttonLoader, undefined, true);
        if (res == true) {
            res = await action.click(this.generateBtn);
            if (res == true) {
                await action.waitForDisplayed(this.snackbarLbl);
                res = await action.getText(this.snackbarLbl);
                await action.click(this.snackbarBtn);
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

}