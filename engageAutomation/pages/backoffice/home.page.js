"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    headingText: selectorFile.homePage.headingText,
    newTitleBtn: selectorFile.homePage.newTitleBtn,
    titleTypeList: selectorFile.homePage.titleTypeList,
    proceedBtn: selectorFile.common.proceedBtn,
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
    booksPill: selectorFile.homePage.booksPill,
    globalResourcesPill: selectorFile.homePage.globalResourcesPill,
    searchTxtbox: selectorFile.homePage.searchTxtbox,
    searchBtn: selectorFile.homePage.searchBtn,
    bookIcon: selectorFile.homePage.bookIcon,
    globalResourceIcon: selectorFile.homePage.globalResourceIcon,
    appVersion: selectorFile.common.appVersion,

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        // /action.waitForDocumentLoad();
        await action.waitForDisplayed(this.loadingContainer, undefined, true);
        res = await action.waitForDisplayed(this.headingText);
        if (global.appVersion == undefined)
            global.appVersion = await action.getText(this.appVersion);
        await browser.pause(5000)
        return res;
    },

    get_ListofBooks: async function () {
        await logger.logInto((await stackTrace.get()));
        res = [];
        let i, count;
        count = await action.findElements(this.bookList);
        console.log("count: " + count.length);
        for (i = 0; i < count.length; i++) {
            res = await action.getText(count[i]);
        }
        return res;
    },

    click_NewTitle_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.newTitleBtn);
        if (res == true) {
            res = await action.waitForDisplayed(this.proceedBtn);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    select_TitleType_and_Proceed: async function (type) {
        await logger.logInto((await stackTrace.get()));
        res = null;
        let i, list;
        list = await action.findElements(this.titleTypeList);
        for (i = 0; i < list.length; i++) {
            if ((await action.getAttribute(list[i], "data-value")).includes(type)) {
                res = await action.click(list[i]);
                if (res == true) {
                    res = await action.click(this.proceedBtn);
                    if (res == true) {
                        res = await require('./addTitle.page.js').isInitialized();
                        await browser.pause(2000);
                    }
                }
                break;
            }
            res = "component type not found";
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Book: async function (name) {
        await logger.logInto((await stackTrace.get()));
        res = null;
        let i, list;
        await action.waitForDisplayed(this.bookList);
        list = await action.findElements(this.bookList);
        for (i = 0; i < list.length; i++) {
            if ((await action.getText(list[i])).includes(name)) {
                res = await action.click(list[i]);
                if (res == true) {
                    await browser.pause(5000);
                    res = await require('./viewBook.page.js').isInitialized();
                }
                break;
            }
            res = "book not found ";
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    /*click_Library_Button: async function () {
        logger.logInto((await stackTrace.get()));
        res = action.click(this.libraryBtn);
        if (res == true) {
            res = action.waitForDisplayed(this.goBackBtn);
        }
        logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Metadata_Button: async function () {
        logger.logInto((await stackTrace.get()));
        res = action.click(this.metadataBtn);
        if (res == true) {
            res = action.waitForDisplayed(this.goBackBtn);
        }
        logger.logInto((await stackTrace.get()), res);
        return res;
    },*/

    click_ViewCodes_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.viewCodesBtn);
        if (res == true) {
            res = await action.waitForDisplayed(this.viewCodeProceedBtn);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    select_Book_in_ViewCode_Launcher: async function (name) {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.viewCodeBookDropdown);
        await action.waitForDisplayed(this.viewCodeBookList);
        if (res == true) {
            let i, list;
            list = await action.findElements(this.viewCodeBookList);
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

    select_Batch_in_ViewCode_Launcher: async function (name) {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.viewCodeBatchDropdown);
        await action.waitForDisplayed(this.viewCodeBatchList);
        if (res == true) {
            let i, list;
            list = await action.findElements(this.viewCodeBatchList);
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

    click_Proceed_Button_in_ViewCode_Launcher: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.viewCodeProceedBtn);
        if (res == true) {
            await browser.pause(5000);
            res = await require('./viewAccessCodes.page.js').isInitialized();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    enter_AccessCode_in_CheckACode_Launcher: async function (code) {
        await logger.logInto((await stackTrace.get()));
        res = await action.setValue(this.accessCodeTxtbox, code);
        if (res == null) {
            res = await action.isEnabled(this.checkCodeProceedBtn);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Proceed_Button_in_CheckACode_Launcher: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.checkCodeProceedBtn);
        if (res == true) {
            //res = await require('./viewCode.page.js').isInitialized();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_GenerateCodes_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.generateCodesBtn);
        if (res == true) {
            res = await require('./generateCodes.page.js').isInitialized();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_CheckACode_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.checkCodeBtn);
        if (res == true) {
            res = await action.waitForDisplayed(this.checkCodeProceedBtn);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    set_Search_Text: async function (text) {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.searchTxtbox);
        res = await action.setValue(this.searchTxtbox, text);
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Search_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.searchBtn);
        if (res == true) {
            res = await action.findElements(this.bookList);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Books_Pill: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.booksPill);
        if (res == true) {
            res = await action.waitForDisplayed(this.bookIcon)
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_GlobalResources_Pill: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.globalResourcesPill);
        if (res == true) {
            res = await action.waitForDisplayed(this.globalResourceIcon)
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    }


}
