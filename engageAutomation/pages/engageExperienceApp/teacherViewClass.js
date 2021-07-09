"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj;

module.exports = {
    pageTitle: selectorFile.css.ComproEngage.teacherViewClassPage.pageTitle,
    gradebookBtn: selectorFile.css.ComproEngage.teacherViewClassPage.gradebookBtn,
    classOptionsBtn: selectorFile.css.ComproEngage.teacherViewClassPage.classOptionsBtn,
    editClassBtn: selectorFile.css.ComproEngage.teacherViewClassPage.editClassBtn,
    addBooksBtn: selectorFile.css.ComproEngage.teacherViewClassPage.addBooksBtn,
    dataSubtitle: selectorFile.css.ComproEngage.teacherViewClassPage.dataSubtitle,
    productTabBtns: selectorFile.css.ComproEngage.teacherViewClassPage.productTabBtns,
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
        res = this.getViewClassPageData();
        res.pageStatus = pageStatus;
        return res;
    },

    getViewClassPageData: function () {
        logger.logInto(stackTrace.get());
        obj = {
            pageTitle: (action.getElementCount(this.pageTitle) > 0) ? action.getText(this.pageTitle) : null,
            gradebookBtn: (action.getElementCount(this.gradebookBtn) > 0) ? action.getText(this.gradebookBtn) : null,
            classOptionsBtn_exists: (action.getElementCount(this.classOptionsBtn) > 0) ? action.waitForDisplayed(this.classOptionsBtn) : false,
            productList: (action.getElementCount(this.productList) > 0) ? action.waitForDisplayed(this.productList) : null,
            //* *static data has been commented for now */
            //usingClasses_lbl: (action.getElementCount(this.usingClasses_lbl) > 0) ? action.getText(this.usingClasses_lbl) : null,
            //usingClassesByline_lbl: (action.getElementCount(this.usingClassesByline_lbl) > 0) ? action.getText(this.usingClassesByline_lbl) : null,
            //facebookbtn_icon: (action.getElementCount(this.facebookbtn_icon) > 0) ? action.waitForDisplayed(this.facebookbtn_icon) : false,
            //createAssignment_lbl: (action.getElementCount(this.createAssignment_lbl) > 0) ? action.getText(this.createAssignment_lbl) : null,
            //createAssignmentByline_lbl: (action.getElementCount(this.createAssignmentByline_lbl) > 0) ? action.getText(this.createAssignmentByline_lbl) : null,
            //noInboxActivity_lbl: (action.getElementCount(this.noInboxActivity_lbl) > 0) ? action.getText(this.noInboxActivity_lbl) : null,
            //noInboxActivityByline_lbl: (action.getElementCount(this.noInboxActivityByline_lbl) > 0) ? action.getText(this.noInboxActivityByline_lbl) : null,
            bookCoverImg: (action.getElementCount(this.bookCoverImg) > 0) ? action.getTwaitForDisplayedext(this.bookCoverImg) : false,
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
            isProductSelected = action.getAttribute(this.productSelector, "aria-selected")
            if (isProductSelected == true) {
                obj.selectedProduct = productData[i];
            }
        }
        let bookComponentData = [];
        let componentSelector, languageCount, i;
        languageCount = action.getElementCount(this.bookComponentNamesBtns);
        for (i = 0; i < languageCount; i++) {
            componentSelector = this.bookComponentNamesBtns + i + "]";
            bookComponentData[i] = action.getText(componentSelector);
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
    }

}

