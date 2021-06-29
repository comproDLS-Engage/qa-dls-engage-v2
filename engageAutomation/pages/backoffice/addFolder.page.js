"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    nameTxtbox: selectorFile.addFolderPage.nameTxtbox,
    addBtn: selectorFile.addFolderPage.addBtn,
    snackbarLbl: selectorFile.common.snackbarLbl,
    snackbarBtn: selectorFile.common.snackbarBtn,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        //action.waitForDocumentLoad();
        let res = action.waitForDisplayed(this.addBtn);
        return res;
    },

    set_Name: function (text) {
        logger.logInto(stackTrace.get());
        let res = action.setValue(this.nameTxtbox, text);
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Add_Button: function () {
        logger.logInto(stackTrace.get());
        let res = action.waitForClickable(this.addBtn);
        if (res == true) {
            res = action.click(this.addBtn);
            if (res == true) {
                action.waitForDisplayed(this.snackbarLbl);
                res = action.getText(this.snackbarLbl);
                action.click(this.snackbarBtn);
                action.waitForDisplayed(require('./viewLearningPath.page.js').folderList);
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

}