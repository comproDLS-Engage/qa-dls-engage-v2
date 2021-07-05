"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    userName: selectorFile.homePage.userName,
    newTitleBtn: selectorFile.homePage.newTitleBtn,
    bookCount: selectorFile.homePage.bookCount,
    bookList: selectorFile.homePage.bookList,
    menuBtn: selectorFile.common.menuBtn,
    signOutBtn: selectorFile.common.signOutBtn,
    libraryBtn: selectorFile.homePage.libraryBtn,
    metadataBtn: selectorFile.homePage.metadataBtn,
    loadMoreBtn: selectorFile.common.loadMoreBtn,
    goBackBtn: selectorFile.common.goBackBtn,
    viewCodesBtn: selectorFile.homePage.viewCodesBtn,
    generateCodesBtn: selectorFile.homePage.generateCodesBtn,
    checkCodeBtn: selectorFile.homePage.checkCodeBtn,
    viewCodeBookDropdown: selectorFile.homePage.viewCodeBookDropdown,
    viewCodeBookList: selectorFile.homePage.viewCodeBookList,
    viewCodeBatchDropdown: selectorFile.homePage.viewCodeBatchDropdown,
    viewCodeBatchList: selectorFile.homePage.viewCodeBatchList,
    viewCodeProceedBtn: selectorFile.homePage.viewCodeProceedBtn,
    accessCodeTxtbox: selectorFile.homePage.accessCodeTxtbox,
    checkCodeProceedBtn: selectorFile.homePage.checkCodeProceedBtn,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        // /action.waitForDocumentLoad();
        action.waitForDisplayed(this.userName);
        action.waitForDisplayed(this.loadingContainer, undefined, true);
        res = action.getText(this.userName);
        return res;
    },

    get_ListofBooks: function () {
        logger.logInto(stackTrace.get());
        res = [];
        let i, count;
        count = action.findElements(this.bookList);
        for (i = 0; i < count; i++) {
            res = action.getText(count[i]);
        }
        return res;
    },

    click_NewTitle_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.newTitleBtn);
        if (res == true) {
            res = require('./addTitle.page.js').isInitialized();
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Book: function (name) {
        logger.logInto(stackTrace.get());
        res = null;
        let i, list;
        action.waitForDisplayed(this.bookList);
        list = action.findElements(this.bookList);
        for (i = 0; i < list.length; i++) {
            //console.log(action.getText(list[i]))
            if (action.getText(list[i]).includes(name)) {
                res = action.click(list[i]);
                if (res == true) {
                    res = require('./viewBook.page.js').isInitialized();
                }
                break;
            }
            res = "book not found ";
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Library_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.libraryBtn);
        if (res == true) {
            res = action.waitForDisplayed(this.goBackBtn);
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Metadata_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.metadataBtn);
        if (res == true) {
            res = action.waitForDisplayed(this.goBackBtn);
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_ViewCodes_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.viewCodesBtn);
        if (res == true) {
            res = action.waitForDisplayed(this.viewCodeProceedBtn);
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    select_Book_in_ViewCode_Launcher: function (name) {
        logger.logInto(stackTrace.get());
        res = action.click(this.viewCodeBookDropdown);
        action.waitForDisplayed(this.viewCodeBookList);
        if (res == true) {
            let i, list;
            list = action.findElements(this.viewCodeBookList);
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

    select_Batch_in_ViewCode_Launcher: function (name) {
        logger.logInto(stackTrace.get());
        res = action.click(this.viewCodeBatchDropdown);
        action.waitForDisplayed(this.viewCodeBatchList);
        if (res == true) {
            let i, list;
            list = action.findElements(this.viewCodeBatchList);
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

    click_Proceed_Button_in_ViewCode_Launcher: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.viewCodeProceedBtn);
        if (res == true) {
            res = require('./viewCode.page.js').isInitialized();
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    enter_AccessCode_in_CheckACode_Launcher: function (code) {
        logger.logInto(stackTrace.get());
        res = action.setValue(this.accessCodeTxtbox, code);
        if (res == null) {
            res = action.isEnabled(this.checkCodeProceedBtn);
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Proceed_Button_in_CheckACode_Launcher: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.checkCodeProceedBtn);
        if (res == true) {
            //res = require('./viewCode.page.js').isInitialized();
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_GenerateCodes_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.generateCodesBtn);
        if (res == true) {
            res = require('./generateCodes.page.js').isInitialized();
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_CheckACode_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.checkCodeBtn);
        if (res == true) {
            res = action.waitForDisplayed(this.checkCodeProceedBtn);
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    }

}