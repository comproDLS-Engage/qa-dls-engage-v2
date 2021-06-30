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
    bannerText: selectorFile.common.bannerText,
    bannerCloseBtn: selectorFile.common.bannerCloseBtn,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        //action.waitForDocumentLoad();
        res = action.waitForDisplayed(this.addBtn);
        return res;
    },

    set_Title: function (text) {
        logger.logInto(stackTrace.get());
        res = action.setValue(this.titleTxtbox, text);
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    select_CategoryType: function (name) {
        logger.logInto(stackTrace.get());
        res = action.click(this.categoryTypeDropdown);
        action.waitForDisplayed(this.categoryTypeList);
        if (res == true) {
            let i, list;
            list = action.findElements(this.categoryTypeList);
            for (i = 0; i < list.length; i++) {
                //console.log(action.getText(list[i]))
                if (action.getText(list[i]).includes(name)) {
                    res = action.click(action.parentElement(list[i]));
                    break;
                }
                res = "category not found ";
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    select_LearningPathLevel: function (value) {
        logger.logInto(stackTrace.get());
        res = action.click(this.lpLevelsDropdown);
        action.waitForDisplayed(this.lpLevelsList);
        if (res == true) {
            let i, list;
            list = action.findElements(this.lpLevelsList);
            for (i = 0; i < list.length; i++) {
                //console.log(action.getText(list[i]))
                if (action.getText(list[i]).includes(value)) {
                    res = action.click(action.parentElement(list[i]));
                    break;
                }
                res = "learning path value not found ";
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    select_Autonumbering: function (value) {
        logger.logInto(stackTrace.get());
        res = action.click(this.autonumberingDropdown);
        action.waitForDisplayed(this.autonumberingList);
        if (res == true) {
            let i, list;
            list = action.findElements(this.autonumberingList);
            for (i = 0; i < list.length; i++) {
                //console.log(action.getText(list[i]))
                if (action.getText(list[i]).includes(value)) {
                    res = action.click(action.parentElement(list[i]));
                    break;
                }
                res = "autonumbering value not found ";
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Add_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.waitForClickable(this.addBtn);
        if (res == true) {
            res = action.click(this.addBtn);
            if (res == true) {
                action.waitForDisplayed(this.bannerText);
                //action.click(this.bannerCloseBtn);
                res = action.getText(this.bannerText);
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

}