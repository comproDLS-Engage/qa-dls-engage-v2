"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
const addFolderPage = require('./addFolder.page.js');

module.exports = {

    buttonLoader: selectorFile.common.buttonLoader,

    isInitialized: function () {
        return addFolderPage.isInitialized();
    },

    set_Name: function (text) {
        return addFolderPage.set_Name(text);
    },

    click_Add_Button: function () {
        logger.logInto(stackTrace.get());
        let res = action.waitForClickable(addFolderPage.addBtn);
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

}