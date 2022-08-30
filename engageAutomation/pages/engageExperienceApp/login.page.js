"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile =  jsonParserUtil.jsonParser(selectorDir);
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
    loginbtnState:selectorFile.css.ComproEngage.loginPage.loginbtnState,

    isInitialized: async function () {
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        await action.waitForDisplayed(this.brandLogo);
        let pageStatus = await action.waitForDisplayed(this.userName_tbox);
        res = await this.login_PageData();
        res.pageStatus = pageStatus;
        return res;
    },

    login_PageData:async function () {
        await logger.logInto(await stackTrace.get());
        obj = {
            loginPage_title: ((await action.getElementCount(this.loginPage_title)) > 0) ? await action.getText(this.loginPage_title) : null,
            email_tbox_lbl: ((await action.getElementCount(this.email_tbox_lbl)) > 0) ? await action.getText(this.email_tbox_lbl) : null,
            userName_tbox_placeholder: ((await action.getElementCount(this.userName_tbox)) > 0) ? await action.getAttribute(this.userName_tbox, "placeholder") : null,
            pswrd_tbox_lbl: ((await action.getElementCount(this.pswrd_tbox_lbl)) > 0) ? await action.getText(this.pswrd_tbox_lbl) : null,
            password_tbox_placeholder: ((await action.getElementCount(this.password_tbox)) > 0) ? await action.getAttribute(this.password_tbox, "placeholder") : null,
            togglePasswordVisibility_btn: ((await action.getElementCount(this.togglePasswordVisibility_btn)) > 0) ? await action.waitForDisplayed(this.togglePasswordVisibility_btn) : false,
            google_btn: ((await action.getElementCount(this.google_btn)) > 0) ? await action.getText(this.google_btn) : null,
            googlebtn_icon: ((await action.getElementCount(this.googlebtn_icon)) > 0) ? await action.waitForDisplayed(this.googlebtn_icon) : false,
            facebook_btn: ((await action.getElementCount(this.facebook_btn)) > 0) ? await action.getText(this.facebook_btn) : null,
            facebookbtn_icon: ((await action.getElementCount(this.facebookbtn_icon)) > 0) ? await action.waitForDisplayed(this.facebookbtn_icon) : false,
            login_btn: ((await action.getElementCount(this.login_btn)) > 0) ? await action.getText(this.login_btn) : null,
            login_btn_Disabled: ((await action.getElementCount(this.login_btn))) ? !((await action.isClickable(this.login_btn))) : false,
            forgotPassword: ((await action.getElementCount(this.forgotPassword)) > 0) ? await action.getText(this.forgotPassword) : null,
            signup: ((await action.getElementCount(this.signup)) > 0) ? await action.getText(this.signup) : null,
            dontHaveAccount_txt: ((await action.getElementCount(this.dontHaveAccount_txt)) > 0) ? await action.getText(this.dontHaveAccount_txt) : null,
            loginoption_txt: ((await action.getElementCount(this.loginoption_txt)) > 0) ? await action.getText(this.loginoption_txt) : null,
            languageSelector_image_exists: ((await action.getElementCount(this.languageSelector_image)) > 0) ? await action.waitForDisplayed(this.languageSelector_image) : false,
            languageSelector_dropdown: ((await action.getElementCount(this.languageSelector_dropdown)) > 0) ? await action.getText(this.languageSelector_dropdown) : null,
            brandLogo_img_exists: ((await action.getElementCount(this.brandLogo_img)) > 0) ? await action.waitForDisplayed(this.brandLogo_img) : false
        }
        return obj;
    },

    set_UserName:async function (userName) {
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.userName_tbox, userName);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " -- UserName is entered");
        } else {
            res = res + " -- UserName is NOT entered";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    set_Password: async function (password) {
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.password_tbox, password);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " -- Password is entered");
        } else {
            res = res + " -- Password is NOT entered";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_Login_Button: async function () {
        await logger.logInto(await stackTrace.get());
      /*  if (argv.deviceName) {
            action.hideKeyboard();
        }*/
        res = await action.click(this.login_btn);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " -- Login button is clicked");
            
            //action.waitForDisplayed(this.loaderIcon);
        } else {
            res = res + " -- Login button is NOT clicked ";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_ForgotPassword_Button:async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.forgotPassword);
        await action.waitForDocumentLoad();
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " -- Forgot Password Button is clicked");
            res = await this.forgotPassword_PageData();
        } else {
            res = res + "-- Forgot Password Button is NOT clicked";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    forgotPassword_PageData:async function () {
        await logger.logInto(await stackTrace.get());
        obj = {
            pageStatus: ((await action.getElementCount(this.userName_tbox)) > 0) ? await action.waitForDisplayed(this.userName_tbox) : false,
            brandLogo_img_exists: ((await action.getElementCount(this.brandLogo_img)) > 0) ? await action.waitForDisplayed(this.brandLogo_img) : false,
            sendOTPToResetbtn_txt: ((await action.getElementCount(this.sendOTPToReset_btn)) > 0) ? await action.getText(this.sendOTPToReset_btn) : null,
            sendOTPToResetbtn_Disabled: ((await action.getElementCount(this.sendOTPToReset_btn)) > 0) ? !((await action.isEnabled(this.sendOTPToReset_btn))) : null,
            forgotPassword_Email_lbl: ((await action.getElementCount(this.email_tbox_lbl)) > 0) ? await action.getText(this.email_tbox_lbl) : null,
            resetPassword_title: ((await action.getElementCount(this.resetPassword_title)) > 0) ? await action.getText(this.resetPassword_title) : null,
            resetPassword_subHeading: ((await action.getElementCount(this.resetPassword_subHeading)) > 0) ? await action.getText(this.resetPassword_subHeading) : null,
            cancelandGoBackbtn_txt: ((await action.getElementCount(this.cancelandGoBack_btn)) > 0) ? await action.getText(this.cancelandGoBack_btn) : null,
            //languageSelector_image_exists: (action.getElementCount(this.languageSelector_image) > 0) ? action.waitForDisplayed(this.languageSelector_image) : false,
            //languageSelector_dropdown: (action.getElementCount(this.languageSelector_dropdown) > 0) ? action.getText(this.languageSelector_dropdown) : null,
        }
        return obj;
    },

    set_Email_ForgotPassword:async function (emailID) {
        await logger.logInto(await stackTrace.get());
        await action.setValue(this.userName_tbox, emailID);
        res = await this.sendOTP_Button_Status();
        if (res == "enabled") {
            await logger.logInto(await stackTrace.get(), " -- Email ID is entered");
        } else {
            res = res + " -- Email ID is NOT entered";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_SendOTPToReset_Button:async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.sendOTPToReset_btn);
        if (res == true)
            await logger.logInto(await stackTrace.get(), " -- Send OTP button is clicked ");
        else
            await logger.logInto(await stackTrace.get(), res + " -- Send OTP button Not clicked", "error");
        return res;
    },

    click_CancelAndGoBackToLogin_Button:async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.cancelandGoBack_btn);
        if (res == true) {
            res = await this.login_PageData();
            await logger.logInto(await stackTrace.get(), " -- Cancel Button is clicked");
        } else {
            res = res + " -- Cancel Button is NOT clicked";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    changePassword_isInitialized: async function () {
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        let pageStatus = await action.waitForDisplayed(this.changePassword);
        res = await this.changePassword_PageData()
        res.pageStatus = pageStatus;
        return res;
    },

    changePassword_PageData: async function () {
        await logger.logInto(await stackTrace.get());
        obj = {
            //checkEmailForCode_txt: (action.getElementCount(this.snackbarInfo_txt) > 0) ? action.getText(this.snackbarInfo_txt) : null,
            resetPassword_title: ((await action.getElementCount(this.resetPassword_title)) > 0) ? await action.getText(this.resetPassword_title) : null,
            resetPassword_subHeading2: ((await action.getElementCount(this.resetPassword_subHeading2)) > 0) ? await action.getText(this.resetPassword_subHeading2) : null,
            email_tbox_lbl: ((await action.getElementCount(this.email_tbox_lbl)) > 0) ? await action.getText(this.email_tbox_lbl) : null,
            userName_tbox_value: ((await action.getElementCount(this.userName_tbox)) > 0) ? await action.getValue(this.userName_tbox) : null,
            userName_tbox_Disabled: ((await action.getElementCount(this.userName_tbox)) > 0) ? !((await action.isEnabled(this.userName_tbox))) : null,
            verificationCode_lbl: ((await action.getElementCount(this.verificationCode_lbl)) > 0) ? await action.getText(this.verificationCode_lbl) : null,
            verificationCode_txtBox: ((await action.getElementCount(this.verificationCode_txtBox)) > 0) ? await action.getValue(this.verificationCode_txtBox) : null,
            newPassword_lbl: ((await action.getElementCount(this.newPassword_lbl)) > 0) ? await action.getText(this.newPassword_lbl) : null,
            newPassword_txtBox: ((await action.getElementCount(this.newPassword_txtBox)) > 0) ? await action.getValue(this.newPassword_txtBox) : null,
            togglePasswordVisibility_btn: ((await action.getElementCount(this.togglePasswordVisibility_btn)) > 0) ? await action.waitForDisplayed(this.togglePasswordVisibility_btn) : false,
            confirmPassword_lbl: ((await action.getElementCount(this.confirmPassword_lbl)) > 0) ? await action.getText(this.confirmPassword_lbl) : null,
            confirmPassword_txtBox: ((await action.getElementCount(this.confirmPassword_txtBox)) > 0) ? await action.getValue(this.confirmPassword_txtBox) : null,
            toggle_ConfirmPasswordVisibility_btn: ((await action.getElementCount(this.toggle_ConfirmPasswordVisibility_btn)) > 0) ? await action.waitForDisplayed(this.toggle_ConfirmPasswordVisibility_btn) : false,
            resendOTP: ((await action.getElementCount(this.resendOTP)) > 0) ? await action.getText(this.resendOTP) : null,
            resendTimer: ((await action.getElementCount(this.resendTimer)) > 0) ? await action.getText(this.resendTimer) : null,
            changePassword: ((await action.getElementCount(this.changePassword)) > 0) ? await action.getText(this.changePassword) : null,
            cancelandGoBackbtn_txt: ((await action.getElementCount(this.cancelandGoBack_btn)) > 0) ? await action.getText(this.cancelandGoBack_btn) : null,
            brandLogo_img_exists: ((await action.getElementCount(this.brandLogo_img)) > 0) ? await action.waitForDisplayed(this.brandLogo_img) : false
        }
        return obj;
    },

    toggle_Password_Eye: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.togglePasswordVisibility_btn);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), res + "-- toggle_Password_Eye Button Clicked ");
            res = await action.getAttribute(this.password_tbox, "type");
        } else
            await logger.logInto(await stackTrace.get(), res + "-- toggle_Password_Eye Button Not Clicked ", "error");
        return res;
    },

    change_Language:async function (lang) {
        res = require('./landing.page.js').select_Language_from_dropdown(lang);
        return res;
    },

    get_invalidEmail_ErrorText:async function () {
        res = await action.waitForDisplayed(this.invalidEmail_txt)
        if (res == true) {
            res = await action.getText(this.invalidEmail_txt)
            await logger.logInto(await stackTrace.get(), res);
        } else
            await logger.logInto(await stackTrace.get(), res, "error");
        return res;
    },

    set_VerificationCode:async function (Code) {
        await logger.logInto(await stackTrace.get());
        await action.clearValue(this.verificationCode_txtBox)
        res = await action.setValue(this.verificationCode_txtBox, Code);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " -- Verification Code Entered");
        } else {
            res = res + " -- Verification Code NOT Entered";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    set_NewPassword: async function (password) {
        await logger.logInto(await stackTrace.get());
        await action.setValue(this.newPassword_txtBox, password);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " -- NewPassword Entered");
        } else {
            res = res + " -- NewPassword Code NOT Entered";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    set_ConfirmPassword:async function (password) {
        await logger.logInto(await stackTrace.get());
        await action.setValue(this.confirmPassword_txtBox, password);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " -- ConfirmPassword Entered");
        } else {
            res = res + " -- ConfirmPassword Code NOT Entered";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_ChangePassword_Button:async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.changePassword);
        if (res == true)
            await logger.logInto(await stackTrace.get(), " -- Change Password Button Clicked");
        else
            await logger.logInto(await stackTrace.get(), res + " -- Change Password Button NOT Clicked", 'error');
        return res;
    },

    get_invalid_VerificationCode_Text:async function () {
        res = await action.waitForDisplayed(this.invalidVerificationCode_txt)
        if (res == true) {
            res = await action.getText(this.invalidVerificationCode_txt)
            await logger.logInto(await stackTrace.get(), res);
        }
        else
            await logger.logInto(await stackTrace.get(), res, "error");
        return res;
    },

    //get password rules and mismatch to be conbined after data-tid updates
    get_PasswordRules_text:async function () {
        res = await action.waitForDisplayed(this.passwordRules_txt)
        if (res == true) {
            res = await action.getText(this.passwordRules_txt)
            await logger.logInto(await stackTrace.get(), res);
        }
        else
            await logger.logInto(await stackTrace.get(), res, "error");
        return res;
    },

    get_PasswordMismatch_text:async function () {
        res = await action.waitForDisplayed(this.passwordMismatch)
        if (res == true) {
            res = await action.getText(this.passwordMismatch)
            await logger.logInto(await stackTrace.get(), res);
        }
        else
            await logger.logInto(await stackTrace.get(), res, "error");
        return res;
    },

    click_ResentOTP_Button:async function () {
        await logger.logInto(await stackTrace.get());
        await action.waitForDisplayed(this.resendTimer, 60000, true);
        await action.waitForDisplayed(this.resendOTP);
        res = await action.click(this.resendOTP);
        if (res == true) {
            var obj = {}
            obj.snackbar = require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
            obj.resendTimer_Enabled = await action.waitForDisplayed(this.resendTimer);
            await logger.logInto(await stackTrace.get(), " -- Change Password Button Clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), res + " -- Change Password Button NOT Clicked", 'error');
        return obj;
    },

    press_Enter: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.keyPress("Enter")
        if (res == null) {
            res = true
            await logger.logInto(await stackTrace.get(), " -- Enter Key Pressed");
        }
        else
            await logger.logInto(await stackTrace.get(), res + " --  Enter Key Not Pressed", 'error');
        return res;
    },

    click_SignUP_Button: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.signup);
        if (res == true) {
            res = require('./signUp.page.js').isInitialized()
            await logger.logInto(await stackTrace.get(), " -- Sign Up Clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), res + " -- Sign Up NOT Clicked", 'error');
        return res;
    }

   
}