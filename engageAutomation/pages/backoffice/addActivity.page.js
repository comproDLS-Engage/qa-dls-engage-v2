"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
const addFolderPage = require('./addFolder.page.js');

module.exports = {

    buttonLoader: selectorFile.common.buttonLoader,
    nameTxtbox: selectorFile.addActivityPage.nameTxtbox,
    completionCheckBox: selectorFile.addActivityPage.completionCheckBox,
    scoreCheckBox: selectorFile.addActivityPage.scoreCheckBox,
    targetRoleDropdown: selectorFile.addActivityPage.targetRoleDropdown,
    assignableDropdown: selectorFile.addActivityPage.assignableDropdown,
    loUploadBtn: selectorFile.addActivityPage.loUploadBtn,
    activityThemeOptions: selectorFile.addActivityPage.activityThemeOptions,

    isInitialized: async function () {
        return addFolderPage.isInitialized();
    },

    set_Name: async function (text) {
        await logger.logInto(stackTrace.get());
        let res;
        res = await action.setValue(this.nameTxtbox, text);
        await logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Add_Button: async function () {
        await logger.logInto(stackTrace.get());
        let res;
        res = await action.waitForClickable(addFolderPage.addBtn);
        await action.waitForDisplayed(this.buttonLoader, undefined, true)
        if (res == true) {
            res = await action.click(addFolderPage.addBtn);
            if (res == true) {
                await browser.pause(10000);
            }
        }
        await logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Completion_Checkbox: async function () {
        await logger.logInto(stackTrace.get());
        let res;
        res = await action.click(this.completionCheckBox);
        await logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Score_Checkbox: async function () {
        await logger.logInto(stackTrace.get());
        let res;
        res = await action.click(this.scoreCheckBox);
        await logger.logInto(stackTrace.get(), res);
        return res;
    },

    select_TargetRole: async function (value) {
        await logger.logInto(stackTrace.get());
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            res = await action.click(this.targetRoleDropdown);
            await action.waitForDisplayed(addFolderPage.targetRoleList);
            if (res == true) {
                let i, list;
                list = await action.findElements(addFolderPage.targetRoleList);
                for (i = 0; i < list.length; i++) {
                    if ((await action.getText(list[i])).includes(value)) {
                        res = await action.click(action.parentElement(list[i]));
                        break;
                    }
                    res = "Target Role value not found ";
                }
            }
            await logger.logInto(stackTrace.get(), res);
        }
        return res;
    },

    select_Assignable: async function (value) {
        await logger.logInto(stackTrace.get());
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            res = await action.click(this.assignableDropdown);
            await action.waitForDisplayed(addFolderPage.assignableList);
            if (res == true) {
                let i, list;
                list = await action.findElements(addFolderPage.assignableList);
                for (i = 0; i < list.length; i++) {
                    if ((await action.getText(list[i])).includes(value)) {
                        res = await action.click(action.parentElement(list[i]));
                        break;
                    }
                    res = "Assignable value not found ";
                }
            }
            await logger.logInto(stackTrace.get(), res);
        }
        return res;
    },

    set_Page_Reference: async function (value) {
        return addFolderPage.set_Page_Reference(value);
    },

    uploadFile: async function (path) {
        await logger.logInto(stackTrace.get());
        let res;
        if (path == "" || path == undefined)
            res = true;
        else {
            res = await action.uploadFile(path);
            if ((typeof res) === 'string') {
                res = await action.setValue(this.loUploadBtn, res);
            }
            await logger.logInto(stackTrace.get(), res);
        }
        return res;
    },

    select_ActivityTheme: async function (value) {
        await logger.logInto(stackTrace.get());
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            let i, list;
            list = await action.findElements(this.activityThemeOptions);
            for (i = 0; i < list.length; i++) {
                //console.log(action.getText(list[i]))
                if ((await action.getText(list[i])).includes(value)) {
                    res = await action.click(list[i]);
                    break;
                }
            }
            await logger.logInto(stackTrace.get(), res);
        }
        return res;
    },

}