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
        res = action.uploadFile(imgPath);
        if ((typeof res) === 'string') {
            res = action.setValue(this.imageUploadBtn, res);
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_CreateTitle_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.waitForClickable(this.createTitleBtn);
        if (res == true) {
            res = action.click(this.createTitleBtn);
            if (res == true) {
                action.waitForDisplayed(this.bannerText);
                //action.click(this.bannerCloseBtn);
                res = action.getText(this.bannerText);
                //action.waitForDisplayed(this.bannerText, undefined, true);
                browser.pause(10000)
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

}