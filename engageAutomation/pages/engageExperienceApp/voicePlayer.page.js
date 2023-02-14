"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)

module.exports = {

    recordTxt: selectorFile.css.ComproEngage.voicePlayer.recordTxt,
    recordBtn: selectorFile.css.ComproEngage.voicePlayer.recordBtn,
    recordingTxt: selectorFile.css.ComproEngage.voicePlayer.recordingTxt,
    recordingBtn: selectorFile.css.ComproEngage.voicePlayer.recordingBtn,
    pausedTxt: selectorFile.css.ComproEngage.voicePlayer.pausedTxt,
    rerecordBtn: selectorFile.css.ComproEngage.voicePlayer.rerecordBtn,
    doneBtn: selectorFile.css.ComproEngage.voicePlayer.doneBtn,
    continueBtn: selectorFile.css.ComproEngage.voicePlayer.continueBtn,
    remainingTimeTxt: selectorFile.css.ComproEngage.voicePlayer.remainingTimeTxt,
    previewTxt: selectorFile.css.ComproEngage.voicePlayer.previewTxt,
    limitInfoTxt: selectorFile.css.ComproEngage.voicePlayer.limitInfoTxt,
    restartInfoTxt: selectorFile.css.ComproEngage.voicePlayer.restartInfoTxt,
    audioPlayerExists: selectorFile.css.ComproEngage.voicePlayer.audioPlayerExists,
    dialogHeading: selectorFile.css.ComproEngage.voicePlayer.dialogHeading,
    dialogContent: selectorFile.css.ComproEngage.voicePlayer.dialogContent,
    dialogCancelBtn: selectorFile.css.ComproEngage.voicePlayer.dialogCancelBtn,
    dialogAcceptBtn: selectorFile.css.ComproEngage.voicePlayer.dialogAcceptBtn,
    snackbarTxt: selectorFile.css.ComproEngage.voicePlayer.snackbarTxt,

    isInitialized: async function () {
        await logger.logInto(await stackTrace.get());
        await action.waitForDisplayed("iframe[id*=iframe], iframe");
        await action.switchToFrame(0);
        let res = await action.waitForDisplayed(this.recordBtn + ',' + this.rerecordBtn);
        await action.switchToParentFrame();
        return res;
    },

    getData_voicePlayer: async function () {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var obj;
        obj = {
            recordTxt: ((await action.getElementCount(this.recordTxt)) > 0) ? await action.getText(this.recordTxt) : null,
            recordBtn: ((await action.getElementCount(this.recordBtn)) > 0) ? await action.getText(this.recordBtn) : null,
            recordingTxt: ((await action.getElementCount(this.recordingTxt)) > 0) ? await action.getText(this.recordingTxt) : null,
            recordingBtn: ((await action.getElementCount(this.recordingBtn)) > 0) ? await action.getText(this.recordingBtn) : null,
            pausedTxt: ((await action.getElementCount(this.pausedTxt)) > 0) ? await action.getText(this.pausedTxt) : null,
            rerecordBtn: ((await action.getElementCount(this.rerecordBtn)) > 0) ? await action.getText(this.rerecordBtn) : null,
            doneBtn: ((await action.getElementCount(this.doneBtn)) > 0) ? await action.getText(this.doneBtn) : null,
            continueBtn: ((await action.getElementCount(this.continueBtn)) > 0) ? await action.getText(this.continueBtn) : null,
            remainingTimeTxt: ((await action.getElementCount(this.remainingTimeTxt)) > 0) ? await action.getText(this.remainingTimeTxt) : null,
            previewTxt: ((await action.getElementCount(this.previewTxt)) > 0) ? await action.getText(this.previewTxt) : null,
            limitInfoTxt: ((await action.getElementCount(this.limitInfoTxt)) > 0) ? await action.getText(this.limitInfoTxt) : null,
            restartInfoTxt: ((await action.getElementCount(this.restartInfoTxt)) > 0) ? await action.getText(this.restartInfoTxt) : null,
            audioPlayerExists: ((await action.getElementCount(this.audioPlayerExists)) > 0) ? await action.waitForDisplayed(this.audioPlayerExists) : null,
        }
        await action.switchToParentFrame();
        return obj;
    },

    getData_rerecordDialog: async function () {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var obj;
        obj = {
            dialogHeading: ((await action.getElementCount(this.dialogHeading)) > 0) ? await action.getText(this.dialogHeading) : null,
            dialogContent: ((await action.getElementCount(this.dialogContent)) > 0) ? await action.getText(this.dialogContent) : null,
            dialogCancelBtn: ((await action.getElementCount(this.dialogCancelBtn)) > 0) ? await action.getText(this.dialogCancelBtn) : null,
            dialogAcceptBtn: ((await action.getElementCount(this.dialogAcceptBtn)) > 0) ? await action.getText(this.dialogAcceptBtn) : null,
        }
        await action.switchToParentFrame();
        return obj;
    },

    click_recordBtn: async function () {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var res;
        res = await action.click(this.recordBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " recordBtn is clicked");
            res = await action.waitForDisplayed(this.recordingBtn);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "recordBtn is NOT clicked", 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

    click_recordingBtn: async function () {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var res;
        res = await action.click(this.recordingBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " recordingBtn is clicked");
            res = await action.waitForDisplayed(this.continueBtn);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "recordingBtn is NOT clicked", 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

    click_rerecordBtn: async function () {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var res;
        res = await action.click(this.rerecordBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " rerecordBtn is clicked");
            await action.waitForDisplayed(this.dialogHeading);
            res = await this.getData_rerecordDialog();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "rerecordBtn is NOT clicked", 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

    click_doneBtn: async function () {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var res;
        res = await action.click(this.doneBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " doneBtn is clicked");
            await action.waitForDisplayed(this.snackbarTxt);
            res = await action.getText(this.snackbarTxt);
            await action.waitForDisplayed(this.audioPlayerExists);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "doneBtn is NOT clicked", 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

    click_continueBtn: async function () {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var res;
        res = await action.click(this.continueBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " continueBtn is clicked");
            res = await action.waitForDisplayed(this.recordingBtn);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "continueBtn is NOT clicked", 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

    click_dialogCancelBtn: async function () {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var res;
        res = await action.click(this.dialogCancelBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " dialogCancelBtn is clicked");
            res = await action.waitForDisplayed(this.dialogCancelBtn, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "dialogCancelBtn is NOT clicked", 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

    click_dialogAcceptBtn: async function () {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var res;
        res = await action.click(this.dialogAcceptBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " dialogAcceptBtn is clicked");
            res = await action.waitForDisplayed(this.recordBtn);
            await browser.pause(5000);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "dialogAcceptBtn is NOT clicked", 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

}

