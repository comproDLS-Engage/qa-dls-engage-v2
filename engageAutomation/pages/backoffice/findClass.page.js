"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    classKey: selectorFile.findClassPage.classKey,
    bookName: selectorFile.findClassPage.bookName,
    institutionName: selectorFile.findClassPage.institutionName,
    viewClassAsTeacherBtn: selectorFile.findClassPage.viewClassAsTeacherBtn,
    findAnotherClassBtn: selectorFile.findClassPage.findAnotherClassBtn,

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        await action.waitForDisplayed(this.loadingContainer);
        await action.waitForDisplayed(this.loadingContainer, undefined, true);
        res = await action.getText(selectorFile.common.pageTitle);
        return res;
    },

    get_Class_Details: async function () {
        await logger.logInto((await stackTrace.get()));
        var obj = {
			classKey: ((await action.getElementCount(this.classKey)) > 0) ? await action.getText(this.classKey) : null,
			bookName: ((await action.getElementCount(this.bookName)) > 0) ? await action.getText(this.bookName) : null,
			institutionName: ((await action.getElementCount(this.institutionName)) > 0) ? await action.getText(this.institutionName) : null
		};
		return obj;
    },

    find_Another_Class: async function (val) {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.findAnotherClassBtn);
        if (res == true) {
            res = await action.setValue(this.xxxx,val);
            if (res == true) {
                res = await action.click();
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    }

}