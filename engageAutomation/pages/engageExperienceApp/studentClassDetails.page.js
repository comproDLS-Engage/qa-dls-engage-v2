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
    bookCoverIcon: selectorFile.css.ComproEngage.classDetailsStudent.bookCoverIcon,
    className: selectorFile.css.ComproEngage.classDetailsStudent.className,
    BookName: selectorFile.css.ComproEngage.classDetailsStudent.BookName,
    classDurationIcon: selectorFile.css.ComproEngage.classDetailsStudent.classDurationIcon,
    classDuration: selectorFile.css.ComproEngage.classDetailsStudent.classDuration,
    classDatesLabel: selectorFile.css.ComproEngage.classDetailsStudent.classDatesLabel,
    instructorIcon: selectorFile.css.ComproEngage.classDetailsStudent.instructorIcon,
    instrutorName: selectorFile.css.ComproEngage.classDetailsStudent.instrutorName,
    instructorLabel: selectorFile.css.ComproEngage.classDetailsStudent.instructorLabel,
    openFlipbookBtn: selectorFile.css.ComproEngage.classDetailsStudent.openFlipbookBtn,
    otherDetailsBtn: selectorFile.css.ComproEngage.classDetailsStudent.otherDetailsBtn,
    assignmentsLbl: selectorFile.css.ComproEngage.classDetailsStudent.assignmentsLbl,
    overviewBtn: selectorFile.css.ComproEngage.classDetailsStudent.overviewBtn,
    dueBtn: selectorFile.css.ComproEngage.classDetailsStudent.dueBtn,
    dueNumberChip: selectorFile.css.ComproEngage.classDetailsStudent.dueNumberChip,
    upcomingBtn: selectorFile.css.ComproEngage.classDetailsStudent.upcomingBtn,
    completeBtn: selectorFile.css.ComproEngage.classDetailsStudent.completeBtn,
    assignmentTitle: selectorFile.css.ComproEngage.classDetailsStudent.assignmentTitle,
    assignmentActivities: selectorFile.css.ComproEngage.classDetailsStudent.assignmentActivities,
    dueDaysChip: selectorFile.css.ComproEngage.classDetailsStudent.dueDaysChip,
    blankAssignment_img: selectorFile.css.ComproEngage.classDetailsStudent.blankAssignment_img,
    blankAssignment_title: selectorFile.css.ComproEngage.classDetailsStudent.blankAssignment_title,
    blankAssignment_subtitle: selectorFile.css.ComproEngage.classDetailsStudent.blankAssignment_subtitle,
    progress_lbl: selectorFile.css.ComproEngage.classDetailsStudent.progress_lbl,
    noUpcoming_title: selectorFile.css.ComproEngage.classDetailsStudent.noUpcoming_title,
    noUpcoming_subtitle: selectorFile.css.ComproEngage.classDetailsStudent.noUpcoming_subtitle,
    noCompleted_title: selectorFile.css.ComproEngage.classDetailsStudent.noCompleted_title,
    noCompleted_subtitle: selectorFile.css.ComproEngage.classDetailsStudent.noCompleted_subtitle,
    viewProgress_btn: selectorFile.css.ComproEngage.myClassPage.viewProgress_btn,
    bookMaterial_lbl: selectorFile.css.ComproEngage.myClassPage.bookMaterial_lbl,
    completionValue: selectorFile.css.ComproEngage.myClassPage.completionValue,
    bookMaterial_lbl: selectorFile.css.ComproEngage.myClassPage.bookMaterial_lbl,
    archiveTagLbl: selectorFile.css.ComproEngage.classDetailsStudent.archiveTagLbl,

    isInitialized: async function () {
        await logger.logInto(await stackTrace.get());
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
            archiveTagLbl: ((await action.getElementCount(this.archiveTagLbl)) > 0) ? await action.getText(this.archiveTagLbl) : null
        }
        return obj
    },
    click_overviewBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.overviewBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " overviewBtn is clicked");
            res = await require('./assignmentStudentList.page.js').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "overviewBtn is NOT clicked", 'error');
        }
        return res;
    },
    getData_assignmentList: async function (assignmentTitleName) {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        await action.waitForDisplayed(this.assignmentTitle);
        var list = await action.findElements(this.assignmentTitle);
        console.log(list.length)
        if (assignmentTitleName) {
            for (var i = 0; i < list.length; i++) {
                if ((await action.getText(this.assignmentTitle + i)) == assignmentTitleName) {
                    obj[0] = {
                        assignmentTitle: ((await action.getElementCount(this.assignmentTitle + i)) > 0) ? await action.getText(this.assignmentTitle + i) : null,
                        assignmentActivities: ((await action.getElementCount(this.assignmentActivities + i + "]")) > 0) ? await action.getText(this.assignmentActivities + i + "]") : null,
                        dueDaysChip: ((await action.getElementCount(this.dueDaysChip + i + "]")) > 0) ? await action.getText(this.dueDaysChip + i + "]") : null,
                        dueNumberChip: ((await action.getElementCount(this.dueNumberChip)) > 0) ? await action.getText(this.dueNumberChip) : null,
                    }
                    break;
                }
            }
        }
        else {
            for (var i = 0; i < list.length; i++) {
                console.log(this.assignmentTitle + i)
                obj[i] = {
                    assignmentTitle: ((await action.getElementCount(this.assignmentTitle + i + "]")) > 0) ? await action.getText(this.assignmentTitle + i + "]") : null,
                    assignmentActivities: ((await action.getElementCount(this.assignmentActivities + i + "]")) > 0) ? await action.getText(this.assignmentActivities + i + "]") : null,
                    dueDaysChip: ((await action.getElementCount(this.dueDaysChip + i + "]")) > 0) ? await action.getText(this.dueDaysChip + i + "]") : null,
                    dueNumberChip: ((await action.getElementCount(this.dueNumberChip)) > 0) ? await action.getText(this.dueNumberChip) : null,
                }
            }
        }
        return obj;
    },
    getData_studentClassDashboardPageData: async function () {
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        await action.waitForDisplayed(this.className)
        var obj;
        obj = {
            bookCoverIcon: ((await action.getElementCount(this.bookCoverIcon)) > 0) ? await action.waitForDisplayed(this.bookCoverIcon) : false,
            className: ((await action.getElementCount(this.className)) > 0) ? await action.getText(this.className) : null,
            bookName: ((await action.getElementCount(this.BookName)) > 0) ? await action.getText(this.BookName) : null,
            classDurationIcon: ((await action.getElementCount(this.classDurationIcon)) > 0) ? await action.waitForDisplayed(this.classDurationIcon) : false,
            classDuration: ((await action.getElementCount(this.classDuration)) > 0) ? await action.getText(this.classDuration) : null,
            classDatesLabel: ((await action.getElementCount(this.classDatesLabel)) > 0) ? await action.getText(this.classDatesLabel) : null,
            instructorIcon: ((await action.getElementCount(this.instructorIcon)) > 0) ? await action.waitForDisplayed(this.instructorIcon) : false,
            instrutorName: ((await action.getElementCount(this.instrutorName)) > 0) ? await action.getText(this.instrutorName) : null,
            instructorLabel: ((await action.getElementCount(this.instructorLabel)) > 0) ? await action.getText(this.instructorLabel) : null,
            openFlipbookBtn: ((await action.getElementCount(this.openFlipbookBtn)) > 0) ? await action.getText(this.openFlipbookBtn) : null,
            otherDetailsBtn: ((await action.getElementCount(this.otherDetailsBtn)) > 0) ? await action.waitForDisplayed(this.otherDetailsBtn) : null,
            assignmentsLbl: ((await action.getElementCount(this.assignmentsLbl)) > 0) ? await action.getText(this.assignmentsLbl) : null,
            overviewBtn: ((await action.getElementCount(this.overviewBtn)) > 0) ? await action.getText(this.overviewBtn) : null,
            dueBtn: ((await action.getElementCount(this.dueBtn)) > 0) ? await action.getText(this.dueBtn) : null,
            dueNumberChip: ((await action.getElementCount(this.dueNumberChip)) > 0) ? await action.getText(this.dueNumberChip) : null,
            upcomingBtn: ((await action.getElementCount(this.upcomingBtn)) > 0) ? await action.getText(this.upcomingBtn) : null,
            completeBtn: ((await action.getElementCount(this.completeBtn)) > 0) ? await action.getText(this.completeBtn) : null,
            blankAssignment_img: ((await action.getElementCount(this.blankAssignment_img)) > 0) ? await action.waitForDisplayed(this.blankAssignment_img) : false,
            blankAssignment_title: ((await action.getElementCount(this.blankAssignment_title)) > 0) ? await action.getText(this.blankAssignment_title) : null,
            blankAssignment_subtitle: ((await action.getElementCount(this.blankAssignment_subtitle)) > 0) ? await action.getText(this.blankAssignment_subtitle) : null,
            progress_lbl: ((await action.getElementCount(this.progress_lbl)) > 0) ? await action.getText(this.progress_lbl) : null,
            noUpcoming_title: ((await action.getElementCount(this.noUpcoming_title)) > 0) ? await action.getText(this.noUpcoming_title) : null,
            noUpcoming_subtitle: ((await action.getElementCount(this.noUpcoming_subtitle)) > 0) ? await action.getText(this.noUpcoming_subtitle) : null,
            noCompleted_title: ((await action.getElementCount(this.noCompleted_title)) > 0) ? await action.getText(this.noCompleted_title) : null,
            noCompleted_subtitle: ((await action.getElementCount(this.noCompleted_subtitle)) > 0) ? await action.getText(this.noCompleted_subtitle) : null,
            viewProgress_btn: ((await action.getElementCount(this.viewProgress_btn)) > 0) ? await action.getText(this.viewProgress_btn) : null,
        }
        return obj;
    },

    click_upcomingBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.upcomingBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "upcomingBtn is clicked");
            res = await this.getData_studentClassDashboardPageData();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "upcomingBtn is NOT clicked", 'error');
        }
        return res;
    },
    click_completeBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.completeBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "completeBtn is clicked");
            res = await this.getData_studentClassDashboardPageData();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "completeBtn is NOT clicked", 'error');
        }
        return res;
    },
    getData_bookList: async function () {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        var list = await action.findElements(this.bookMaterial_lbl);
        for (var i = 0; i < list.length; i++) {
            obj[i] = {
                bookMaterial_lbl: ((await action.getElementCount(this.bookMaterial_lbl + i + "]")) > 0) ? await action.getText(this.bookMaterial_lbl + i + "]") : null,
                completionValue: ((await action.getElementCount(this.completionValue + i + "]")) > 0) ? await action.getText(this.completionValue + i + "]") : null,
                progressbar: ((await action.getElementCount(this.progressbar + i + "]")) > 0) ? await action.getAttribute(this.dueDaysChip + i + "]", "aria-valuenow") : null,
            }
        }

        return obj;
    },
}

