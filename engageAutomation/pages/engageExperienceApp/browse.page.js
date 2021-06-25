"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, ret;

module.exports = {

    pageTitle: selectorFile.css.ComproEngage.browsePage.pageTitle,
    tabList: selectorFile.css.ComproEngage.browsePage.tabList,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        let pageStatus = action.waitForDisplayed(this.pageTitle);
        res = this.get_BrowsePage_Data();
        res.pageStatus = pageStatus;
        return res;
    },

    get_BrowsePage_Data: function () {
        let obj = {

        }
        return obj;
    },

    getActiveTabName: function () {
        logger.logInto(stackTrace.get());
        let tabCount = 0;
        tabCount = action.getElementCount(this.tabList);
        console.log("tab count" + tabCount);
        for (var i = 0; i < tabCount; i++) {
            res = action.getAttribute(this.tabList + i + "]", 'aria-selected');
            if (res == "true") {
                res = action.getText(this.tabList + i + "] p");
                console.log("Name:  " +res);
                break;
            }
        }
        return res;
    }

}


