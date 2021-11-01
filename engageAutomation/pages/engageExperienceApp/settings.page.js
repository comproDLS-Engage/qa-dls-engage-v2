'use strict';
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var snackBarTest = require('../../test/engageExperienceApp/common.test.js');
var appShell = require('./appShell.page');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    pageTitle: selectorFile.css.ComproEngage.settings.pageTitle,
    pageSubTitle: selectorFile.css.ComproEngage.settings.pageSubTitle,
    pageHeading: selectorFile.css.ComproEngage.settings.pageHeading,
    //profile
    email_label: selectorFile.css.ComproEngage.settings.email_label,
    email_input: selectorFile.css.ComproEngage.settings.email_input,
    firstName_label: selectorFile.css.ComproEngage.settings.firstName_label,
    firstName_input: selectorFile.css.ComproEngage.settings.firstName_input,
    lastName_label: selectorFile.css.ComproEngage.settings.lastName_label,
    lastName_input: selectorFile.css.ComproEngage.settings.lastName_input,
    country_label: selectorFile.css.ComproEngage.settings.country_label,
    country_input: selectorFile.css.ComproEngage.settings.country_input,
    countryListItem: selectorFile.css.ComproEngage.settings.countryListItem,
    clearIcon: selectorFile.css.ComproEngage.settings.clearIcon,
    firstNameError_text: selectorFile.css.ComproEngage.settings.firstNameError_text,
    lastNameError_text: selectorFile.css.ComproEngage.settings.lastNameError_text,
    changeProfile_button: selectorFile.css.ComproEngage.settings.changeProfile_button,
    //Password
    currentPassword_label: selectorFile.css.ComproEngage.settings.currentPassword_label,
    currentPassword_input: selectorFile.css.ComproEngage.settings.currentPassword_input,
    togglePassword_currentPassword: selectorFile.css.ComproEngage.settings.togglePassword_currentPassword,
    togglePassword_newPassword: selectorFile.css.ComproEngage.settings.togglePassword_newPassword,
    togglePassword_confirmPassword: selectorFile.css.ComproEngage.settings.togglePassword_confirmPassword,
    password_label: selectorFile.css.ComproEngage.settings.password_label,
    password_input: selectorFile.css.ComproEngage.settings.password_input,
    confirmPassword_label: selectorFile.css.ComproEngage.settings.confirmPassword_label,
    confirmPassword_input: selectorFile.css.ComproEngage.settings.confirmPassword_input,
    newPasswordRules_text: selectorFile.css.ComproEngage.settings.newPasswordRules_text,
    changePassword_button: selectorFile.css.ComproEngage.settings.changePassword_button,
    currentPasswordError_text: selectorFile.css.ComproEngage.settings.currentPasswordError_text,
    newPasswordError_text: selectorFile.css.ComproEngage.settings.newPasswordError_text,
    confirmPasswordError_text: selectorFile.css.ComproEngage.settings.confirmPasswordError_text,
    //Accessibility
    fontSizeText: selectorFile.css.ComproEngage.settings.fontSizeText,
    fontSizeValue: selectorFile.css.ComproEngage.settings.fontSizeValue,
    fontSizeDec: selectorFile.css.ComproEngage.settings.fontSizeDec,
    fontSizeInc: selectorFile.css.ComproEngage.settings.fontSizeInc,
    lineSpaceText: selectorFile.css.ComproEngage.settings.lineSpaceText,
    lineSpaceValue: selectorFile.css.ComproEngage.settings.lineSpaceValue,
    lineSpaceDec: selectorFile.css.ComproEngage.settings.lineSpaceDec,
    lineSpaceInc: selectorFile.css.ComproEngage.settings.lineSpaceInc,
    highContrastText: selectorFile.css.ComproEngage.settings.highContrastText,
    highContrastToggleBtn: selectorFile.css.ComproEngage.settings.highContrastToggleBtn,
    dylexicFontText: selectorFile.css.ComproEngage.settings.dylexicFontText,
    dylexicFontToggleBtn: selectorFile.css.ComproEngage.settings.dylexicFontToggleBtn,
    underlinelinksText: selectorFile.css.ComproEngage.settings.underlinelinksText,
    underlinelinksToggleBtn: selectorFile.css.ComproEngage.settings.underlinelinksToggleBtn,
    previewTextHeading: selectorFile.css.ComproEngage.settings.previewTextHeading,
    previewTextPara: selectorFile.css.ComproEngage.settings.previewTextPara,
    previewLinkText: selectorFile.css.ComproEngage.settings.previewLinkText,
    button1: selectorFile.css.ComproEngage.settings.button1,
    button2: selectorFile.css.ComproEngage.settings.button2,
    moreDetailsBtn: selectorFile.css.ComproEngage.settings.moreDetailsBtn,
    resetButton: selectorFile.css.ComproEngage.settings.resetButton,
    applySettingsBtn: selectorFile.css.ComproEngage.settings.applySettingsBtn,
    resetSettingsTitle: selectorFile.css.ComproEngage.settings.resetSettingsTitle,
    resetSettingsSubTitle: selectorFile.css.ComproEngage.settings.resetSettingsSubTitle,
    resetSettingsCancelBtn: selectorFile.css.ComproEngage.settings.resetSettingsCancelBtn,
    resetSettingsConfirmBtn: selectorFile.css.ComproEngage.settings.resetSettingsConfirmBtn,

    isInitialized: function() {
        let res;
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.pageTitle),
            appShell: appShell.isInitialized()
        };
        return res;
    },

    getSettingsPageData: function() {
        logger.logInto(stackTrace.get());
        let obj = {
            pageStatus: action.waitForDisplayed(this.pageTitle),
            pageTitle: action.getElementCount(this.pageTitle) > 0 ? action.getText(this.pageTitle) : null,
            pageSubTitle: action.getElementCount(this.pageSubTitle) > 0 ? action.getText(this.pageSubTitle) : null,
            tabsList: null,
            selectedTab: null
        }

        var tabInfo = appShell.getTabsListData();
        obj.tabsList = tabInfo.list;
        obj.selectedTab = tabInfo.selected;
        return obj;
    },

    getProfileTabData: function() {
        logger.logInto(stackTrace.get());
        let obj = {
            pageHeading: action.getElementCount(this.pageHeading) > 0 ? action.getText(this.pageHeading) : null,
            email_label: action.getElementCount(this.email_label) > 0 ? action.getText(this.email_label) : null,
            email_input: action.getElementCount(this.email_input) > 0 ? action.getAttribute(this.email_input, "value") : null,
            email_input_readOnly: action.getElementCount(this.email_input) > 0 ? action.getAttribute(this.email_input, "disabled") : null,
            firstName_label: action.getElementCount(this.firstName_label) > 0 ? action.getText(this.firstName_label) : null,
            firstName_input: action.getElementCount(this.firstName_input) > 0 ? action.getAttribute(this.firstName_input, "value") : null,
            lastName_label: action.getElementCount(this.lastName_label) > 0 ? action.getText(this.lastName_label) : null,
            lastName_input: action.getElementCount(this.lastName_input) > 0 ? action.getAttribute(this.lastName_input, "value") : null,
            country_label: action.getElementCount(this.country_label) > 0 ? action.getText(this.country_label) : null,
            country_input_placeholder: action.getElementCount(this.country_input) > 0 ? action.getAttribute(this.country_input, "placeholder") : null,
            country_input_value: action.getElementCount(this.country_input) > 0 ? action.getAttribute(this.country_input, "value") : null,
            changeProfile_button: action.getElementCount(this.changeProfile_button) > 0 ? action.getText(this.changeProfile_button) : null
        }
        //console.log(obj)
        return obj;

    },

    setFirstName: function(name) {
        let res;
        logger.logInto(stackTrace.get());
        res = action.setValue(this.firstName_input, name);
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- First Name Entered");
        } else {
            res = res + " -- First Name Not Entered";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    setLastName: function(lastname) {
        let res;
        logger.logInto(stackTrace.get());
        res = action.setValue(this.lastName_input, lastname);
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- Last Name Entered");
        } else {
            res = res + " -- Last Name Not Entered";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    setCountry: function(countryName) {
        let res;
        logger.logInto(stackTrace.get());
        res = action.click(this.country_input)
        if (res == true) {
            res = action.setValue(this.country_input, countryName);
            if (res == true) {
                res = action.waitForDisplayed(this.countryListItem)
                if (res == true) {
                    res = action.click(this.countryListItem)
                    if (res == true) {
                        logger.logInto(stackTrace.get(), " -- Country Name Entered");
                    }
                } else
                    logger.logInto(stackTrace.get(), res + " -- Country Name Not Entered", 'error');
            }
        }
        return res;
    },

    clickClose: function() {
        let res;
        logger.logInto(stackTrace.get());
        res = action.moveTo(this.country_input, 0, 0)
        if (res == true) {
            res = action.click(this.clearIcon);
            if (res == true) {
                res = action.getAttribute(this.country_input, "value");
                logger.logInto(stackTrace.get(), " -- Close Icon Clicked");
            } else {
                res = res + " -- Close Icon Not Clicked";
                logger.logInto(stackTrace.get(), res, 'error');
            }
        }
        return res;
    },

    clickUpdateSettingsProfile: function() {
        let res;
        logger.logInto(stackTrace.get());
        res = action.click(this.changeProfile_button);
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- Update Settings Clicked");
        } else {
            res = res + " -- Update Settings Not Clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    getErrorMessages: function() {
        logger.logInto(stackTrace.get());
        let obj = {
            //profile
            firstNameError_text: action.getElementCount(this.firstNameError_text) > 0 ? action.getText(this.firstNameError_text) : null,
            lastNameError_text: action.getElementCount(this.lastNameError_text) > 0 ? action.getText(this.lastNameError_text) : null,
            //password
            currentPasswordError_text: action.getElementCount(this.currentPasswordError_text) > 0 ? action.getText(this.currentPasswordError_text) : null,
            newPasswordError_text: action.getElementCount(this.newPasswordError_text) > 0 ? action.getText(this.newPasswordError_text) : null,
            confirmPasswordError_text: action.getElementCount(this.confirmPasswordError_text) > 0 ? action.getText(this.confirmPasswordError_text) : null
        }
        //console.log(obj)
        return obj;
    },

    getPasswordTabData: function() {
        logger.logInto(stackTrace.get());
        let obj = {
            //password
            pageHeading: action.getElementCount(this.pageHeading) > 0 ? action.getText(this.pageHeading) : null,
            currentPassword_label: action.getElementCount(this.currentPassword_label) > 0 ? action.getText(this.currentPassword_label) : null,
            currentPassword_input: action.getElementCount(this.currentPassword_input) > 0 ? action.getText(this.currentPassword_input) : null,
            togglePassword_currentPassword: action.getElementCount(this.togglePassword_currentPassword) > 0 ? action.waitForExist(this.togglePassword_currentPassword) : null,
            password_label: action.getElementCount(this.password_label) > 0 ? action.getText(this.password_label) : null,
            password_input: action.getElementCount(this.password_input) > 0 ? action.getText(this.password_input) : null,
            confirmPassword_label: action.getElementCount(this.confirmPassword_label) > 0 ? action.getText(this.confirmPassword_label) : null,
            confirmPassword_input: action.getElementCount(this.confirmPassword_input) > 0 ? action.getText(this.confirmPassword_input) : null,
            newPasswordRules_text: action.getElementCount(this.newPasswordRules_text) > 0 ? action.getText(this.newPasswordRules_text) : null,
            changePassword_button: action.getElementCount(this.changePassword_button) > 0 ? action.getText(this.changePassword_button) : null
        }
        //console.log(obj)
        return obj;
    },

    setCurrentPassword: function(password) {
        let res;
        logger.logInto(stackTrace.get());
        res = action.setValue(this.currentPassword_input, password);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Current password Entered");
        } else {
            res = res + " -- Current password Not Entered";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    setNewPassword: function(password) {
        let res;
        logger.logInto(stackTrace.get());
        res = action.setValue(this.password_input, password);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --New Password Entered");
        } else {
            res = res + " -- New Password Not Entered";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    setConfirmPassword: function(password) {
        let res;
        logger.logInto(stackTrace.get());
        res = action.setValue(this.confirmPassword_input, password);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Confirm Password Entered");
        } else {
            res = res + " -- Confirm Password Not Entered";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    ////TBD - password text to be extracted. getText and getValue not working
    // togglePasswordVisibility: function() {
    //     let res;
    //     logger.logInto(stackTrace.get());
    //     browser.pause(2000)
    //     res = action.click(this.togglePassword_currentPassword);
    //     if (res == true) {
    //         console.log("haha")
    //         browser.pause(5000)
    //         res = action.click(this.togglePassword_newPassword);
    //         if (res == true) {
    //             console.log("hahaha")
    //              browser.pause(5000)
    //             res = action.click(this.togglePassword_confirmPassword);
    //             if (res == true) {
    //                 res = this.getPasswordTabData();
    //                 logger.logInto(stackTrace.get(), " --Toggle Password Clicked");
    //             }

    //         }
    //     } else {
    //         res = res + " -- Confirm Password Not Entered";
    //         logger.logInto(stackTrace.get(), res, 'error');
    //     }
    //     return res;
    // },

    clickUpdateSettingsPassword: function() {
        let res;
        logger.logInto(stackTrace.get());
        res = action.click(this.changePassword_button);
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- Update Settings Clicked");
        } else {
            res = res + " -- Update Settings Not Clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    getAccessibilityTabData: function() {
        logger.logInto(stackTrace.get());
        let obj = {
            pageHeading: action.getElementCount(this.pageHeading) > 0 ? action.getText(this.pageHeading) : null,
            fontSizeText: (action.getElementCount(this.fontSizeText) > 0) ? action.getText(this.fontSizeText) : null,
            fontSizeValue: (action.getElementCount(this.fontSizeValue) > 0) ? action.getText(this.fontSizeValue) : null,
            fontSizeDec: (action.getElementCount(this.fontSizeDec) > 0) ? action.getText(this.fontSizeDec) : null,
            fontSizeInc: (action.getElementCount(this.fontSizeInc) > 0) ? action.getText(this.fontSizeInc) : null,
            lineSpaceText: (action.getElementCount(this.lineSpaceText) > 0) ? action.getText(this.lineSpaceText) : null,
            lineSpaceValue: (action.getElementCount(this.lineSpaceValue) > 0) ? action.getText(this.lineSpaceValue) : null,
            lineSpaceDec: (action.getElementCount(this.lineSpaceDec) > 0) ? action.getText(this.lineSpaceDec) : null,
            lineSpaceInc: (action.getElementCount(this.lineSpaceInc) > 0) ? action.getText(this.lineSpaceInc) : null,
            highContrastText: (action.getElementCount(this.highContrastText) > 0) ? action.getText(this.highContrastText) : null,
            highContrastToggleBtn: (action.getElementCount(this.highContrastToggleBtn) > 0) ? action.getText(this.highContrastToggleBtn) : null,
            dylexicFontText: (action.getElementCount(this.dylexicFontText) > 0) ? action.getText(this.dylexicFontText) : null,
            dylexicFontToggleBtn: (action.getElementCount(this.dylexicFontToggleBtn) > 0) ? action.getText(this.dylexicFontToggleBtn) : null,
            underlinelinksText: (action.getElementCount(this.underlinelinksText) > 0) ? action.getText(this.underlinelinksText) : null,
            underlinelinksToggleBtn: (action.getElementCount(this.underlinelinksToggleBtn) > 0) ? action.getText(this.underlinelinksToggleBtn) : null,
            previewTextHeading: (action.getElementCount(this.previewTextHeading) > 0) ? action.getText(this.previewTextHeading) : null,
            previewTextPara: (action.getElementCount(this.previewTextPara) > 0) ? action.getText(this.previewTextPara) : null,
            previewLinkText: (action.getElementCount(this.previewLinkText) > 0) ? action.getText(this.previewLinkText) : null,
            button1: (action.getElementCount(this.button1) > 0) ? action.getText(this.button1) : null,
            button2: (action.getElementCount(this.button2) > 0) ? action.getText(this.button2) : null,
            moreDetailsBtn: (action.getElementCount(this.moreDetailsBtn) > 0) ? action.getText(this.moreDetailsBtn) : null,
            resetButton: (action.getElementCount(this.resetButton) > 0) ? action.getText(this.resetButton) : null,
            applySettingsBtn: (action.getElementCount(this.applySettingsBtn) > 0) ? action.getText(this.applySettingsBtn) : null

        }
        //console.log(obj)
        return obj;
    },

    getCssPropertyData: function() {
        logger.logInto(stackTrace.get());
        action.scrollIntoView(this.pageHeading)
        let obj = {
            pageHeading_font: action.getElementCount(this.pageHeading) > 0 ? action.getCSSProperty(this.pageHeading, 'font-family').value : null,
            pageHeading_lineHeight: action.getElementCount(this.pageHeading) > 0 ? action.getCSSProperty(this.pageHeading, 'line-height').value : null,
            pageHeading_fontSize: action.getElementCount(this.pageHeading) > 0 ? action.getCSSProperty(this.pageHeading, 'font-size').value : null,

            previewTextHeading_font: (action.getElementCount(this.previewTextHeading) > 0) ? action.getCSSProperty(this.previewTextHeading, 'font-family').value : null,
            previewTextHeading_lineHeight: (action.getElementCount(this.previewTextHeading) > 0) ? action.getCSSProperty(this.previewTextHeading, 'line-height').value : null,
            previewTextHeading_fontSize: (action.getElementCount(this.previewTextHeading) > 0) ? action.getCSSProperty(this.previewTextHeading, 'font-size').value : null,

            previewTextPara_font: (action.getElementCount(this.previewTextPara) > 0) ? action.getCSSProperty(this.previewTextPara, 'font-family').value : null,
            previewTextPara_lineHeight: (action.getElementCount(this.previewTextPara) > 0) ? action.getCSSProperty(this.previewTextPara, 'line-height').value : null,
            previewTextPara_fontSize: (action.getElementCount(this.previewTextPara) > 0) ? action.getCSSProperty(this.previewTextPara, 'font-size').value : null,

            previewLinkText_font: (action.getElementCount(this.previewLinkText) > 0) ? action.getCSSProperty(this.previewLinkText, 'font-family').value : null,
            previewLinkText_lineHeight: (action.getElementCount(this.previewLinkText) > 0) ? action.getCSSProperty(this.previewLinkText, 'line-height').value : null,
            previewLinkText_fontSize: (action.getElementCount(this.previewLinkText) > 0) ? action.getCSSProperty(this.previewLinkText, 'font-size').value : null,
            previewLinkText_textDecoration: (action.getElementCount(this.previewLinkText) > 0) ? action.getCSSProperty(this.previewLinkText, 'text-decoration').value : null,
            previewLinkText_color: (action.getElementCount(this.previewLinkText) > 0) ? action.getCSSProperty(this.previewLinkText, 'color').value : null,

            button1_font: (action.getElementCount(this.button1) > 0) ? action.getCSSProperty(this.button1, 'font-family').value : null,
            button1_lineHeight: (action.getElementCount(this.button1) > 0) ? action.getCSSProperty(this.button1, 'line-height').value : null,
            button1_fontSize: (action.getElementCount(this.button1) > 0) ? action.getCSSProperty(this.button1, 'font-size').value : null,
            button1_textDecoration: (action.getElementCount(this.button1) > 0) ? action.getCSSProperty(this.button1, 'text-decoration').value : null,
            button1_color: (action.getElementCount(this.button1) > 0) ? action.getCSSProperty(this.button1, 'color').value : null,

            button2_font: (action.getElementCount(this.button2) > 0) ? action.getCSSProperty(this.button2, 'font-family').value : null,
            button2_lineHeight: (action.getElementCount(this.button2) > 0) ? action.getCSSProperty(this.button2, 'line-height').value : null,
            button2_fontSize: (action.getElementCount(this.button2) > 0) ? action.getCSSProperty(this.button2, 'font-size').value : null,
            button2_textDecoration: (action.getElementCount(this.button2) > 0) ? action.getCSSProperty(this.button2, 'text-decoration').value : null,
            button2_bgcolor: (action.getElementCount(this.button2) > 0) ? action.getCSSProperty(this.button2, 'background-color').value : null,

            moreDetailsBtn_font: (action.getElementCount(this.moreDetailsBtn) > 0) ? action.getCSSProperty(this.moreDetailsBtn, 'font-family').value : null,
            moreDetailsBtn_lineHeight: (action.getElementCount(this.moreDetailsBtn) > 0) ? action.getCSSProperty(this.moreDetailsBtn, 'line-height').value : null,
            moreDetailsBtn_fontSize: (action.getElementCount(this.moreDetailsBtn) > 0) ? action.getCSSProperty(this.moreDetailsBtn, 'font-size').value : null,
            moreDetailsBtn_textDecoration: (action.getElementCount(this.moreDetailsBtn) > 0) ? action.getCSSProperty(this.moreDetailsBtn, 'text-decoration').value : null,
            moreDetailsBtn_color: (action.getElementCount(this.moreDetailsBtn) > 0) ? action.getCSSProperty(this.moreDetailsBtn, 'color').value : null,

            resetButton_font: (action.getElementCount(this.resetButton) > 0) ? action.getCSSProperty(this.resetButton, 'font-family').value : null,
            resetButton_lineHeight: (action.getElementCount(this.resetButton) > 0) ? action.getCSSProperty(this.resetButton, 'line-height').value : null,
            resetButton_fontSize: (action.getElementCount(this.resetButton) > 0) ? action.getCSSProperty(this.resetButton, 'font-size').value : null,
            resetButton_textDecoration: (action.getElementCount(this.resetButton) > 0) ? action.getCSSProperty(this.resetButton, 'text-decoration').value : null,
            resetButton_color: (action.getElementCount(this.resetButton) > 0) ? action.getCSSProperty(this.resetButton, 'color').value : null,

            applySettingsBtn_font: (action.getElementCount(this.applySettingsBtn) > 0) ? action.getCSSProperty(this.applySettingsBtn, 'font-family').value : null,
            applySettingsBtn_lineHeight: (action.getElementCount(this.applySettingsBtn) > 0) ? action.getCSSProperty(this.applySettingsBtn, 'line-height').value : null,
            applySettingsBtn_fontSize: (action.getElementCount(this.applySettingsBtn) > 0) ? action.getCSSProperty(this.applySettingsBtn, 'font-size').value : null,
            applySettingsBtn_textDecoration: (action.getElementCount(this.applySettingsBtn) > 0) ? action.getCSSProperty(this.applySettingsBtn, 'text-decoration').value : null,
            applySettingsBtn_bgcolor: (action.getElementCount(this.applySettingsBtn) > 0) ? action.getCSSProperty(this.applySettingsBtn, 'background-color').value : null

        }
        //console.log(obj)
        return obj;
    },

    getResetSettingsModalData: function() {
        logger.logInto(stackTrace.get());
        let obj = {
            resetSettingsTitle: action.getElementCount(this.resetSettingsTitle) > 0 ? action.getText(this.resetSettingsTitle) : null,
            resetSettingsSubTitle: (action.getElementCount(this.resetSettingsSubTitle) > 0) ? action.getText(this.resetSettingsSubTitle) : null,
            resetSettingsCancelBtn: (action.getElementCount(this.resetSettingsCancelBtn) > 0) ? action.getText(this.resetSettingsCancelBtn) : null,
            resetSettingsConfirmBtn: (action.getElementCount(this.resetSettingsConfirmBtn) > 0) ? action.getText(this.resetSettingsConfirmBtn) : null
        }
        //console.log(obj)
        return obj;
    },

    click_fontSizeDec: function(count) {
        let res;
        var itr;
        logger.logInto(stackTrace.get());
        for (itr = 0; itr < count; itr++) {
            res = action.click(this.fontSizeDec);
        }

        if (true == res) {
            logger.logInto(stackTrace.get(), " fontSizeDec button is clicked");
        } else {
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_fontSizeInc: function(count) {
        logger.logInto(stackTrace.get());
        let res;
        var itr;
        for (itr = 0; itr < count; itr++) {
            res = action.click(this.fontSizeInc);
        }
        if (true == res) {
            logger.logInto(stackTrace.get(), " fontSizeInc button is clicked");
        } else {
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_lineSpaceDec: function(count) {
        let res;
        logger.logInto(stackTrace.get());
        var itr;
        for (itr = 0; itr < count; itr++) {
            res = action.click(this.lineSpaceDec);
        }
        if (true == res) {
            logger.logInto(stackTrace.get(), " lineSpaceDec button is clicked");
        } else {
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_lineSpaceInc: function(count) {
        let res;
        logger.logInto(stackTrace.get());
        var itr;
        for (itr = 0; itr < count; itr++) {
            res = action.click(this.lineSpaceInc);
        }
        if (true == res) {
            logger.logInto(stackTrace.get(), " lineSpaceInc button is clicked");
        } else {
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_highContrastToggleBtn: function() {
        let res;
        logger.logInto(stackTrace.get());
        res = action.click(this.highContrastToggleBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " highContrastToggleBtn button is clicked");
        } else {
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_dylexicFontToggleBtn: function() {
        let res;
        logger.logInto(stackTrace.get());
        res = action.click(this.dylexicFontToggleBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " dylexicFontToggleBtn button is clicked");
        } else {
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_underlineLinksToggleBtn: function() {
        let res;
        logger.logInto(stackTrace.get());
        res = action.click(this.underlinelinksToggleBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " underlinelinksToggleBtn button is clicked");
        } else {
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    // click_button1: function () {
    //     logger.logInto(stackTrace.get());
    //     res = action.click(this.button1);
    //     if (true == res) {
    //         logger.logInto(stackTrace.get(), " button1 button is clicked");
    //     } else {
    //         logger.logInto(stackTrace.get(), res, 'error');
    //     }
    //     return res;
    // },

    // click_button2: function () {
    //     logger.logInto(stackTrace.get());
    //     res = action.click(this.button2);
    //     if (true == res) {
    //         logger.logInto(stackTrace.get(), " button2 button is clicked");
    //     } else {
    //         logger.logInto(stackTrace.get(), res, 'error');
    //     }
    //     return res;
    // },

    click_moreDetailsBtn: function() {
        let res;
        logger.logInto(stackTrace.get());
        res = action.click(this.moreDetailsBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " moreDetailsBtn button is clicked");
        } else {
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_resetButton: function() {
        let res;
        logger.logInto(stackTrace.get());
        res = action.click(this.resetButton);
        if (true == res) {
            res = this.getResetSettingsModalData()
            logger.logInto(stackTrace.get(), " resetButton button is clicked");
        } else {
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_applySettingsButton: function() {
        let res;
        logger.logInto(stackTrace.get());
        res = action.click(this.applySettingsBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " applySettings button is clicked");
            res = snackBarTest.get_Snackbar_Message_Text();
        } else {
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_resetSettingsConfirmBtn: function() {
        let res;
        logger.logInto(stackTrace.get());
        res = action.click(this.resetSettingsConfirmBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " Confirm button is clicked");
            res = snackBarTest.get_Snackbar_Message_Text();
        } else {
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    }


}