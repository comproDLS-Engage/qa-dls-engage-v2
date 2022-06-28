"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
    activityName: selectorFile.css.ComproEngage.writingPlayer.activityName,
    container_LeftPane: selectorFile.css.ComproEngage.writingPlayer.container_LeftPane,
    studentName_lbl: selectorFile.css.ComproEngage.writingPlayer.studentName_lbl,
    submissionDateAndStatus_lbl: selectorFile.css.ComproEngage.writingPlayer.submissionDateAndStatus_lbl,
    gradeStatus_pill: selectorFile.css.ComproEngage.writingPlayer.gradeStatus_pill,
    bookNameSubTitle_lbl: selectorFile.css.ComproEngage.writingPlayer.bookNameSubTitle_lbl,
    activityNameTitle_lbl: selectorFile.css.ComproEngage.writingPlayer.activityNameTitle_lbl,
    container_ToggleExpansion: selectorFile.css.ComproEngage.writingPlayer.container_ToggleExpansion,
    gradingAndFeedback_lbl: selectorFile.css.ComproEngage.writingPlayer.gradingAndFeedback_lbl,
    attempt1_lbl: selectorFile.css.ComproEngage.writingPlayer.attempt1_lbl,
    attempt2_lbl: selectorFile.css.ComproEngage.writingPlayer.attempt2_lbl,
    attempt3_lbl: selectorFile.css.ComproEngage.writingPlayer.attempt3_lbl,
    submittedDate_lbl: selectorFile.css.ComproEngage.writingPlayer.submittedDate_lbl,
    gradedDate_lbl: selectorFile.css.ComproEngage.writingPlayer.gradedDate_lbl,
    reattemptRequested_pill: selectorFile.css.ComproEngage.writingPlayer.reattemptRequested_pill,
    score_icon: selectorFile.css.ComproEngage.writingPlayer.score_icon,
    score_lbl: selectorFile.css.ComproEngage.writingPlayer.score_lbl,
    score_txtbox: selectorFile.css.ComproEngage.writingPlayer.score_txtbox,
    feedback_current_icon: selectorFile.css.ComproEngage.writingPlayer.feedback_current_icon,
    feedback_current_lbl: selectorFile.css.ComproEngage.writingPlayer.feedback_current_lbl,
    feedback_txtbox: selectorFile.css.ComproEngage.writingPlayer.feedback_txtbox,
    feedback_textbox_placeholder: selectorFile.css.ComproEngage.writingPlayer.feedback_textbox_placeholder,
    requestReattempted_lbl: selectorFile.css.ComproEngage.writingPlayer.requestReattempted_lbl,
    requestReattempted_yes_btn: selectorFile.css.ComproEngage.writingPlayer.requestReattempted_yes_btn,
    requestReattempted_no_btn: selectorFile.css.ComproEngage.writingPlayer.requestReattempted_no_btn,
    submitGrade_btn: selectorFile.css.ComproEngage.writingPlayer.submitGrade_btn,
    submitDialog_title: selectorFile.css.ComproEngage.writingPlayer.submitDialog_title,
    submitDialog_subTitle: selectorFile.css.ComproEngage.writingPlayer.submitDialog_subTitle,
    submitDialog_score_icon: selectorFile.css.ComproEngage.writingPlayer.submitDialog_score_icon,
    submitDialog_score_lbl: selectorFile.css.ComproEngage.writingPlayer.submitDialog_score_lbl,
    submitDialog_feedback_icon: selectorFile.css.ComproEngage.writingPlayer.submitDialog_feedback_icon,
    submitDialog_feebback_lbl: selectorFile.css.ComproEngage.writingPlayer.submitDialog_feebback_lbl,
    submitDialog_requestReattempt_icon: selectorFile.css.ComproEngage.writingPlayer.submitDialog_requestReattempt_icon,
    submitDialog_requestReattempt_lbl: selectorFile.css.ComproEngage.writingPlayer.submitDialog_requestReattempt_lbl,
    submitDialog_cancel_btn: selectorFile.css.ComproEngage.writingPlayer.submitDialog_cancel_btn,
    submitDialog_confirm_btn: selectorFile.css.ComproEngage.writingPlayer.submitDialog_confirm_btn,
    feedback_previous_icon: selectorFile.css.ComproEngage.writingPlayer.feedback_previous_icon,
    feedback_previous_lbl: selectorFile.css.ComproEngage.writingPlayer.feedback_previous_lbl,
    feedback_txt: selectorFile.css.ComproEngage.writingPlayer.feedback_txt,
    grade_icon: selectorFile.css.ComproEngage.writingPlayer.grade_icon,
    grade_lbl: selectorFile.css.ComproEngage.writingPlayer.grade_lbl,
    gradeNumber_txt: selectorFile.css.ComproEngage.writingPlayer.gradeNumber_txt,

    isInitialized: async function () { 
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus:  await action.waitForDisplayed(this.container_LeftPane),
            appShellPage:await appShellPage.isInitialized()
        };
        return res; 
    },

    getData_writingPlayerLeftPane: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            container_LeftPane:((await action.getElementCount(this.container_LeftPane)) > 0) ? await action.waitForDisplayed(this.container_LeftPane) : false,
            studentName_lbl:((await action.getElementCount(this.studentName_lbl)) > 0) ? await action.getText(this.studentName_lbl) : null,
            submissionDateAndStatus_lbl:((await action.getElementCount(this.submissionDateAndStatus_lbl)) > 0) ? await action.getText(this.submissionDateAndStatus_lbl) : null,
            gradeStatus_pill:((await action.getElementCount(this.gradeStatus_pill)) > 0) ? await action.getText(this.gradeStatus_pill) : null,
            bookNameSubTitle_lbl:((await action.getElementCount(this.bookNameSubTitle_lbl)) > 0) ? await action.getText(this.bookNameSubTitle_lbl) : null,
            activityNameTitle_lbl:((await action.getElementCount(this.activityNameTitle_lbl)) > 0) ? await action.getText(this.activityNameTitle_lbl) : null,
            container_ToggleExpansion:((await action.getElementCount(this.container_ToggleExpansion)) > 0) ? await action.waitForDisplayed(this.container_ToggleExpansion) : false,
            gradingAndFeedback_lbl:((await action.getElementCount(this.gradingAndFeedback_lbl)) > 0) ? await action.getText(this.gradingAndFeedback_lbl) : null,
            attempt1_lbl:((await action.getElementCount(this.attempt1_lbl)) > 0) ? await action.getText(this.attempt1_lbl) : null,
            attempt2_lbl:((await action.getElementCount(this.attempt2_lbl)) > 0) ? await action.getText(this.attempt2_lbl) : null,
            attempt3_lbl:((await action.getElementCount(this.attempt3_lbl)) > 0) ? await action.getText(this.attempt3_lbl) : null,
            submittedDate_lbl:((await action.getElementCount(this.submittedDate_lbl)) > 0) ? await action.getText(this.submittedDate_lbl) : null,
            gradedDate_lbl:((await action.getElementCount(this.gradedDate_lbl)) > 0) ? await action.getText(this.gradedDate_lbl) : null,
            reattemptRequested_pill:((await action.getElementCount(this.reattemptRequested_pill)) > 0) ? await action.getText(this.reattemptRequested_pill) : null,
            score_icon:((await action.getElementCount(this.score_icon)) > 0) ? await action.getText(this.score_icon) : null,
            score_lbl:((await action.getElementCount(this.score_lbl)) > 0) ? await action.getText(this.score_lbl) : null,
            score_txtbox:((await action.getElementCount(this.score_txtbox)) > 0) ? await action.getText(this.score_txtbox) : null,
            feedback_current_icon:((await action.getElementCount(this.feedback_current_icon)) > 0) ? await action.getText(this.feedback_current_icon) : null,
            feedback_current_lbl:((await action.getElementCount(this.feedback_current_lbl)) > 0) ? await action.getText(this.feedback_current_lbl) : null,
            feedback_textbox_placeholder:((await action.getElementCount(this.feedback_textbox_placeholder)) > 0) ? await action.getText(this.feedback_textbox_placeholder) : null,
            requestReattempted_lbl:((await action.getElementCount(this.requestReattempted_lbl)) > 0) ? await action.getText(this.requestReattempted_lbl) : null,
            requestReattempted_yes_btn:((await action.getElementCount(this.requestReattempted_yes_btn)) > 0) ? await action.getText(this.requestReattempted_yes_btn) : null,
            requestReattempted_no_btn:((await action.getElementCount(this.requestReattempted_no_btn)) > 0) ? await action.getText(this.requestReattempted_no_btn) : null,
            submitGrade_btn:((await action.getElementCount(this.submitGrade_btn)) > 0) ? await action.getText(this.submitGrade_btn) : null,
            feedback_previous_icon:((await action.getElementCount(this.feedback_previous_icon)) > 0) ? await action.getText(this.feedback_previous_icon) : null,
            feedback_previous_lbl:((await action.getElementCount(this.feedback_previous_lbl)) > 0) ? await action.getText(this.feedback_previous_lbl) : null,
            feedback_txt:((await action.getElementCount(this.feedback_txt)) > 0) ? await action.getText(this.feedback_txt) : null,
            grade_icon:((await action.getElementCount(this.grade_icon)) > 0) ? await action.getText(this.grade_icon) : null,
            grade_lbl:((await action.getElementCount(this.grade_lbl)) > 0) ? await action.getText(this.grade_lbl) : null,
            gradeNumber_txt:((await action.getElementCount(this.gradeNumber_txt)) > 0) ? await action.getText(this.gradeNumber_txt) : null,
        }
        return obj; 
    },

    //Function to set a value in the score text area
    set_scoreTextArea: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.score_txtbox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in scoreTextArea");
        } else {
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    //Function to set a value in the feedback text area
    set_feedbackTextArea: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.feedback_txtbox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in feedback_txtbox");
        } else {
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    //Function to click on 'Yes' Radio button
    click_yesRadio_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.requestReattempted_yes_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " requestReattempted_yes_btn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res +"submitDialog_yes_btn is NOT clicked", 'error');
        }
        return res;
    },

    //Function to click on 'No' button
    click_noRadio_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.requestReattempted_no_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " requestReattempted_no_btn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res +"requestReattempted_no_btn is NOT clicked", 'error');
        }
        return res;
    },

    //Function to click on 'Submit Grade' button
    click_submitGrade_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.submitGrade_btn);
        if (true == res) {
            res = await this.getData_submitDialog()
            await logger.logInto(await stackTrace.get(), "submitGrade_btn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res +"submitGrade_btn is NOT clicked", 'error');
        }
        return res;
    },

    getData_submitDialog: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            submitDialog_title:((await action.getElementCount(this.submitDialog_title)) > 0) ? await action.getText(this.submitDialog_title) : null,
            submitDialog_subTitle:((await action.getElementCount(this.submitDialog_subTitle)) > 0) ? await action.getText(this.submitDialog_subTitle) : null,
            submitDialog_score_icon:((await action.getElementCount(this.submitDialog_score_icon)) > 0) ? await action.getText(this.submitDialog_score_icon) : null,
            submitDialog_score_lbl:((await action.getElementCount(this.submitDialog_score_lbl)) > 0) ? await action.getText(this.submitDialog_score_lbl) : null,
            submitDialog_feedback_icon:((await action.getElementCount(this.submitDialog_feedback_icon)) > 0) ? await action.getText(this.submitDialog_feedback_icon) : null,
            submitDialog_feebback_lbl:((await action.getElementCount(this.submitDialog_feebback_lbl)) > 0) ? await action.getText(this.submitDialog_feebback_lbl) : null,
            submitDialog_requestReattempt_icon:((await action.getElementCount(this.submitDialog_requestReattempt_icon)) > 0) ? await action.getText(this.submitDialog_requestReattempt_icon) : null,
            submitDialog_requestReattempt_lbl:((await action.getElementCount(this.submitDialog_requestReattempt_lbl)) > 0) ? await action.getText(this.submitDialog_requestReattempt_lbl) : null,
            submitDialog_cancel_btn:((await action.getElementCount(this.submitDialog_cancel_btn)) > 0) ? await action.getText(this.submitDialog_cancel_btn) : null,
            submitDialog_confirm_btn:((await action.getElementCount(this.submitDialog_confirm_btn)) > 0) ? await action.getText(this.submitDialog_confirm_btn) : null,
        }
        return obj; 
    },

    click_submitDialog_cancel_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.submitDialog_cancel_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " submitDialog_cancel_btn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res +"submitDialog_cancel_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_submitDialog_confirm_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.submitDialog_confirm_btn);
        if (true == res) {
            await browser.pause(2000)
            res = await this.getData_writingPlayerLeftPane()
            await logger.logInto(await stackTrace.get(), " submitDialog_confirm_btn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res +"submitDialog_confirm_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_activity: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.activityName);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " submitDialog_cancel_btn is clicked");
            res = await this.isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res +"submitDialog_cancel_btn is NOT clicked", 'error');
        }
        return res;
    }

}

