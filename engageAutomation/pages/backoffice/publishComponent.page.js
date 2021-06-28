"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    snapshotBtn: selectorFile.publishComponentPage.snapshotBtn,
    previewBtn:selectorFile.publishComponentPage.previewBtn,
    publishBtn: selectorFile.publishComponentPage.publishBtn,
    lastPublishedVer: selectorFile.publishComponentPage.lastPublishedVer,
    lastSnapshotVer: selectorFile.publishComponentPage.lastSnapshotVer,
    closeBtn: selectorFile.common.closeBtn,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        //action.waitForDocumentLoad();
        action.waitForDisplayed(this.loadingContainer);
        action.waitForDisplayed(this.loadingContainer, undefined, true);
        res = {
            lastPublishedVer: action.getText(this.lastPublishedVer),
            lastSnapshotVer: action.getText(this.lastSnapshotVer),
            snapshotBtn_isEnabled: action.isEnabled(this.snapshotBtn),
            publishBtn_isEnabled: action.isEnabled(this.publishBtn)
        }
        return res;
    },

    click_CreateSnapshot_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.snapshotBtn);
        if (res == true) {
            res = action.isEnabled(this.publishBtn);
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Preview_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.previewBtn);
        if (res == true) {
            //res = require('./addLO.page.js').isInitialized();
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Publish_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.publishBtn);
        if (res == true) {
            res = action.isEnabled(this.snapshotBtn);
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    }

}