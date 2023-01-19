"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {

    downPlayerImg: selectorFile.css.ComproEngage.downloadPlayer.downPlayerImg,
    downPlayerTitle: selectorFile.css.ComproEngage.downloadPlayer.downPlayerTitle,
    downPlayerSubtitle: selectorFile.css.ComproEngage.downloadPlayer.downPlayerSubtitle,
    downResHeading: selectorFile.css.ComproEngage.downloadPlayer.downResHeading,
    downResSubheading: selectorFile.css.ComproEngage.downloadPlayer.downResSubheading,
    fileName: selectorFile.css.ComproEngage.downloadPlayer.fileName,
    fileSize: selectorFile.css.ComproEngage.downloadPlayer.fileSize,
    openWithBrowserBtn: selectorFile.css.ComproEngage.downloadPlayer.openWithBrowserBtn,
    downloadBtn: selectorFile.css.ComproEngage.downloadPlayer.downloadBtn,

    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.downPlayerImg),
            appShellPage: await appShellPage.isInitialized()
        };
        return res;
    },

    getData_downloadPlayer: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            downPlayerImg: ((await action.getElementCount(this.downPlayerImg)) > 0) ? await action.waitForDisplayed(this.downPlayerImg) : false,
            downPlayerTitle: ((await action.getElementCount(this.downPlayerTitle)) > 0) ? await action.getText(this.downPlayerTitle) : null,
            downPlayerSubtitle: ((await action.getElementCount(this.downPlayerSubtitle)) > 0) ? await action.getText(this.downPlayerSubtitle) : null,
            downResHeading: ((await action.getElementCount(this.downResHeading)) > 0) ? await action.getText(this.downResHeading) : null,
            downResSubheading: ((await action.getElementCount(this.downResSubheading)) > 0) ? await action.getText(this.downResSubheading) : null,
            fileName: ((await action.getElementCount(this.fileName)) > 0) ? await action.getText(this.fileName) : null,
            fileSize: ((await action.getElementCount(this.fileSize)) > 0) ? await action.getText(this.fileSize) : null,
            openWithBrowserBtn: ((await action.getElementCount(this.openWithBrowserBtn)) > 0) ? await action.getText(this.openWithBrowserBtn) : null,
            downloadBtn: ((await action.getElementCount(this.downloadBtn)) > 0) ? await action.getText(this.downloadBtn) : null
            //downloadBtn_isClickable: ((await action.getElementCount(this.downloadBtn)) > 0) ? await action.isClickable(this.downloadBtn) : null //manually added
        }
        return obj;
    },

    click_openWithBrowserBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.openWithBrowserBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " openWithBrowserBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "openWithBrowserBtn is NOT clicked", 'error');
        }
        return res;
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
    }
    
}
