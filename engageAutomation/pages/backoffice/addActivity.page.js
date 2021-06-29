"use strict";
//var action = require('../../core/actionLibrary/baseActionLibrary.js');
//var selectorFile = jsonParserUtil.jsonParser(selectorDir);
const addFolderPage = require('./addFolder.page.js');

module.exports = {

    isInitialized: function () {
        return addFolderPage.isInitialized();
    },

    set_Name: function (text) {
        return addFolderPage.set_Name(text);
    },

    click_Add_Button: function () {
        return addFolderPage.click_Add_Button();
    },

}