"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)

module.exports = {

    tourContainer: selectorFile.css.ComproEngage.editorTour.tourContainer,
    step0Title: selectorFile.css.ComproEngage.editorTour.step0Title,
    step0Subtitle: selectorFile.css.ComproEngage.editorTour.step0Subtitle,
    dontShowCheckbox: selectorFile.css.ComproEngage.editorTour.dontShowCheckbox,
    dismissBtn: selectorFile.css.ComproEngage.editorTour.dismissBtn,
    startTourBtn: selectorFile.css.ComproEngage.editorTour.startTourBtn,
    exitBtn: selectorFile.css.ComproEngage.editorTour.exitBtn,
    nextBtn: selectorFile.css.ComproEngage.editorTour.nextBtn,
    backBtn: selectorFile.css.ComproEngage.editorTour.backBtn,
    step1Title: selectorFile.css.ComproEngage.editorTour.step1Title,
    step1Subtitle: selectorFile.css.ComproEngage.editorTour.step1Subtitle,
    step2Title: selectorFile.css.ComproEngage.editorTour.step2Title,
    step2Subtitle: selectorFile.css.ComproEngage.editorTour.step2Subtitle,
    step3Title: selectorFile.css.ComproEngage.editorTour.step3Title,
    step3Subtitle: selectorFile.css.ComproEngage.editorTour.step3Subtitle,
    step4Title: selectorFile.css.ComproEngage.editorTour.step4Title,
    step4Subtitle: selectorFile.css.ComproEngage.editorTour.step4Subtitle,
    step5Title: selectorFile.css.ComproEngage.editorTour.step5Title,
    step5Subtitle: selectorFile.css.ComproEngage.editorTour.step5Subtitle,
    step6Title: selectorFile.css.ComproEngage.editorTour.step6Title,
    step6Subtitle: selectorFile.css.ComproEngage.editorTour.step6Subtitle,

    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.isDisplayed(this.tourContainer),
        };
        return res;
    },

    getData_editorTour: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            step0Title: ((await action.getElementCount(this.step0Title)) > 0) ? await action.getText(this.step0Title) : null,
            step0Subtitle: ((await action.getElementCount(this.step0Subtitle)) > 0) ? await action.getText(this.step0Subtitle) : null,
            dontShowCheckbox: ((await action.getElementCount(this.dontShowCheckbox)) > 0) ? await action.getText(this.dontShowCheckbox) : null,
            dismissBtn: ((await action.getElementCount(this.dismissBtn)) > 0) ? await action.getText(this.dismissBtn) : null,
            startTourBtn: ((await action.getElementCount(this.startTourBtn)) > 0) ? await action.getText(this.startTourBtn) : null,
            exitBtn: ((await action.getElementCount(this.exitBtn)) > 0) ? await action.getText(this.exitBtn) : null,
            nextBtn: ((await action.getElementCount(this.nextBtn)) > 0) ? await action.getText(this.nextBtn) : null,
            backBtn: ((await action.getElementCount(this.backBtn)) > 0) ? await action.getText(this.backBtn) : null,
            step1Title: ((await action.getElementCount(this.step1Title)) > 0) ? await action.getText(this.step1Title) : null,
            step1Subtitle: ((await action.getElementCount(this.step1Subtitle)) > 0) ? await action.getText(this.step1Subtitle) : null,
            step2Title: ((await action.getElementCount(this.step2Title)) > 0) ? await action.getText(this.step2Title) : null,
            step2Subtitle: ((await action.getElementCount(this.step2Subtitle)) > 0) ? await action.getText(this.step2Subtitle) : null,
            step3Title: ((await action.getElementCount(this.step3Title)) > 0) ? await action.getText(this.step3Title) : null,
            step3Subtitle: ((await action.getElementCount(this.step3Subtitle)) > 0) ? await action.getText(this.step3Subtitle) : null,
            step4Title: ((await action.getElementCount(this.step4Title)) > 0) ? await action.getText(this.step4Title) : null,
            step4Subtitle: ((await action.getElementCount(this.step4Subtitle)) > 0) ? await action.getText(this.step4Subtitle) : null,
            step5Title: ((await action.getElementCount(this.step5Title)) > 0) ? await action.getText(this.step5Title) : null,
            step5Subtitle: ((await action.getElementCount(this.step5Subtitle)) > 0) ? await action.getText(this.step5Subtitle) : null,
            step6Title: ((await action.getElementCount(this.step6Title)) > 0) ? await action.getText(this.step6Title) : null,
            step6Subtitle: ((await action.getElementCount(this.step6Subtitle)) > 0) ? await action.getText(this.step6Subtitle) : null,
        }
        return obj;
    },


    click_dontShowCheckbox: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.dontShowCheckbox);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " dontShowCheckbox is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "dontShowCheckbox is NOT clicked", 'error');
        }
        return res;
    },

    click_dismissBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.dismissBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " dismissBtn is clicked");
            res = await action.waitForDisplayed(this.tourContainer, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "dismissBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_startTourBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.startTourBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " startTourBtn is clicked");
            res = await action.waitForDisplayed(this.exitBtn);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "startTourBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_exitBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.exitBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " exitBtn is clicked");
            res = await action.waitForDisplayed(this.tourContainer, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "exitBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_nextBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.nextBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " nextBtn is clicked");
            res = await action.waitForDisplayed(this.backBtn);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "nextBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_backBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.backBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " backBtn is clicked");
            res = await action.waitForDisplayed(this.nextBtn);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "backBtn is NOT clicked", 'error');
        }
        return res;
    },

}

