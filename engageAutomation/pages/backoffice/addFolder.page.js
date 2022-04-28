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

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        let res;
        res = action.waitForDisplayed(this.addBtn);
        return res;
    },

    set_Name: function (text) {
        logger.logInto(stackTrace.get());
        let res;
        res = action.setValue(this.nameTxtbox, text);
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Add_Button: function () {
        logger.logInto(stackTrace.get());
        let res;
        res = action.waitForClickable(this.addBtn);
        action.waitForDisplayed(this.buttonLoader, undefined, true)
        if (res == true) {
            res = action.click(this.addBtn);
            if (res == true) {
                action.waitForDisplayed(this.snackbarLbl);
                res = action.getText(this.snackbarLbl);
                action.click(this.snackbarBtn);
                browser.pause(5000)
                action.waitForDisplayed(require('./viewLearningPath.page.js').folderList);
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    upload_CoverImage: function (imgPath) {
        logger.logInto(stackTrace.get());
        let res;
        if (imgPath == "" || imgPath == undefined)
            res = true;
        else {
            var addTitlePage = require("./addTitle.page.js");
            res = addTitlePage.upload_CoverImage(imgPath);
        }
        return res;
    },

    select_TargetRole: function (value) {
        logger.logInto(stackTrace.get());
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            res = action.click(this.targetRoleDropdown);
            action.waitForDisplayed(this.targetRoleList);
            if (res == true) {
                let i, list;
                list = action.findElements(this.targetRoleList);
                for (i = 0; i < list.length; i++) {
                    if (action.getText(list[i]).includes(value)) {
                        res = action.click(action.parentElement(list[i]));
                        break;
                    }
                    res = "Target Role value not found ";
                }
            }
            logger.logInto(stackTrace.get(), res);
        }
        return res;
    },

    select_Assignable: function (value) {
        logger.logInto(stackTrace.get());
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            res = action.click(this.assignableDropdown);
            action.waitForDisplayed(this.assignableList);
            if (res == true) {
                let i, list;
                list = action.findElements(this.assignableList);
                for (i = 0; i < list.length; i++) {
                    if (action.getText(list[i]).includes(value)) {
                        res = action.click(action.parentElement(list[i]));
                        break;
                    }
                    res = "Assignable value not found ";
                }
            }
            logger.logInto(stackTrace.get(), res);
        }
        return res;
    },

    set_Folder_Color: function (value) {
        logger.logInto(stackTrace.get());
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            res = action.setValue(this.folderColor, value);
            logger.logInto(stackTrace.get(), res);
        }
        return res;
    },

    set_Page_Reference: function (value) {
        logger.logInto(stackTrace.get());
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            res = action.setValue(this.pageReference, value);
            logger.logInto(stackTrace.get(), res);
        }
        return res;
    },

    select_Folder_Type: function (value) {
        logger.logInto(stackTrace.get());
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            res = action.click(this.folderTypeDropdown);
            action.waitForDisplayed(this.folderTypeList);
            if (res == true) {
                let i, list;
                list = action.findElements(this.folderTypeList);
                for (i = 0; i < list.length; i++) {
                    if (action.getText(list[i]).includes(value)) {
                        res = action.click(action.parentElement(list[i]));
                        break;
                    }
                }
            }
            logger.logInto(stackTrace.get(), res);
        }
        return res;
    }

}