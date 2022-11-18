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
    modifyBookBtn: selectorFile.viewBookPage.modifyBookBtn,
    dialogContent: selectorFile.common.dialogContent,
    description: selectorFile.viewBookPage.description,
    bookDesign: selectorFile.viewBookPage.bookDesign,
    visibility: selectorFile.viewBookPage.visibility,
    seeMoreLessBtn: selectorFile.common.seeMoreLessBtn,

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        //action.waitForDocumentLoad();
        await action.waitForDisplayed(this.loadingContainer);
        await action.waitForDisplayed(this.loadingContainer, undefined, true);
        res = await action.waitForDisplayed(this.addComponentBtn);
        return res;
    },

    getBookParamDetails: async function () {
        await logger.logInto((await stackTrace.get()));
        await action.click(this.seeMoreLessBtn);
        var obj = {
			description: ((await action.getElementCount(this.description)) > 0) ? await action.getText(this.description) : null,
			bookDesign: ((await action.getElementCount(this.bookDesign)) > 0) ? await action.getText(this.bookDesign) : null,
			visibility: ((await action.getElementCount(this.visibility)) > 0) ? await action.getText(this.visibility) : null
		};
		return obj;
    },

    click_AddComponent_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.addComponentBtn);
        if (res == true) {
            res = await action.waitForDisplayed(this.proceedBtn);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Component: async function (name) {
        await logger.logInto((await stackTrace.get()));
        res = null;
        let i, list;
        list = await action.findElements(this.componentList);
        for (i = 0; i < list.length; i++) {
            //console.log(action.getText(list[i]))
            if ((await action.getText(list[i])).includes(name)) {
                res = await action.click(list[i]);
                if (res == true) {
                    res = await require('./viewLearningPath.page.js').isInitialized();
                    await browser.pause(10000);
                }
                break;
            }
            res = "component not found";
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    select_ComponentType_and_Proceed: async function (type) {
        await logger.logInto((await stackTrace.get()));
        res = null;
        let i, list;
        list = await action.findElements(this.componentTypeList);
        for (i = 0; i < list.length; i++) {
            //console.log(action.getText(list[i]))
            if ((await action.getText(list[i])).includes(type)) {
                res = await action.click(list[i]);
                if (res == true) {
                    res = await action.click(this.proceedBtn);
                    if (res == true) {
                        res = await require('./addComponent.page.js').isInitialized();
                        await browser.pause(2000);
                    }
                }
                break;
            }
            res = "component type not found";
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_DeleteBook_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.deleteBookBtn);
        if (res == true) {
            await action.waitForDisplayed(this.dialogContent);
            res = await action.getText(this.dialogContent);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_ModifyBook_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.modifyBookBtn);
        if (res == true) {
            res = await require('./addTitle.page.js').isInitialized();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

}