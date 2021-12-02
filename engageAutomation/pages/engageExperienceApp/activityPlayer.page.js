"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
    infoBtn: selectorFile.css.ComproEngage.activityPlayer.infoBtn,
    showDetailsBtn: selectorFile.css.ComproEngage.activityPlayer.showDetailsBtn,
    quesNumber: selectorFile.css.ComproEngage.activityPlayer.quesNumber,
    prevPageBtn: selectorFile.css.ComproEngage.activityPlayer.prevPageBtn,
    nextPageBtn: selectorFile.css.ComproEngage.activityPlayer.nextPageBtn,
    prevActivityBtn: selectorFile.css.ComproEngage.activityPlayer.prevActivityBtn,
    nextActivityBtn: selectorFile.css.ComproEngage.activityPlayer.nextActivityBtn,
    showAnswerBtn: selectorFile.css.ComproEngage.activityPlayer.showAnswerBtn,
    showResponseBtn: selectorFile.css.ComproEngage.activityPlayer.showResponseBtn,
    checkAnswerBtn: selectorFile.css.ComproEngage.activityPlayer.checkAnswerBtn,
    submitActivityBtn: selectorFile.css.ComproEngage.activityPlayer.submitActivityBtn,
    markCompleteBtn: selectorFile.css.ComproEngage.activityPlayer.markCompleteBtn,
    retakeActivityBtn: selectorFile.css.ComproEngage.activityPlayer.retakeActivityBtn,
    resetBtn: selectorFile.css.ComproEngage.activityPlayer.resetBtn,
    completedTxt: selectorFile.css.ComproEngage.activityPlayer.completedTxt,
    submittedTxt: selectorFile.css.ComproEngage.activityPlayer.submittedTxt,
    submitGradeBtn: selectorFile.css.ComproEngage.activityPlayer.submitGradeBtn,
    yourScoreLabel: selectorFile.css.ComproEngage.activityPlayer.yourScoreLabel,
    yourScoreValue: selectorFile.css.ComproEngage.activityPlayer.yourScoreValue,
    detailsPanelContainer: selectorFile.css.ComproEngage.activityPlayer.detailsPanelContainer,
    panelHeading: selectorFile.css.ComproEngage.activityPlayer.panelHeading,
    activityTitle: selectorFile.css.ComproEngage.activityPlayer.activityTitle,
    activitySubtitle: selectorFile.css.ComproEngage.activityPlayer.activitySubtitle,
    activityTypeIcon: selectorFile.css.ComproEngage.activityPlayer.activityTypeIcon,
    activityType: selectorFile.css.ComproEngage.activityPlayer.activityType,
    pageNumber: selectorFile.css.ComproEngage.activityPlayer.pageNumber,
    expandCollapseBtn: selectorFile.css.ComproEngage.activityPlayer.expandCollapseBtn,
    analyticsInfoContainer: selectorFile.css.ComproEngage.activityPlayer.analyticsInfoContainer,


    isInitialized: function () {
        var res;
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.infoBtn),
            appShellPage: appShellPage.isInitialized()
        };
        return res;
    },

    getData_activityPlayer: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            infoBtn: (action.getElementCount(this.infoBtn) > 0) ? action.getText(this.infoBtn) : null,
            showDetailsBtn: (action.getElementCount(this.showDetailsBtn) > 0) ? action.getText(this.showDetailsBtn) : null,
            quesNumber: (action.getElementCount(this.quesNumber) > 0) ? action.getText(this.quesNumber) : null,
            prevPageBtn: (action.getElementCount(this.prevPageBtn) > 0) ? action.getText(this.prevPageBtn) : null,
            nextPageBtn: (action.getElementCount(this.nextPageBtn) > 0) ? action.getText(this.nextPageBtn) : null,
            prevActivityBtn: (action.getElementCount(this.prevActivityBtn) > 0) ? action.getText(this.prevActivityBtn) : null,
            nextActivityBtn: (action.getElementCount(this.nextActivityBtn) > 0) ? action.getText(this.nextActivityBtn) : null,
            showAnswerBtn: (action.getElementCount(this.showAnswerBtn) > 0) ? action.getText(this.showAnswerBtn) : null,
            showResponseBtn: (action.getElementCount(this.showResponseBtn) > 0) ? action.getText(this.showResponseBtn) : null,
            checkAnswerBtn: (action.getElementCount(this.checkAnswerBtn) > 0) ? action.getText(this.checkAnswerBtn) : null,
            submitActivityBtn: (action.getElementCount(this.submitActivityBtn) > 0) ? action.getText(this.submitActivityBtn) : null,
            markCompleteBtn: (action.getElementCount(this.markCompleteBtn) > 0) ? action.getText(this.markCompleteBtn) : null,
            retakeActivityBtn: (action.getElementCount(this.retakeActivityBtn) > 0) ? action.getText(this.retakeActivityBtn) : null,
            resetBtn: (action.getElementCount(this.resetBtn) > 0) ? action.getText(this.resetBtn) : null,
            completedTxt: (action.getElementCount(this.completedTxt) > 0) ? action.getText(this.completedTxt) : null,
            submittedTxt: (action.getElementCount(this.submittedTxt) > 0) ? action.getText(this.submittedTxt) : null,
            submitGradeBtn: (action.getElementCount(this.submitGradeBtn) > 0) ? action.getText(this.submitGradeBtn) : null,
            yourScoreLabel: (action.getElementCount(this.yourScoreLabel) > 0) ? action.getText(this.yourScoreLabel) : null,
            yourScoreValue: (action.getElementCount(this.yourScoreValue) > 0) ? action.getText(this.yourScoreValue) : null,
        }
        return obj;
    },

    getData_detailsPanel: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            panelHeading: (action.getElementCount(this.panelHeading) > 0) ? action.getText(this.panelHeading) : null,
            activityTitle: (action.getElementCount(this.activityTitle) > 0) ? action.getText(this.activityTitle) : null,
            activitySubtitle: (action.getElementCount(this.activitySubtitle) > 0) ? action.getText(this.activitySubtitle) : null,
            activityTypeIcon: (action.getElementCount(this.activityTypeIcon) > 0) ? action.waitForExist(this.activityTypeIcon) : false,
            activityType: (action.getElementCount(this.activityType) > 0) ? action.getText(this.activityType) : null,
            pageNumber: (action.getElementCount(this.pageNumber) > 0) ? action.getText(this.pageNumber) : null,
            expandCollapseBtn: (action.getElementCount(this.expandCollapseBtn) > 0) ? action.getText(this.expandCollapseBtn) : null,
        }
        return obj;
    },


    click_infoBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.infoBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " infoBtn is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res + "infoBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_showDetailsBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.showDetailsBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " showDetailsBtn is clicked");
            res = action.getAttribute(this.detailsPanelContainer, "aria-hidden");
        }
        else {
            logger.logInto(stackTrace.get(), res + "showDetailsBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_prevPageBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.prevPageBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " prevPageBtn is clicked");
            res = action.getText(this.quesNumber);
        }
        else {
            logger.logInto(stackTrace.get(), res + "prevPageBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_nextPageBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.nextPageBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " nextPageBtn is clicked");
            res = action.getText(this.quesNumber);
        }
        else {
            logger.logInto(stackTrace.get(), res + "nextPageBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_prevActivityBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.prevActivityBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " prevActivityBtn is clicked");
            res = this.getData_activityPlayer();
        }
        else {
            logger.logInto(stackTrace.get(), res + "prevActivityBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_nextActivityBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.nextActivityBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " nextActivityBtn is clicked");
            res = this.getData_activityPlayer();
        }
        else {
            logger.logInto(stackTrace.get(), res + "nextActivityBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_showAnswerBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.showAnswerBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " showAnswerBtn is clicked");
            res = action.waitForDisplayed(this.showResponseBtn);
        }
        else {
            logger.logInto(stackTrace.get(), res + "showAnswerBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_showResponseBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.showResponseBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " showResponseBtn is clicked");
            res = action.waitForDisplayed(this.showAnswerBtn);
        }
        else {
            logger.logInto(stackTrace.get(), res + "showResponseBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_checkAnswerBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.checkAnswerBtn);
        console.log(res)
        if (true == res) {
            logger.logInto(stackTrace.get(), " checkAnswerBtn is clicked");
            res = action.isEnabled(this.checkAnswerBtn);
        }
        else {
            logger.logInto(stackTrace.get(), res + "checkAnswerBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_submitActivityBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.submitActivityBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " submitActivityBtn is clicked");
            res = this.getData_activityPlayer();
        }
        else {
            logger.logInto(stackTrace.get(), res + "submitActivityBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_markCompleteBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.markCompleteBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " markCompleteBtn is clicked");
            res = action.isEnabled(this.completedTxt);
        }
        else {
            logger.logInto(stackTrace.get(), res + "markCompleteBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_retakeActivityBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.retakeActivityBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " retakeActivityBtn is clicked");
            res = this.getData_activityPlayer();
        }
        else {
            logger.logInto(stackTrace.get(), res + "retakeActivityBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_resetBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.resetBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " resetBtn is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res + "resetBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_submitGradeBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.submitGradeBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " submitGradeBtn is clicked");
            res = action.getText(this.submittedTxt);
        }
        else {
            logger.logInto(stackTrace.get(), res + "submitGradeBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_expandCollapseBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.expandCollapseBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " expandCollapseBtn is clicked");
            res = action.getCSSProperty(this.analyticsInfoContainer, "visibility");
        }
        else {
            logger.logInto(stackTrace.get(), res + "expandCollapseBtn is NOT clicked", 'error');
        }
        return res;
    },

}

