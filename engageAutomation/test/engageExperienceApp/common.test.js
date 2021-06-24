"use strict";
let sts;
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

   // player_header: selectorFile.css.ComproEngage.TestPlayer.player_header,
    headerBack_btn: selectorFile.css.ComproEngage.widgets.headerBack_btn,
    menuBar_btn: selectorFile.css.ComproEngage.widgets.menuBar_btn,
    logOut_btn: selectorFile.css.ComproEngage.widgets.logOut_btn,
    courseName_btn: selectorFile.css.ComproEngage.widgets.courseName_btn,
    class_btn: selectorFile.css.ComproEngage.widgets.class_btn,
   // myClassesTab: selectorFile.css.ComproEngage.myClassPage.myClassesTab,
    //snackbar alerts
    snackbarInfo_txt: selectorFile.css.ComproEngage.widgets.snackbarInfo_txt,
    snackbarClose_btn: selectorFile.css.ComproEngage.widgets.snackbarClose_btn,
    
    logout_from_app: function () {
        let header = require('../../pages/engageExperienceApp/header.page.js');
        sts = header.clickProfileMenuSignout();
        // if (sts.status == undefined || sts.status != true) {
        //     browser.reloadSession();
        // }
    },

    get_Snackbar_Message_Text: function () {
        let res = action.waitForDisplayed(this.snackbarInfo_txt)
        if (res == true) {
            res = action.getText(this.snackbarInfo_txt)
            logger.logInto(stackTrace.get(), res);
            action.click(this.snackbarClose_btn)
        } else
            logger.logInto(stackTrace.get(), res + " -- Snackbar Alert Not displayed");
        return res;
    },

    closeBrowserWindow: function () {
        logger.logInto(stackTrace.get());
        browser.reloadSession();
        browser.maximizeWindow();
    },

    /*click_GoBack: function (testdata) {
        let header = require('../../pages/engageExperienceApp/header.page');
        header.moveToPreviousPage();
    },*/

    /*click_CourseName_onHeader: function () {
        logger.logInto(stackTrace.get());
        action.click(this.courseName_btn);
        action.waitForDocumentLoad();
    },*/

    clickMenuClass_btn: function () {
        action.waitForDisplayed(this.class_btn)
        action.click(this.class_btn)
        action.waitForDisplayed(this.myClassesTab);
    },

    /*completerQuiz: function () {
        if (action.getElementCount(testPlayerPage.player_header) > 0) {
            value = action.getText(testPlayerPage.player_header)
            var value2 = (action.getText(testPlayerPage.player_header)).substring(value.lastIndexOf(" ") + 1);
            var remaning = value2.substring(0, value2.indexOf("/"));
            var total = value2.substring(value2.indexOf("/") + 1);
            for (var i = 1; i <= (total - remaning); i++) {
                sts = testPlayerPage.click_Skip();
            }
            if (action.getElementCount(testPlayerPage.finish_btn) > 0)
                sts = testPlayerPage.click_Finish();
            else if (action.getElementCount(testPlayerPage.closeReview_btn) > 0)
                sts = testPlayerPage.click_closeReview();
            else
                throw new Error("Neither finish nor close review button was found to complete the quiz!!")
        }
    },*/

    calculateDate: function (count) {
        count = parseInt(count)
        if (count) { var fulldate = new Date(new Date().setDate(new Date().getDate() + count)); } else { var fulldate = new Date(); }
        var date = ("0" + fulldate.getDate()).slice(-2);
        var month = fulldate.toLocaleString('default', { month: 'short' });
        var formattedDate = date + ' ' + month + ', ' + new Date().getFullYear();
        return formattedDate;
    },

    /*skipToQuestion: function (questionNumber) {
        if (action.getElementCount(testPlayerPage.player_header) > 0) {
            value = action.getText(testPlayerPage.player_header)
            // console.log(value)
            var value2 = (action.getText(testPlayerPage.player_header)).substring(value.lastIndexOf(" ") + 1);
            // console.log(value2)
            var currentQuestion = value2.substring(0, value2.indexOf("/"));
            // console.log(currentQuestion)

            if (questionNumber >= currentQuestion) {
                for (var i = 1; i <= (questionNumber - currentQuestion); i++) {
                    sts = testPlayerPage.click_Skip();
                }
            } else
                throw new Error("Cannot Skip to questionNumber!" + questionNumber + ".Current Question:" + currentQuestion)
        }
    }*/
}