"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    searchBox: selectorFile.linkFromLibraryPage.searchBox,
    loCheckbox: selectorFile.linkFromLibraryPage.loCheckbox,
    nextBtn: selectorFile.linkFromLibraryPage.nextBtn,
    resourceNameList: selectorFile.linkFromLibraryPage.resourceNameList,
    filteredChips: selectorFile.linkFromLibraryPage.filteredChips,

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.waitForDisplayed(this.nextBtn);
        return res;
    },

    searchLO_byName: async function (name) {
        await logger.logInto((await stackTrace.get()));
        let res = await action.setValue(this.searchBox, name);
        if (res == true) {
            res = await action.keyPress("Enter");
            res = await action.waitForDisplayed(this.filteredChips);
            if (res == true)
                res = await action.waitForDisplayed(this.resourceNameList);
        }
        return res;
    },

    select_Resource_and_Proceed: async function (name) {
        await logger.logInto((await stackTrace.get()));
        let res = null;
        let i, list, cboxes;
        list = await action.findElements(this.resourceNameList);
        cboxes = await action.findElements(this.loCheckbox);
        for (i = 0; i < list.length; i++) {
            if ((await action.getText(list[i])).includes(name)) {
                res = await action.click(cboxes[i]);
                if (res == true) {
                    res = await action.click(this.nextBtn);
                    if (res == true) {
                        res = await require('./addActivity.page.js').isInitialized();
                        await browser.pause(5000);
                    }
                }
                break;
            }
            res = "resource \"" + name + "\" not found";
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    set_Name: async function (text) {
        const addActivityPage = require('./addActivity.page.js');
        return await addActivityPage.set_Name(text);
    },

    click_Add_Button: async function () {
        const addActivityPage = require('./addActivity.page.js');
        return await addActivityPage.click_Add_Button();
    },

}