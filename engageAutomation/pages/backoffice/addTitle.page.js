"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    titleTypeDropdown: selectorFile.addTitlePage.titleTypeDropdown,
    titleTypeList: selectorFile.addTitlePage.titleTypeList,
    nameTxtbox: selectorFile.addTitlePage.nameTxtbox,
    descriptionTxtbox: selectorFile.addTitlePage.descriptionTxtbox,
    imageUploadBtn: selectorFile.addTitlePage.imageUploadBtn,
    createTitleBtn: selectorFile.addTitlePage.createTitleBtn,
    bannerText: selectorFile.common.bannerText,
    bannerCloseBtn: selectorFile.common.bannerCloseBtn,
    bookDesignDropdown: selectorFile.addTitlePage.bookDesignDropdown,
    bookDesignList: selectorFile.addTitlePage.bookDesignList,
    bookVisibilityDropdown: selectorFile.addTitlePage.bookVisibilityDropdown,
    bookVisibilityList: selectorFile.addTitlePage.bookVisibilityList,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        //action.waitForDocumentLoad();
        res = action.waitForDisplayed(this.createTitleBtn);
        return res;
    },

    set_Name: function (text) {
        logger.logInto(stackTrace.get());
        res = action.setValue(this.nameTxtbox, text);
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    set_Description: function (text) {
        logger.logInto(stackTrace.get());
        res = action.setValue(this.descriptionTxtbox, text);
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    upload_CoverImage: function (imgPath) {
        logger.logInto(stackTrace.get());
        if (imgPath == "" || imgPath == undefined)
            res = true;
        else {
            res = action.uploadFile(imgPath);
            if ((typeof res) === 'string') {
                res = action.setValue(this.imageUploadBtn, res);
            }
            logger.logInto(stackTrace.get(), res);
        }
        return res;
    },

    click_CreateTitle_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.waitForClickable(this.createTitleBtn);
        if (res == true) {
            res = action.click(this.createTitleBtn);
            if (res == true) {
                action.waitForDisplayed(this.bannerText);
                res = action.getText(this.bannerText);
                //action.click(this.bannerCloseBtn);
                action.waitForDisplayed(this.bannerText, 60000, true);
                //browser.pause(30000)
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    select_bookDesign: function (name) {
        logger.logInto(stackTrace.get());
        if (name == "" || name == undefined)
            res = true;
        else {
            res = action.click(this.bookDesignDropdown);
            action.waitForDisplayed(this.bookDesignList, undefined, undefined, undefined, 500);
            if (res == true) {
                let i, list;
                list = action.findElements(this.bookDesignList);
                for (i = 0; i < list.length; i++) {
                    if (action.getText(list[i]).includes(name)) {
                        res = action.click(list[i]);
                        break;
                    }
                    res = "book design not found ";
                }
            }
            logger.logInto(stackTrace.get(), res);
        }
        return res;

    },

    select_bookVisibility: function (name) {
        logger.logInto(stackTrace.get());
        if (name == "" || name == undefined)
            res = true;
        else {
            res = action.click(this.bookVisibilityDropdown);
            action.waitForDisplayed(this.bookVisibilityList, undefined, undefined, undefined, 500);
            if (res == true) {
                let i, list;
                list = action.findElements(this.bookVisibilityList);
                for (i = 0; i < list.length; i++) {
                    if (action.getText(list[i]).includes(name)) {
                        res = action.click(list[i]);
                        break;
                    }
                    res = "book visibility not found ";
                }
            }
            logger.logInto(stackTrace.get(), res);
        }
        return res;
    }
}