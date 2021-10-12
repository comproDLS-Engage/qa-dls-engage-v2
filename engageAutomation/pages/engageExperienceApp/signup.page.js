"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var loginPage = require('./login.page');
var res, obj;

module.exports = {

    brandLogo_img: selectorFile.css.ComproEngage.verifyEmailPage.brandLogo_img,
    headingText: selectorFile.css.ComproEngage.SignUpPage.headingText,
    subheadingText: selectorFile.css.ComproEngage.SignUpPage.subheadingText,
    email_label: selectorFile.css.ComproEngage.SignUpPage.email_label,
    email_input: selectorFile.css.ComproEngage.SignUpPage.email_input,
    signUpEmailPage_btn: selectorFile.css.ComproEngage.SignUpPage.signUpEmailPage_btn,
    continueWith_text: selectorFile.css.ComproEngage.SignUpPage.continueWith_text,
    google_btn: selectorFile.css.ComproEngage.SignUpPage.google_btn,
    facebook_btn: selectorFile.css.ComproEngage.SignUpPage.facebook_btn,
    haveAnAccount_text: selectorFile.css.ComproEngage.SignUpPage.haveAnAccount_text,
    login_btn: selectorFile.css.ComproEngage.SignUpPage.login_btn

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.brandLogo_img),
        };

        return res;
    },

    signUpPage_Data: function () {
        obj = {
            headingText: (action.getElementCount(this.headingText) > 0) ? action.getText(this.headingText) : null,
            subTitleText: (action.getElementCount(this.subTitleText) > 0) ? action.getText(this.subTitleText) : null,
            email_label: (action.getElementCount(this.email_label) > 0) ? action.getText(this.email_label) : null,
            email_input_placeholder: (action.getElementCount(this.email_input) > 0) ? action.getAttribute(this.email_input, "placeholder") : null,
            signUpEmailPage_btn: (action.getElementCount(this.signUpEmailPage_btn) > 0) ? action.getText(this.signUpEmailPage_btn) : null,
            continueWith_text: (action.getElementCount(this.continueWith_text) > 0) ? action.getText(this.continueWith_text) : null,
            haveAnAccount_text: (action.getElementCount(this.haveAnAccount_text) > 0) ? action.getText(this.haveAnAccount_text) : null,
            brandLogo_img: (action.getElementCount(this.brandLogo_img) > 0) ? action.waitForExist(this.brandLogo_img) : false,
            google_btn: (action.getElementCount(this.google_btn) > 0) ? action.waitForExist(this.google_btn) : false,
            facebook_btn: (action.getElementCount(this.facebook_btn) > 0) ? action.waitForExist(this.facebook_btn) : false,
            login_btn: (action.getElementCount(this.login_btn) > 0) ? action.getText(this.login_btn) : null,
            error_text: (action.getElementCount(this.error_text) > 0) ? action.getText(this.error_text) : null,
        }
        return obj
    },

    click_signUp_btn: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.signUpEmailPage_btn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " signUp_btn button is clicked");
        } else {
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    }

};