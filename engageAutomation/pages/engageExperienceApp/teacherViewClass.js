"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj;

module.exports = {
    pageTitle: selectorFile.css.ComproEngage.teacherViewClassPage.pageTitle,
    gradebookBtn: selectorFile.css.ComproEngage.teacherViewClassPage.gradebookBtn,
    classOptionsBtn: selectorFile.css.ComproEngage.teacherViewClassPage.classOptionsBtn,
    dataSubtitle: selectorFile.css.ComproEngage.teacherViewClassPage.dataSubtitle,
    productList: selectorFile.css.ComproEngage.teacherViewClassPage.productList,
    inboxTab: selectorFile.css.ComproEngage.teacherViewClassPage.inboxTab,
    assignmentsTab: selectorFile.css.ComproEngage.teacherViewClassPage.assignmentsTab,
    studentsTab: selectorFile.css.ComproEngage.teacherViewClassPage.studentsTab,
    bookCoverImg: selectorFile.css.ComproEngage.teacherViewClassPage.bookCoverImg,
    bookTitleTxt: selectorFile.css.ComproEngage.teacherViewClassPage.bookTitleTxt,
    bookSubtitleTxt: selectorFile.css.ComproEngage.teacherViewClassPage.bookSubtitleTxt,
    viewBookBtn: selectorFile.css.ComproEngage.teacherViewClassPage.viewBookBtn,
    bookComponentNamesBtns: selectorFile.css.ComproEngage.teacherViewClassPage.bookComponentNamesBtns,
    //usingClasses_lbl: selectorFile.css.ComproEngage.teacherViewClassPage.usingClasses_lbl,
    //usingClassesByline_lbl: selectorFile.css.ComproEngage.teacherViewClassPage.usingClassesByline_lbl,
    //inviteStudents_btn: selectorFile.css.ComproEngage.teacherViewClassPage.inviteStudents_btn,
    //inviteStudentsByline_lbl: selectorFile.css.ComproEngage.teacherViewClassPage.inviteStudentsByline_lbl,
    //createAssignments_btn: selectorFile.css.ComproEngage.teacherViewClassPage.createAssignments_btn,
    //createAssignment_lbl: selectorFile.css.ComproEngage.teacherViewClassPage.createAssignment_lbl,
    // createAssignmentByline_lbl: selectorFile.css.ComproEngage.teacherViewClassPage.createAssignmentByline_lbl,
    // noInboxActivity_lbl: selectorFile.css.ComproEngage.teacherViewClassPage.noInboxActivity_lbl,
    // noInboxActivityByline_lbl: selectorFile.css.ComproEngage.teacherViewClassPage.noInboxActivityByline_lbl,
    

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        let pageStatus = action.waitForDisplayed(this.pageTitle);
        res = this.getClassDetailsPageData();
        res.pageStatus = pageStatus;
        return res;
    },

    get_ViewClassPage_Data: function () {
        logger.logInto(stackTrace.get());
        obj = {
            pageTitle: (action.getElementCount(this.pageTitle) > 0) ? action.getText(this.pageTitle) : null,
            startDate: (action.getElementCount(this.startDate) > 0) ? action.getText(this.startDate) : null,
            endDate: (action.getElementCount(this.endDate) > 0) ? action.getText(this.endDate) : null,
            edit_btn: (action.getElementCount(this.edit_btn) > 0) ? action.waitForDisplayed(this.edit_btn) : null,
            inboxTab: (action.getElementCount(this.inboxTab) > 0) ? action.getText(this.inboxTab) : null,
            assignmentsTab: (action.getElementCount(this.assignmentsTab) > 0) ? action.getText(this.assignmentsTab) : null,
            progressTab: (action.getElementCount(this.progressTab) > 0) ? action.getText(this.progressTab) : null,
            usingClasses_lbl: (action.getElementCount(this.usingClasses_lbl) > 0) ? action.getText(this.usingClasses_lbl) : null,
            usingClassesByline_lbl: (action.getElementCount(this.usingClassesByline_lbl) > 0) ? action.getText(this.usingClassesByline_lbl) : null,
            facebookbtn_icon: (action.getElementCount(this.facebookbtn_icon) > 0) ? action.waitForDisplayed(this.facebookbtn_icon) : false,
            createAssignment_lbl: (action.getElementCount(this.createAssignment_lbl) > 0) ? action.getText(this.createAssignment_lbl) : null,
            createAssignmentByline_lbl: (action.getElementCount(this.createAssignmentByline_lbl) > 0) ? action.getText(this.createAssignmentByline_lbl) : null,
            noInboxActivity_lbl: (action.getElementCount(this.noInboxActivity_lbl) > 0) ? action.getText(this.noInboxActivity_lbl) : null,
            noInboxActivityByline_lbl: (action.getElementCount(this.noInboxActivityByline_lbl) > 0) ? action.getText(this.noInboxActivityByline_lbl) : null,
            viewBook_btn: (action.getElementCount(this.viewBook_btn) > 0) ? action.getText(this.viewBook_btn) : null,
            bookCover_img: (action.getElementCount(this.bookCover_img) > 0) ? action.waitForDisplayed(this.bookCover_img) : null,
            bookTitle: (action.getElementCount(this.bookTitle) > 0) ? action.getText(this.bookTitle) : null,
            bookSubtitle: (action.getElementCount(this.bookSubtitle) > 0) ? action.getText(this.bookSubtitle) : null,
            bookComponents: null,
        }
        let componentData = [];
        let componentCount = action.getElementCount(this.bookComponentNames_btn);
        for (i = 0; i < componentCount; i++) {
            componentSelector = this.bookComponentNames_btn + i + "]";
            componentData[i] = action.getText(componentSelector);
        }
        obj.bookComponents = componentData;
        return obj;
    },

    //Clicking on 'View Book' launches Book Details Page 
    click_ViewBook_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.viewBook_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- View Book button is clicked");
            // let viewBook = require('./viewBook.page.js');
            // res = viewBook.isInitialized();
        }
        else {
            res = res + "-- Error in clicking View Book button";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    //Clicking on any book component launches snackbar 'Feature Coming Soon'
    clickBookComponent: function (componentNumber) { //disable for now, to be reviewed later
        logger.logInto(stackTrace.get());
        let componentSelector = this.bookComponentNames_btn + (componentNumber) + "]";
        res = action.click(componentSelector);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- Selected component is clicked");
            res = require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
            
            /*res = action.waitForDisplayed(this.snackbarInfo_txt);
            if (res == true) {
                res = action.getText(this.snackbarInfo_txt);
                action.click(this.snackbarDismiss_btn);
            }
            else {
                res = res + " -- Snackbar message is not displayed"
                logger.logInto(stackTrace.get(), res, "error");
            }*/
        }
        else {
            res = res + "-- Error in clicking Selected component button";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    //clicking on Inbox Tab
    click_Inbox_Tab: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.inboxTab);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- Inbox Tab is clicked");
            res = this.isInitialized(); 
        }
        else {
            res = res + "-- Error in clicking Inbox Tab";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    //clicking on Assignment Tab
    click_Assignments_Tab: function () { 
        logger.logInto(stackTrace.get());
        res = action.click(this.assignmentsTab);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- Assignment Tab is clicked");
            res = this.isInitialized(); 
        }
        else {
            res = res + "-- Error in clicking Assignment Tab";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    //clicking on Progress Tab
    click_Progress_Tab: function () { // this has changs from Progress to Students, lets wait for this
        logger.logInto(stackTrace.get());
        res = action.click(this.progressTab);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- Progress Tab is clicked");
            res = this.isInitialized();
        }
        else {
            res = res + "-- Error in clicking Progress Tab";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    //Click Invite Students button
    click_InviteStudents_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.inviteStudents_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- Invite Students button is clicked");
            res = require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
            
            /*res = action.waitForDisplayed(this.snackbarInfo_txt);
            if (res == true) {
                res = action.getText(this.snackbarInfo_txt);
                action.click(this.snackbarDismiss_btn);
            }
            else {
                res = res + " -- Snackbar message is not displayed"
                logger.logInto(stackTrace.get(), res, "error");
            }*/
        }
        else {
            res = res + "-- Error in clicking Invite Students button button";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    //Click Create Assignments button
    click_CreateAssignments_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.createAssignments_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- Invite Students button is clicked");
            res = require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
            
            /*res = action.waitForDisplayed(this.snackbarInfo_txt);
            if (res == true) {
                res = action.getText(this.snackbarInfo_txt);
                action.click(this.snackbarDismiss_btn);
            }
            else {
                res = res + " -- Snackbar message is not displayed"
                logger.logInto(stackTrace.get(), res, "error");
            }*/
        }
        else {
            res = res + "-- Error in clicking Invite Students button button";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    }

}

