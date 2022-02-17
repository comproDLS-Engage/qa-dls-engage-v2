"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {

    downPlayer_img: selectorFile.css.ComproEngage.downloadPlayer.downPlayer_img,
    downPlayer_title: selectorFile.css.ComproEngage.downloadPlayer.downPlayer_title,
    resourceLabel: selectorFile.css.ComproEngage.downloadPlayer.resourceLabel,
    downPlayer_subtitle: selectorFile.css.ComproEngage.downloadPlayer.downPlayer_subtitle,
    downloadBtn: selectorFile.css.ComproEngage.downloadPlayer.downloadBtn,
    downInfoLabel: selectorFile.css.ComproEngage.downloadPlayer.downInfoLabel,
    fileLabel: selectorFile.css.ComproEngage.downloadPlayer.fileLabel,
    fileName: selectorFile.css.ComproEngage.downloadPlayer.fileName,
    typeLabel: selectorFile.css.ComproEngage.downloadPlayer.typeLabel,
    fileType: selectorFile.css.ComproEngage.downloadPlayer.fileType,
    sizeLabel: selectorFile.css.ComproEngage.downloadPlayer.sizeLabel,
    fileSize: selectorFile.css.ComproEngage.downloadPlayer.fileSize,

    isInitialized: function () {
        var res;
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.downPlayer_img),
            appShellPage: appShellPage.isInitialized()
        };
        return res;
    },

    getData_downloadPlayer: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            downPlayer_img: (action.getElementCount(this.downPlayer_img) > 0) ? action.waitForDisplayed(this.downPlayer_img) : false,
            downPlayer_title: (action.getElementCount(this.downPlayer_title) > 0) ? action.getText(this.downPlayer_title) : null,
            resourceLabel: (action.getElementCount(this.resourceLabel) > 0) ? action.getText(this.resourceLabel) : null,
            downPlayer_subtitle: (action.getElementCount(this.downPlayer_subtitle) > 0) ? action.getText(this.downPlayer_subtitle) : null,
            downloadBtn: (action.getElementCount(this.downloadBtn) > 0) ? action.getText(this.downloadBtn) : null,
            downInfoLabel: (action.getElementCount(this.downInfoLabel) > 0) ? action.getText(this.downInfoLabel) : null,
            fileLabel: (action.getElementCount(this.fileLabel) > 0) ? action.getText(this.fileLabel) : null,
            fileName: (action.getElementCount(this.fileName) > 0) ? action.getText(this.fileName) : null,
            typeLabel: (action.getElementCount(this.typeLabel) > 0) ? action.getText(this.typeLabel) : null,
            fileType: (action.getElementCount(this.fileType) > 0) ? action.getText(this.fileType) : null,
            sizeLabel: (action.getElementCount(this.sizeLabel) > 0) ? action.getText(this.sizeLabel) : null,
            fileSize: (action.getElementCount(this.fileSize) > 0) ? action.getText(this.fileSize) : null,
            downloadBtn_isClickable: (action.getElementCount(this.downloadBtn) > 0) ? action.isClickable(this.downloadBtn) : null //manually added
        }
        return obj;
    },

    click_downloadBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.downloadBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " downloadBtn is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res + "downloadBtn is NOT clicked", 'error');
        }
        return res;
    },

}
