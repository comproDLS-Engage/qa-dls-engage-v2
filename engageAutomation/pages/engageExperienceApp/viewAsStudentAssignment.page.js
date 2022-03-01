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


    isInitialized: function () {
        var res;
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.eye_icon)
        };
        return res;
    },

    getData_studentViewPage: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            eye_icon: (action.getElementCount(this.eye_icon) > 0) ? action.waitForDisplayed(this.eye_icon) : false,
            studentView: (action.getElementCount(this.studentView) > 0) ? action.getText(this.studentView) : null,
            cancel: (action.getElementCount(this.cancel) > 0) ? action.waitForDisplayed(this.cancel) : null,
            activity_icon: (action.getElementCount(this.activity_icon) > 0) ? action.waitForDisplayed(this.activity_icon) : false,
            activity_lbl: (action.getElementCount(this.activity_lbl) > 0) ? action.getText(this.activity_lbl) : null,
            showDetails_btn: (action.getElementCount(this.showDetails_btn) > 0) ? action.getText(this.showDetails_btn) : null,
        }
        return obj;
    },


    click_cancel: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.cancel);
        if (true == res) {
            logger.logInto(stackTrace.get(), " cancel is clicked");
            res = require('./assignmentDetails.page').isInitialized();
        }
        else {
            logger.logInto(stackTrace.get(), res + "cancel is NOT clicked", 'error');
        }
        return res;
    },

    click_activity_lbl: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.activity_lbl);
        if (true == res) {
            logger.logInto(stackTrace.get(), " activity_lbl is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res + "activity_lbl is NOT clicked", 'error');
        }
        return res;
    },

    click_showDetails_btn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.showDetails_btn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " showDetails_btn is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res + "showDetails_btn is NOT clicked", 'error');
        }
        return res;
    },

}

