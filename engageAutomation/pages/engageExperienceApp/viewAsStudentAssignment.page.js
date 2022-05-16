"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)

module.exports = {
    eye_icon: selectorFile.css.ComproEngage.viewAsStudentAssignment.eye_icon,
    studentview: selectorFile.css.ComproEngage.viewAsStudentAssignment.studentView,
    cancel: selectorFile.css.ComproEngage.viewAsStudentAssignment.cancel,
    activity_icon: selectorFile.css.ComproEngage.viewAsStudentAssignment.activity_icon,
    activity_lbl: selectorFile.css.ComproEngage.viewAsStudentAssignment.activity_lbl,
    showDetails_btn: selectorFile.css.ComproEngage.viewAsStudentAssignment.showDetails_btn,
    closeAssignment_btn:selectorFile.css.ComproEngage.viewAsStudentAssignment.closeAssignment_btn,

    isInitialized: async function () {
        var res;
        await logger.logInto(stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.eye_icon)
        };
        return res;
    },

    getData_studentViewPage: async function () {
        await logger.logInto(stackTrace.get());
        var obj;
        obj = {
            eye_icon: ((await action.getElementCount(this.eye_icon)) > 0) ? await action.waitForDisplayed(this.eye_icon) : false,
            studentView: ((await action.getElementCount(this.studentView)) > 0) ? await action.getText(this.studentView) : null,
            cancel: ((await action.getElementCount(this.cancel)) > 0) ? await action.waitForDisplayed(this.cancel) : null,
            activity_icon: ((await action.getElementCount(this.activity_icon)) > 0) ? await action.waitForDisplayed(this.activity_icon) : false,
            activity_lbl: ((await action.getElementCount(this.activity_lbl)) > 0) ? await action.getText(this.activity_lbl) : null,
            showDetails_btn: ((await action.getElementCount(this.showDetails_btn)) > 0) ? await action.getText(this.showDetails_btn) : null,
        }
        return obj;
    },


    click_cancel: async function () {
        await logger.logInto(stackTrace.get());
        var res;
        res = await action.click(this.cancel);
        if (true == res) {
            await logger.logInto(stackTrace.get(), " cancel is clicked");
        }
        else {
            await logger.logInto(stackTrace.get(), res + "cancel is NOT clicked", 'error');
        }
        return res;
    },

    click_activity_lbl: async function () {
        await logger.logInto(stackTrace.get());
        var res;
        res = await action.click(this.activity_lbl);
        if (true == res) {
            await logger.logInto(stackTrace.get(), " activity_lbl is clicked");
        }
        else {
            await logger.logInto(stackTrace.get(), res + "activity_lbl is NOT clicked", 'error');
        }
        return res;
    },

    click_showDetails_btn: async function () {
        await logger.logInto(stackTrace.get());
        var res;
        res = await action.click(this.showDetails_btn);
        if (true == res) {
            await logger.logInto(stackTrace.get(), " showDetails_btn is clicked");
        }
        else {
            await logger.logInto(stackTrace.get(), res + "showDetails_btn is NOT clicked", 'error');
        }
        return res;
    },
    click_closeAssignment_btn: async function () {
        await logger.logInto(stackTrace.get());
        var res;
        res = await action.click(this.closeAssignment_btn);
        if (true == res) {
            await logger.logInto(stackTrace.get(), " closeAssignment_btn is clicked");
            res = await require('./assignmentDetails.page').isInitialized();
        }
        else {
            await logger.logInto(stackTrace.get(), res + "closeAssignment_btn is NOT clicked", 'error');
        }
        return res;
    },

}

