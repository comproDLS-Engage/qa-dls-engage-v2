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
    closeBtn: selectorFile.css.ComproEngage.activityPlayer.closeBtn,
    completedTxt: selectorFile.css.ComproEngage.activityPlayer.completedTxt,
    yourScoreLabel: selectorFile.css.ComproEngage.activityPlayer.yourScoreLabel,
    yourScoreValue: selectorFile.css.ComproEngage.activityPlayer.yourScoreValue,
    detailsPanel: selectorFile.css.ComproEngage.activityPlayer.detailsPanel,
    panelHeading: selectorFile.css.ComproEngage.activityPlayer.panelHeading,
    activityTitle: selectorFile.css.ComproEngage.activityPlayer.activityTitle,
    activitySubtitle: selectorFile.css.ComproEngage.activityPlayer.activitySubtitle,
    activityTypeIcon: selectorFile.css.ComproEngage.activityPlayer.activityTypeIcon,
    activityType: selectorFile.css.ComproEngage.activityPlayer.activityType,
    pageNumber: selectorFile.css.ComproEngage.activityPlayer.pageNumber,
    expandCollapseBtn: selectorFile.css.ComproEngage.activityPlayer.expandCollapseBtn,
    analyticsInfoContainer: selectorFile.css.ComproEngage.activityPlayer.analyticsInfoContainer,
    closeInfoBtn: selectorFile.css.ComproEngage.activityPlayer.closeInfoBtn,
    infoTocHeading: selectorFile.css.ComproEngage.activityPlayer.infoTocHeading,
    feedbackText: selectorFile.css.ComproEngage.activityPlayer.feedbackText,
    closeAssignmentBtn: selectorFile.css.ComproEngage.activityPlayer.closeAssignmentBtn,

    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.infoBtn + "," + this.showDetailsBtn),
            appShellPage: await appShellPage.isInitialized()
        };
        return res;
    },

    getData_activityPlayer: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            infoBtn: ((await action.getElementCount(this.infoBtn)) > 0) ? await action.getText(this.infoBtn) : null,
            showDetailsBtn: ((await action.getElementCount(this.showDetailsBtn)) > 0) ? await action.getText(this.showDetailsBtn) : null,
            quesNumber: ((await action.getElementCount(this.quesNumber)) > 0) ? await action.getText(this.quesNumber) : null,
            prevPageBtn: ((await action.getElementCount(this.prevPageBtn)) > 0) ? await action.getText(this.prevPageBtn) : null,
            nextPageBtn: ((await action.getElementCount(this.nextPageBtn)) > 0) ? await action.getText(this.nextPageBtn) : null,
            prevActivityBtn: ((await action.getElementCount(this.prevActivityBtn)) > 0) ? await action.getText(this.prevActivityBtn) : null,
            nextActivityBtn: ((await action.getElementCount(this.nextActivityBtn)) > 0) ? await action.getText(this.nextActivityBtn) : null,
            showAnswerBtn: ((await action.getElementCount(this.showAnswerBtn)) > 0) ? await action.getText(this.showAnswerBtn) : null,
            showResponseBtn: ((await action.getElementCount(this.showResponseBtn)) > 0) ? await action.getText(this.showResponseBtn) : null,
            checkAnswerBtn: ((await action.getElementCount(this.checkAnswerBtn)) > 0) ? await action.getText(this.checkAnswerBtn) : null,
            submitActivityBtn: ((await action.getElementCount(this.submitActivityBtn)) > 0) ? await action.getText(this.submitActivityBtn) : null,
            markCompleteBtn: ((await action.getElementCount(this.markCompleteBtn)) > 0) ? await action.getText(this.markCompleteBtn) : null,
            retakeActivityBtn: ((await action.getElementCount(this.retakeActivityBtn)) > 0) ? await action.getText(this.retakeActivityBtn) : null,
            closeBtn: ((await action.getElementCount(this.closeBtn)) > 0) ? await action.getText(this.closeBtn) : null,
            completedTxt: ((await action.getElementCount(this.completedTxt)) > 0) ? await action.getText(this.completedTxt) : null,
            yourScoreLabel: ((await action.getElementCount(this.yourScoreLabel)) > 0) ? await action.getText(this.yourScoreLabel) : null,
            yourScoreValue: ((await action.getElementCount(this.yourScoreValue)) > 0) ? await action.getText(this.yourScoreValue) : null,
            detailsPanelHidden: ((await action.getElementCount(this.detailsPanel)) > 0) ? await action.getAttribute(this.detailsPanel, "aria-hidden") : null,
            feedbackText: ((await action.getElementCount(this.feedbackText)) > 0) ? await action.getText(this.feedbackText) : null,
            closeAssignmentBtn: ((await action.getElementCount(this.closeAssignmentBtn)) > 0) ? await action.getText(this.closeAssignmentBtn) : null,
        }
        return obj;
    },

    getData_detailsPanel: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            panelHeading: ((await action.getElementCount(this.panelHeading)) > 0) ? await action.getText(this.panelHeading) : null,
            activityTitle: ((await action.getElementCount(this.activityTitle)) > 0) ? await action.getText(this.activityTitle) : null,
            activitySubtitle: ((await action.getElementCount(this.activitySubtitle)) > 0) ? await action.getText(this.activitySubtitle) : null,
            activityTypeIcon: ((await action.getElementCount(this.activityTypeIcon)) > 0) ? await action.waitForDisplayed(this.activityTypeIcon) : false,
            activityType: ((await action.getElementCount(this.activityType)) > 0) ? await action.getText(this.activityType) : null,
            pageNumber: ((await action.getElementCount(this.pageNumber)) > 0) ? await action.getText(this.pageNumber) : null,
            expandCollapseBtn: ((await action.getElementCount(this.expandCollapseBtn)) > 0) ? await action.getText(this.expandCollapseBtn) : null,
        }
        return obj;
    },

    getData_infoTocPanel: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            closeInfoBtn: ((await action.getElementCount(this.closeInfoBtn)) > 0) ? await action.getText(this.closeInfoBtn) : null,
            infoTocHeading: ((await action.getElementCount(this.infoTocHeading)) > 0) ? await action.getText(this.infoTocHeading) : null,
        }
        return obj;
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

    click_showDetailsBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.showDetailsBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " showDetailsBtn is clicked");
            res = await action.getAttribute(this.detailsPanel, "aria-hidden");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "showDetailsBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_prevPageBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.prevPageBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " prevPageBtn is clicked");
            res = await this.isInitialized();
            if (true == res.pageStatus) {
                res = await action.getText(this.quesNumber);
            }
            else {
                await logger.logInto(await stackTrace.get(), res + "prevPage not loaded", 'error'); 
            }
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "prevPageBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_nextPageBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.nextPageBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " nextPageBtn is clicked");
            res = await this.isInitialized();
            if (true == res.pageStatus) {
                res = await action.getText(this.quesNumber);
            }
            else {
                await logger.logInto(await stackTrace.get(), res + "nextPage not loaded", 'error'); 
            }
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "nextPageBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_prevActivityBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.prevActivityBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " prevActivityBtn is clicked");
            await browser.pause(5000);
            res = await this.getData_activityPlayer();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "prevActivityBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_nextActivityBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.nextActivityBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " nextActivityBtn is clicked");
            await browser.pause(5000);
            res = await this.getData_activityPlayer();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "nextActivityBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_showAnswerBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.showAnswerBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " showAnswerBtn is clicked");
            res = await action.waitForDisplayed(this.showResponseBtn);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "showAnswerBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_showResponseBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.showResponseBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " showResponseBtn is clicked");
            res = await action.waitForDisplayed(this.showAnswerBtn);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "showResponseBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_checkAnswerBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.checkAnswerBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " checkAnswerBtn is clicked");
            res = await action.isEnabled(this.checkAnswerBtn);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "checkAnswerBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_submitActivityBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.submitActivityBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " submitActivityBtn is clicked");
            res = await action.waitForDisplayed(this.submitActivityBtn, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "submitActivityBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_markCompleteBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.markCompleteBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " markCompleteBtn is clicked");
            res = await action.isEnabled(this.completedTxt);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "markCompleteBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_retakeActivityBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.retakeActivityBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " retakeActivityBtn is clicked");
            res = await action.waitForDisplayed(this.retakeActivityBtn, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "retakeActivityBtn is NOT clicked", 'error');
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

    click_expandCollapseBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.expandCollapseBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " expandCollapseBtn is clicked");
            res = await action.getCSSProperty(this.analyticsInfoContainer, "visibility");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "expandCollapseBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_closeInfoBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.closeInfoBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " closeInfoBtn is clicked");
            res = await action.waitForDisplayed(this.closeBtn, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "closeInfoBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_closeAssignmentBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.closeAssignmentBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " closeAssignmentBtn is clicked");
            res = await action.waitForDisplayed(this.closeAssignmentBtn, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "closeAssignmentBtn is NOT clicked", 'error');
        }
        return res;
    },

}

