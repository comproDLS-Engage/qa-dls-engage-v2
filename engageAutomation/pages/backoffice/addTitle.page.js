"use strict";
const { error } = require('winston');
const { string } = require('yargs');
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    titleTypeDropdown: selectorFile.addTitlePage.titleTypeDropdown,
    titleTypeList: selectorFile.addTitlePage.titleTypeList,
    nameTxtbox: selectorFile.addTitlePage.nameTxtbox,
    descriptionTxtbox: selectorFile.addTitlePage.descriptionTxtbox,
    imageUploadBtn: selectorFile.addTitlePage.imageUploadBtn,
    createTitleBtn: selectorFile.addTitlePage.createTitleBtn,
    snackbarLbl: selectorFile.common.snackbarLbl,
    snackbarBtn: selectorFile.common.snackbarBtn,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        //action.waitForDocumentLoad();
        res = action.waitForDisplayed(this.createTitleBtn);
        return res;
    },

    select_TitleType: function (name) {
        logger.logInto(stackTrace.get());
        res = action.click(this.titleTypeDropdown);
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- Title dropdown is clicked");
            let i, list;
            colistunt = action.findElements(this.titleTypeList);
            for (i = 0; i < list.length; i++) {
                if (action.getText(list[i]) == name) {
                    res = action.click(list[i]);
                    break;
                }
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    set_Name: function (text) {
        logger.logInto(stackTrace.get());
        res = action.setValue(this.nameTxtbox, text);
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    set_Description: function (text) {
        logger.logInto(stackTrace.get());
        res = action.setValue(this.descriptionTxtbox, text);
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    upload_CoverImage: function (imgPath) {
        logger.logInto(stackTrace.get());
        res = action.uploadFile(imgPath);
        if ((typeof res) === 'string') {
            res = action.setValue(this.imageUploadBtn, res);
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_CreateTitle_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.waitForClickable(this.createTitleBtn);
        if (res == true) {
            res = action.click(this.createTitleBtn);
            if (res == true) {
                action.waitForDisplayed(this.snackbarLbl);
                res = action.getText(this.snackbarLbl);
                action.click(this.snackbarBtn);
                action.waitForDisplayed(this.snackbarLbl);
                //action.click(this.snackbarBtn);
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

}