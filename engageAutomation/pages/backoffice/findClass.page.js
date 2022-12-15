"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    pageTitle: selectorFile.common.pageTitle,
    classKey: selectorFile.findClassPage.classKey,
    className: selectorFile.findClassPage.className,
    institutionName: selectorFile.findClassPage.institutionName,
    startDate: selectorFile.findClassPage.startDate,
    endDate: selectorFile.findClassPage.endDate,
    viewClassAsTeacherBtn: selectorFile.findClassPage.viewClassAsTeacherBtn,
    findAnotherClassBtn: selectorFile.findClassPage.findAnotherClassBtn,
    classKeyInput: selectorFile.findClassPage.classKeyInput,
    searchClassBtn: selectorFile.findClassPage.searchClassBtn,
    loadingContainer: selectorFile.common.loadingContainer,

    isInitialized: async function () {
        await logger.logInto(await stackTrace.get());
        await action.waitForDisplayed(this.loadingContainer);
        await action.waitForDisplayed(this.loadingContainer, undefined, true);
        res = await action.waitForDisplayed(this.pageTitle);
        await browser.pause(3000);
        return res;
    },

    get_Class_Details: async function () {
        await logger.logInto(await stackTrace.get());
        var obj = {
            classKey: ((await action.getElementCount(this.classKey)) > 0) ? await action.getText(this.classKey) : null,
            className: ((await action.getElementCount(this.className)) > 0) ? await action.getText(this.className) : null,
            institutionName: ((await action.getElementCount(this.institutionName)) > 0) ? await action.getText(this.institutionName) : null,
            startDate: ((await action.getElementCount(this.startDate)) > 0) ? await action.getText(this.startDate) : null,
            endDate: ((await action.getElementCount(this.endDate)) > 0) ? await action.getText(this.endDate) : null
        };
        return obj;
    },

    find_Another_Class: async function (val) {
        await logger.logInto(await stackTrace.get());
        let res = await action.click(this.findAnotherClassBtn);
        if (res == true) {
            res = await action.setValue(this.classKeyInput, val);
            if (res == true) {
                res = await action.click(this.searchClassBtn);
                if (res == true) {
                    res = await this.isInitialized();
                }
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_ViewClassAsTeacher_Button: async function () {
        await logger.logInto(await stackTrace.get());
        let res = await action.click(this.viewClassAsTeacherBtn);
        if (res == true) {
            await browser.pause(5000);
            await browser.switchWindow("engage-dev");
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    }

}