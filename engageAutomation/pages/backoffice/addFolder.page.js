"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    nameTxtbox: selectorFile.addFolderPage.nameTxtbox,
    addBtn: selectorFile.addFolderPage.addBtn,
    snackbarLbl: selectorFile.common.snackbarLbl,
    snackbarBtn: selectorFile.common.snackbarBtn,
    buttonLoader: selectorFile.common.buttonLoader,
    targetRoleDropdown: selectorFile.addFolderPage.targetRoleDropdown,
    targetRoleList: selectorFile.addFolderPage.targetRoleList,
    assignableDropdown: selectorFile.addFolderPage.assignableDropdown,
    assignableList: selectorFile.addFolderPage.assignableList,
    folderColor: selectorFile.addFolderPage.folderColor,
    pageReference: selectorFile.addFolderPage.pageReference,
    folderTypeDropdown: selectorFile.addFolderPage.folderTypeDropdown,
    folderTypeList: selectorFile.addFolderPage.folderTypeList,

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        let res;
        res = await action.waitForDisplayed(this.addBtn);
        return res;
    },

    set_Name: async function (text) {
        await logger.logInto((await stackTrace.get()));
        let res;
        res = await action.setValue(this.nameTxtbox, text);
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Add_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res;
        res = await action.waitForClickable(this.addBtn);
        await action.waitForDisplayed(this.buttonLoader, undefined, true)
        if (res == true) {
            res = await action.click(this.addBtn);
            if (res == true) {
                await action.waitForDisplayed(this.snackbarLbl);
                res = await action.getText(this.snackbarLbl);
                await action.click(this.snackbarBtn);
                await action.waitForDisplayed((await require('./viewLearningPath.page.js').folderList));
                await browser.pause(5000);
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    upload_CoverImage: async function (imgPath) {
        await logger.logInto((await stackTrace.get()));
        var addTitlePage = require("./addTitle.page.js");
        return await addTitlePage.upload_CoverImage(imgPath);;
    },

    select_TargetRole: async function (value) {
        await logger.logInto((await stackTrace.get()));
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            res = await action.click(this.targetRoleDropdown);
            await action.waitForDisplayed(this.targetRoleList);
            if (res == true) {
                let i, list;
                list = await action.findElements(this.targetRoleList);
                for (i = 0; i < list.length; i++) {
                    if ((await action.getText(list[i])).includes(value)) {
                        res = await action.click((await action.parentElement(list[i])));
                        break;
                    }
                    res = "Target Role value not found ";
                }
            }
            await logger.logInto((await stackTrace.get()), res);
        }
        return res;
    },

    select_Assignable: async function (value) {
        await logger.logInto((await stackTrace.get()));
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            res = await action.click(this.assignableDropdown);
            await action.waitForDisplayed(this.assignableList);
            if (res == true) {
                let i, list;
                list = await action.findElements(this.assignableList);
                for (i = 0; i < list.length; i++) {
                    if ((await action.getText(list[i])).includes(value)) {
                        res = await action.click((await action.parentElement(list[i])));
                        break;
                    }
                    res = "Assignable value not found ";
                }
            }
            await logger.logInto((await stackTrace.get()), res);
        }
        return res;
    },

    set_Folder_Color: async function (value) {
        await logger.logInto((await stackTrace.get()));
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            res = await action.setValue(this.folderColor, value);
            await logger.logInto((await stackTrace.get()), res);
        }
        return res;
    },

    set_Page_Reference: async function (value) {
        await logger.logInto((await stackTrace.get()));
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            res = await action.setValue(this.pageReference, value);
            await logger.logInto((await stackTrace.get()), res);
        }
        return res;
    },

    select_Folder_Type: async function (value) {
        await logger.logInto((await stackTrace.get()));
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            res = await action.click(this.folderTypeDropdown);
            await action.waitForDisplayed(this.folderTypeList);
            if (res == true) {
                let i, list;
                list = await action.findElements(this.folderTypeList);
                for (i = 0; i < list.length; i++) {
                    if ((await action.getText(list[i])).includes(value)) {
                        res = await action.click((await action.parentElement(list[i])));
                        break;
                    }
                }
            }
            await logger.logInto((await stackTrace.get()), res);
        }
        return res;
    }

}