"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    snapshotBtn: selectorFile.publishComponentPage.snapshotBtn,
    previewBtn: selectorFile.publishComponentPage.previewBtn,
    publishBtn: selectorFile.publishComponentPage.publishBtn,
    lastPublishedVer: selectorFile.publishComponentPage.lastPublishedVer,
    lastSnapshotVer: selectorFile.publishComponentPage.lastSnapshotVer,

    isInitialized: async function () {
        await logger.logInto(stackTrace.get());
        //action.waitForDocumentLoad();
        await action.waitForDisplayed(this.loadingContainer);
        await action.waitForDisplayed(this.loadingContainer, 120000, true);
        res = {
            lastPublishedVer: await action.getText(this.lastPublishedVer),
            lastSnapshotVer: await action.getText(this.lastSnapshotVer),
            snapshotBtn_isEnabled: await action.isEnabled(this.snapshotBtn),
            publishBtn_isEnabled: await action.isEnabled(this.publishBtn),
        }
        return res;
    },

    click_CreateSnapshot_Button: async function () {
        await logger.logInto(stackTrace.get());
        res = await action.isEnabled(this.snapshotBtn);
        if (res == true) {
            res = await action.click(this.snapshotBtn);
            if (res == true) {
                res = await action.waitForClickable(this.publishBtn, 120000);
                // res = action.isEnabled(this.publishBtn);
            }
            await logger.logInto(stackTrace.get(), res);
        }
        else {
            res = res + " - Snapshot button is not enabled"
        }
        return res;
    },

    click_Preview_Button: async function () {
        await logger.logInto(stackTrace.get());
        res = await action.click(this.previewBtn);
        if (res == true) {
            await browser.switchWindow('engage-difusion');
            res = await action.waitForDocumentLoad();
            res = await action.waitForDisplayed("[data-tid=text-bookTitle]");
        }
        await logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Publish_Button: async function () {
        await logger.logInto(stackTrace.get());
        let prevVersion = await action.getText(this.lastPublishedVer);
        res = await action.isEnabled(this.publishBtn);
        if (res == true) {
            res = await action.click(this.publishBtn);
            if (res == true) {
                await browser.waitUntil(
                    async () => (await action.getText(this.lastPublishedVer)) > prevVersion,
                    {
                        timeout: undefined,
                        timeoutMsg: 'ERROR! Published version did not proceed'
                    }
                );
            }
            await logger.logInto(stackTrace.get(), res);
        }
        else {
            res = res + " - publish button is not enabled"
        }
        return res;
    },



}