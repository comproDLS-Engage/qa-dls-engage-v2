"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    addComponentBtn: selectorFile.viewBookPage.addComponentBtn,
    emptyStateBtn: selectorFile.common.emptyStateBtn,
    componentList: selectorFile.viewBookPage.componentList,
    componentTypeList: selectorFile.viewBookPage.componentTypeList,
    proceedBtn: selectorFile.common.proceedBtn,
    loadingContainer: selectorFile.common.loadingContainer,
    deleteBookBtn: selectorFile.viewBookPage.deleteBookBtn,
    dialogContent: selectorFile.common.dialogContent,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        //action.waitForDocumentLoad();
        action.waitForDisplayed(this.loadingContainer);
        action.waitForDisplayed(this.loadingContainer, undefined, true);
        res = action.getText(selectorFile.common.pageTitle);
        return res;
    },

    click_AddComponent_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.addComponentBtn);
        if (res == true) {
            res = action.waitForDisplayed(this.proceedBtn);
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Component: function (name) {
        logger.logInto(stackTrace.get());
        res = null;
        let i, list;
        list = action.findElements(this.componentList);
        for (i = 0; i < list.length; i++) {
            //console.log(action.getText(list[i]))
            if (action.getText(list[i]).includes(name)) {
                res = action.click(list[i]);
                if (res == true) {
                    res = require('./viewLearningPath.page.js').isInitialized();
                    browser.pause(5000);
                }
                break;
            }
            res = "component not found";
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    select_ComponentType_and_Proceed: function (type) {
        logger.logInto(stackTrace.get());
        res = null;
        let i, list;
        list = action.findElements(this.componentTypeList);
        for (i = 0; i < list.length; i++) {
            //console.log(action.getText(list[i]))
            if (action.getText(list[i]).includes(type)) {
                res = action.click(list[i]);
                if (res == true) {
                    res = action.click(this.proceedBtn);
                    if (res == true) {
                        res = require('./addComponent.page.js').isInitialized();
                        browser.pause(5000);
                    }
                }
                break;
            }
            res = "component type not found";
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_DeleteBook_Button: function () {
        logger.logInto(stackTrace.get());
        let res = action.click(this.deleteBookBtn);
        if (res == true) {
            action.waitForDisplayed(this.dialogContent);
            res = action.getText(this.dialogContent);
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

}