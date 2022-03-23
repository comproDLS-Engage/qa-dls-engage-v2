"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
    bookCoverIcon: selectorFile.css.ComproEngage.studentClassDashboard.bookCoverIcon,
    className: selectorFile.css.ComproEngage.studentClassDashboard.className,
    BookName: selectorFile.css.ComproEngage.studentClassDashboard.BookName,
    classDurationIcon: selectorFile.css.ComproEngage.studentClassDashboard.classDurationIcon,
    classDuration: selectorFile.css.ComproEngage.studentClassDashboard.classDuration,
    classDatesLabel: selectorFile.css.ComproEngage.studentClassDashboard.classDatesLabel,
    instructorIcon: selectorFile.css.ComproEngage.studentClassDashboard.instructorIcon,
    instrutorName: selectorFile.css.ComproEngage.studentClassDashboard.instrutorName,
    instructorLabel: selectorFile.css.ComproEngage.studentClassDashboard.instructorLabel,
    openFlipbookBtn: selectorFile.css.ComproEngage.studentClassDashboard.openFlipbookBtn,
    otherDetailsBtn: selectorFile.css.ComproEngage.studentClassDashboard.otherDetailsBtn,
    assignmentsLbl: selectorFile.css.ComproEngage.studentClassDashboard.assignmentsLbl,
    overviewBtn: selectorFile.css.ComproEngage.studentClassDashboard.overviewBtn,
    dueBtn: selectorFile.css.ComproEngage.studentClassDashboard.dueBtn,
    dueNumberChip: selectorFile.css.ComproEngage.studentClassDashboard.dueNumberChip,
    upcomingBtn: selectorFile.css.ComproEngage.studentClassDashboard.upcomingBtn,
    completeBtn: selectorFile.css.ComproEngage.studentClassDashboard.completeBtn,
    assignmentTitle: selectorFile.css.ComproEngage.studentClassDashboard.assignmentTitle,
    assignmentActivities: selectorFile.css.ComproEngage.studentClassDashboard.assignmentActivities,
    dueDaysChip: selectorFile.css.ComproEngage.studentClassDashboard.dueDaysChip,


    isInitialized: function () { 
        var res;
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus:  action.waitForDisplayed(this.bookCoverIcon),
            appShellPage:appShellPage.isInitialized()
        };
        return res; 
    },

    getData_studentClassDashboardPageData: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            bookCoverIcon:(action.getElementCount(this.bookCoverIcon) > 0) ? action.waitForDisplayed(this.bookCoverIcon) : false,
            className:(action.getElementCount(this.className) > 0) ? action.getText(this.className) : null,
            BookName:(action.getElementCount(this.BookName) > 0) ? action.getText(this.BookName) : null,
            classDurationIcon:(action.getElementCount(this.classDurationIcon) > 0) ? action.waitForDisplayed(this.classDurationIcon) : false,
            classDuration:(action.getElementCount(this.classDuration) > 0) ? action.getText(this.classDuration) : null,
            classDatesLabel:(action.getElementCount(this.classDatesLabel) > 0) ? action.getText(this.classDatesLabel) : null,
            instructorIcon:(action.getElementCount(this.instructorIcon) > 0) ? action.waitForDisplayed(this.instructorIcon) : false,
            instrutorName:(action.getElementCount(this.instrutorName) > 0) ? action.getText(this.instrutorName) : null,
            instructorLabel:(action.getElementCount(this.instructorLabel) > 0) ? action.getText(this.instructorLabel) : null,
            openFlipbookBtn:(action.getElementCount(this.openFlipbookBtn) > 0) ? action.getText(this.openFlipbookBtn) : null,
            otherDetailsBtn:(action.getElementCount(this.otherDetailsBtn) > 0) ? action.getText(this.otherDetailsBtn) : null,
            assignmentsLbl:(action.getElementCount(this.assignmentsLbl) > 0) ? action.getText(this.assignmentsLbl) : null,
            overviewBtn:(action.getElementCount(this.overviewBtn) > 0) ? action.getText(this.overviewBtn) : null,
            dueBtn:(action.getElementCount(this.dueBtn) > 0) ? action.getText(this.dueBtn) : null,
            dueNumberChip:(action.getElementCount(this.dueNumberChip) > 0) ? action.getText(this.dueNumberChip) : null,
            upcomingBtn:(action.getElementCount(this.upcomingBtn) > 0) ? action.getText(this.upcomingBtn) : null,
            completeBtn:(action.getElementCount(this.completeBtn) > 0) ? action.getText(this.completeBtn) : null,
        }
        return obj; 
    },

    getData_assignmentList: function (assignmentTitleName) {
        logger.logInto(stackTrace.get());
        var obj=[];
        action.waitForDisplayed(this.assignmentTitle);
        var list = action.findElements(this.assignmentTitle);
        if (assignmentTitleName) {
            for (var i=0;i<list.length;i++) {
                if (action.getText(this.assignmentTitle + i) == assignmentTitleName) {
                    obj[0] = {
                        assignmentTitle:(action.getElementCount(this.assignmentTitle+i+"]")  > 0) ? action.getText(this.assignmentTitle+i+"]")  : null,
                        assignmentActivities:(action.getElementCount(this.assignmentActivities+i+"]")  > 0) ? action.getText(this.assignmentActivities+i+"]")  : null,
                        dueDaysChip:(action.getElementCount(this.dueDaysChip+i+"]")  > 0) ? action.getText(this.dueDaysChip+i+"]")  : null,
                    }
                break; 
                }
            } 
        }
        else {
            for (var i=0;i<list.length;i++) {
                obj[i] = {
                    assignmentTitle:(action.getElementCount(this.assignmentTitle+i+"]")  > 0) ? action.getText(this.assignmentTitle+i+"]")  : null,
                    assignmentActivities:(action.getElementCount(this.assignmentActivities+i+"]")  > 0) ? action.getText(this.assignmentActivities+i+"]")  : null,
                    dueDaysChip:(action.getElementCount(this.dueDaysChip+i+"]")  > 0) ? action.getText(this.dueDaysChip+i+"]")  : null,
                }
            }
        }
        return obj; 
    },

    //Click function for Upcoming Assignment button
    click_overviewBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.overviewBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " overviewBtn is clicked");
            res = require('./assignmentStudentList.page.js').isInitialized();
        }
        else {
            logger.logInto(stackTrace.get(), res +"overviewBtn is NOT clicked", 'error');
        }
        return res;
    },
}

