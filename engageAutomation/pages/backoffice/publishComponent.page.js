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

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        //action.waitForDocumentLoad();
        action.waitForDisplayed(this.loadingContainer);
        action.waitForDisplayed(this.loadingContainer, undefined, true);
        res = {
            lastPublishedVer: action.getText(this.lastPublishedVer),
            lastSnapshotVer: action.getText(this.lastSnapshotVer),
            snapshotBtn_isEnabled: action.isEnabled(this.snapshotBtn),
            publishBtn_isEnabled: action.isEnabled(this.publishBtn),
        }
        return res;
    },

    click_CreateSnapshot_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.isEnabled(this.snapshotBtn);
        if (res == true) {
            res = action.click(this.snapshotBtn);
            if (res == true) {
                res = action.waitForClickable(this.publishBtn);
                // res = action.isEnabled(this.publishBtn);
            }
            logger.logInto(stackTrace.get(), res);
        }
        else {
            res = res + "Snapshot button is not enabled"
        }
        return res;
    },

    click_Preview_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.previewBtn);
        if (res == true) {
            browser.switchWindow('engage-difusion');
            res = action.waitForDocumentLoad();
            res = action.waitForDisplayed("[data-tid=text-bookTitle]");
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Publish_Button: function () {
        logger.logInto(stackTrace.get());
        let prevVersion = action.getText(this.lastPublishedVer);
        res = action.isEnabled(this.publishBtn);
        if (res == true) {
            res = action.click(this.publishBtn);
            if (res == true) {
                browser.waitUntil(
                    () => action.getText(this.lastPublishedVer) > prevVersion,
                    {
                        timeout: undefined,
                        timeoutMsg: 'ERROR! Published version did not proceed'
                    }
                );
            }
            logger.logInto(stackTrace.get(), res);
        }
        else {
            res = res + "publish button is not enabled"
        }
        return res;
    },



}