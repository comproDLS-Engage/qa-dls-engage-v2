"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    titleTypeDropdown: selectorFile.addTitlePage.titleTypeDropdown,
    titleTypeList: selectorFile.addTitlePage.titleTypeList,
    nameTxtbox: selectorFile.addTitlePage.nameTxtbox,
    descriptionTxtbox: selectorFile.addTitlePage.descriptionTxtbox,
    imageUploadBtn: selectorFile.addTitlePage.imageUploadBtn,
    removeImageBtn: selectorFile.addTitlePage.removeImageBtn,
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
    buttonLoader: selectorFile.common.buttonLoader,
    snackbarLbl: selectorFile.common.snackbarLbl,

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        let res;
        await action.waitForDisplayed(this.buttonLoader, undefined, true);
        res = await action.waitForDisplayed(this.createTitleBtn);
        //await browser.pause(2000);
        return res;
    },

    set_Name: async function (text) {
        await logger.logInto((await stackTrace.get()));
        let res;
        res = await action.setValue(this.nameTxtbox, text);
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    set_Description: async function (text) {
        await logger.logInto((await stackTrace.get()));
        let res;
        if (text == "" || text == undefined)
            res = true;
        else {
            res = await action.setValue(this.descriptionTxtbox, text);
            await logger.logInto((await stackTrace.get()), res);
        }
        return res;
    },

    upload_CoverImage: async function (imgPath) {
        await logger.logInto((await stackTrace.get()));
        let res;
        if (await action.isClickable(this.removeImageBtn)) {
            res = await action.click(this.removeImageBtn);
            if (res == true) {
                res = await action.waitForDisplayed(this.removeImageBtn, undefined, true);
                await browser.pause(2000);
            }
        }

        if (imgPath == "" || imgPath == undefined) {
            res = true;
        }
        else {
            res = await action.uploadFile(imgPath);
            if ((typeof res) === 'string') {
                res = await action.setValue(this.imageUploadBtn, res);
                await browser.pause(2000);
            }
            await logger.logInto((await stackTrace.get()), res);
        }
        return res;
    },

    click_CreateTitle_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res;
        await action.waitForDisplayed(this.buttonLoader, undefined, true)
        res = await action.waitForClickable(this.createTitleBtn);
        if (res == true) {
            res = await action.click(this.createTitleBtn);
            if (res == true) {
                await action.waitForDisplayed(this.bannerText + "," + this.snackbarLbl);
                res = await action.getText(this.bannerText + "," + this.snackbarLbl);
                //action.click(this.bannerCloseBtn);
                await action.waitForDisplayed(this.bannerText + "," + this.snackbarLbl, 60000, true);
                await browser.pause(5000)
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    select_bookDesign: async function (name) {
        await logger.logInto((await stackTrace.get()));
        let res;
        if (name == "" || name == undefined)
            res = true;
        else {
            res = await action.click(this.bookDesignDropdown);
            await action.waitForDisplayed(this.bookDesignList, undefined, undefined, undefined, 500);
            if (res == true) {
                let i, list;
                list = await action.findElements(this.bookDesignList);
                for (i = 0; i < list.length; i++) {
                    if ((await action.getText(list[i])).includes(name)) {
                        res = await action.click(list[i]);
                        break;
                    }
                }
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    select_visibility: async function (name) {
        await logger.logInto((await stackTrace.get()));
        let res;
        if (name == "" || name == undefined)
            res = true;
        else {
            res = await action.click(this.visibilityDropdown);
            await action.waitForDisplayed(this.visibilityList, undefined, undefined, undefined, 500);
            if (res == true) {
                let i, list;
                list = await action.findElements(this.visibilityList);
                for (i = 0; i < list.length; i++) {
                    if ((await action.getText(list[i])).includes(name)) {
                        res = await action.click(list[i]);
                        break;
                    }
                }
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    select_TargetRole: async function (value) {
        await logger.logInto((await stackTrace.get()));
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            res = await action.click(this.targetRoleDropdown);
            await action.waitForDisplayed(this.targetRoleList, undefined, undefined, undefined, 500);
            if (res == true) {
                let i, list;
                list = await action.findElements(this.targetRoleList);
                for (i = 0; i < list.length; i++) {
                    if ((await action.getText(list[i])).includes(value)) {
                        res = await action.click(list[i]);
                        break;
                    }
                }
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    select_Category: async function (value) {
        await logger.logInto((await stackTrace.get()));
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            res = await action.click(this.categoryDropdown);
            await action.waitForDisplayed(this.categoryList, undefined, undefined, undefined, 500);
            if (res == true) {
                let i, list;
                list = await action.findElements(this.categoryList);
                for (i = 0; i < list.length; i++) {
                    if ((await action.getText(list[i])).includes(value)) {
                        res = await action.click(list[i]);
                        break;
                    }
                }
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },
}