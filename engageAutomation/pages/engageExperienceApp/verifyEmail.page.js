"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj;

module.exports = {
    headingText: selectorFile.css.ComproEngage.verifyEmailPage.headingText,
    subTitleText: selectorFile.css.ComproEngage.verifyEmailPage.subTitleText,
    verificationcode_label: selectorFile.css.ComproEngage.verifyEmailPage.verificationcode_label,
    verificationcode_input: selectorFile.css.ComproEngage.verifyEmailPage.verificationcode_input,
    verifyEmail_btn: selectorFile.css.ComproEngage.verifyEmailPage.verifyEmail_btn,
    resendCode_btn: selectorFile.css.ComproEngage.verifyEmailPage.resendCode_btn,
    backToSignUp_btn: selectorFile.css.ComproEngage.verifyEmailPage.backToSignUp_btn,
    brandLogo_img: selectorFile.css.ComproEngage.verifyEmailPage.brandLogo_img,
    error_text: selectorFile.css.ComproEngage.verifyEmailPage.error_text,


    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.brandLogo_img),
        };

        return res;
    },

    verifyEmailPage_Data: function () {
        obj = {
            headingText: (action.getElementCount(this.headingText) > 0) ? action.getText(this.headingText) : null,
            subTitleText: (action.getElementCount(this.subTitleText) > 0) ? action.getText(this.subTitleText) : null,
            verificationcode_label: (action.getElementCount(this.verificationcode_label) > 0) ? action.getText(this.verificationcode_label) : null,
            verificationcode_input: (action.getElementCount(this.verificationcode_input) > 0) ? action.getAttribute(this.verificationcode_input, "placeholder") : null,
            verifyEmail_btn: (action.getElementCount(this.verifyEmail_btn) > 0) ? action.getText(this.verifyEmail_btn) : null,
            resendCode_btn: (action.getElementCount(this.resendCode_btn) > 0) ? action.getText(this.resendCode_btn) : null,
            backToSignUp_btn: (action.getElementCount(this.backToSignUp_btn) > 0) ? action.getText(this.backToSignUp_btn) : null,
            brandLogo_img: (action.getElementCount(this.brandLogo_img) > 0) ? action.waitForExist(this.brandLogo_img) : false,
            error_text: (action.getElementCount(this.error_text) > 0) ? action.getText(this.error_text) : null,
        }
        return obj
    },


    click_verifyEmail_btn: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.verifyEmail_btn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " verifyEmail_btn button is clicked");
        } else {
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_resendCode_btn: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.resendCode_btn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " resendCode_btn button is clicked");
        } else {
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_backToSignUp_btn: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.backToSignUp_btn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " backToSignUp_btn button is clicked");
        } else {
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    set_verificationcode_input: function (testdata) {
        logger.logInto(stackTrace.get());
        res = action.setValue(this.verificationcode_input, testdata);
        if (true == res) {
            logger.logInto(stackTrace.get(), "Value is entered in verificationcode_input");
        } else {
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

}

