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

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        //action.waitForDocumentLoad();
        res = action.waitForDisplayed(this.addBtn + "," + this.modifyBtn);
        return res;
    },

    set_Title: function (text) {
        logger.logInto(stackTrace.get());
        res = action.setValue(this.titleTxtbox, text);
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    select_CategoryType: function (value) {
        logger.logInto(stackTrace.get());
        res = action.click(this.categoryTypeDropdown);
        action.waitForDisplayed(this.categoryTypeList, undefined, undefined, undefined, 500);
        if (res == true) {
            let i, list;
            list = action.findElements(this.categoryTypeList);
            for (i = 0; i < list.length; i++) {
                //console.log(action.getText(list[i]))
                if (action.getText(list[i]).includes(value)) {
                    res = action.click(action.parentElement(list[i]));
                    break;
                }
                res = value + " not found ";
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    select_LearningPathLevel: function (value) {
        logger.logInto(stackTrace.get());
        res = action.click(this.lpLevelsDropdown);
        action.waitForDisplayed(this.lpLevelsList, undefined, undefined, undefined, 500);
        if (res == true) {
            let i, list;
            list = action.findElements(this.lpLevelsList);
            for (i = 0; i < list.length; i++) {
                //console.log(action.getText(list[i]))
                if (action.getText(list[i]).includes(value)) {
                    res = action.click(action.parentElement(list[i]));
                    break;
                }
                res = value + " not found ";
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    select_Autonumbering: function (value) {
        logger.logInto(stackTrace.get());
        res = action.click(this.autonumberingDropdown);
        action.waitForDisplayed(this.autonumberingList, undefined, undefined, undefined, 500);
        if (res == true) {
            let i, list;
            list = action.findElements(this.autonumberingList);
            for (i = 0; i < list.length; i++) {
                //console.log(action.getText(list[i]))
                if (action.getText(list[i]).includes(value)) {
                    res = action.click(action.parentElement(list[i]));
                    break;
                }
                res = value + " not found ";
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Add_Button: function () {
        logger.logInto(stackTrace.get());
        browser.pause(5000);
        res = action.waitForClickable(this.addBtn + "," + this.modifyBtn);
        action.waitForDisplayed(this.buttonLoader, undefined, true)
        if (res == true) {
            res = action.click(this.addBtn + "," + this.modifyBtn);
            if (res == true) {
                action.waitForDisplayed(this.bannerText + "," + this.snackbarLbl);
                //action.click(this.bannerCloseBtn);
                res = action.getText(this.bannerText + "," + this.snackbarLbl);
                require("./common.page").click_Close_Button();
                //action.waitForDisplayed(this.bannerText + "," + this.snackbarLbl, 60000, true);
                browser.pause(5000)
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    select_Visibility: function (value) {
        logger.logInto(stackTrace.get());
        if (value == "" || value == undefined)
            res = true;
        else {
            res = action.click(this.visibilityDropdown);
            action.waitForDisplayed(this.visibilityList, undefined, undefined, undefined, 500);
            if (res == true) {
                let i, list;
                list = action.findElements(this.visibilityList);
                for (i = 0; i < list.length; i++) {
                    if (action.getText(list[i]).includes(value)) {
                        res = action.click(action.parentElement(list[i]));
                        break;
                    }
                    res = value + " not found ";
                }
            }
            logger.logInto(stackTrace.get(), res);
        }
        return res;
    },

    select_TargetRole: function (value) {
        logger.logInto(stackTrace.get());
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
                        res = action.click(action.parentElement(list[i]));
                        break;
                    }
                    res = value + " not found ";
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
            action.waitForDisplayed(this.assignableList, undefined, undefined, undefined, 500);
            if (res == true) {
                let i, list;
                list = action.findElements(this.assignableList);
                for (i = 0; i < list.length; i++) {
                    if (action.getText(list[i]).includes(value)) {
                        res = action.click(action.parentElement(list[i]));
                        break;
                    }
                    res = value + " not found ";
                }
            }
            logger.logInto(stackTrace.get(), res);
        }
        return res;
    },

    select_freeAvailability: function (value) {
        logger.logInto(stackTrace.get());
        if (value == "" || value == undefined)
            res = true;
        else {
            res = action.click(this.freeAvailabilityDropdown);
            action.waitForDisplayed(this.freeAvailabilityList, undefined, undefined, undefined, 500);
            if (res == true) {
                let i, list;
                list = action.findElements(this.freeAvailabilityList);
                for (i = 0; i < list.length; i++) {
                    if (action.getText(list[i]).includes(value)) {
                        res = action.click(action.parentElement(list[i]));
                        break;
                    }
                    res = value + " not found ";
                }
            }
            logger.logInto(stackTrace.get(), res);
        }
        return res;
    },

    select_enableTracking: function (value) {
        logger.logInto(stackTrace.get());
        if (value == "" || value == undefined)
            res = true;
        else {
            res = action.click(this.enableTrackingDropdown);
            action.waitForDisplayed(this.enableTrackingList, undefined, undefined, undefined, 500);
            if (res == true) {
                let i, list;
                list = action.findElements(this.enableTrackingList);
                for (i = 0; i < list.length; i++) {
                    if (action.getText(list[i]).includes(value)) {
                        res = action.click(action.parentElement(list[i]));
                        break;
                    }
                    res = value + " not found ";
                }
            }
            logger.logInto(stackTrace.get(), res);
        }
        return res;
    },

}