"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
const addFolderPage = require('./addFolder.page.js');
var res;

module.exports = {

    buttonLoader: selectorFile.common.buttonLoader,
    nameTxtbox: selectorFile.addActivityPage.nameTxtbox,
    completionCheckBox: selectorFile.addActivityPage.completionCheckBox,
    scoreCheckBox: selectorFile.addActivityPage.scoreCheckBox,
    targetRoleDropdown: selectorFile.addActivityPage.targetRoleDropdown,
    assignableDropdown: selectorFile.addActivityPage.assignableDropdown,
    loUploadBtn: selectorFile.addActivityPage.loUploadBtn,

    isInitialized: function () {
        return addFolderPage.isInitialized();
    },

    set_Name: function (text) {
        logger.logInto(stackTrace.get());
        res = action.setValue(this.nameTxtbox, text);
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Add_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.waitForClickable(addFolderPage.addBtn);
        action.waitForDisplayed(this.buttonLoader, undefined, true)
        if (res == true) {
            res = action.click(addFolderPage.addBtn);
            if (res == true) {
                browser.pause(10000);
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Completion_Checkbox: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.completionCheckBox);
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Score_Checkbox: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.scoreCheckBox);
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    select_TargetRole: function (value) {
        logger.logInto(stackTrace.get());
        if (value == "" || value == undefined)
            res = true;
        else {
            res = action.click(this.targetRoleDropdown);
            action.waitForDisplayed(addFolderPage.targetRoleList);
            if (res == true) {
                let i, list;
                list = action.findElements(addFolderPage.targetRoleList);
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
        if (value == "" || value == undefined)
            res = true;
        else {
            res = action.click(this.assignableDropdown);
            action.waitForDisplayed(addFolderPage.assignableList);
            if (res == true) {
                let i, list;
                list = action.findElements(addFolderPage.assignableList);
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

    set_Page_Reference: function (value) {
        return addFolderPage.set_Page_Reference(value);
    },

    uploadFile: function (path) {
        logger.logInto(stackTrace.get());
        if (path == "" || path == undefined)
            res = true;
        else {
            res = action.uploadFile(path);
            if ((typeof res) === 'string') {
                res = action.setValue(this.loUploadBtn, res);
            }
            logger.logInto(stackTrace.get(), res);
        }
        return res;
    },

}