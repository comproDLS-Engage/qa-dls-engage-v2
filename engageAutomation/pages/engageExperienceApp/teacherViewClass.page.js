"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
const createClassPage = require('./createClass.page.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj;
var componentSelector, languageCount, i;
module.exports = {
    pageTitle: selectorFile.css.ComproEngage.teacherViewClassPage.pageTitle,
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
            className: (action.getElementCount(this.pageTitle) > 0) ? action.getText(this.pageTitle) : null,
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
            isProductSelected = action.getAttribute(this.productSelector, 'aria-selected');
            if (isProductSelected == true) {
                obj.selectedProduct = productData[i];
            }
        }
        let bookComponentData = [];
        
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

