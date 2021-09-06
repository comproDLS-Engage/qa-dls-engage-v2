'use strict';
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
const appShell = require('./appShell.page.js');
var res, obj;

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
    firstNameError_text: selectorFile.css.ComproEngage.settings.firstNameError_text, //ENG-7484
    lastNameError_text: selectorFile.css.ComproEngage.settings.lastNameError_text, //ENG-7484
    changeProfile_button: selectorFile.css.ComproEngage.settings.changeProfile_button,
    //Password
    currentPassword_label: selectorFile.css.ComproEngage.settings.currentPassword_label,
    currentPassword_input: selectorFile.css.ComproEngage.settings.currentPassword_input,
    button_togglepasswordvisibility: selectorFile.css.ComproEngage.settings.button_togglepasswordvisibility,
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
    reset_button: selectorFile.css.ComproEngage.settings.reset_button,
    accessbility_button: selectorFile.css.ComproEngage.settings.accessbility_button,
    fontSize_text: selectorFile.css.ComproEngage.settings.fontSize_text, //ENG-7484
    lineSpace_text: selectorFile.css.ComproEngage.settings.lineSpace_text, //ENG-7484
    samplePara_text: selectorFile.css.ComproEngage.settings.samplePara_text, //ENG-7484 
    sampleHeader_text: selectorFile.css.ComproEngage.settings.sampleHeader_text, //ENG-7484 

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        let pageStatus = action.waitForDisplayed(this.pageTitle)
        res = this.getSettingsPageData();
        res.pageStatus = pageStatus;
        return res;
    },

    getSettingsPageData: function () {
        logger.logInto(stackTrace.get());
        obj = {
            pageStatus: "",
            pageTitle: action.getElementCount(this.pageTitle) > 0 ? action.getText(this.pageTitle) : null,
            pageSubTitle: action.getElementCount(this.pageSubTitle) > 0 ? action.getText(this.pageSubTitle) : null,
            tabsList: null,
            selectedTab: null
        }

        var tabInfo = appShell.getTabsListData();
        obj.tabsList = tabInfo.list;
        obj.selectedTab = tabInfo.selected;
        //console.log(obj)
        return obj;
    },

    getProfileTabData: function () {
        logger.logInto(stackTrace.get());
        obj = {
            pageHeading: action.getElementCount(this.pageHeading) > 0 ? action.getText(this.pageHeading) : null,
            email_label: action.getElementCount(this.email_label) > 0 ? action.getText(this.email_label) : null,
            email_input: action.getElementCount(this.email_input) > 0 ? action.getAttribute(this.email_input, "value") : null,
            email_input_readOnly: action.getElementCount(this.email_input) > 0 ? action.getAttribute(this.email_input, "readOnly") : null,
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

    setFirstName: function (name) {
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

    setLastName: function (lastname) {
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

    setCountry: function (countryName) {
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
                } 
                else
                    logger.logInto(stackTrace.get(), res + " -- Country Name Not Entered", 'error');
            }
        }
        return res;
    },

    clickClose: function () {
        logger.logInto(stackTrace.get());
        res = action.moveTo(this.country_input, 0, 0)
        if (res == true) {
            res = action.click(this.clearIcon);
            if (res == true) {
                res = this.getSettingsPageData()
                logger.logInto(stackTrace.get(), " -- Close Icon Clicked");
            } else {
                res = res + " -- Close Icon Not Clicked";
                logger.logInto(stackTrace.get(), res, 'error');
            }
        }
        return res;
    },

    clickUpdateSettingsProfile: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.changeProfile_button);
        if (res == true) {
            // res = snackBarTest.get_Snackbar_Message_Text();
            logger.logInto(stackTrace.get(), " -- Update Settings Clicked");
        } else {
            res = res + " -- Update Settings Not Clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    getErrorMessages: function () {
        logger.logInto(stackTrace.get());
        obj = {
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

    getPasswordTabData: function () {
        logger.logInto(stackTrace.get());
        obj = {
            //password
            pageHeading: action.getElementCount(this.pageHeading) > 0 ? action.getText(this.pageHeading) : null,
            currentPassword_label: action.getElementCount(this.currentPassword_label) > 0 ? action.getText(this.currentPassword_label) : null,
            currentPassword_input: action.getElementCount(this.currentPassword_input) > 0 ? action.getAttribute(this.currentPassword_input, "value") : null,
            togglepasswordvisibility: action.getElementCount(this.button_togglepasswordvisibility) > 0 ? action.waitForExist(this.button_togglepasswordvisibility) : null,
            password_label: action.getElementCount(this.password_label) > 0 ? action.getText(this.password_label) : null,
            password_input: action.getElementCount(this.password_input) > 0 ? action.getAttribute(this.password_input, "value") : null,
            confirmPassword_label: action.getElementCount(this.confirmPassword_label) > 0 ? action.getText(this.confirmPassword_label) : null,
            confirmPassword_input: action.getElementCount(this.confirmPassword_input) > 0 ? action.getAttribute(this.confirmPassword_input, "value") : null,
            newPasswordRules_text: action.getElementCount(this.newPasswordRules_text) > 0 ? action.getText(this.newPasswordRules_text) : null,
            changePassword_button: action.getElementCount(this.changePassword_button) > 0 ? action.getText(this.changePassword_button) : null
        }
        //console.log(obj)
        return obj;
    },

    setCurrentPassword: function (password) {
        logger.logInto(stackTrace.get());
        action.click(this.currentPassword_input)
        res = action.setValue(this.currentPassword_input, password);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Current password Entered");
        } else {
            res = res + " -- Current password Not Entered";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    setNewPassword: function (password) {
        logger.logInto(stackTrace.get());
        action.click(this.password_input)
        res = action.setValue(this.password_input, password);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --New Password Entered");
        } else {
            res = res + " -- New Password Not Entered";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    setConfirmPassword: function (password) {
        logger.logInto(stackTrace.get());
        action.click(this.confirmPassword_input)
        res = action.setValue(this.confirmPassword_input, password);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Confirm Password Entered");
        } else {
            res = res + " -- Confirm Password Not Entered";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    togglePasswordVisibility: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.button_togglepasswordvisibility);
        if (res == true) {
            res = this.getPasswordTabData()
            logger.logInto(stackTrace.get(), " --Confirm Password Entered");
        } else {
            res = res + " -- Confirm Password Not Entered";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    clickUpdateSettingsPassword: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.changePassword_button);
        if (res == true) {
            //res = snackBarTest.get_Snackbar_Message_Text();
            logger.logInto(stackTrace.get(), " -- Update Settings Clicked");
        } else {
            res = res + " -- Update Settings Not Clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    getAccessibilityTabData: function () {
        logger.logInto(stackTrace.get());
        obj = {
            pageHeading: action.getElementCount(this.pageHeading) > 0 ? action.getText(this.pageHeading) : null,
            reset_button: action.getElementCount(this.reset_button) > 0 ? action.getText(this.reset_button) : null,
            accessbility_button: action.getElementCount(this.accessbility_button) > 0 ? action.getText(this.accessbility_button) : null,
            fontSize_text: action.getElementCount(this.fontSize_text) > 0 ? action.getText(this.fontSize_text) : null,
            lineSpace_text: action.getElementCount(this.lineSpace_text) > 0 ? action.getText(this.lineSpace_text) : null,
            samplePara_text: action.getElementCount(this.samplePara_text) > 0 ? action.getText(this.samplePara_text) : null,
            sampleHeader_text: action.getElementCount(this.sampleHeader_text) > 0 ? action.getText(this.sampleHeader_text) : null
        }
        //console.log(obj)
        return obj;
    }


}