"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
const addFolderPage = require('./addFolder.page.js');

module.exports = {

    buttonLoader: selectorFile.common.buttonLoader,
    nameTxtbox: selectorFile.addActivityPage.nameTxtbox,
    addBtn: selectorFile.addActivityPage.addBtn,
    completionCheckBox: selectorFile.addActivityPage.completionCheckBox,
    scoreCheckBox: selectorFile.addActivityPage.scoreCheckBox,
    targetRoleDropdown: selectorFile.addActivityPage.targetRoleDropdown,
    assignableDropdown: selectorFile.addActivityPage.assignableDropdown,
    loUploadBtn: selectorFile.addActivityPage.loUploadBtn,
    removeFileBtn: selectorFile.addActivityPage.removeFileBtn,
    activityThemeOptions: selectorFile.addActivityPage.activityThemeOptions,
    progressBarClosed: selectorFile.addActivityPage.progressBarClosed,

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
                await browser.pause(5000);
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Completion_Checkbox: async function (value) {
        await logger.logInto((await stackTrace.get()));
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            res = await action.isSelected(this.completionCheckBox);
            if (res != value)
                res = await action.click(this.completionCheckBox);
            else
                res = true;
            await logger.logInto((await stackTrace.get()), res);
        }
        return res;
    },

    click_Score_Checkbox: async function (value) {
        await logger.logInto((await stackTrace.get()));
        let res;
        if (value == "" || value == undefined)
            res = true;
        else {
            res = await action.isSelected(this.scoreCheckBox);
            if (res != value)
                res = await action.click(this.scoreCheckBox);
            else
                res = true;
            await logger.logInto((await stackTrace.get()), res);
        }
        return res;
    },

    select_TargetRole: async function (value) {
        await logger.logInto((await stackTrace.get()));
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
            await action.waitForDisplayed(addFolderPage.assignableList);
            if (res == true) {
                let i, list;
                list = await action.findElements(addFolderPage.assignableList);
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

    set_Page_Reference: async function (value) {
        return addFolderPage.set_Page_Reference(value);
    },

    uploadFile: async function (path) {
        await logger.logInto((await stackTrace.get()));
        let res;
        if (await action.isClickable(this.removeFileBtn)) {
            res = await action.click(this.removeFileBtn);
            if (res == true) {
                res = await action.waitForDisplayed(this.removeFileBtn, undefined, true);
                await browser.pause(1000);
            }
        }
        if (path == "" || path == undefined)
            res = true;
        else {
            res = await action.uploadFile(path);
            if ((typeof res) === 'string') {
                res = await action.setValue(this.loUploadBtn, res);
                console.log(res)
                await browser.pause(1000);
                res = await action.waitForExist(this.progressBarClosed, 60000);
                console.log(res)
            }
            await logger.logInto((await stackTrace.get()), res);
        }
        return res;
    },

    select_ActivityTheme: async function (value) {
        await logger.logInto((await stackTrace.get()));
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
            await logger.logInto((await stackTrace.get()), res);
        }
        return res;
    },

}