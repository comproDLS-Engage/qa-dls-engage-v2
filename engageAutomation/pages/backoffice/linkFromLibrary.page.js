"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    searchBox: selectorFile.linkFromLibraryPage.searchBox,
    loCheckbox: selectorFile.linkFromLibraryPage.loCheckbox,
    nextBtn: selectorFile.linkFromLibraryPage.nextBtn,
    resourceNameList: selectorFile.linkFromLibraryPage.resourceNameList,
    filteredChips: selectorFile.linkFromLibraryPage.filteredChips,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        let res = action.waitForDisplayed(this.nextBtn);
        return res;
    },

    searchLO_byName: function (name) {
        logger.logInto(stackTrace.get());
        let res = action.setValue(this.searchBox, name);
        if (res == true) {
            res = action.keyPress("Enter");
            res = action.waitForDisplayed(this.filteredChips);
            if (res == true)
                res = action.waitForDisplayed(this.resourceNameList);
        }
        return res;
    },

    select_Resource_and_Proceed: function (name) {
        logger.logInto(stackTrace.get());
        let res = null;
        let i, list, cboxes;
        list = action.findElements(this.resourceNameList);
        cboxes = action.findElements(this.loCheckbox);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]).includes(name)) {
                res = action.click(cboxes[i]);
                if (res == true) {
                    res = action.click(this.nextBtn);
                    if (res == true) {
                        res = require('./addActivity.page.js').isInitialized();
                        browser.pause(5000);
                    }
                }
                break;
            }
            res = "resource \"" + name + "\" not found";
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    set_Name: function (text) {
        const addActivityPage = require('./addActivity.page.js');
        return addActivityPage.set_Name(text);
    },

    click_Add_Button: function () {
        const addActivityPage = require('./addActivity.page.js');
        return addActivityPage.click_Add_Button();
    },

}