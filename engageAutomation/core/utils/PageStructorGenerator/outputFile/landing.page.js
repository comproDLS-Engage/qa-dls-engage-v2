"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
    headingText: selectorFile.css.ComproEngage.landing.headingText,
    subheadingText: selectorFile.css.ComproEngage.landing.subheadingText,
    signupBtn: selectorFile.css.ComproEngage.landing.signupBtn,
    loginBtn: selectorFile.css.ComproEngage.landing.loginBtn,
    landing_img: selectorFile.css.ComproEngage.landing.landing_img,
    brandLogo_img: selectorFile.css.ComproEngage.landing.brandLogo_img,
    selectedLangImg: selectorFile.css.ComproEngage.landing.selectedLangImg,
    selectedLang: selectorFile.css.ComproEngage.landing.selectedLang,
    languageSelector_dropdown: selectorFile.css.ComproEngage.landing.languageSelector_dropdown,
    languageSelector_dropdown_list: selectorFile.css.ComproEngage.landing.languageSelector_dropdown_list,
    loginLbl: selectorFile.css.ComproEngage.landing.loginLbl,
    footerLbl: selectorFile.css.ComproEngage.landing.footerLbl,
    footerImg: selectorFile.css.ComproEngage.landing.footerImg,


    isInitialized: function () {
        var res;
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.headingText),
            appShellPage: appShellPage.isInitialized()
        };
        return res;
    },

    landing_Data: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            headingText: (action.getElementCount(this.headingText) > 0) ? action.getText(this.headingText) : null,
            subheadingText: (action.getElementCount(this.subheadingText) > 0) ? action.getText(this.subheadingText) : null,
            signupBtn: (action.getElementCount(this.signupBtn) > 0) ? action.getText(this.signupBtn) : null,
            loginBtn: (action.getElementCount(this.loginBtn) > 0) ? action.getText(this.loginBtn) : null,
            landing_img: (action.getElementCount(this.landing_img) > 0) ? action.waitForExist(this.landing_img) : false,
            brandLogo_img: (action.getElementCount(this.brandLogo_img) > 0) ? action.waitForExist(this.brandLogo_img) : false,
            selectedLangImg: (action.getElementCount(this.selectedLangImg) > 0) ? action.waitForExist(this.selectedLangImg) : false,
            selectedLang: (action.getElementCount(this.selectedLang) > 0) ? action.getText(this.selectedLang) : null,
            languageSelector_dropdown: (action.getElementCount(this.languageSelector_dropdown) > 0) ? action.getText(this.languageSelector_dropdown) : null,
            languageSelector_dropdown_list: (action.getElementCount(this.languageSelector_dropdown_list) > 0) ? action.getText(this.languageSelector_dropdown_list) : null,
            loginLbl: (action.getElementCount(this.loginLbl) > 0) ? action.getText(this.loginLbl) : null,
            footerLbl: (action.getElementCount(this.footerLbl) > 0) ? action.getText(this.footerLbl) : null,
            footerImg: (action.getElementCount(this.footerImg) > 0) ? action.waitForExist(this.footerImg) : false,
        }
        return obj;
    },


    click_signupBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.signupBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " signupBtn is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res + "signupBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_loginBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.loginBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " loginBtn is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res + "loginBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_selectedLang: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.selectedLang);
        if (true == res) {
            logger.logInto(stackTrace.get(), " selectedLang is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res + "selectedLang is NOT clicked", 'error');
        }
        return res;
    },

    click_languageSelector_dropdown: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.languageSelector_dropdown);
        if (true == res) {
            logger.logInto(stackTrace.get(), " languageSelector_dropdown is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res + "languageSelector_dropdown is NOT clicked", 'error');
        }
        return res;
    },

    click_languageSelector_dropdown_list: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.languageSelector_dropdown_list);
        if (true == res) {
            logger.logInto(stackTrace.get(), " languageSelector_dropdown_list is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res + "languageSelector_dropdown_list is NOT clicked", 'error');
        }
        return res;
    },

}

