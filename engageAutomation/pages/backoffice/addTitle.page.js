"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

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
    visibilityDropdown: selectorFile.addTitlePage.visibilityDropdown,
    visibilityList: selectorFile.addTitlePage.visibilityList,
    targetRoleDropdown: selectorFile.addTitlePage.targetRoleDropdown,
    targetRoleList: selectorFile.addTitlePage.targetRoleList,
    categoryDropdown: selectorFile.addTitlePage.categoryDropdown,
    categoryList: selectorFile.addTitlePage.categoryList,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        let res;
        res = action.waitForDisplayed(this.createTitleBtn);
        return res;
    },

    set_Name: function (text) {
        logger.logInto(stackTrace.get());
        let res;
        res = action.setValue(this.nameTxtbox, text);
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    set_Description: function (text) {
        logger.logInto(stackTrace.get());
        let res;
        if (text == "" || text == undefined)
            res = true;
        else {
            res = action.setValue(this.descriptionTxtbox, text);
            logger.logInto(stackTrace.get(), res);
        }
        return res;
    },

    upload_CoverImage: function (imgPath) {
        logger.logInto(stackTrace.get());
        let res;
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
        let res;
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
        let res;
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
                }
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    select_visibility: function (name) {
        logger.logInto(stackTrace.get());
        let res;
        if (name == "" || name == undefined)
            res = true;
        else {
            res = action.click(this.visibilityDropdown);
            action.waitForDisplayed(this.visibilityList, undefined, undefined, undefined, 500);
            if (res == true) {
                let i, list;
                list = action.findElements(this.visibilityList);
                for (i = 0; i < list.length; i++) {
                    if (action.getText(list[i]).includes(name)) {
                        res = action.click(list[i]);
                        break;
                    }
                }
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    select_TargetRole: function (value) {
        logger.logInto(stackTrace.get());
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            res = action.click(this.targetRoleDropdown);
            action.waitForDisplayed(this.targetRoleList, undefined, undefined, undefined, 500);
            if (res == true) {
                let i, list;
                list = action.findElements(this.targetRoleList);
                for (i = 0; i < list.length; i++) {
                    if (action.getText(list[i]).includes(value)) {
                        res = action.click(list[i]);
                        break;
                    }
                }
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    select_Category: function (value) {
        logger.logInto(stackTrace.get());
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            res = action.click(this.categoryDropdown);
            action.waitForDisplayed(this.categoryList, undefined, undefined, undefined, 500);
            if (res == true) {
                let i, list;
                list = action.findElements(this.categoryList);
                for (i = 0; i < list.length; i++) {
                    if (action.getText(list[i]).includes(value)) {
                        res = action.click(list[i]);
                        break;
                    }
                }
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },
}