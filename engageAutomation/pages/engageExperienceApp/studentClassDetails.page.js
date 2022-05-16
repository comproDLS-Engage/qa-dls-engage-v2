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


    isInitialized: async function () {
        await logger.logInto(stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.bookCoverIcon)
        };
        return res;
    },

    classstudent_Data: async function () {
        obj = {
            bookCoverIcon: ((await action.getElementCount(this.bookCoverIcon)) > 0) ? await action.waitForExist(this.bookCoverIcon) : false,
            className: ((await action.getElementCount(this.className)) > 0) ? await action.getText(this.className) : null,
            BookName: ((await action.getElementCount(this.BookName)) > 0) ? await action.getText(this.BookName) : null,
            classDurationIcon: ((await action.getElementCount(this.classDurationIcon)) > 0) ? await action.waitForExist(this.classDurationIcon) : false,
            classDuration: ((await action.getElementCount(this.classDuration)) > 0) ? await action.getText(this.classDuration) : null,
            instructorIcon: ((await action.getElementCount(this.instructorIcon)) > 0) ? await action.waitForExist(this.instructorIcon) : false,
            instrutorName: ((await action.getElementCount(this.instrutorName)) > 0) ? await action.getText(this.instrutorName) : null,
            classDatesLabel: ((await action.getElementCount(this.classDatesLabel)) > 0) ? await action.getText(this.classDatesLabel) : null,
            instructorLabel: ((await action.getElementCount(this.instructorLabel)) > 0) ? await action.getText(this.instructorLabel) : null,
        }
        return obj
    },


}

