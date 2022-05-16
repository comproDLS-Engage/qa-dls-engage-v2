"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
const createClassPage = require('./createClass.page.js');
const bookDetailsPage = require('./viewBook.page.js');
var gradeBookPage = require('./gradeBook.page.js');
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

    isInitialized: async function () {
        await logger.logInto(stackTrace.get());
        await action.waitForDocumentLoad();
        let pageStatus = await action.waitForDisplayed(this.productTabBtns + 0 + "]");
      //  res = this.getViewClassPageData();
       // res.pageStatus = pageStatus;
        return pageStatus;
    },

    getViewClassPageData: async function () {
        await action.waitForDocumentLoad();
        await logger.logInto(stackTrace.get());
        obj = {
            className: ((await action.getElementCount(this.pageTitle)) > 0) ? await action.getText(this.pageTitle) : null,
            classDuration: ((await action.getElementCount(this.pageSubTitle)) > 0) ? await action.getText(this.pageSubTitle) : null,
            gradebookBtn: ((await action.getElementCount(this.gradebookBtn)) > 0) ? await action.getText(this.gradebookBtn) : null,
            classOptionsBtn_exists: ((await action.getElementCount(this.classOptionsBtn)) > 0) ? await action.waitForDisplayed(this.classOptionsBtn) : false,
            productList: ((await action.getElementCount(this.productList)) > 0) ? await action.waitForDisplayed(this.productList) : null,
            bookCoverImg: ((await action.getElementCount(this.bookCoverImg)) > 0) ? await action.waitForDisplayed(this.bookCoverImg) : false,
            bookTitleTxt: ((await action.getElementCount(this.bookTitleTxt)) > 0) ? await action.getText(this.bookTitleTxt) : null,
            bookSubtitleTxt: ((await action.getElementCount(this.bookSubtitleTxt)) > 0) ? await action.getText(this.bookSubtitleTxt) : null,
            viewBookBtn: ((await action.getElementCount(this.viewBookBtn)) > 0) ? await action.getText(this.viewBookBtn) : null,
            productList: null, //for the tabs (inbox, Assignments, Students)
            bookComponentList: null, //for book components in the right pane
        }

        let productData = [], productSelector, isProductSelected, i;
        let productCount = await action.getElementCount(this.productTabBtns);
        for (i = 0; i < productCount; i++) {
            productSelector = this.productTabBtns + i + "]";
            productData[i] = await action.getText(productSelector);
            isProductSelected = await action.getAttribute(productSelector, 'aria-selected');
            if (isProductSelected == 'true') {
                obj.selectedProduct = productData[i];
            }

        }
        let bookComponentData = [];

        languageCount = await action.getElementCount(this.bookComponentNamesBtns);
        for (i = 0; i < languageCount; i++) {
            componentSelector = this.bookComponentNamesBtns + i + "]";
            if ((await action.getElementCount(componentSelector)) > 0) {
                bookComponentData[i] = await action.getText(componentSelector);
            }
            else
                bookComponentData[i] = "";
        }

        obj.productList = productData;
        obj.bookComponentList = bookComponentData;
        console.log(obj)
        return obj;
    },

    //Clicking on 'Class Options' button launches Class Options - Edit class, add books
    clickClassOptionsButton: async function () {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.classOptionsBtn);
        if (res == true) {
            await logger.logInto(stackTrace.get(), "-- Class Options button is clicked");
            res = await this.getClassOptionsList();
        }
        else {
            res = res + "-- Error in clicking View Book button";
            await logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    //class options list 
    getClassOptionsList: async function () {
        await logger.logInto(stackTrace.get());
        obj = {
            editClassBtn: ((await action.getElementCount(this.editClassBtn)) > 0) ? await action.getText(this.editClassBtn) : null,
            addBooksBtn: ((await action.getElementCount(this.addBooksBtn)) > 0) ? await action.getText(this.addBooksBtn) : null
        }
        return obj;
    },

    //Clicking on any book component launches snackbar 'Feature Coming Soon'
    clickBookComponent: async function (componentNumber) { //disable for now, to be reviewed later
        await logger.logInto(stackTrace.get());
        let componentSelector = this.bookComponentNames_btn + (componentNumber) + "]";
        res = await action.click(componentSelector);
        if (res == true) {
            await logger.logInto(stackTrace.get(), "-- Selected component is clicked");
            res = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();

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
            await logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },
    //Click edit class button on more options.
    clickEditbtn: async function () {
        await logger.logInto(stackTrace.get());
        await action.waitForDisplayed(this.editClassBtn)
        res = await action.click(this.editClassBtn);
        if (res == true) {
            await logger.logInto(stackTrace.get(), "-- Edit btn is clicked");
            res = await createClassPage.isInitialized();
        }
        else {
            res = res + "-- Error in clicking Inbox Tab";
            await logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },
    //clicking on Inbox Tab
    clickInboxTab: async function () {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.inboxTab);
        if (res == true) {
            await logger.logInto(stackTrace.get(), "-- Inbox Tab is clicked");
            res = await this.isInitialized();
        }
        else {
            res = res + "-- Error in clicking Inbox Tab";
            await logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    //clicking on Assignment Tab
    clickAssignmentsTab: async function () {
        await logger.logInto(stackTrace.get());
        await action.waitForDisplayed(this.assignmentsTab);
        res = await action.click(this.assignmentsTab);
        if (res == true) {
            await logger.logInto(stackTrace.get(), "-- Assignment Tab is clicked");
            res =await require ('./assignmentListTeacher.page').isInitialized();
        }
        else {
            res = res + "-- Error in clicking Assignment Tab";
            await logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    //clicking on Progress Tab
    clickStudentsTab: async function () {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.productTabBtns + "2]");
        if (res == true) {
            await logger.logInto(stackTrace.get(), "-- Progress Tab is clicked");
            res = await this.getStudentPageData();
        }
        else {
            res = res + "-- Error in clicking Progress Tab";
            await logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    //Click Invite Students button
    clickInviteStudentsButton: async function () {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.inviteStudents_btn);
        if (res == true) {
            await logger.logInto(stackTrace.get(), "-- Invite Students button is clicked");
            res = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();

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
            await logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    //Click Create Assignments button
    clickCreateAssignmentsButton: async function () {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.createAssignments_btn);
        if (res == true) {
            await logger.logInto(stackTrace.get(), "-- Invite Students button is clicked");
            res = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();

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
            await logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },
    //Click on View Book button
    clickViewBookbtn: async function () {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.viewBookBtn);
        if (res == true) {
            await logger.logInto(stackTrace.get(), "-- Progress Tab is clicked");
            res = await bookDetailsPage.isInitialized();
        }
        else {
            res = res + "-- Error in clicking Progress Tab";
            await logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },
    clickGradeBookbtn: async function () {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.gradebookBtn);
        if (res == true) {
            await logger.logInto(stackTrace.get(), "-- gradebookBtn is clicked");
            res = await gradeBookPage.isInitialized();
        }
        else {
            res = res + "-- Error in clicking gradebookBtn";
            await logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },
    getStudentPageData: async function () {
        pageData = await this.getViewClassPageData();
        obj = {
            noStudentIcon: ((await action.getElementCount(this.noStudentIcon)) > 0) ? await action.waitForExist(this.noStudentIcon) : null,
            noStudentTitle: ((await action.getElementCount(this.noStudentTitle)) > 0) ? await action.getText(this.noStudentTitle) : null,
            noStudentSubTitle: ((await action.getElementCount(this.noStudentSubTitle)) > 0) ? await action.getText(this.noStudentSubTitle) : null,
            namelbl: ((await action.getElementCount(this.namelbl)) > 0) ? await action.getText(this.namelbl) : null,
            statuslbl: ((await action.getElementCount(this.statuslbl)) > 0) ? await action.getText(this.statuslbl) : null,
            studentAvgScorelbl: ((await action.getElementCount(this.studentAvgScorelbl)) > 0) ? await action.getText(this.studentAvgScorelbl) : null,
            studentCompletionScorelbl: ((await action.getElementCount(this.studentCompletionScorelbl)) > 0) ? await action.getText(this.studentCompletionScorelbl) : null,
        }
        let studentData = [], i;
        let studentcount = await action.getElementCount(this.studentList);
        for (i = 0; i < studentcount; i++) {
            studentData[i] =
            {
                studentName: ((await action.getElementCount(this.studentName + i + "]")) > 0) ? await action.getText(this.studentName + i + "]") : null,
                studentStatus: ((await action.getElementCount(this.studentStatus + i + "]")) > 0) ? await action.getText(this.studentStatus + i + "]") : null,
                studentAvgScore: ((await action.getElementCount(this.studentAvgScore + i + "-2]")) > 0) ? await action.getText(this.studentAvgScore + i + "-2]") : null,
                studentCompletionScore: ((await action.getElementCount(this.studentCompletionScore + i + "-3]")) > 0) ? await action.getText(this.studentCompletionScore + i + "-3]") : null,
                viewProgressbtn: ((await action.getElementCount(this.viewProgressbtn + i + "]")) > 0) ? await action.waitForExist(this.viewProgressbtn + i + "]") : null,
                viewMessagebtn: ((await action.getElementCount(this.viewMessagebtn + i + "]")) > 0) ? await action.waitForExist(this.viewMessagebtn + i + "]") : null,
                studentMoreOption: ((await action.getElementCount(this.studentMoreOption + i + "]")) > 0) ? await action.waitForExist(this.studentMoreOption + i + "]") : null,
            }

        }
        obj.pageData = pageData;
        obj.studentData = studentData;
        return obj;
    }

}

