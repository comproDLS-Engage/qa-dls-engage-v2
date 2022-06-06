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
    viewBtn: selectorFile.css.ComproEngage.downloadPlayer.viewBtn,

    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.downPlayer_img),
            appShellPage: await appShellPage.isInitialized()
        };
        return res;
    },

    getData_downloadPlayer: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            downPlayer_img: ((await action.getElementCount(this.downPlayer_img)) > 0) ? await action.waitForDisplayed(this.downPlayer_img) : false,
            downPlayer_title: ((await action.getElementCount(this.downPlayer_title)) > 0) ? await action.getText(this.downPlayer_title) : null,
            resourceLabel: ((await action.getElementCount(this.resourceLabel)) > 0) ? await action.getText(this.resourceLabel) : null,
            downPlayer_subtitle: ((await action.getElementCount(this.downPlayer_subtitle)) > 0) ? await action.getText(this.downPlayer_subtitle) : null,
            downloadBtn: ((await action.getElementCount(this.downloadBtn)) > 0) ? await action.getText(this.downloadBtn) : null,
            downInfoLabel: ((await action.getElementCount(this.downInfoLabel)) > 0) ? await action.getText(this.downInfoLabel) : null,
            fileLabel: ((await action.getElementCount(this.fileLabel)) > 0) ? await action.getText(this.fileLabel) : null,
            fileName: ((await action.getElementCount(this.fileName)) > 0) ? await action.getText(this.fileName) : null,
            typeLabel: ((await action.getElementCount(this.typeLabel)) > 0) ? await action.getText(this.typeLabel) : null,
            fileType: ((await action.getElementCount(this.fileType)) > 0) ? await action.getText(this.fileType) : null,
            sizeLabel: ((await action.getElementCount(this.sizeLabel)) > 0) ? await action.getText(this.sizeLabel) : null,
            fileSize: ((await action.getElementCount(this.fileSize)) > 0) ? await action.getText(this.fileSize) : null,
            viewBtn: ((await action.getElementCount(this.viewBtn)) > 0) ? await action.getText(this.viewBtn) : null,
            downloadBtn_isClickable: ((await action.getElementCount(this.downloadBtn)) > 0) ? await action.isClickable(this.downloadBtn) : null //manually added
        }
        return obj;
    },

    click_downloadBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.downloadBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " downloadBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "downloadBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_viewBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.viewBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " viewBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "viewBtn is NOT clicked", 'error');
        }
        return res;
    },
    
}
