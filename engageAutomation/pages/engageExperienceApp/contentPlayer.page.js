"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {

    container: selectorFile.css.ComproEngage.contentPlayer.container,
    videoPlayerExists: selectorFile.css.ComproEngage.contentPlayer.videoPlayerExists,
    audioPlayerExists: selectorFile.css.ComproEngage.contentPlayer.audioPlayerExists,
    etextExists: selectorFile.css.ComproEngage.contentPlayer.etextExists,
    webbookExists: selectorFile.css.ComproEngage.contentPlayer.webbookExists,
    scrollToTopBtn: selectorFile.css.ComproEngage.contentPlayer.scrollToTopBtn,
    transcriptExists: selectorFile.css.ComproEngage.contentPlayer.transcriptExists,

    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.container),
            appShellPage: await appShellPage.isInitialized()
        };
        return res;
    },

    getData_contentPlayer: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            videoPlayerExists: ((await action.getElementCount(this.videoPlayerExists)) > 0) ? await action.waitForDisplayed(this.videoPlayerExists) : false,
            audioPlayerExists: ((await action.getElementCount(this.audioPlayerExists)) > 0) ? await action.waitForDisplayed(this.audioPlayerExists) : false,
            etextExists: ((await action.getElementCount(this.etextExists)) > 0) ? await action.waitForDisplayed(this.etextExists) : false,
            webbookExists: ((await action.getElementCount(this.webbookExists)) > 0) ? await action.waitForDisplayed(this.webbookExists) : false,
            scrollToTopBtn: ((await action.getElementCount(this.scrollToTopBtn)) > 0) ? await action.getText(this.scrollToTopBtn) : null,
            transcriptExists: ((await action.getElementCount(this.transcriptExists)) > 0) ? await action.waitForDisplayed(this.transcriptExists) : false,
        }
        return obj;
    },

    click_scrollToTopBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.scrollToTopBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " scrollToTopBtn is clicked");
            res = await action.waitForDisplayed(this.scrollToTopBtn, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "scrollToTopBtn is NOT clicked", 'error');
        }
        return res;
    },

}

