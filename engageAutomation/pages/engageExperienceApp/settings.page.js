'use strict';
const action = require('../../core/actionLibrary/baseActionLibrary.js');
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
    //billing
    subscription_text: selectorFile.css.ComproEngage.settings.subscription_text,
    subscriptionSubtitle_text: selectorFile.css.ComproEngage.settings.subscriptionSubtitle_text,
    free_text: selectorFile.css.ComproEngage.settings.free_text,
    getPremiumAccess_text: selectorFile.css.ComproEngage.settings.getPremiumAccess_text,
    getPremiumAccessSubtitle_text: selectorFile.css.ComproEngage.settings.getPremiumAccessSubtitle_text,
    price_text: selectorFile.css.ComproEngage.settings.price_text,
    upgradePlan_btn: selectorFile.css.ComproEngage.settings.upgradePlan_btn,
    paymentMethod_text: selectorFile.css.ComproEngage.settings.paymentMethod_text,
    noPaymentMethod_text: selectorFile.css.ComproEngage.settings.noPaymentMethod_text,
    noPaymentMethodSubtitle_text: selectorFile.css.ComproEngage.settings.noPaymentMethodSubtitle_text,
    billingMethod: selectorFile.css.ComproEngage.settings.billingMethod,
    noBillingInfo_text: selectorFile.css.ComproEngage.settings.noBillingInfo_text,
    noBillingInfoSubtitle_text: selectorFile.css.ComproEngage.settings.noBillingInfoSubtitle_text,
    premiumPlan_text: selectorFile.css.ComproEngage.settings.premiumPlan_text,
    active_text: selectorFile.css.ComproEngage.settings.active_text,
    premiumPrice_text: selectorFile.css.ComproEngage.settings.premiumPrice_text,
    autoRenewal_text: selectorFile.css.ComproEngage.settings.autoRenewal_text,
    licensePeriod_text: selectorFile.css.ComproEngage.settings.licensePeriod_text,
    licensePeriod_date: selectorFile.css.ComproEngage.settings.licensePeriod_date,
    managePlan_btn: selectorFile.css.ComproEngage.settings.managePlan_btn,
    changeCard_btn: selectorFile.css.ComproEngage.settings.changeCard_btn,
    updateBillingAddress_btn: selectorFile.css.ComproEngage.settings.updateBillingAddress_btn,

    isInitialized: async function() {
        let res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.pageTitle),
            appShell: await appShell.isInitialized()
        };
        return res;
    },

    getSettingsPageData: async function() {
        await logger.logInto(await stackTrace.get());
        let obj = {
            pageStatus: await action.waitForDisplayed(this.pageTitle),
            pageTitle: (await action.getElementCount(this.pageTitle)) > 0 ? await action.getText(this.pageTitle) : null,
            pageSubTitle: (await action.getElementCount(this.pageSubTitle)) > 0 ? await action.getText(this.pageSubTitle) : null,
            tabsList: null,
            selectedTab: null
        }

        var tabInfo = await appShell.getTabsListData();
        obj.tabsList = tabInfo.list;
        obj.selectedTab = tabInfo.selected;
        return obj;
    },

    getProfileTabData: async function() {
        await logger.logInto(await stackTrace.get());
        let obj = {
            pageHeading: (await action.getElementCount(this.pageHeading)) > 0 ? await action.getText(this.pageHeading) : null,
            email_label: (await action.getElementCount(this.email_label)) > 0 ? await action.getText(this.email_label) : null,
            email_input: (await action.getElementCount(this.email_input)) > 0 ? await action.getAttribute(this.email_input, "value") : null,
            email_input_readOnly: (await action.getElementCount(this.email_input)) > 0 ? await action.getAttribute(this.email_input, "disabled") : null,
            firstName_label: (await action.getElementCount(this.firstName_label)) > 0 ? await action.getText(this.firstName_label) : null,
            firstName_input: (await action.getElementCount(this.firstName_input)) > 0 ? await action.getAttribute(this.firstName_input, "value") : null,
            lastName_label: (await action.getElementCount(this.lastName_label)) > 0 ? await action.getText(this.lastName_label) : null,
            lastName_input: (await action.getElementCount(this.lastName_input)) > 0 ? await action.getAttribute(this.lastName_input, "value") : null,
            country_label: (await action.getElementCount(this.country_label)) > 0 ? await action.getText(this.country_label) : null,
            country_input_placeholder: (await action.getElementCount(this.country_input)) > 0 ? await action.getAttribute(this.country_input, "placeholder") : null,
            country_input_value: (await action.getElementCount(this.country_input)) > 0 ? await action.getAttribute(this.country_input, "value") : null,
            changeProfile_button: (await action.getElementCount(this.changeProfile_button)) > 0 ? await action.getText(this.changeProfile_button) : null
        }
        return obj;
    },

    setFirstName: async function(name) {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.firstName_input, name);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " -- First Name Entered");
        } else {
            res = res + " -- First Name Not Entered";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    setLastName: async function(lastname) {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.lastName_input, lastname);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " -- Last Name Entered");
        } else {
            res = res + " -- Last Name Not Entered";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    setCountry: async function(countryName) {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.country_input)
        if (res == true) {
            res = await action.setValue(this.country_input, countryName);
            if (res == true) {
                res = await action.waitForDisplayed(this.countryListItem)
                if (res == true) {
                    res = await action.click(this.countryListItem)
                    if (res == true) {
                        await logger.logInto(await stackTrace.get(), " -- Country Name Entered");
                    }
                } else
                    await logger.logInto(await stackTrace.get(), res + " -- Country Name Not Entered", 'error');
            }
        }
        return res;
    },

    clickClose: async function() {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.moveTo(this.country_input, 0, 0)
        if (res == true) {
            res = await action.click(this.clearIcon);
            if (res == true) {
                res = await action.getAttribute(this.country_input, "value");
                await logger.logInto(await stackTrace.get(), " -- Close Icon Clicked");
            } else {
                res = res + " -- Close Icon Not Clicked";
                await logger.logInto(await stackTrace.get(), res, 'error');
            }
        }
        return res;
    },

    clickUpdateSettingsProfile: async function() {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.changeProfile_button);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " -- Update Settings Clicked");
        } else {
            res = res + " -- Update Settings Not Clicked";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    getErrorMessages: async function() {
        await logger.logInto(await stackTrace.get());
        let obj = {
            //profile
            firstNameError_text: (await action.getElementCount(this.firstNameError_text)) > 0 ? await action.getText(this.firstNameError_text) : null,
            lastNameError_text: (await action.getElementCount(this.lastNameError_text)) > 0 ? await action.getText(this.lastNameError_text) : null,
            //password
            currentPasswordError_text: (await action.getElementCount(this.currentPasswordError_text)) > 0 ? await action.getText(this.currentPasswordError_text) : null,
            newPasswordError_text: (await action.getElementCount(this.newPasswordError_text)) > 0 ? await action.getText(this.newPasswordError_text) : null,
            confirmPasswordError_text: (await action.getElementCount(this.confirmPasswordError_text)) > 0 ? await action.getText(this.confirmPasswordError_text) : null
        }
        //console.log(obj)
        return obj;
    },

    getPasswordTabData: async function() {
        await logger.logInto(await stackTrace.get());
        let obj = {
            //password
            pageHeading: (await action.getElementCount(this.pageHeading)) > 0 ? await action.getText(this.pageHeading) : null,
            currentPassword_label: (await action.getElementCount(this.currentPassword_label)) > 0 ? await action.getText(this.currentPassword_label) : null,
            currentPassword_input: (await action.getElementCount(this.currentPassword_input)) > 0 ? await action.getText(this.currentPassword_input) : null,
            togglePassword_currentPassword: (await action.getElementCount(this.togglePassword_currentPassword)) > 0 ? await action.waitForExist(this.togglePassword_currentPassword) : null,
            password_label: (await action.getElementCount(this.password_label)) > 0 ? await action.getText(this.password_label) : null,
            password_input: (await action.getElementCount(this.password_input)) > 0 ? await action.getText(this.password_input) : null,
            confirmPassword_label: (await action.getElementCount(this.confirmPassword_label)) > 0 ? await action.getText(this.confirmPassword_label) : null,
            confirmPassword_input: (await action.getElementCount(this.confirmPassword_input)) > 0 ? await action.getText(this.confirmPassword_input) : null,
            newPasswordRules_text: (await action.getElementCount(this.newPasswordRules_text)) > 0 ? await action.getText(this.newPasswordRules_text) : null,
            changePassword_button: (await action.getElementCount(this.changePassword_button)) > 0 ? await action.getText(this.changePassword_button) : null
        }
        //console.log(obj)
        return obj;
    },

    setCurrentPassword: async function(password) {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.currentPassword_input, password);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --Current password Entered");
        } else {
            res = res + " -- Current password Not Entered";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    setNewPassword: async function(password) {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.password_input, password);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --New Password Entered");
        } else {
            res = res + " -- New Password Not Entered";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    setConfirmPassword: async function(password) {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.confirmPassword_input, password);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --Confirm Password Entered");
        } else {
            res = res + " -- Confirm Password Not Entered";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    ////TBD - password text to be extracted. getText and getValue not working
    // togglePasswordVisibility: async function() {
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

    clickUpdateSettingsPassword: async function() {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.changePassword_button);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " -- Update Settings Clicked");
        } else {
            res = res + " -- Update Settings Not Clicked";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    getAccessibilityTabData: async function() {
        await logger.logInto(await stackTrace.get());
        let obj = {
            pageHeading: (await action.getElementCount(this.pageHeading)) > 0 ? await action.getText(this.pageHeading) : null,
            fontSizeText: ((await action.getElementCount(this.fontSizeText)) > 0) ? await action.getText(this.fontSizeText) : null,
            fontSizeValue: ((await action.getElementCount(this.fontSizeValue)) > 0) ? await action.getText(this.fontSizeValue) : null,
            fontSizeDec: ((await action.getElementCount(this.fontSizeDec)) > 0) ? await action.getText(this.fontSizeDec) : null,
            fontSizeInc: ((await action.getElementCount(this.fontSizeInc)) > 0) ? await action.getText(this.fontSizeInc) : null,
            lineSpaceText: ((await action.getElementCount(this.lineSpaceText)) > 0) ? await action.getText(this.lineSpaceText) : null,
            lineSpaceValue: ((await action.getElementCount(this.lineSpaceValue)) > 0) ? await action.getText(this.lineSpaceValue) : null,
            lineSpaceDec: ((await action.getElementCount(this.lineSpaceDec)) > 0) ? await action.getText(this.lineSpaceDec) : null,
            lineSpaceInc: ((await action.getElementCount(this.lineSpaceInc)) > 0) ? await action.getText(this.lineSpaceInc) : null,
            highContrastText: ((await action.getElementCount(this.highContrastText)) > 0) ? await action.getText(this.highContrastText) : null,
            highContrastToggleBtn: ((await action.getElementCount(this.highContrastToggleBtn)) > 0) ? await action.getText(this.highContrastToggleBtn) : null,
            dylexicFontText: ((await action.getElementCount(this.dylexicFontText)) > 0) ? await action.getText(this.dylexicFontText) : null,
            dylexicFontToggleBtn: ((await action.getElementCount(this.dylexicFontToggleBtn)) > 0) ? await action.getText(this.dylexicFontToggleBtn) : null,
            underlinelinksText: ((await action.getElementCount(this.underlinelinksText)) > 0) ? await action.getText(this.underlinelinksText) : null,
            underlinelinksToggleBtn: ((await action.getElementCount(this.underlinelinksToggleBtn)) > 0) ? await action.getText(this.underlinelinksToggleBtn) : null,
            previewTextHeading: ((await action.getElementCount(this.previewTextHeading)) > 0) ? await action.getText(this.previewTextHeading) : null,
            previewTextPara: ((await action.getElementCount(this.previewTextPara)) > 0) ? await action.getText(this.previewTextPara) : null,
            previewLinkText: ((await action.getElementCount(this.previewLinkText)) > 0) ? await action.getText(this.previewLinkText) : null,
            button1: ((await action.getElementCount(this.button1)) > 0) ? await action.getText(this.button1) : null,
            button2: ((await action.getElementCount(this.button2)) > 0) ? await action.getText(this.button2) : null,
            moreDetailsBtn: ((await action.getElementCount(this.moreDetailsBtn)) > 0) ? await action.getText(this.moreDetailsBtn) : null,
            resetButton: ((await action.getElementCount(this.resetButton)) > 0) ? await action.getText(this.resetButton) : null,
            applySettingsBtn: ((await action.getElementCount(this.applySettingsBtn)) > 0) ? await action.getText(this.applySettingsBtn) : null
        }
        //console.log(obj)
        return obj;
    },

    getCssPropertyData: async function() {
        await logger.logInto(await stackTrace.get());
        await action.scrollIntoView(this.pageHeading)
        let obj = {
            pageHeading_font: (await action.getElementCount(this.pageHeading)) > 0 ? (await action.getCSSProperty(this.pageHeading, 'font-family')).value : null,
            pageHeading_lineHeight: (await action.getElementCount(this.pageHeading)) > 0 ? (await action.getCSSProperty(this.pageHeading, 'line-height')).value : null,
            pageHeading_fontSize: (await action.getElementCount(this.pageHeading)) > 0 ? (await action.getCSSProperty(this.pageHeading, 'font-size')).value : null,

            previewTextHeading_font: ((await action.getElementCount(this.previewTextHeading)) > 0) ? (await action.getCSSProperty(this.previewTextHeading, 'font-family')).value : null,
            previewTextHeading_lineHeight: ((await action.getElementCount(this.previewTextHeading)) > 0) ? (await action.getCSSProperty(this.previewTextHeading, 'line-height')).value : null,
            previewTextHeading_fontSize: ((await action.getElementCount(this.previewTextHeading)) > 0) ? (await action.getCSSProperty(this.previewTextHeading, 'font-size')).value : null,

            previewTextPara_font: ((await action.getElementCount(this.previewTextPara)) > 0) ? (await action.getCSSProperty(this.previewTextPara, 'font-family')).value : null,
            previewTextPara_lineHeight: ((await action.getElementCount(this.previewTextPara)) > 0) ? (await action.getCSSProperty(this.previewTextPara, 'line-height')).value : null,
            previewTextPara_fontSize: ((await action.getElementCount(this.previewTextPara)) > 0) ? (await action.getCSSProperty(this.previewTextPara, 'font-size')).value : null,

            previewLinkText_font: ((await action.getElementCount(this.previewLinkText)) > 0) ? (await action.getCSSProperty(this.previewLinkText, 'font-family')).value : null,
            previewLinkText_lineHeight: ((await action.getElementCount(this.previewLinkText)) > 0) ? (await action.getCSSProperty(this.previewLinkText, 'line-height')).value : null,
            previewLinkText_fontSize: ((await action.getElementCount(this.previewLinkText)) > 0) ? (await action.getCSSProperty(this.previewLinkText, 'font-size')).value : null,
            previewLinkText_textDecoration: ((await action.getElementCount(this.previewLinkText)) > 0) ? (await action.getCSSProperty(this.previewLinkText, 'text-decoration')).value : null,
            previewLinkText_color: ((await action.getElementCount(this.previewLinkText)) > 0) ? (await action.getCSSProperty(this.previewLinkText, 'color')).value : null,

            button1_font: ((await action.getElementCount(this.button1)) > 0) ? (await action.getCSSProperty(this.button1, 'font-family')).value : null,
            button1_lineHeight: ((await action.getElementCount(this.button1)) > 0) ? (await action.getCSSProperty(this.button1, 'line-height')).value : null,
            button1_fontSize: ((await action.getElementCount(this.button1)) > 0) ? (await action.getCSSProperty(this.button1, 'font-size')).value : null,
            button1_textDecoration: ((await action.getElementCount(this.button1)) > 0) ? (await action.getCSSProperty(this.button1, 'text-decoration')).value : null,
            button1_color: ((await action.getElementCount(this.button1)) > 0) ? (await action.getCSSProperty(this.button1, 'color')).value : null,

            button2_font: ((await action.getElementCount(this.button2)) > 0) ? (await action.getCSSProperty(this.button2, 'font-family')).value : null,
            button2_lineHeight: ((await action.getElementCount(this.button2)) > 0) ? (await action.getCSSProperty(this.button2, 'line-height')).value : null,
            button2_fontSize: ((await action.getElementCount(this.button2)) > 0) ? (await action.getCSSProperty(this.button2, 'font-size')).value : null,
            button2_textDecoration: ((await action.getElementCount(this.button2)) > 0) ? (await action.getCSSProperty(this.button2, 'text-decoration')).value : null,
            button2_bgcolor: ((await action.getElementCount(this.button2)) > 0) ? (await action.getCSSProperty(this.button2, 'background-color')).value : null,

            moreDetailsBtn_font: ((await action.getElementCount(this.moreDetailsBtn)) > 0) ? (await action.getCSSProperty(this.moreDetailsBtn, 'font-family')).value : null,
            moreDetailsBtn_lineHeight: ((await action.getElementCount(this.moreDetailsBtn)) > 0) ? (await action.getCSSProperty(this.moreDetailsBtn, 'line-height')).value : null,
            moreDetailsBtn_fontSize: ((await action.getElementCount(this.moreDetailsBtn)) > 0) ? (await action.getCSSProperty(this.moreDetailsBtn, 'font-size')).value : null,
            moreDetailsBtn_textDecoration: ((await action.getElementCount(this.moreDetailsBtn)) > 0) ? (await action.getCSSProperty(this.moreDetailsBtn, 'text-decoration')).value : null,
            moreDetailsBtn_color: ((await action.getElementCount(this.moreDetailsBtn)) > 0) ? (await action.getCSSProperty(this.moreDetailsBtn, 'color')).value : null,

            resetButton_font: ((await action.getElementCount(this.resetButton)) > 0) ? (await action.getCSSProperty(this.resetButton, 'font-family')).value : null,
            resetButton_lineHeight: ((await action.getElementCount(this.resetButton)) > 0) ? (await action.getCSSProperty(this.resetButton, 'line-height')).value : null,
            resetButton_fontSize: ((await action.getElementCount(this.resetButton)) > 0) ? (await action.getCSSProperty(this.resetButton, 'font-size')).value : null,
            resetButton_textDecoration: ((await action.getElementCount(this.resetButton)) > 0) ? (await action.getCSSProperty(this.resetButton, 'text-decoration')).value : null,
            resetButton_color: ((await action.getElementCount(this.resetButton)) > 0) ? (await action.getCSSProperty(this.resetButton, 'color')).value : null,

            applySettingsBtn_font: ((await action.getElementCount(this.applySettingsBtn)) > 0) ? (await action.getCSSProperty(this.applySettingsBtn, 'font-family')).value : null,
            applySettingsBtn_lineHeight: ((await action.getElementCount(this.applySettingsBtn)) > 0) ? (await action.getCSSProperty(this.applySettingsBtn, 'line-height')).value : null,
            applySettingsBtn_fontSize: ((await action.getElementCount(this.applySettingsBtn)) > 0) ? (await action.getCSSProperty(this.applySettingsBtn, 'font-size')).value : null,
            applySettingsBtn_textDecoration: ((await action.getElementCount(this.applySettingsBtn)) > 0) ? (await action.getCSSProperty(this.applySettingsBtn, 'text-decoration')).value : null,
            applySettingsBtn_bgcolor: ((await action.getElementCount(this.applySettingsBtn)) > 0) ? (await action.getCSSProperty(this.applySettingsBtn, 'background-color')).value : null
        }
        //console.log(obj)
        return obj;
    },

    getResetSettingsModalData: async function() {
        await logger.logInto(await stackTrace.get());
        let obj = {
            resetSettingsTitle: (await action.getElementCount(this.resetSettingsTitle)) > 0 ? await action.getText(this.resetSettingsTitle) : null,
            resetSettingsSubTitle: ((await action.getElementCount(this.resetSettingsSubTitle)) > 0) ? await action.getText(this.resetSettingsSubTitle) : null,
            resetSettingsCancelBtn: ((await action.getElementCount(this.resetSettingsCancelBtn)) > 0) ? await action.getText(this.resetSettingsCancelBtn) : null,
            resetSettingsConfirmBtn: ((await action.getElementCount(this.resetSettingsConfirmBtn)) > 0) ? await action.getText(this.resetSettingsConfirmBtn) : null
        }
        //console.log(obj)
        return obj;
    },

    click_fontSizeDec: async function(count) {
        await logger.logInto(await stackTrace.get());
        let res, itr;
        for (itr = 0; itr < count; itr++) {
            res = await action.click(this.fontSizeDec);
        }

        if (true == res) {
            await logger.logInto(await stackTrace.get(), " fontSizeDec button is clicked");
        } else {
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_fontSizeInc: async function(count) {
        await logger.logInto(await stackTrace.get());
        let res, itr;
        for (itr = 0; itr < count; itr++) {
            res = await action.click(this.fontSizeInc);
        }
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " fontSizeInc button is clicked");
        } else {
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_lineSpaceDec: async function(count) {
        await logger.logInto(await stackTrace.get());
        let res, itr;
        for (itr = 0; itr < count; itr++) {
            res = await action.click(this.lineSpaceDec);
        }
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " lineSpaceDec button is clicked");
        } else {
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_lineSpaceInc: async function(count) {
        await logger.logInto(await stackTrace.get());
        let res, itr;
        for (itr = 0; itr < count; itr++) {
            res = await action.click(this.lineSpaceInc);
        }
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " lineSpaceInc button is clicked");
        } else {
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_highContrastToggleBtn: async function() {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.highContrastToggleBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " highContrastToggleBtn button is clicked");
        } else {
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_dylexicFontToggleBtn: async function() {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.dylexicFontToggleBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " dylexicFontToggleBtn button is clicked");
        } else {
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_underlineLinksToggleBtn: async function() {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.underlinelinksToggleBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " underlinelinksToggleBtn button is clicked");
        } else {
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_moreDetailsBtn: async function() {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.moreDetailsBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " moreDetailsBtn button is clicked");
            //need to add return statement after switching to new tab - Akhil
        } else {
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_resetButton: async function() {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.resetButton);
        if (true == res) {
            res = await this.getResetSettingsModalData()
            await logger.logInto(await stackTrace.get(), " resetButton button is clicked");
        } else {
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_applySettingsButton: async function() {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.applySettingsBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " applySettings button is clicked");
        } else {
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_resetSettingsConfirmBtn: async function() {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.resetSettingsConfirmBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " Confirm button is clicked");
        } else {
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_resetSettingsCancelBtn: async function() {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.resetSettingsCancelBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " Cancel button is clicked");
        } else {
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;

    },

    getBillingTabData: async function() {
        await logger.logInto(await stackTrace.get());
        let obj = {
            pageHeading: (await action.getElementCount(this.subscription_text)) > 0 ? await action.getText(this.subscription_text) : null,
            subscriptionSubtitle_text: (await action.getElementCount(this.subscriptionSubtitle_text)) > 0 ? await action.getText(this.subscriptionSubtitle_text) : null,
            free_text: (await action.getElementCount(this.free_text)) > 0 ? await action.getText(this.free_text) : null,
            getPremiumAccess_text: (await action.getElementCount(this.getPremiumAccess_text)) > 0 ? await action.getText(this.getPremiumAccess_text) : null,
            getPremiumAccessSubtitle_text: (await action.getElementCount(this.getPremiumAccessSubtitle_text)) > 0 ? await action.getText(this.getPremiumAccessSubtitle_text) : null,
            price_text: (await action.getElementCount(this.price_text)) > 0 ? await action.getText(this.price_text) : null,
            upgradePlan_btn: (await action.getElementCount(this.upgradePlan_btn)) > 0 ? await action.getText(this.upgradePlan_btn) : null,
            paymentMethod_text: (await action.getElementCount(this.paymentMethod_text)) > 0 ? await action.getText(this.paymentMethod_text) : null,
            noPaymentMethod_text: (await action.getElementCount(this.noPaymentMethod_text)) > 0 ? await action.getText(this.noPaymentMethod_text) : null,
            noPaymentMethodSubtitle_text: (await action.getElementCount(this.noPaymentMethodSubtitle_text)) > 0 ? await action.getText(this.noPaymentMethodSubtitle_text) : null,
            billingMethod_text: (await action.getElementCount(this.billingMethod)) > 0 ? await action.getText(this.billingMethod) : null,
            noBillingInfo_text: (await action.getElementCount(this.noBillingInfo_text)) > 0 ? await action.getText(this.noBillingInfo_text) : null,
            premiumPlan_text: (await action.getElementCount(this.premiumPlan_text)) > 0 ? await action.getText(this.premiumPlan_text) : null,
            active_text: (await action.getElementCount(this.active_text)) > 0 ? await action.getText(this.active_text) : null,
            premiumPrice_text: (await action.getElementCount(this.premiumPrice_text)) > 0 ? await action.getText(this.premiumPrice_text) : null,
            autoRenewal_text: (await action.getElementCount(this.autoRenewal_text)) > 0 ? await action.getText(this.autoRenewal_text) : null,
            licensePeriod_text: (await action.getElementCount(this.licensePeriod_text)) > 0 ? await action.getText(this.licensePeriod_text) : null,
            licensePeriod_date: (await action.getElementCount(this.licensePeriod_date)) > 0 ? await action.getText(this.licensePeriod_date) : null,
            managePlan_btn: (await action.getElementCount(this.managePlan_btn)) > 0 ? await action.getText(this.managePlan_btn) : null,
            changeCard_btn: (await action.getElementCount(this.changeCard_btn)) > 0 ? await action.getText(this.changeCard_btn) : null,
            updateBillingAddress_btn: (await action.getElementCount(this.updateBillingAddress_btn)) > 0 ? await action.getText(this.updateBillingAddress_btn) : null
            
        }
        return obj;
    },

    click_upgradePlan_btn: async function() {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.upgradePlan_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " upgradePlan button is clicked");
            res = await require('./billing.page.js').isInitialized();
        } else {
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;

    },

    click_managePlan_btn: async function() {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.managePlan_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " managePlan button is clicked");
            res = await require('./planOptions.page.js').isInitialized();
        } else {
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;

    },

    click_changeCard_btn: async function() {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.changeCard_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " changeCard button is clicked");
            res = await require('./planOptions.page.js').isInitialized();
        } else {
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;

    },

    click_updateBillingAddress_btn: async function() {
        let res;
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.changeCard_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " updateBillingAddress button is clicked");
            res = await require('./planOptions.page.js').isInitialized();
        } else {
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;

    },


}