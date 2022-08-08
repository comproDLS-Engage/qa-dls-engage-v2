"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {

    showDetailsBtn: selectorFile.css.ComproEngage.openActivityPlayer.showDetailsBtn,
    infoBtn: selectorFile.css.ComproEngage.openActivityPlayer.infoBtn,
    leftPanelHidden: selectorFile.css.ComproEngage.openActivityPlayer.leftPanelHidden,
    yourScoreLabel: selectorFile.css.ComproEngage.openActivityPlayer.yourScoreLabel,
    yourScoreValue: selectorFile.css.ComproEngage.openActivityPlayer.yourScoreValue,
    feedbackBtn: selectorFile.css.ComproEngage.openActivityPlayer.feedbackBtn,
    submittedOn: selectorFile.css.ComproEngage.openActivityPlayer.submittedOn,
    gradedOn: selectorFile.css.ComproEngage.openActivityPlayer.gradedOn,
    closeBtn: selectorFile.css.ComproEngage.openActivityPlayer.closeBtn,
    submitActivityBtn: selectorFile.css.ComproEngage.openActivityPlayer.submitActivityBtn,
    submitGradeBtn: selectorFile.css.ComproEngage.openActivityPlayer.submitGradeBtn,
    retakeOpenActivityBtn: selectorFile.css.ComproEngage.openActivityPlayer.retakeOpenActivityBtn,
    snackbarMsg: selectorFile.css.ComproEngage.openActivityPlayer.snackbarMsg,
    gradingTitle: selectorFile.css.ComproEngage.openActivityPlayer.gradingTitle,
    gradingSubtitle: selectorFile.css.ComproEngage.openActivityPlayer.gradingSubtitle,
    statusPill: selectorFile.css.ComproEngage.openActivityPlayer.statusPill,
    bookName: selectorFile.css.ComproEngage.openActivityPlayer.bookName,
    activityName: selectorFile.css.ComproEngage.openActivityPlayer.activityName,
    cardTitle: selectorFile.css.ComproEngage.openActivityPlayer.cardTitle,
    cardSubtitle: selectorFile.css.ComproEngage.openActivityPlayer.cardSubtitle,
    cardText: selectorFile.css.ComproEngage.openActivityPlayer.cardText,
    attempt1Label: selectorFile.css.ComproEngage.openActivityPlayer.attempt1Label,
    attempt2Label: selectorFile.css.ComproEngage.openActivityPlayer.attempt2Label,
    attempt3Label: selectorFile.css.ComproEngage.openActivityPlayer.attempt3Label,
    attempt1ExpansionBtn: selectorFile.css.ComproEngage.openActivityPlayer.attempt1ExpansionBtn,
    attempt1SubmittedTime: selectorFile.css.ComproEngage.openActivityPlayer.attempt1SubmittedTime,
    attempt1GradedTime: selectorFile.css.ComproEngage.openActivityPlayer.attempt1GradedTime,
    attempt1StatusPill: selectorFile.css.ComproEngage.openActivityPlayer.attempt1StatusPill,
    attempt1GradeLabel: selectorFile.css.ComproEngage.openActivityPlayer.attempt1GradeLabel,
    attempt1GradeValue: selectorFile.css.ComproEngage.openActivityPlayer.attempt1GradeValue,
    attempt1FeedbackLabel: selectorFile.css.ComproEngage.openActivityPlayer.attempt1FeedbackLabel,
    attempt1FeedbackValue: selectorFile.css.ComproEngage.openActivityPlayer.attempt1FeedbackValue,
    attempt2ExpansionBtn: selectorFile.css.ComproEngage.openActivityPlayer.attempt2ExpansionBtn,
    attempt2SubmittedTime: selectorFile.css.ComproEngage.openActivityPlayer.attempt2SubmittedTime,
    attempt2GradedTime: selectorFile.css.ComproEngage.openActivityPlayer.attempt2GradedTime,
    attempt2StatusPill: selectorFile.css.ComproEngage.openActivityPlayer.attempt2StatusPill,
    attempt2GradeLabel: selectorFile.css.ComproEngage.openActivityPlayer.attempt2GradeLabel,
    attempt2GradeValue: selectorFile.css.ComproEngage.openActivityPlayer.attempt2GradeValue,
    attempt2FeedbackLabel: selectorFile.css.ComproEngage.openActivityPlayer.attempt2FeedbackLabel,
    attempt2FeedbackValue: selectorFile.css.ComproEngage.openActivityPlayer.attempt2FeedbackValue,
    scoreLabel: selectorFile.css.ComproEngage.openActivityPlayer.scoreLabel,
    scoreInput: selectorFile.css.ComproEngage.openActivityPlayer.scoreInput,
    feedbackLabel: selectorFile.css.ComproEngage.openActivityPlayer.feedbackLabel,
    feedbackInput: selectorFile.css.ComproEngage.openActivityPlayer.feedbackInput,
    reattemptLabel: selectorFile.css.ComproEngage.openActivityPlayer.reattemptLabel,
    reattemptYesBtn: selectorFile.css.ComproEngage.openActivityPlayer.reattemptYesBtn,
    reattemptNoBtn: selectorFile.css.ComproEngage.openActivityPlayer.reattemptNoBtn,
    submitBtn: selectorFile.css.ComproEngage.openActivityPlayer.submitBtn,
    scoreError: selectorFile.css.ComproEngage.openActivityPlayer.scoreError,
    submitGradeDialogTitle: selectorFile.css.ComproEngage.openActivityPlayer.submitGradeDialogTitle,
    submitGradeDialogSubtitle: selectorFile.css.ComproEngage.openActivityPlayer.submitGradeDialogSubtitle,
    submitGradeDialogScoreLabel: selectorFile.css.ComproEngage.openActivityPlayer.submitGradeDialogScoreLabel,
    submitGradeDialogScoreValue: selectorFile.css.ComproEngage.openActivityPlayer.submitGradeDialogScoreValue,
    submitGradeDialogFeedbackLabel: selectorFile.css.ComproEngage.openActivityPlayer.submitGradeDialogFeedbackLabel,
    submitGradeDialogFeedbackValue: selectorFile.css.ComproEngage.openActivityPlayer.submitGradeDialogFeedbackValue,
    submitGradeDialogReattemptLabel: selectorFile.css.ComproEngage.openActivityPlayer.submitGradeDialogReattemptLabel,
    submitGradeDialogReattemptValue: selectorFile.css.ComproEngage.openActivityPlayer.submitGradeDialogReattemptValue,
    submitGradeDialogCancelBtn: selectorFile.css.ComproEngage.openActivityPlayer.submitGradeDialogCancelBtn,
    submitGradeDialogConfirmBtn: selectorFile.css.ComproEngage.openActivityPlayer.submitGradeDialogConfirmBtn,
    retakeOpenDialogTitle: selectorFile.css.ComproEngage.openActivityPlayer.retakeOpenDialogTitle,
    retakeOpenDialogSubtitle: selectorFile.css.ComproEngage.openActivityPlayer.retakeOpenDialogSubtitle,
    retakeOpenDialogNoBtn: selectorFile.css.ComproEngage.openActivityPlayer.retakeOpenDialogNoBtn,
    retakeOpenDialogYesBtn: selectorFile.css.ComproEngage.openActivityPlayer.retakeOpenDialogYesBtn,
    submitActivityDialogTitle: selectorFile.css.ComproEngage.openActivityPlayer.submitActivityDialogTitle,
    submitActivityDialogSubtitle: selectorFile.css.ComproEngage.openActivityPlayer.submitActivityDialogSubtitle,
    submitActivityDialogCancelBtn: selectorFile.css.ComproEngage.openActivityPlayer.submitActivityDialogCancelBtn,
    submitActivityDialogConfirmBtn: selectorFile.css.ComproEngage.openActivityPlayer.submitActivityDialogConfirmBtn,

    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.showDetailsBtn),
            appShellPage: await appShellPage.isInitialized()
        };
        return res;
    },

    getData_openActivityPlayer: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            showDetailsBtn: ((await action.getElementCount(this.showDetailsBtn)) > 0) ? await action.getText(this.showDetailsBtn) : null,
            infoBtn: ((await action.getElementCount(this.infoBtn)) > 0) ? await action.getText(this.infoBtn) : null,
            leftPanelHidden: ((await action.getElementCount(this.leftPanelHidden)) > 0) ? await action.waitForDisplayed(this.leftPanelHidden) : false,
            yourScoreLabel: ((await action.getElementCount(this.yourScoreLabel)) > 0) ? await action.getText(this.yourScoreLabel) : null,
            yourScoreValue: ((await action.getElementCount(this.yourScoreValue)) > 0) ? await action.getText(this.yourScoreValue) : null,
            feedbackBtn: ((await action.getElementCount(this.feedbackBtn)) > 0) ? await action.getText(this.feedbackBtn) : null,
            submittedOn: ((await action.getElementCount(this.submittedOn)) > 0) ? await action.getText(this.submittedOn) : null,
            gradedOn: ((await action.getElementCount(this.gradedOn)) > 0) ? await action.getText(this.gradedOn) : null,
            closeBtn: ((await action.getElementCount(this.closeBtn)) > 0) ? await action.getText(this.closeBtn) : null,
            submitActivityBtn: ((await action.getElementCount(this.submitActivityBtn)) > 0) ? await action.getText(this.submitActivityBtn) : null,
            submitGradeBtn: ((await action.getElementCount(this.submitGradeBtn)) > 0) ? await action.getText(this.submitGradeBtn) : null,
            retakeOpenActivityBtn: ((await action.getElementCount(this.retakeOpenActivityBtn)) > 0) ? await action.getText(this.retakeOpenActivityBtn) : null,
        }
        return obj;
    },

    getData_openActivityLeftPanel: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            gradingTitle: ((await action.getElementCount(this.gradingTitle)) > 0) ? await action.getText(this.gradingTitle) : null,
            gradingSubtitle: ((await action.getElementCount(this.gradingSubtitle)) > 0) ? await action.getText(this.gradingSubtitle) : null,
            statusPill: ((await action.getElementCount(this.statusPill)) > 0) ? await action.getText(this.statusPill) : null,
            bookName: ((await action.getElementCount(this.bookName)) > 0) ? await action.getText(this.bookName) : null,
            activityName: ((await action.getElementCount(this.activityName)) > 0) ? await action.getText(this.activityName) : null,
            cardTitle: ((await action.getElementCount(this.cardTitle)) > 0) ? await action.getText(this.cardTitle) : null,
            cardSubtitle: ((await action.getElementCount(this.cardSubtitle)) > 0) ? await action.getText(this.cardSubtitle) : null,
            cardText: ((await action.getElementCount(this.cardText)) > 0) ? await action.getText(this.cardText) : null,
            attempt1Label: ((await action.getElementCount(this.attempt1Label)) > 0) ? await action.getText(this.attempt1Label) : null,
            attempt2Label: ((await action.getElementCount(this.attempt2Label)) > 0) ? await action.getText(this.attempt2Label) : null,
            attempt3Label: ((await action.getElementCount(this.attempt3Label)) > 0) ? await action.getText(this.attempt3Label) : null,
            attempt1ExpansionBtn: ((await action.getElementCount(this.attempt1ExpansionBtn)) > 0) ? await action.getText(this.attempt1ExpansionBtn) : null,
            attempt1SubmittedTime: ((await action.getElementCount(this.attempt1SubmittedTime)) > 0) ? await action.getText(this.attempt1SubmittedTime) : null,
            attempt1GradedTime: ((await action.getElementCount(this.attempt1GradedTime)) > 0) ? await action.getText(this.attempt1GradedTime) : null,
            attempt1StatusPill: ((await action.getElementCount(this.attempt1StatusPill)) > 0) ? await action.getText(this.attempt1StatusPill) : null,
            attempt1GradeLabel: ((await action.getElementCount(this.attempt1GradeLabel)) > 0) ? await action.getText(this.attempt1GradeLabel) : null,
            attempt1GradeValue: ((await action.getElementCount(this.attempt1GradeValue)) > 0) ? await action.getText(this.attempt1GradeValue) : null,
            attempt1FeedbackLabel: ((await action.getElementCount(this.attempt1FeedbackLabel)) > 0) ? await action.getText(this.attempt1FeedbackLabel) : null,
            attempt1FeedbackValue: ((await action.getElementCount(this.attempt1FeedbackValue)) > 0) ? await action.getText(this.attempt1FeedbackValue) : null,
            attempt2ExpansionBtn: ((await action.getElementCount(this.attempt2ExpansionBtn)) > 0) ? await action.getText(this.attempt2ExpansionBtn) : null,
            attempt2SubmittedTime: ((await action.getElementCount(this.attempt2SubmittedTime)) > 0) ? await action.getText(this.attempt2SubmittedTime) : null,
            attempt2GradedTime: ((await action.getElementCount(this.attempt2GradedTime)) > 0) ? await action.getText(this.attempt2GradedTime) : null,
            attempt2StatusPill: ((await action.getElementCount(this.attempt2StatusPill)) > 0) ? await action.getText(this.attempt2StatusPill) : null,
            attempt2GradeLabel: ((await action.getElementCount(this.attempt2GradeLabel)) > 0) ? await action.getText(this.attempt2GradeLabel) : null,
            attempt2GradeValue: ((await action.getElementCount(this.attempt2GradeValue)) > 0) ? await action.getText(this.attempt2GradeValue) : null,
            attempt2FeedbackLabel: ((await action.getElementCount(this.attempt2FeedbackLabel)) > 0) ? await action.getText(this.attempt2FeedbackLabel) : null,
            attempt2FeedbackValue: ((await action.getElementCount(this.attempt2FeedbackValue)) > 0) ? await action.getText(this.attempt2FeedbackValue) : null,
            scoreLabel: ((await action.getElementCount(this.scoreLabel)) > 0) ? await action.getText(this.scoreLabel) : null,
            scoreInput: ((await action.getElementCount(this.scoreInput)) > 0) ? await action.getText(this.scoreInput) : null,
            feedbackLabel: ((await action.getElementCount(this.feedbackLabel)) > 0) ? await action.getText(this.feedbackLabel) : null,
            feedbackInput: ((await action.getElementCount(this.feedbackInput)) > 0) ? await action.getText(this.feedbackInput) : null,
            reattemptLabel: ((await action.getElementCount(this.reattemptLabel)) > 0) ? await action.getText(this.reattemptLabel) : null,
            reattemptYesBtn: ((await action.getElementCount(this.reattemptYesBtn)) > 0) ? await action.getText(this.reattemptYesBtn) : null,
            reattemptNoBtn: ((await action.getElementCount(this.reattemptNoBtn)) > 0) ? await action.getText(this.reattemptNoBtn) : null,
            submitBtn: ((await action.getElementCount(this.submitBtn)) > 0) ? await action.getText(this.submitBtn) : null,
            scoreError: ((await action.getElementCount(this.scoreError)) > 0) ? await action.getText(this.scoreError) : null,
        }
        return obj;
    },

    getData_submitGradeDialog: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            submitGradeDialogTitle: ((await action.getElementCount(this.submitGradeDialogTitle)) > 0) ? await action.getText(this.submitGradeDialogTitle) : null,
            submitGradeDialogSubtitle: ((await action.getElementCount(this.submitGradeDialogSubtitle)) > 0) ? await action.getText(this.submitGradeDialogSubtitle) : null,
            submitGradeDialogScoreLabel: ((await action.getElementCount(this.submitGradeDialogScoreLabel)) > 0) ? await action.getText(this.submitGradeDialogScoreLabel) : null,
            submitGradeDialogScoreValue: ((await action.getElementCount(this.submitGradeDialogScoreValue)) > 0) ? await action.getText(this.submitGradeDialogScoreValue) : null,
            submitGradeDialogFeedbackLabel: ((await action.getElementCount(this.submitGradeDialogFeedbackLabel)) > 0) ? await action.getText(this.submitGradeDialogFeedbackLabel) : null,
            submitGradeDialogFeedbackValue: ((await action.getElementCount(this.submitGradeDialogFeedbackValue)) > 0) ? await action.getText(this.submitGradeDialogFeedbackValue) : null,
            submitGradeDialogReattemptLabel: ((await action.getElementCount(this.submitGradeDialogReattemptLabel)) > 0) ? await action.getText(this.submitGradeDialogReattemptLabel) : null,
            submitGradeDialogReattemptValue: ((await action.getElementCount(this.submitGradeDialogReattemptValue)) > 0) ? await action.getText(this.submitGradeDialogReattemptValue) : null,
            submitGradeDialogCancelBtn: ((await action.getElementCount(this.submitGradeDialogCancelBtn)) > 0) ? await action.getText(this.submitGradeDialogCancelBtn) : null,
            submitGradeDialogConfirmBtn: ((await action.getElementCount(this.submitGradeDialogConfirmBtn)) > 0) ? await action.getText(this.submitGradeDialogConfirmBtn) : null,
        }
        return obj;
    },

    getData_retakeOpenDialog: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            retakeOpenDialogTitle: ((await action.getElementCount(this.retakeOpenDialogTitle)) > 0) ? await action.getText(this.retakeOpenDialogTitle) : null,
            retakeOpenDialogSubtitle: ((await action.getElementCount(this.retakeOpenDialogSubtitle)) > 0) ? await action.getText(this.retakeOpenDialogSubtitle) : null,
            retakeOpenDialogNoBtn: ((await action.getElementCount(this.retakeOpenDialogNoBtn)) > 0) ? await action.getText(this.retakeOpenDialogNoBtn) : null,
            retakeOpenDialogYesBtn: ((await action.getElementCount(this.retakeOpenDialogYesBtn)) > 0) ? await action.getText(this.retakeOpenDialogYesBtn) : null,
        }
        return obj;
    },

    getData_submitActivityDialog: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            submitActivityDialogTitle: ((await action.getElementCount(this.submitActivityDialogTitle)) > 0) ? await action.getText(this.submitActivityDialogTitle) : null,
            submitActivityDialogSubtitle: ((await action.getElementCount(this.submitActivityDialogSubtitle)) > 0) ? await action.getText(this.submitActivityDialogSubtitle) : null,
            submitActivityDialogCancelBtn: ((await action.getElementCount(this.submitActivityDialogCancelBtn)) > 0) ? await action.getText(this.submitActivityDialogCancelBtn) : null,
            submitActivityDialogConfirmBtn: ((await action.getElementCount(this.submitActivityDialogConfirmBtn)) > 0) ? await action.getText(this.submitActivityDialogConfirmBtn) : null,
        }
        return obj;
    },

    click_showDetailsBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.showDetailsBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " showDetailsBtn is clicked");
            res = await action.getAttribute(this.leftPanelContainer, "aria-hidden");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "showDetailsBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_infoBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.infoBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " infoBtn is clicked");
            res = await this.getData_infoTocPanel();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "infoBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_feedbackBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.feedbackBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " feedbackBtn is clicked");
            res = await action.getAttribute(this.leftPanelContainer, "aria-hidden");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "feedbackBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_closeBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.closeBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " closeBtn is clicked");
            res = await action.waitForDisplayed(this.closeBtn, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "closeBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_submitActivityBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.submitActivityBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " submitActivityBtn is clicked");
            res = await this.getData_submitActivityDialog();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "submitActivityBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_submitGradeBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        await browser.pause(500);
        res = await action.click(this.submitGradeBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " submitGradeBtn is clicked");
            res = await this.getData_submitGradeDialog();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "submitGradeBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_retakeOpenActivityBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.retakeOpenActivityBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " retakeOpenActivityBtn is clicked");
            res = await this.getData_retakeOpenDialog();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "retakeOpenActivityBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_attempt1ExpansionBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.attempt1ExpansionBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " attempt1ExpansionBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "attempt1ExpansionBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_attempt2ExpansionBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.attempt2ExpansionBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " attempt2ExpansionBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "attempt2ExpansionBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_reattemptYesBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.reattemptYesBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " reattemptYesBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "reattemptYesBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_reattemptNoBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.reattemptNoBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " reattemptNoBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "reattemptNoBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_submitBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.submitBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " submitBtn is clicked");
            res = await this.getData_submitGradeDialog();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "submitBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_submitGradeDialogCancelBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.submitGradeDialogCancelBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " submitGradeDialogCancelBtn is clicked");
            res = await action.waitForDisplayed(this.submitGradeDialogCancelBtn, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "submitGradeDialogCancelBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_submitGradeDialogConfirmBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.submitGradeDialogConfirmBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " submitGradeDialogConfirmBtn is clicked");
            res = await action.getText(this.snackbarMsg);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "submitGradeDialogConfirmBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_retakeOpenDialogNoBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.retakeOpenDialogNoBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " retakeOpenDialogNoBtn is clicked");
            res = await action.waitForDisplayed(this.retakeOpenDialogNoBtn, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "retakeOpenDialogNoBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_retakeOpenDialogYesBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.retakeOpenDialogYesBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " retakeOpenDialogYesBtn is clicked");
            res = await action.waitForDisplayed(this.retakeOpenDialogYesBtn, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "retakeOpenDialogYesBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_submitActivityDialogCancelBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.submitActivityDialogCancelBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " submitActivityDialogCancelBtn is clicked");
            res = await action.waitForDisplayed(this.submitActivityDialogCancelBtn, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "submitActivityDialogCancelBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_submitActivityDialogConfirmBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.submitActivityDialogConfirmBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " submitActivityDialogConfirmBtn is clicked");
            res = await action.getText(this.snackbarMsg);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "submitActivityDialogConfirmBtn is NOT clicked", 'error');
        }
        return res;
    },

    set_scoreInput: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.scoreInput, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in scoreInput");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in scoreInput", 'error');
        }
        return res;
    },

    set_feedbackInput: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.click(this.feedbackInput);
        await action.keyPress(['\uE009', 'a']) //press ctrl+a
        await action.keyPress("\uE017")        //press delete
        res = await action.keyPress(value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in feedbackInput");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in feedbackInput", 'error');
        }
        return res;
    },

}
