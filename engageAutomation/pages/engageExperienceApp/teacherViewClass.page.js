"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
const createClassPage = require('./createClass.page.js');

const bookDetailsPage = require('./viewBook.page.js');
var gradeBookPage = require('./gradeBook.page.js');
const { confirmPassword_input } = require('./settings.page.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj, pageData;
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
    assignmentsTab: selectorFile.css.ComproEngage.teacherViewClassPage.assignmentsTab,
    bookComponentUnits: selectorFile.css.ComproEngage.teacherViewClassPage.bookComponentUnits,
    bookComponentActivities: selectorFile.css.ComproEngage.teacherViewClassPage.bookComponentActivities,
    usingClasses_lbl: selectorFile.css.ComproEngage.teacherViewClassPage.usingClasses_lbl,
    usingClassesByline_lbl: selectorFile.css.ComproEngage.teacherViewClassPage.usingClassesByline_lbl,
    inviteStudents_btn: selectorFile.css.ComproEngage.teacherViewClassPage.inviteStudents_btn,
    createAssignments_btn: selectorFile.css.ComproEngage.teacherViewClassPage.createAssignments_btn,
    createAssignment_lbl: selectorFile.css.ComproEngage.teacherViewClassPage.createAssignment_lbl,
    createAssignmentByline_lbl: selectorFile.css.ComproEngage.teacherViewClassPage.createAssignmentByline_lbl,
    noInboxActivity_lbl: selectorFile.css.ComproEngage.teacherViewClassPage.noInboxActivity_lbl,
    noInboxActivityByline_lbl: selectorFile.css.ComproEngage.teacherViewClassPage.noInboxActivityByline_lbl,
    inviteStudentsdropDown_btn: selectorFile.css.ComproEngage.teacherViewClassPage.inviteStudentsdropDown_btn,
    inviteStudents_lbl: selectorFile.css.ComproEngage.teacherViewClassPage.inviteStudents_lbl,
    inviteStudentsByline_lbl: selectorFile.css.ComproEngage.teacherViewClassPage.inviteStudentsByline_lbl,
    reviewBox_Title: selectorFile.css.ComproEngage.teacherViewClassPage.reviewBox_Title,
    reviewBox_SubTitle: selectorFile.css.ComproEngage.teacherViewClassPage.reviewBox_SubTitle,
    reviewBox_Cancelbtn: selectorFile.css.ComproEngage.teacherViewClassPage.reviewBox_Cancelbtn,
    reviewBox_icon: selectorFile.css.ComproEngage.teacherViewClassPage.reviewBox_icon,
    assignmentCardStudentName: selectorFile.css.ComproEngage.teacherViewClassPage.assignmentCardStudentName,
    assignmentCardActivityText: selectorFile.css.ComproEngage.teacherViewClassPage.assignmentCardActivityText,
    assignmentCardActivityDate: selectorFile.css.ComproEngage.teacherViewClassPage.assignmentCardActivityDate,
    assignmentCardActivityName: selectorFile.css.ComproEngage.teacherViewClassPage.assignmentCardActivityName,
    assignmentCardUnitName: selectorFile.css.ComproEngage.teacherViewClassPage.assignmentCardUnitName,
    archivedlbl:selectorFile.css.ComproEngage.teacherViewClassPage.archivedlbl,
    archivedMsg:selectorFile.css.ComproEngage.teacherViewClassPage.archivedMsg,
    invitePageHeader: selectorFile.css.ComproEngage.invitePage.invitePageHeader,
    invitePageSubHeader: selectorFile.css.ComproEngage.invitePage.invitePageSubHeader,
    cancelInvitebtn: selectorFile.css.ComproEngage.invitePage.cancelInvitebtn,
    copyInvitationbtn: selectorFile.css.ComproEngage.invitePage.copyInvitationbtn,
    inviteImgLogo: selectorFile.css.ComproEngage.invitePage.inviteImgLogo,
    inviteEmail_btn: selectorFile.css.ComproEngage.gradeBook.inviteEmail,
    isInitialized: async function () {
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        let pageStatus = await action.waitForDisplayed(this.productTabBtns + 0 + "]");
        //  res = this.getViewClassPageData();
        // res.pageStatus = pageStatus;
        return pageStatus;
    },

    getViewClassPageData: async function () {
        await action.waitForDocumentLoad();
        await logger.logInto(await stackTrace.get());
        await action.waitForDisplayed(this.productTabBtns + 0 + "]")
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
            productList: ((await action.getElementCount(this.productList)) > 0) ? await action.waitForDisplayed(this.productList) : null,
            usingClasses_lbl: ((await action.getElementCount(this.usingClasses_lbl)) > 0) ? await action.getText(this.usingClasses_lbl) : false,
            usingClassesByline_lbl: ((await action.getElementCount(this.usingClassesByline_lbl)) > 0) ? await action.getText(this.usingClassesByline_lbl) : null,
            inviteStudents_btn: ((await action.getElementCount(this.inviteStudents_btn)) > 0) ? await action.getText(this.inviteStudents_btn) : null,
            createAssignments_btn: ((await action.getElementCount(this.createAssignments_btn)) > 0) ? await action.getText(this.createAssignments_btn) : null,
            createAssignment_lbl: ((await action.getElementCount(this.createAssignment_lbl)) > 0) ? await action.getText(this.createAssignment_lbl) : false,
            createAssignmentByline_lbl: ((await action.getElementCount(this.createAssignmentByline_lbl)) > 0) ? await action.getText(this.createAssignmentByline_lbl) : null,
            noInboxActivity_lbl: ((await action.getElementCount(this.noInboxActivity_lbl)) > 0) ? await action.getText(this.noInboxActivity_lbl) : null,
            noInboxActivityByline_lbl: ((await action.getElementCount(this.noInboxActivityByline_lbl)) > 0) ? await action.getText(this.noInboxActivityByline_lbl) : null,
            inviteStudentsdropDown_btn: ((await action.getElementCount(this.inviteStudentsdropDown_btn)) > 0) ? await action.getText(this.inviteStudentsdropDown_btn) : null,
            inviteStudents_lbl: ((await action.getElementCount(this.inviteStudents_lbl)) > 0) ? await action.getText(this.inviteStudents_lbl) : null,
            inviteStudentsByline_lbl: ((await action.getElementCount(this.inviteStudentsByline_lbl)) > 0) ? await action.getText(this.inviteStudentsByline_lbl) : null,
            reviewBox_Title: ((await action.getElementCount(this.reviewBox_Title)) > 0) ? await action.getText(this.reviewBox_Title) : null,
            reviewBox_SubTitle: ((await action.getElementCount(this.reviewBox_SubTitle)) > 0) ? await action.getText(this.reviewBox_SubTitle) : null,
            reviewBox_Cancelbtn: ((await action.getElementCount(this.reviewBox_Cancelbtn)) > 0) ? await action.waitForDisplayed(this.reviewBox_Cancelbtn) : null,
            reviewBox_icon: ((await action.getElementCount(this.reviewBox_icon)) > 0) ? await action.waitForDisplayed(this.reviewBox_icon) : false,
            archivedlbl:((await action.getElementCount(this.archivedlbl)) > 0) ? await action.getText(this.archivedlbl) : null,
            archivedMsg:((await action.getElementCount(this.archivedMsg)) > 0) ? await action.getText(this.archivedMsg) : null,
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
                bookComponentData[i] = {
                    bookComponentData: ((await action.getElementCount(this.bookComponentNamesBtns + i + "]")) > 0) ? await action.getText(this.bookComponentNamesBtns + i + "]") : null,
                    bookComponentUnits: ((await action.getElementCount(this.bookComponentUnits + i + "]")) > 0) ? await action.getText(this.bookComponentUnits + i + "]") : null,
                    bookComponentActivities: ((await action.getElementCount(this.bookComponentActivities + i + "]")) > 0) ? await action.getText(this.bookComponentActivities + i + "]") : null
                }
            }
            else
                bookComponentData[i] = "";
        }

        obj.productList = productData;
        obj.bookComponentList = bookComponentData;
        return obj;
    },

    //Clicking on 'Class Options' button launches Class Options - Edit class, add books
    clickClassOptionsButton: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.classOptionsBtn);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- Class Options button is clicked");
            await action.waitForDisplayed(this.editClassBtn)
            res = this.getClassOptionsList();
        }
        else {
            res = res + "-- Error in clicking View Book button";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    getData_activityGradeCard: async function (assignmentCardActivityNameName) {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        await action.waitForDisplayed(this.assignmentCardActivityName);
        var list = await action.findElements(this.assignmentCardActivityName);
        console.log(list.length)
        if (assignmentCardActivityNameName) {
            for (var i = 0; i < list.length; i++) {
                console.log(assignmentCardActivityNameName)
                console.log(await action.getText(this.assignmentCardActivityName + i))
                if ((await action.getText(this.assignmentCardActivityName + i)) == assignmentCardActivityNameName) {
                    obj[0] = {
                        assignmentCardStudentName: ((await action.getElementCount(this.assignmentCardStudentName + i + "]")) > 0) ? await action.getText(this.assignmentCardStudentName + i + "]") : null,
                        assignmentCardActivityText: ((await action.getElementCount(this.assignmentCardActivityText + i + "]")) > 0) ? await action.getText(this.assignmentCardActivityText + i + "]") : null,
                        assignmentCardActivityDate: ((await action.getElementCount(this.assignmentCardActivityDate + i + "]")) > 0) ? await action.getText(this.assignmentCardActivityDate + i + "]") : null,
                        assignmentCardActivityName: ((await action.getElementCount(this.assignmentCardActivityName + i + "]")) > 0) ? await action.getText(this.assignmentCardActivityName + i + "]") : null,
                        assignmentCardUnitName: ((await action.getElementCount(this.assignmentCardUnitName + i + "]")) > 0) ? await action.getText(this.assignmentCardUnitName + i + "]") : null,
                    }
                    break;
                }
            }
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    assignmentCardStudentName: ((await action.getElementCount(this.assignmentCardStudentName + i + "]")) > 0) ? await action.getText(this.assignmentCardStudentName + i + "]") : null,
                    assignmentCardActivityText: ((await action.getElementCount(this.assignmentCardActivityText + i + "]")) > 0) ? await action.getText(this.assignmentCardActivityText + i + "]") : null,
                    assignmentCardActivityDate: ((await action.getElementCount(this.assignmentCardActivityDate + i + "]")) > 0) ? await action.getText(this.assignmentCardActivityDate + i + "]") : null,
                    assignmentCardActivityName: ((await action.getElementCount(this.assignmentCardActivityName + i + "]")) > 0) ? await action.getText(this.assignmentCardActivityName + i + "]") : null,
                    assignmentCardUnitName: ((await action.getElementCount(this.assignmentCardUnitName + i + "]")) > 0) ? await action.getText(this.assignmentCardUnitName + i + "]") : null,
                }
            }
        }
        return obj;
    },


    click_reviewBox_Cancelbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.reviewBox_Cancelbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " reviewBox_Cancelbtn is clicked");
            res = await this.getViewClassPageData()
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "reviewBox_Cancelbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_assignmentCardActivityName: async function (assignmentCardActivityNameName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        await action.waitForDisplayed(this.assignmentCardActivityName);
        list = await action.findElements(this.assignmentCardActivityName);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.assignmentCardActivityName + i + "]"))) == assignmentCardActivityNameName) {
                res = await action.click(list[i]);
                if (res == true)
                    res = await require('./openActivityPlayer.page').isInitialized();
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --assignmentCardActivityName clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), " --assignmentCardActivityName NOT clicked", "error")
        return res;
    },

    //class options list 
    getClassOptionsList: async function () {
        await logger.logInto(await stackTrace.get());
        obj = {
            editClassBtn: ((await action.getElementCount(this.editClassBtn)) > 0) ? await action.getText(this.editClassBtn) : null,
            addBooksBtn: ((await action.getElementCount(this.addBooksBtn)) > 0) ? await action.getText(this.addBooksBtn) : null
        }
        return obj;
    },

    //Clicking on any book component launches snackbar 'Feature Coming Soon'
    clickBookComponent: async function (componentNumber) { //disable for now, to be reviewed later
        await logger.logInto(await stackTrace.get());
        let componentSelector = this.bookComponentNames_btn + (componentNumber) + "]";
        res = await action.click(componentSelector);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), "-- Selected component is clicked");
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
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },
    //Click edit class button on more options.
    clickEditbtn: async function () {
        await logger.logInto(await stackTrace.get());
        await action.waitForDisplayed(this.editClassBtn)
        res = await action.click(this.editClassBtn);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), "-- Edit btn is clicked");
            res = await createClassPage.isInitialized();
        }
        else {
            res = res + "-- Error in clicking Inbox Tab";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },
    //clicking on Inbox Tab
    clickInboxTab: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.inboxTab);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), "-- Inbox Tab is clicked");
            res = await this.isInitialized();
        }
        else {
            res = res + "-- Error in clicking Inbox Tab";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    //clicking on Assignment Tab
    clickAssignmentsTab: async function () {
        await logger.logInto(await stackTrace.get());
        await action.waitForDisplayed(this.assignmentsTab);
        res = await action.click(this.assignmentsTab);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), "-- Assignment Tab is clicked");
            res = await require('./assignmentListTeacher.page').isInitialized();
        }
        else {
            res = res + "-- Error in clicking Assignment Tab";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    //clicking on Progress Tab
    clickStudentsTab: async function () {
        await logger.logInto(await stackTrace.get());
        action.waitForDisplayed(this.productTabBtns + "2]")
        res = await action.click(this.productTabBtns + "2]");
        if (res == true) {
            await logger.logInto(await stackTrace.get(), "-- Progress Tab is clicked");
            res = await this.getStudentPageData();
        }
        else {
            res = res + "-- Error in clicking Progress Tab";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    //Click Invite Students button
    clickInviteStudentsButton: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.inviteStudentsdropDown_btn);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), "-- Invite Students button is clicked");
            res = await action.waitForDisplayed(this.inviteEmail_btn)

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
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    //Click Create Assignments button
    clickCreateAssignmentsButton: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.createAssignments_btn);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), "-- Invite Students button is clicked");
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
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },
    //Click on View Book button
    clickViewBookbtn: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.viewBookBtn);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), "-- Progress Tab is clicked");
            res = await bookDetailsPage.isInitialized();
        }
        else {
            res = res + "-- Error in clicking Progress Tab";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },
    clickGradeBookbtn: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.gradebookBtn);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), "-- gradebookBtn is clicked");
            res = await gradeBookPage.isInitialized();
        }
        else {
            res = res + "-- Error in clicking gradebookBtn";
            await logger.logInto(await stackTrace.get(), res, 'error');
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
        // await action.waitForDisplayed(this.studentName+0)
        let studentcount = await action.getElementCount(this.studentName);
        console.log(studentcount)
        for (i = 0; i < studentcount; i++) {
            console.log(this.studentCompletionScore + i + "-3]")
            studentData[i] =
            {
                studentName: ((await action.getElementCount(this.studentName + i + "-0] span")) > 0) ? await action.getText(this.studentName + i + "-0]") : null,
                studentStatus: ((await action.getElementCount(this.studentStatus + i + "-1] p")) > 0) ? await action.getText(this.studentStatus + i + "-1]") : null,
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
    },

    isInitializedInvitePOPUP: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.inviteImgLogo)
        };
        return res;
    },

    getData_invitePage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            invitePageHeader: ((await action.getElementCount(this.invitePageHeader)) > 0) ? await action.getText(this.invitePageHeader) : null,
            invitePageSubHeader: ((await action.getElementCount(this.invitePageSubHeader)) > 0) ? await action.getText(this.invitePageSubHeader) : null,
            cancelInvitebtn: ((await action.getElementCount(this.cancelInvitebtn)) > 0) ? await action.getText(this.cancelInvitebtn) : null,
            copyInvitationbtn: ((await action.getElementCount(this.copyInvitationbtn)) > 0) ? await action.getText(this.copyInvitationbtn) : null,
            inviteImgLogo: ((await action.getElementCount(this.inviteImgLogo)) > 0) ? await action.waitForDisplayed(this.inviteImgLogo) : false,
        }
        return obj;
    },


    click_cancelInvitebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.cancelInvitebtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " cancelInvitebtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "cancelInvitebtn is NOT clicked", 'error');
        }
        return res;
    },

    click_copyInvitationbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.copyInvitationbtn);
        if (true == res) {
            res= await action.getText(this.copyInvitationbtn);
            await logger.logInto(await stackTrace.get(), " copyInvitationbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "copyInvitationbtn is NOT clicked", 'error');
        }
        return res;
    },

}

