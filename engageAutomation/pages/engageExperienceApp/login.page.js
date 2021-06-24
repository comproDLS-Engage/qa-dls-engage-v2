"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj;

module.exports = {

    //loginPage
    loaderIcon: selectorFile.css.ComproEngage.widgets.loaderIcon,
    brandLogo_img: selectorFile.css.ComproEngage.loginPage.brandLogo,
    loginPage_title: selectorFile.css.ComproEngage.loginPage.login_title,
    email_tbox_lbl: selectorFile.css.ComproEngage.loginPage.login_tbox_lbl,
    userName_tbox: selectorFile.css.ComproEngage.loginPage.userName_tbox,
    pswrd_tbox_lbl: selectorFile.css.ComproEngage.loginPage.pswrd_tbox_lbl,
    password_tbox: selectorFile.css.ComproEngage.loginPage.password_tbox,
    togglePasswordVisibility_btn: selectorFile.css.ComproEngage.loginPage.loginPassword_eye,
    google_btn: selectorFile.css.ComproEngage.loginPage.google_btn,
    googlebtn_icon: selectorFile.css.ComproEngage.loginPage.googlebtn_icon,
    facebook_btn: selectorFile.css.ComproEngage.loginPage.facebook_btn,
    facebookbtn_icon: selectorFile.css.ComproEngage.loginPage.facebookbtn_icon,
    login_btn: selectorFile.css.ComproEngage.loginPage.login_btn,
    forgotPassword: selectorFile.css.ComproEngage.loginPage.forgotPassword,
    signup: selectorFile.css.ComproEngage.loginPage.signup,
    dontHaveAccount_txt: selectorFile.css.ComproEngage.loginPage.signup_lbl,
    loginoption_txt: selectorFile.css.ComproEngage.loginPage.loginoption_txt,
    languageSelector_image: selectorFile.css.ComproEngage.landingPage.selectedLangImg,
    languageSelector_dropdown: selectorFile.css.ComproEngage.landingPage.languageSelector_dropdown,
    invalidEmail_txt: selectorFile.css.ComproEngage.loginPage.invalidEmail_txt,
    //otp
    sendOTPToReset_btn: selectorFile.css.ComproEngage.loginPage.sendOTPToReset_btn,
    cancelandGoBack_btn: selectorFile.css.ComproEngage.loginPage.cancelandGoBack_btn,
    //Reset Password
    resetPassword_title: selectorFile.css.ComproEngage.loginPage.resetPassword_Heading,
    resetPassword_subHeading: selectorFile.css.ComproEngage.loginPage.resetPassword_subHeading,
    resetPassword_subHeading2: selectorFile.css.ComproEngage.loginPage.resetPassword_subHeading2,
    verificationCode_lbl: selectorFile.css.ComproEngage.loginPage.resetPassword_verificationCode_lbl,
    verificationCode_txtBox: selectorFile.css.ComproEngage.loginPage.resetPassword_verificationCode_txtBox,
    newPassword_lbl: selectorFile.css.ComproEngage.loginPage.resetPassword_newPassword_lbl,
    newPassword_txtBox: selectorFile.css.ComproEngage.loginPage.resetPassword_newPassword_txtBox,
    confirmPassword_lbl: selectorFile.css.ComproEngage.loginPage.confirmPassword_lbl,
    confirmPassword_txtBox: selectorFile.css.ComproEngage.loginPage.confirmPassword_txtBox,
    toggle_ConfirmPasswordVisibility_btn: selectorFile.css.ComproEngage.loginPage.toggle_ConfirmPasswordVisibility_btn,
    changePassword: selectorFile.css.ComproEngage.loginPage.changePassword,
    resendTimer: selectorFile.css.ComproEngage.loginPage.resendTimer,
    resendOTP: selectorFile.css.ComproEngage.loginPage.resendOTP,
    invalidVerificationCode_txt: selectorFile.css.ComproEngage.loginPage.invalidVerificationCode_txt,
    passwordRules_txt: selectorFile.css.ComproEngage.loginPage.passwordRules_txt,
    passwordMismatch: selectorFile.css.ComproEngage.loginPage.passwordMismatch,
    snackbarInfo_txt: selectorFile.css.ComproEngage.widgets.snackbarInfo_txt,
    snackbarClose_btn: selectorFile.css.ComproEngage.widgets.snackbarClose_btn,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        action.waitForDisplayed(this.brandLogo);
        let pageStatus = action.waitForDisplayed(this.userName_tbox);
        res = this.login_PageData();
        res.pageStatus = pageStatus;
        // console.log(res)
        return res;
    },

    login_PageData: function () {
        logger.logInto(stackTrace.get());
        obj = {
            loginPage_title: (action.getElementCount(this.loginPage_title) > 0) ? action.getText(this.loginPage_title) : null,
            email_tbox_lbl: (action.getElementCount(this.email_tbox_lbl) > 0) ? action.getText(this.email_tbox_lbl) : null,
            userName_tbox_placeholder: (action.getElementCount(this.userName_tbox) > 0) ? action.getAttribute(this.userName_tbox, "placeholder") : null,
            pswrd_tbox_lbl: (action.getElementCount(this.pswrd_tbox_lbl) > 0) ? action.getText(this.pswrd_tbox_lbl) : null,
            password_tbox_placeholder: (action.getElementCount(this.password_tbox) > 0) ? action.getAttribute(this.password_tbox, "placeholder") : null,
            togglePasswordVisibility_btn: (action.getElementCount(this.togglePasswordVisibility_btn) > 0) ? action.waitForDisplayed(this.togglePasswordVisibility_btn) : false,
            google_btn: (action.getElementCount(this.google_btn) > 0) ? action.getText(this.google_btn) : null,
            googlebtn_icon: (action.getElementCount(this.googlebtn_icon) > 0) ? action.waitForDisplayed(this.googlebtn_icon) : false,
            facebook_btn: (action.getElementCount(this.facebook_btn) > 0) ? action.getText(this.facebook_btn) : null,
            facebookbtn_icon: (action.getElementCount(this.facebookbtn_icon) > 0) ? action.waitForDisplayed(this.facebookbtn_icon) : false,
            login_btn: (action.getElementCount(this.login_btn) > 0) ? action.getText(this.login_btn) : null,
            login_btn_Disabled: (action.getElementCount(this.login_btn) > 0) ? !(action.isEnabled(this.login_btn)) : null,
            forgotPassword: (action.getElementCount(this.forgotPassword) > 0) ? action.getText(this.forgotPassword) : null,
            signup: (action.getElementCount(this.signup) > 0) ? action.getText(this.signup) : null,
            dontHaveAccount_txt: (action.getElementCount(this.dontHaveAccount_txt) > 0) ? action.getText(this.dontHaveAccount_txt) : null,
            loginoption_txt: (action.getElementCount(this.loginoption_txt) > 0) ? action.getText(this.loginoption_txt) : null,
            languageSelector_image_exists: (action.getElementCount(this.languageSelector_image) > 0) ? action.waitForDisplayed(this.languageSelector_image) : false,
            languageSelector_dropdown: (action.getElementCount(this.languageSelector_dropdown) > 0) ? action.getText(this.languageSelector_dropdown) : null,
            brandLogo_img_exists: (action.getElementCount(this.brandLogo_img) > 0) ? action.waitForDisplayed(this.brandLogo_img) : false
        }
        return obj;
    },

    set_UserName: function (userName) {
        logger.logInto(stackTrace.get());
        res = action.setValue(this.userName_tbox, userName);
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- UserName is entered");
        } else {
            res = res + " -- UserName is NOT entered";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    set_Password: function (password) {
        logger.logInto(stackTrace.get());
        res = action.setValue(this.password_tbox, password);
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- Password is entered");
        } else {
            res = res + " -- Password is NOT entered";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_Login_Button: function () {
        logger.logInto(stackTrace.get());
      /*  if (argv.deviceName) {
            action.hideKeyboard();
        }*/
        res = action.click(this.login_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- Login button is clicked");
            
            //action.waitForDisplayed(this.loaderIcon);
        } else {
            res = res + " -- Login button is NOT clicked ";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_ForgotPassword_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.forgotPassword);
        action.waitForDocumentLoad();
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- Forgot Password Button is clicked");
            res = this.forgotPassword_PageData();
        } else {
            res = res + "-- Forgot Password Button is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    forgotPassword_PageData: function () {
        logger.logInto(stackTrace.get());
        obj = {
            pageStatus: (action.getElementCount(this.userName_tbox) > 0) ? action.waitForDisplayed(this.userName_tbox) : false,
            brandLogo_img_exists: (action.getElementCount(this.brandLogo_img) > 0) ? action.waitForDisplayed(this.brandLogo_img) : false,
            sendOTPToResetbtn_txt: (action.getElementCount(this.sendOTPToReset_btn) > 0) ? action.getText(this.sendOTPToReset_btn) : null,
            sendOTPToResetbtn_Disabled: (action.getElementCount(this.sendOTPToReset_btn) > 0) ? !(action.isEnabled(this.sendOTPToReset_btn)) : null,
            forgotPassword_Email_lbl: (action.getElementCount(this.email_tbox_lbl) > 0) ? action.getText(this.email_tbox_lbl) : null,
            resetPassword_title: (action.getElementCount(this.resetPassword_title) > 0) ? action.getText(this.resetPassword_title) : null,
            resetPassword_subHeading: (action.getElementCount(this.resetPassword_subHeading) > 0) ? action.getText(this.resetPassword_subHeading) : null,
            cancelandGoBackbtn_txt: (action.getElementCount(this.cancelandGoBack_btn) > 0) ? action.getText(this.cancelandGoBack_btn) : null,
            //languageSelector_image_exists: (action.getElementCount(this.languageSelector_image) > 0) ? action.waitForDisplayed(this.languageSelector_image) : false,
            //languageSelector_dropdown: (action.getElementCount(this.languageSelector_dropdown) > 0) ? action.getText(this.languageSelector_dropdown) : null,
        }
        return obj;
    },

    set_Email_ForgotPassword: function (emailID) {
        logger.logInto(stackTrace.get());
        action.setValue(this.userName_tbox, emailID);
        res = this.sendOTP_Button_Status();
        if (res == "enabled") {
            logger.logInto(stackTrace.get(), " -- Email ID is entered");
        } else {
            res = res + " -- Email ID is NOT entered";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_SendOTPToReset_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.sendOTPToReset_btn);
        if (res == true)
            logger.logInto(stackTrace.get(), " -- Send OTP button is clicked ");
        else
            logger.logInto(stackTrace.get(), res + " -- Send OTP button Not clicked", "error");
        return res;
    },

    click_CancelAndGoBackToLogin_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.cancelandGoBack_btn);
        if (res == true) {
            res = this.login_PageData();
            logger.logInto(stackTrace.get(), " -- Cancel Button is clicked");
        } else {
            res = res + " -- Cancel Button is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    changePassword_isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        let pageStatus = action.waitForDisplayed(this.changePassword);
        res = this.changePassword_PageData()
        res.pageStatus = pageStatus;
        return res;
    },

    changePassword_PageData: function () {
        logger.logInto(stackTrace.get());
        obj = {
            //checkEmailForCode_txt: (action.getElementCount(this.snackbarInfo_txt) > 0) ? action.getText(this.snackbarInfo_txt) : null,
            resetPassword_title: (action.getElementCount(this.resetPassword_title) > 0) ? action.getText(this.resetPassword_title) : null,
            resetPassword_subHeading2: (action.getElementCount(this.resetPassword_subHeading2) > 0) ? action.getText(this.resetPassword_subHeading2) : null,
            email_tbox_lbl: (action.getElementCount(this.email_tbox_lbl) > 0) ? action.getText(this.email_tbox_lbl) : null,
            userName_tbox_value: (action.getElementCount(this.userName_tbox) > 0) ? action.getValue(this.userName_tbox) : null,
            userName_tbox_Disabled: (action.getElementCount(this.userName_tbox) > 0) ? !(action.isEnabled(this.userName_tbox)) : null,
            verificationCode_lbl: (action.getElementCount(this.verificationCode_lbl) > 0) ? action.getText(this.verificationCode_lbl) : null,
            verificationCode_txtBox: (action.getElementCount(this.verificationCode_txtBox) > 0) ? action.getValue(this.verificationCode_txtBox) : null,
            newPassword_lbl: (action.getElementCount(this.newPassword_lbl) > 0) ? action.getText(this.newPassword_lbl) : null,
            newPassword_txtBox: (action.getElementCount(this.newPassword_txtBox) > 0) ? action.getValue(this.newPassword_txtBox) : null,
            togglePasswordVisibility_btn: (action.getElementCount(this.togglePasswordVisibility_btn) > 0) ? action.waitForDisplayed(this.togglePasswordVisibility_btn) : false,
            confirmPassword_lbl: (action.getElementCount(this.confirmPassword_lbl) > 0) ? action.getText(this.confirmPassword_lbl) : null,
            confirmPassword_txtBox: (action.getElementCount(this.confirmPassword_txtBox) > 0) ? action.getValue(this.confirmPassword_txtBox) : null,
            toggle_ConfirmPasswordVisibility_btn: (action.getElementCount(this.toggle_ConfirmPasswordVisibility_btn) > 0) ? action.waitForDisplayed(this.toggle_ConfirmPasswordVisibility_btn) : false,
            resendOTP: (action.getElementCount(this.resendOTP) > 0) ? action.getText(this.resendOTP) : null,
            resendTimer: (action.getElementCount(this.resendTimer) > 0) ? action.getText(this.resendTimer) : null,
            changePassword: (action.getElementCount(this.changePassword) > 0) ? action.getText(this.changePassword) : null,
            cancelandGoBackbtn_txt: (action.getElementCount(this.cancelandGoBack_btn) > 0) ? action.getText(this.cancelandGoBack_btn) : null,
            brandLogo_img_exists: (action.getElementCount(this.brandLogo_img) > 0) ? action.waitForDisplayed(this.brandLogo_img) : false
        }
        return obj;
    },

    toggle_Password_Eye: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.togglePasswordVisibility_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), res + "-- toggle_Password_Eye Button Clicked ");
            res = action.getAttribute(this.password_tbox, "type");
        } else
            logger.logInto(stackTrace.get(), res + "-- toggle_Password_Eye Button Not Clicked ", "error");
        return res;
    },

    /*snackBarAlert_Data: function () { // not clear on the requirement of this function - akhil 
        //this is for capturing the text of snackbar alerts - akanksha
        res = action.waitForDisplayed(this.snackbar_alert)
        if (res == true) {
            res = action.getText(this.snackbar_alert)
            logger.logInto(stackTrace.get(), res);
            action.click(this.close_snackBar)
        } else
            logger.logInto(stackTrace.get(), res + " -- Snackbar Alert Not displayed");
        return res;
    },*/

    change_Language: function (lang) {
        res = require('./landing.page.js').select_Language_from_dropdown(lang);
        return res;
    },

    get_invalidEmail_ErrorText: function () {
        res = action.waitForDisplayed(this.invalidEmail_txt)
        if (res == true) {
            res = action.getText(this.invalidEmail_txt)
            logger.logInto(stackTrace.get(), res);
        } else
            logger.logInto(stackTrace.get(), res, "error");
        return res;
    },

    set_VerificationCode: function (Code) {
        logger.logInto(stackTrace.get());
        action.clearValue(this.verificationCode_txtBox)
        res = action.setValue(this.verificationCode_txtBox, Code);
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- Verification Code Entered");
        } else {
            res = res + " -- Verification Code NOT Entered";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    set_NewPassword: function (password) {
        logger.logInto(stackTrace.get());
        action.setValue(this.newPassword_txtBox, password);
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- NewPassword Entered");
        } else {
            res = res + " -- NewPassword Code NOT Entered";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    set_ConfirmPassword: function (password) {
        logger.logInto(stackTrace.get());
        action.setValue(this.confirmPassword_txtBox, password);
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- ConfirmPassword Entered");
        } else {
            res = res + " -- ConfirmPassword Code NOT Entered";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_ChangePassword_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.changePassword);
        if (res == true)
            logger.logInto(stackTrace.get(), " -- Change Password Button Clicked");
        else
            logger.logInto(stackTrace.get(), res + " -- Change Password Button NOT Clicked", 'error');
        return res;
    },

    get_invalid_VerificationCode_Text: function () {
        res = action.waitForDisplayed(this.invalidVerificationCode_txt)
        if (res == true) {
            res = action.getText(this.invalidVerificationCode_txt)
            logger.logInto(stackTrace.get(), res);
        }
        else
            logger.logInto(stackTrace.get(), res, "error");
        return res;
    },

    //get password rules and mismatch to be conbined after data-tid updates
    get_PasswordRules_text: function () {
        res = action.waitForDisplayed(this.passwordRules_txt)
        if (res == true) {
            res = action.getText(this.passwordRules_txt)
            logger.logInto(stackTrace.get(), res);
        }
        else
            logger.logInto(stackTrace.get(), res, "error");
        return res;
    },

    get_PasswordMismatch_text: function () {
        res = action.waitForDisplayed(this.passwordMismatch)
        if (res == true) {
            res = action.getText(this.passwordMismatch)
            logger.logInto(stackTrace.get(), res);
        }
        else
            logger.logInto(stackTrace.get(), res, "error");
        return res;
    },

    click_ResentOTP_Button: function () {
        logger.logInto(stackTrace.get());
        action.waitForDisplayed(this.resendTimer, 60000, true);
        action.waitForDisplayed(this.resendOTP);
        res = action.click(this.resendOTP);
        if (res == true) {
            var obj = {}
            obj.snackbar = require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
            obj.resendTimer_Enabled = action.waitForDisplayed(this.resendTimer);
            logger.logInto(stackTrace.get(), " -- Change Password Button Clicked");
        }
        else
            logger.logInto(stackTrace.get(), res + " -- Change Password Button NOT Clicked", 'error');
        return obj;
    },

    press_Enter: function () {
        logger.logInto(stackTrace.get());
        res = action.keyPress("Enter")
        if (res == null) {
            res = true
            logger.logInto(stackTrace.get(), " -- Enter Key Pressed");
        }
        else
            logger.logInto(stackTrace.get(), res + " --  Enter Key Not Pressed", 'error');
        return res;
    },

    click_SignUP_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.signup);
        if (res == true) {
            //TBD Sign Up Page to be implemented - ENG_IDEN_TC_17
            //res = require('./signup.page.js').isInitialized()
            logger.logInto(stackTrace.get(), " -- Sign Up Clicked");
        }
        else
            logger.logInto(stackTrace.get(), res + " -- Sign Up NOT Clicked", 'error');
        return res;
    }

    //TBD
    // click_Google_btn: function () {
    //     logger.logInto(stackTrace.get());
    //     res = action.click(this.google_btn)
    //     if (res == true) {
    //         logger.logInto(stackTrace.get(), " -- Google button is clicked ");
    //         googleLoginPage = require('./loginPage.google.js');
    //         res = googleLoginPage.isInitialized();
    //     } else {
    //         res = res + " -- Google button is NOT clicked ";
    //         logger.logInto(stackTrace.get(), res, 'error');
    //     }
    //     return res;
    // },

    //TBD
    // click_facebook_btn: function () {
    //     logger.logInto(stackTrace.get());
    //     res = action.click(this.facebook_btn)
    //     if (res == true) {
    //         logger.logInto(stackTrace.get(), " -- Facebook button is clicked ");
    //         facebookLoginPage = require('./loginPage.facebook.js');
    //         res = facebookLoginPage.isInitialized();
    //     } else {
    //         res = res + " -- Facebook button is NOT clicked ";
    //         logger.logInto(stackTrace.get(), res, 'error');
    //     }
    //     return res;
    // }
}