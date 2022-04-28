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

    isInitialized: function () {
        var res;
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.container),
            appShellPage: appShellPage.isInitialized()
        };
        return res;
    },

    getData_contentPlayer: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            videoPlayerExists: (action.getElementCount(this.videoPlayerExists) > 0) ? action.waitForDisplayed(this.videoPlayerExists) : false,
            audioPlayerExists: (action.getElementCount(this.audioPlayerExists) > 0) ? action.waitForDisplayed(this.audioPlayerExists) : false,
            etextExists: (action.getElementCount(this.etextExists) > 0) ? action.waitForDisplayed(this.etextExists) : false,
            webbookExists: (action.getElementCount(this.webbookExists) > 0) ? action.waitForDisplayed(this.webbookExists) : false,
            scrollToTopBtn: (action.getElementCount(this.scrollToTopBtn) > 0) ? action.getText(this.scrollToTopBtn) : null,
        }
        return obj;
    },

    click_scrollToTopBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.scrollToTopBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " scrollToTopBtn is clicked");
            res = action.waitForDisplayed(this.scrollToTopBtn, undefined, true);
        }
        else {
            logger.logInto(stackTrace.get(), res + "scrollToTopBtn is NOT clicked", 'error');
        }
        return res;
    },

}

