"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require('./appShell.page.js');
var res, obj;

module.exports = {
    bookCoverIcon: selectorFile.css.ComproEngage.classDetailsStudent.bookCoverIcon,
    className: selectorFile.css.ComproEngage.classDetailsStudent.className,
    BookName: selectorFile.css.ComproEngage.classDetailsStudent.BookName,
    classDurationIcon: selectorFile.css.ComproEngage.classDetailsStudent.classDurationIcon,
    classDuration: selectorFile.css.ComproEngage.classDetailsStudent.classDuration,
    instructorIcon: selectorFile.css.ComproEngage.classDetailsStudent.instructorIcon,
    instrutorName: selectorFile.css.ComproEngage.classDetailsStudent.instrutorName,
    classDatesLabel: selectorFile.css.ComproEngage.classDetailsStudent.classDatesLabel,
    instructorLabel: selectorFile.css.ComproEngage.classDetailsStudent.instructorLabel,


    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.bookCoverIcon)
        };
        return res;
    },

    classstudent_Data: function () {
        obj = {
            bookCoverIcon: (action.getElementCount(this.bookCoverIcon) > 0) ? action.waitForExist(this.bookCoverIcon) : false,
            className: (action.getElementCount(this.className) > 0) ? action.getText(this.className) : null,
            BookName: (action.getElementCount(this.BookName) > 0) ? action.getText(this.BookName) : null,
            classDurationIcon: (action.getElementCount(this.classDurationIcon) > 0) ? action.waitForExist(this.classDurationIcon) : false,
            classDuration: (action.getElementCount(this.classDuration) > 0) ? action.getText(this.classDuration) : null,
            instructorIcon: (action.getElementCount(this.instructorIcon) > 0) ? action.waitForExist(this.instructorIcon) : false,
            instrutorName: (action.getElementCount(this.instrutorName) > 0) ? action.getText(this.instrutorName) : null,
            classDatesLabel: (action.getElementCount(this.classDatesLabel) > 0) ? action.getText(this.classDatesLabel) : null,
            instructorLabel: (action.getElementCount(this.instructorLabel) > 0) ? action.getText(this.instructorLabel) : null,
        }
        return obj
    },


}

