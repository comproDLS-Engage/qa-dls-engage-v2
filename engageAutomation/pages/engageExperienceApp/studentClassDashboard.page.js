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


    isInitialized: async function () { 
        var res;
        await logger.logInto(stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus:  await action.waitForDisplayed(this.bookCoverIcon),
            appShellPage:await appShellPage.isInitialized()
        };
        return res; 
    },

    getData_studentClassDashboardPageData: async function () {
        await logger.logInto(stackTrace.get());
        var obj;
        obj = {
            bookCoverIcon:((await action.getElementCount(this.bookCoverIcon)) > 0) ? await action.waitForDisplayed(this.bookCoverIcon) : false,
            className:((await action.getElementCount(this.className)) > 0) ? await action.getText(this.className) : null,
            BookName:((await action.getElementCount(this.BookName)) > 0) ? await action.getText(this.BookName) : null,
            classDurationIcon:((await action.getElementCount(this.classDurationIcon)) > 0) ? await action.waitForDisplayed(this.classDurationIcon) : false,
            classDuration:((await action.getElementCount(this.classDuration)) > 0) ? await action.getText(this.classDuration) : null,
            classDatesLabel:((await action.getElementCount(this.classDatesLabel)) > 0) ? await action.getText(this.classDatesLabel) : null,
            instructorIcon:((await action.getElementCount(this.instructorIcon)) > 0) ? await action.waitForDisplayed(this.instructorIcon) : false,
            instrutorName:((await action.getElementCount(this.instrutorName)) > 0) ? await action.getText(this.instrutorName) : null,
            instructorLabel:((await action.getElementCount(this.instructorLabel)) > 0) ? await action.getText(this.instructorLabel) : null,
            openFlipbookBtn:((await action.getElementCount(this.openFlipbookBtn)) > 0) ? await action.getText(this.openFlipbookBtn) : null,
            otherDetailsBtn:((await action.getElementCount(this.otherDetailsBtn)) > 0) ? await action.getText(this.otherDetailsBtn) : null,
            assignmentsLbl:((await action.getElementCount(this.assignmentsLbl)) > 0) ? await action.getText(this.assignmentsLbl) : null,
            overviewBtn:((await action.getElementCount(this.overviewBtn)) > 0) ? await action.getText(this.overviewBtn) : null,
            dueBtn:((await action.getElementCount(this.dueBtn)) > 0) ? await action.getText(this.dueBtn) : null,
            dueNumberChip:((await action.getElementCount(this.dueNumberChip)) > 0) ? await action.getText(this.dueNumberChip) : null,
            upcomingBtn:((await action.getElementCount(this.upcomingBtn)) > 0) ? await action.getText(this.upcomingBtn) : null,
            completeBtn:((await action.getElementCount(this.completeBtn)) > 0) ? await action.getText(this.completeBtn) : null,
        }
        return obj; 
    },

    getData_assignmentList: async function (assignmentTitleName) {
        await logger.logInto(stackTrace.get());
        var obj=[];
        await action.waitForDisplayed(this.assignmentTitle);
        var list = await action.findElements(this.assignmentTitle);
        if (assignmentTitleName) {
            for (var i=0;i<list.length;i++) {
                if ((await action.getText(this.assignmentTitle + i)) == assignmentTitleName) {
                    obj[0] = {
                        assignmentTitle:((await action.getElementCount(this.assignmentTitle+i+"]"))  > 0) ? await action.getText(this.assignmentTitle+i+"]")  : null,
                        assignmentActivities:((await action.getElementCount(this.assignmentActivities+i+"]"))  > 0) ? await action.getText(this.assignmentActivities+i+"]")  : null,
                        dueDaysChip:((await action.getElementCount(this.dueDaysChip+i+"]"))  > 0) ? await action.getText(this.dueDaysChip+i+"]")  : null,
                    }
                break; 
                }
            } 
        }
        else {
            for (var i=0;i<list.length;i++) {
                obj[i] = {
                    assignmentTitle:((await action.getElementCount(this.assignmentTitle+i+"]"))  > 0) ? await action.getText(this.assignmentTitle+i+"]")  : null,
                    assignmentActivities:((await action.getElementCount(this.assignmentActivities+i+"]"))  > 0) ? await action.getText(this.assignmentActivities+i+"]")  : null,
                    dueDaysChip:((await action.getElementCount(this.dueDaysChip+i+"]"))  > 0) ? await action.getText(this.dueDaysChip+i+"]")  : null,
                }
            }
        }
        return obj; 
    },

    //Click function for Upcoming Assignment button
    click_overviewBtn: async function () {
        await logger.logInto(stackTrace.get());
        var res;
        res = await action.click(this.overviewBtn);
        if (true == res) {
            await logger.logInto(stackTrace.get(), " overviewBtn is clicked");
            res = await require('./assignmentStudentList.page.js').isInitialized();
        }
        else {
            await logger.logInto(stackTrace.get(), res +"overviewBtn is NOT clicked", 'error');
        }
        return res;
    },
}

