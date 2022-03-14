"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
const createClassPage = require('./createClass.page.js');
const bookDetailsPage = require('./viewBook.page.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj,pageData;
var componentSelector, languageCount, i;
module.exports = {
    pageTitle: selectorFile.css.ComproEngage.teacherViewClassPage.pageTitle,
    pageSubTitle: selectorFile.css.ComproEngage.teacherViewClassPage.pageSubTitle,
    gradebookBtn: selectorFile.css.ComproEngage.teacherViewClassPage.gradebookBtn,
    classOptionsBtn: selectorFile.css.ComproEngage.teacherViewClassPage.classOptionsBtn,
    editClassBtn: selectorFile.css.ComproEngage.teacherViewClassPage.editClassBtn,
    addBooksBtn: selectorFile.css.ComproEngage.teacherViewClassPage.addBooksBtn,
    dataSubtitle: selectorFile.css.ComproEngage.teacherViewClassPage.dataSubtitle,
    productTabBtns: selectorFile.css.ComproEngage.teacherViewClassPage.productTabBtns,
    productTabBtn: selectorFile.css.ComproEngage.teacherViewClassPage.productTabBtn,
    bookCoverImg: selectorFile.css.ComproEngage.teacherViewClassPage.bookCoverImg,
    bookTitleTxt: selectorFile.css.ComproEngage.teacherViewClassPage.bookTitleTxt,
    bookSubtitleTxt: selectorFile.css.ComproEngage.teacherViewClassPage.bookSubtitleTxt,
    viewBookBtn: selectorFile.css.ComproEngage.teacherViewClassPage.viewBookBtn,
    bookComponentNamesBtns: selectorFile.css.ComproEngage.teacherViewClassPage.bookComponentNamesBtns,
    studentList: selectorFile.css.ComproEngage.teacherViewClassPage.studentList,
    noStudentIcon: selectorFile.css.ComproEngage.teacherViewClassPage.noStudentIcon,
    noStudentTitle: selectorFile.css.ComproEngage.teacherViewClassPage.noStudentTitle,
    noStudentSubTitle: selectorFile.css.ComproEngage.teacherViewClassPage.noStudentSubTitle,
    namelbl: selectorFile.css.ComproEngage.teacherViewClassPage.nameHeading,
    statuslbl: selectorFile.css.ComproEngage.teacherViewClassPage.statusHeading,
    studentName: selectorFile.css.ComproEngage.teacherViewClassPage.studentName,
    studentStatus: selectorFile.css.ComproEngage.teacherViewClassPage.studentStatus,
    studentMoreOption: selectorFile.css.ComproEngage.teacherViewClassPage.studentMoreOption,
    studentAvgScorelbl: selectorFile.css.ComproEngage.teacherViewClassPage.studentAvgScorelbl,
    studentCompletionScorelbl: selectorFile.css.ComproEngage.teacherViewClassPage.studentCompletionScorelbl,
    studentAvgScore: selectorFile.css.ComproEngage.teacherViewClassPage.studentAvgScore,
    studentCompletionScore: selectorFile.css.ComproEngage.teacherViewClassPage.studentCompletionScore,
    viewProgressbtn: selectorFile.css.ComproEngage.teacherViewClassPage.viewProgressbtn,
    viewMessagebtn: selectorFile.css.ComproEngage.teacherViewClassPage.viewMessagebtn,
    assignmentsTab:selectorFile.css.ComproEngage.teacherViewClassPage.assignmentsTab,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        let pageStatus = action.waitForDisplayed(this.productTabBtns + 0 + "]");
        res = this.getViewClassPageData();
        res.pageStatus = pageStatus;
        return res;
    },

    getViewClassPageData: function () {
        logger.logInto(stackTrace.get());
        obj = {
            className: (action.getElementCount(this.pageTitle) > 0) ? action.getText(this.pageTitle) : null,
            classDuration: (action.getElementCount(this.pageSubTitle) > 0) ? action.getText(this.pageSubTitle) : null,
            gradebookBtn: (action.getElementCount(this.gradebookBtn) > 0) ? action.getText(this.gradebookBtn) : null,
            classOptionsBtn_exists: (action.getElementCount(this.classOptionsBtn) > 0) ? action.waitForDisplayed(this.classOptionsBtn) : false,
            productList: (action.getElementCount(this.productList) > 0) ? action.waitForDisplayed(this.productList) : null,
            bookCoverImg: (action.getElementCount(this.bookCoverImg) > 0) ? action.waitForDisplayed(this.bookCoverImg) : false,
            bookTitleTxt: (action.getElementCount(this.bookTitleTxt) > 0) ? action.getText(this.bookTitleTxt) : null,
            bookSubtitleTxt: (action.getElementCount(this.bookSubtitleTxt) > 0) ? action.getText(this.bookSubtitleTxt) : null,
            viewBookBtn: (action.getElementCount(this.viewBookBtn) > 0) ? action.getText(this.viewBookBtn) : null,
            productList: null, //for the tabs (inbox, Assignments, Students)
            bookComponentList: null, //for book components in the right pane
        }

        let productData = [], productSelector, isProductSelected, i;
        let productCount = action.getElementCount(this.productTabBtns);
        for (i = 0; i < productCount; i++) {
            productSelector = this.productTabBtns + i + "]";
            productData[i] = action.getText(productSelector);
            isProductSelected = action.getAttribute(productSelector, 'aria-selected');
            if (isProductSelected == 'true') {
                obj.selectedProduct = productData[i];
            }

        }
        let bookComponentData = [];

        languageCount = action.getElementCount(this.bookComponentNamesBtns);
        for (i = 0; i < languageCount; i++) {
            componentSelector = this.bookComponentNamesBtns + i + "]";
            if (action.getElementCount(componentSelector) > 0) {
                bookComponentData[i] = action.getText(componentSelector);
            }
            else
                bookComponentData[i] = "";
        }

        obj.productList = productData;
        obj.bookComponentList = bookComponentData;
        return obj;
    },

    //Clicking on 'Class Options' button launches Class Options - Edit class, add books
    clickClassOptionsButton: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.classOptionsBtn);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- Class Options button is clicked");
            res = this.getClassOptionsList();
        }
        else {
            res = res + "-- Error in clicking View Book button";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    //class options list 
    getClassOptionsList: function () {
        logger.logInto(stackTrace.get());
        obj = {
            editClassBtn: (action.getElementCount(this.editClassBtn) > 0) ? action.getText(this.editClassBtn) : null,
            addBooksBtn: (action.getElementCount(this.addBooksBtn) > 0) ? action.getText(this.addBooksBtn) : null
        }
        return obj;
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
    //Click edit class button on more options.
    clickEditbtn: function () {
        logger.logInto(stackTrace.get());
        action.waitForDisplayed(this.editClassBtn)
        res = action.click(this.editClassBtn);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- Edit btn is clicked");
            res = createClassPage.isInitialized();
        }
        else {
            res = res + "-- Error in clicking Inbox Tab";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },
    //clicking on Inbox Tab
    clickInboxTab: function () {
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
    clickAssignmentsTab: function () {
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
    clickStudentsTab: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.productTabBtns + "2]");
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- Progress Tab is clicked");
            res = this.getStudentPageData();
        }
        else {
            res = res + "-- Error in clicking Progress Tab";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    //Click Invite Students button
    clickInviteStudentsButton: function () {
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
    clickCreateAssignmentsButton: function () {
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
    },
    //Click on View Book button
    clickViewBookbtn: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.viewBookBtn);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- Progress Tab is clicked");
            res = bookDetailsPage.isInitialized();
        }
        else {
            res = res + "-- Error in clicking Progress Tab";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    getStudentPageData: function () {
        pageData = this.isInitialized();
        obj = {
            noStudentIcon: (action.getElementCount(this.noStudentIcon) > 0) ? action.waitForExist(this.noStudentIcon) : null,
            noStudentTitle: (action.getElementCount(this.noStudentTitle) > 0) ? action.getText(this.noStudentTitle) : null,
            noStudentSubTitle: (action.getElementCount(this.noStudentSubTitle) > 0) ? action.getText(this.noStudentSubTitle) : null,
            namelbl: (action.getElementCount(this.namelbl) > 0) ? action.getText(this.namelbl) : null,
            statuslbl: (action.getElementCount(this.statuslbl) > 0) ? action.getText(this.statuslbl) : null,
            studentAvgScorelbl: (action.getElementCount(this.studentAvgScorelbl) > 0) ? action.getText(this.studentAvgScorelbl) : null,
            studentCompletionScorelbl: (action.getElementCount(this.studentCompletionScorelbl) > 0) ? action.getText(this.studentCompletionScorelbl) : null,
        }
        let studentData = [], i;
        let studentcount = action.getElementCount(this.studentList);
        for (i = 0; i < studentcount; i++) {
            studentData[i] =
            {
                studentName: (action.getElementCount(this.studentName + i + "]") > 0) ? action.getText(this.studentName + i + "]") : null,
                studentStatus: (action.getElementCount(this.studentStatus + i + "]") > 0) ? action.getText(this.studentStatus + i + "]") : null,
                studentAvgScore: (action.getElementCount(this.studentAvgScore + i + "-2]") > 0) ? action.getText(this.studentAvgScore + i + "-2]") : null,
                studentCompletionScore: (action.getElementCount(this.studentCompletionScore + i + "-3]") > 0) ? action.getText(this.studentCompletionScore + i + "-3]") : null,
                viewProgressbtn: (action.getElementCount(this.viewProgressbtn + i + "]") > 0) ? action.waitForExist(this.viewProgressbtn + i + "]") : null,
                viewMessagebtn: (action.getElementCount(this.viewMessagebtn + i + "]") > 0) ? action.waitForExist(this.viewMessagebtn + i + "]") : null,
                studentMoreOption: (action.getElementCount(this.studentMoreOption + i + "]") > 0) ? action.waitForExist(this.studentMoreOption + i + "]") : null,
            }

        }
        obj.pageData = pageData;
        obj.studentData = studentData;
        return obj;
    }

}

