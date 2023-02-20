"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    snapshotBtn: selectorFile.publishComponentPage.snapshotBtn,
    refreshBtn: selectorFile.publishComponentPage.refreshBtn,
    previewBtn: selectorFile.publishComponentPage.previewBtn,
    publishBtn: selectorFile.publishComponentPage.publishBtn,
    lastPublishedVer: selectorFile.publishComponentPage.lastPublishedVer,
    lastSnapshotVer: selectorFile.publishComponentPage.lastSnapshotVer,
    loadingContainer: selectorFile.common.loadingContainer,

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        action.waitForDocumentLoad();
        //await action.waitForDisplayed(this.loadingContainer);
        //await action.waitForDisplayed(this.loadingContainer, 60000, true);
        res = {
            lastPublishedVer: await action.getText(this.lastPublishedVer),
            lastSnapshotVer: await action.getText(this.lastSnapshotVer),
            snapshotBtn_isEnabled: await this.refresh_Snapshot(),
            publishBtn_isEnabled: await action.isEnabled(this.publishBtn),
        }
        return res;
    },

    click_CreateSnapshot_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await this.refresh_Snapshot();
        if (res == true) {
            res = await action.click(this.snapshotBtn);
            if (res == true) {
                res = await action.waitForClickable(this.publishBtn, 120000);
            }
            await logger.logInto((await stackTrace.get()), res);
        }
        else {
            res = res + " - Snapshot button is not enabled"
        }
        return res;
    },

    click_Preview_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.previewBtn);
        if (res == true) {
            await browser.switchWindow('engage-');
            res = await action.waitForDocumentLoad();
            res = await action.waitForDisplayed("[data-tid=text-bookTitle]");
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_Publish_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let prevVersion = await action.getText(this.lastPublishedVer);
        res = await action.isEnabled(this.publishBtn);
        if (res == true) {
            res = await action.click(this.publishBtn);
            if (res == true) {
                await action.waitForDisplayed(this.loadingContainer);
                res = await action.waitForDisplayed(this.loadingContainer, 120000, true);
                if (res == true) {
                    res = await action.getText(this.lastPublishedVer) > prevVersion;
                }
                /*await browser.waitUntil(
                    async () => (await action.getText(this.lastPublishedVer)) > prevVersion,
                    {
                        timeout: undefined,
                        timeoutMsg: 'ERROR! Published version did not proceed'
                    }
                );*/
            }
            await logger.logInto((await stackTrace.get()), res);
        }
        return res;
    },

    refresh_Snapshot: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.isEnabled(this.snapshotBtn);
        if (res == false) {
            await browser.pause(5000);
            let res2 = await action.click(this.refreshBtn);
            if (res2 == true) {
                await action.waitForDisplayed(this.loadingContainer);
                await action.waitForDisplayed(this.loadingContainer, 120000, true);
                res = await action.isEnabled(this.snapshotBtn);
            }
        }
        return res;
    }

}