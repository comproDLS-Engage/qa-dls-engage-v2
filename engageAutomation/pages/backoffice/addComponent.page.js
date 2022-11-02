"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    titleTxtbox: selectorFile.addComponentPage.titleTxtbox,
    lpLevelsDropdown: selectorFile.addComponentPage.lpLevelsDropdown,
    lpLevelsList: selectorFile.addComponentPage.lpLevelsList,
    autonumberingDropdown: selectorFile.addComponentPage.autonumberingDropdown,
    autonumberingList: selectorFile.addComponentPage.autonumberingList,
    categoryTypeDropdown: selectorFile.addComponentPage.categoryTypeDropdown,
    categoryTypeList: selectorFile.addComponentPage.categoryTypeList,
    addBtn: selectorFile.addComponentPage.addBtn,
    modifyBtn: selectorFile.addComponentPage.modifyBtn,
    bannerText: selectorFile.common.bannerText,
    bannerCloseBtn: selectorFile.common.bannerCloseBtn,
    visibilityDropdown: selectorFile.addComponentPage.visibilityDropdown,
    visibilityList: selectorFile.addComponentPage.visibilityList,
    targetRoleDropdown: selectorFile.addComponentPage.targetRoleDropdown,
    targetRoleList: selectorFile.addComponentPage.targetRoleList,
    assignableDropdown: selectorFile.addComponentPage.assignableDropdown,
    assignableList: selectorFile.addComponentPage.assignableList,
    freeAvailabilityDropdown: selectorFile.addComponentPage.freeAvailabilityDropdown,
    freeAvailabilityList: selectorFile.addComponentPage.freeAvailabilityList,
    enableTrackingDropdown: selectorFile.addComponentPage.enableTrackingDropdown,
    enableTrackingList: selectorFile.addComponentPage.enableTrackingList,
    snackbarLbl: selectorFile.common.snackbarLbl,
    snackbarBtn: selectorFile.common.snackbarBtn,

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        await action.waitForDisplayed(this.buttonLoader, undefined, true);
        res = await action.waitForDisplayed(this.addBtn + "," + this.modifyBtn);
        return res;
    },

    set_Title: async function (text) {
        await logger.logInto((await stackTrace.get()));
        res = await action.setValue(this.titleTxtbox, text);
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    select_CategoryType: async function (value) {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.categoryTypeDropdown);
        await action.waitForDisplayed(this.categoryTypeList, undefined, undefined, undefined, 500);
        if (res == true) {
            let i, list;
            list = await action.findElements(this.categoryTypeList);
            for (i = 0; i < list.length; i++) {
                //console.log(action.getText(list[i]))
                if ((await action.getText(list[i])).includes(value)) {
                    res = await action.click((await action.parentElement(list[i])));
                    break;
                }
                res = value + " not found ";
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    select_LearningPathLevel: async function (value) {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.lpLevelsDropdown);
        await action.waitForDisplayed(this.lpLevelsList, undefined, undefined, undefined, 500);
        if (res == true) {
            let i, list;
            list = await action.findElements(this.lpLevelsList);
            for (i = 0; i < list.length; i++) {
                //console.log(action.getText(list[i]))
                if ((await action.getText(list[i])).includes(value)) {
                    res = await action.click((await action.parentElement(list[i])));
                    break;
                }
                res = value + " not found ";
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    select_Autonumbering: async function (value) {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.autonumberingDropdown);
        await action.waitForDisplayed(this.autonumberingList, undefined, undefined, undefined, 500);
        if (res == true) {
            let i, list;
            list = await action.findElements(this.autonumberingList);
            for (i = 0; i < list.length; i++) {
                //console.log(action.getText(list[i]))
                if ((await action.getText(list[i])).includes(value)) {
                    res = await action.click((await action.parentElement(list[i])));
                    break;
                }
                res = value + " not found ";
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Add_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.waitForClickable(this.addBtn + "," + this.modifyBtn);
        await action.waitForDisplayed(this.buttonLoader, undefined, true)
        if (res == true) {
            res = await action.click(this.addBtn + "," + this.modifyBtn);
            if (res == true) {
                await action.waitForDisplayed(this.bannerText + "," + this.snackbarLbl);
                res = await action.getText(this.bannerText + "," + this.snackbarLbl);
                let flag = await action.isClickable(this.snackbarBtn);
                const commonPage = require("./common.page");
                await commonPage.click_Close_Button();
                if (!flag) {
                    await action.waitForDisplayed(this.bannerText + "," + this.snackbarLbl);
                    //await commonPage.click_Close_Button();
                }
                await browser.pause(3000)
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    select_Visibility: async function (value) {
        await logger.logInto((await stackTrace.get()));
        if (value == "" || value == undefined)
            res = true;
        else {
            res = await action.click(this.visibilityDropdown);
            await action.waitForDisplayed(this.visibilityList, undefined, undefined, undefined, 500);
            if (res == true) {
                let i, list;
                list = await action.findElements(this.visibilityList);
                for (i = 0; i < list.length; i++) {
                    if ((await action.getText(list[i])).includes(value)) {
                        res = await action.click((await action.parentElement(list[i])));
                        break;
                    }
                    res = value + " not found ";
                }
            }
            await logger.logInto((await stackTrace.get()), res);
        }
        return res;
    },

    select_TargetRole: async function (value) {
        await logger.logInto((await stackTrace.get()));
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
                        res = await action.click((await action.parentElement(list[i])));
                        break;
                    }
                    res = value + " not found ";
                }
            }
            await logger.logInto((await stackTrace.get()), res);
        }
        return res;
    },

    select_Assignable: async function (value) {
        await logger.logInto((await stackTrace.get()));
        if (value == "" || value == undefined)
            res = true;
        else {
            res = await action.click(this.assignableDropdown);
            await action.waitForDisplayed(this.assignableList, undefined, undefined, undefined, 500);
            if (res == true) {
                let i, list;
                list = await action.findElements(this.assignableList);
                for (i = 0; i < list.length; i++) {
                    if ((await action.getText(list[i])).includes(value)) {
                        res = await action.click((await action.parentElement(list[i])));
                        break;
                    }
                    res = value + " not found ";
                }
            }
            await logger.logInto((await stackTrace.get()), res);
        }
        return res;
    },

    select_freeAvailability: async function (value) {
        await logger.logInto((await stackTrace.get()));
        if (value == "" || value == undefined)
            res = true;
        else {
            res = await action.click(this.freeAvailabilityDropdown);
            await action.waitForDisplayed(this.freeAvailabilityList, undefined, undefined, undefined, 500);
            if (res == true) {
                let i, list;
                list = await action.findElements(this.freeAvailabilityList);
                for (i = 0; i < list.length; i++) {
                    if ((await action.getText(list[i])).includes(value)) {
                        res = await action.click((await action.parentElement(list[i])));
                        break;
                    }
                    res = value + " not found ";
                }
            }
            await logger.logInto((await stackTrace.get()), res);
        }
        return res;
    },

    select_enableTracking: async function (value) {
        await logger.logInto((await stackTrace.get()));
        if (value == "" || value == undefined)
            res = true;
        else {
            res = await action.click(this.enableTrackingDropdown);
            await action.waitForDisplayed(this.enableTrackingList, undefined, undefined, undefined, 500);
            if (res == true) {
                let i, list;
                list = await action.findElements(this.enableTrackingList);
                for (i = 0; i < list.length; i++) {
                    if ((await action.getText(list[i])).includes(value)) {
                        res = await action.click((await action.parentElement(list[i])));
                        break;
                    }
                    res = value + " not found ";
                }
            }
            await logger.logInto((await stackTrace.get()), res);
        }
        return res;
    },

}