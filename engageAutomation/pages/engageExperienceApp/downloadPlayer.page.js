"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
    pageTitle: selectorFile.css.ComproEngage.downloadPlayer.pageTitle,
    pageSubTitle: selectorFile.css.ComproEngage.downloadPlayer.pageSubTitle,
    labelHeading: selectorFile.css.ComproEngage.downloadPlayer.labelHeading,
    downloadBtn: selectorFile.css.ComproEngage.downloadPlayer.downloadBtn,
    downloadInfo: selectorFile.css.ComproEngage.downloadPlayer.downloadInfo,
    fileLabel: selectorFile.css.ComproEngage.downloadPlayer.fileLabel,
    fileValue: selectorFile.css.ComproEngage.downloadPlayer.fileValue,
    typeLabel: selectorFile.css.ComproEngage.downloadPlayer.typeLabel,
    typeValue: selectorFile.css.ComproEngage.downloadPlayer.typeValue,
    sizeLabel: selectorFile.css.ComproEngage.downloadPlayer.sizeLabel,
    sizeValue: selectorFile.css.ComproEngage.downloadPlayer.sizeValue,


    isInitialized: function() {
        var res;
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.pageTitle),
            appShellPage: appShellPage.isInitialized()
        };
        return res;
    },

    downloadPlayer_Data: function() {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            pageTitle: (action.getElementCount(this.pageTitle) > 0) ? action.getText(this.pageTitle) : null,
            pageSubTitle: (action.getElementCount(this.pageSubTitle) > 0) ? action.getText(this.pageSubTitle) : null,
            labelHeading: (action.getElementCount(this.labelHeading) > 0) ? action.getText(this.labelHeading) : null,
            downloadBtn: (action.getElementCount(this.downloadBtn) > 0) ? action.getText(this.downloadBtn) : null,
            downloadInfo: (action.getElementCount(this.downloadInfo) > 0) ? action.getText(this.downloadInfo) : null,
            fileLabel: (action.getElementCount(this.fileLabel) > 0) ? action.getText(this.fileLabel) : null,
            fileValue: (action.getElementCount(this.fileValue) > 0) ? action.getText(this.fileValue) : null,
            typeLabel: (action.getElementCount(this.typeLabel) > 0) ? action.getText(this.typeLabel) : null,
            typeValue: (action.getElementCount(this.typeValue) > 0) ? action.getText(this.typeValue) : null,
            sizeLabel: (action.getElementCount(this.sizeLabel) > 0) ? action.getText(this.sizeLabel) : null,
            sizeValue: (action.getElementCount(this.sizeValue) > 0) ? action.getText(this.sizeValue) : null,
        }
        return obj;
    },


    click_downloadBtn: function() {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.downloadBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " downloadBtn is clicked");
            res = this.getData_isInitilized();
        } else {
            logger.logInto(stackTrace.get(), res + "downloadBtn is NOT clicked", 'error');
        }
        return res;
    },

}