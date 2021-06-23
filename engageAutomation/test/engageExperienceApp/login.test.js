"use strict";
var loginPage = require('../../pages/engageExperienceApp/login.page.js');
var sts;

module.exports = {

    //Validate content on Login page in english Language
    ENG_IDEN_TC_2: function (testdata) {
        sts = loginPage.isInitialized()
        assertion.assertEqual(sts.loginPage_title, testdata[0].loginPage_title, "Login Page Title Mismatch");
        assertion.assertEqual(sts.email_tbox_lbl, testdata[0].email_tbox_lbl, "Login Page Email Textbox Label Mismatch");
        assertion.assertEqual(sts.userName_tbox_placeholder, testdata[0].userName_tbox_placeholder, "Login Page Username Textbox Placeholder Mismatch");
        assertion.assertEqual(sts.userName_tbox_placeholder, testdata[0].userName_tbox_placeholder, "Login Page Username Textbox Placeholder Mismatch");
        assertion.assertEqual(sts.pswrd_tbox_lbl, testdata[0].pswrd_tbox_lbl, "Login Page Password Textbox Placeholder Mismatch");
        assertion.assertEqual(sts.google_btn, testdata[0].google_btn, "Login Page Google Button Mismatch");
        assertion.assertEqual(sts.facebook_btn, testdata[0].facebook_btn, "Login Page Facebook Button Mismatch");
        assertion.assertEqual(sts.login_btn, testdata[0].login_btn, "Login Page Login Button Mismatch");
        assertion.assertEqual(sts.forgotPassword, testdata[0].forgotPassword, "Login Page Forgot Password Text Mismatch");
        assertion.assertEqual(sts.signup, testdata[0].signup, "Login Page Signup Text Mismatch");
        assertion.assertEqual(sts.dontHaveAccount_txt, testdata[0].dontHaveAccount_txt, "Login Page Don't Have Account Text Mismatch");
        assertion.assertEqual(sts.loginoption_txt, testdata[0].loginoption_txt, "Login Page login Option Text Mismatch");
        assertion.assertEqual(sts.googlebtn_icon, true, "Login Page Google Button Icon Not Displayed");
        assertion.assertEqual(sts.facebookbtn_icon, true, "Login Page Facebook Button Icon Not Displayed");

        //TBD when language switcher will be activated
        //assertion.assertEqual(sts.languageSelector_dropdown, testdata[1].split("-")[0].trim(), "Login Page Powered By Text Mismatch");
        //assertion.assertEqual(sts.languageSelector_image_exists, true, "Login Page Language Selector Image Not Displayed");
    },

    //Validate content on Login page in Spanish Language
    ENG_IDEN_TC_3: function (testdata) {
        this.ENG_IDEN_TC_2(testdata)
    },

    //Validate that the user is able to change the language on the login page
    ENG_IDEN_TC_4: function (testdata) {
        sts = loginPage.change_Language(testdata)
        assertion.assertEqual(sts, true, "Language not selected");
        sts = loginPage.login_PageData();
        assertion.assertEqual(sts.languageSelector_dropdown, testdata.split("-")[0].trim(), "Language mismatch")
    },

    //Validate that the login button is disabled if email is left blank
    ENG_IDEN_TC_5: function () {
        sts = loginPage.set_UserName("")
        assertion.assertEqual(sts, true, "Email Not Entered");
        sts = loginPage.login_PageData();
        assertion.assertEqual(sts.login_btn_Disabled, true, "Login Button Not Disabled")
    },

    //Validate that the login button is disabled if password is left blank
    ENG_IDEN_TC_6: function () {
        sts = loginPage.set_Password("")
        assertion.assertEqual(sts, true, "Password Not Entered");
        sts = loginPage.login_PageData();
        assertion.assertEqual(sts.login_btn_Disabled, true, "Login Button Not Disabled")
    },

    //Validate that the user is able to login successfully with an existing account
    ENG_IDEN_TC_7: function (testdata) {
        sts = loginPage.set_UserName(testdata.email)
        assertion.assertEqual(sts, true, "Username Not Entered");
        sts = loginPage.set_Password(testdata.password)
        assertion.assertEqual(sts, true, "Password Not Entered");
        sts = loginPage.click_Login_Button()
        assertion.assertEqual(sts, true, "Login Button Not Clicked");
        sts = require('../../pages/engageExperienceApp/dashboard.page.js').isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Dashboard page status mismatch");
        //there should be some other assertion as well to validate successfull login - akhil
    },

    //Validate that the user is able to mask/unmask the password by clicking eye icon
    ENG_IDEN_TC_9: function (testdata) {
        sts = loginPage.set_Password(testdata.password)
        assertion.assertEqual(sts, true, "Password Not Entered");
        sts = loginPage.toggle_Password_Eye();
        assertion.assertEqual(sts, "text", "Masking Status not set as Text");
        sts = loginPage.toggle_Password_Eye();
        assertion.assertEqual(sts, "password", "Masking Status not set as Password");
    },

    //Validate login with valid Email ID (Entered in UPPERCASE) & password
    ENG_IDEN_TC_10: function (testdata) {
        sts = loginPage.set_UserName(testdata.email.toUpperCase())
        assertion.assertEqual(sts, true, "Username Not Entered");
        sts = loginPage.set_Password(testdata.password)
        assertion.assertEqual(sts, true, "Password Not Entered");
        sts = loginPage.click_Login_Button()
        assertion.assertEqual(sts, true, "Login Button Not Clicked");
        sts = require('../../pages/engageExperienceApp/dashboard.page.js').isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Dashboard page status mismatch");
        //there should be some other assertion as well to validate successfull login - akhil
    },

    //Validate user is not able to login with invalid Email ID/format
    ENG_IDEN_TC_11: function (testdata) {
        sts = loginPage.set_UserName(testdata[0].email)
        assertion.assertEqual(sts, true, "Username Not Entered");
        sts = loginPage.set_Password(testdata[0].password)
        assertion.assertEqual(sts, true, "Password Not Entered");
        sts = loginPage.click_Login_Button()
        assertion.assertEqual(sts, true, "Login Button Not Clicked");
        sts = loginPage.get_invalidEmail_ErrorText()
        assertion.assertEqual(sts, testdata[1].invalidEmail_txt, "Invalid Email Text Mismatch")
    },

    //Validate message If user enter non-existing/unregistered Email ID while login
    ENG_IDEN_TC_12: function (testdata) {
        sts = loginPage.set_UserName(testdata[0].email)
        assertion.assertEqual(sts, true, "Username Not Entered");
        sts = loginPage.set_Password(testdata[0].password)
        assertion.assertEqual(sts, true, "Password Not Entered");
        sts = loginPage.click_Login_Button()
        assertion.assertEqual(sts, true, "Login Button Not Clicked");
        sts = require('./common.test.js').get_Snackbar_Message_Text();
        assertion.assertEqual(sts, testdata[1].notRegisterUser_alert, "Not Registered Email Alert Mismatch")
    },

    //Validate user is not able to login with invalid password
    ENG_IDEN_TC_13: function (testdata) {
        sts = loginPage.set_UserName(testdata[0].email)
        assertion.assertEqual(sts, true, "Username Not Entered");
        sts = loginPage.set_Password(testdata[0].password)
        assertion.assertEqual(sts, true, "Password Not Entered");
        sts = loginPage.click_Login_Button()
        assertion.assertEqual(sts, true, "Login Button Not Clicked");
        sts = require('./common.test.js').get_Snackbar_Message_Text();
        assertion.assertEqual(sts, testdata[1].invalidEmail_alert, "Invalid Email/Password Alert Mismatch")
    },

    //Validate that user is able to log on entering leading and trailing spaces in the email id
    ENG_IDEN_TC_14: function (testdata) {
        sts = loginPage.set_UserName("  " + testdata.email + "  ")
        assertion.assertEqual(sts, true, "Username Not Entered");
        sts = loginPage.set_Password(testdata.password)
        assertion.assertEqual(sts, true, "Password Not Entered");
        sts = loginPage.click_Login_Button();
        assertion.assertEqual(sts, true, "Login Button Not Clicked");
        sts = require('../../pages/engageExperienceApp/dashboard.page.js').isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Dashboard page status mismatch");
        //there should be some other assertion as well to validate successfull login - akhil
    },

    //Validate that the login button is clicked on pressing "ENTER" key on the login page
    ENG_IDEN_TC_15: function (testdata) {
        sts = loginPage.set_UserName(testdata.email)
        assertion.assertEqual(sts, true, "Username Not Entered");
        sts = loginPage.set_Password(testdata.password)
        assertion.assertEqual(sts, true, "Password Not Entered");
        sts = loginPage.press_Enter()
        assertion.assertEqual(sts, true, "Enter Key Not Pressed");
        //there should be some other assertion as well to validate successfull login - akhil
    },

    //Validate that Reset Password page is launched on clicking 'Forgot Password' button
    ENG_IDEN_TC_16: function () {
        sts = loginPage.click_ForgotPassword_Button()
        assertion.assertEqual(sts.pageStatus, true, "Reset Password Page UserName Textbox Not Displayed")
        assertion.assertEqual(sts.brandLogo_img_exists, true, "Reset Password Page Brand Logo Not Displayed")
    },

    //Validate that Sign Up page is launched on clicking 'Sign Up' button
    ENG_IDEN_TC_17: function (testdata) {
        sts = loginPage.click_SignUP_Button()
        //TBD assertions. Sign Up to be implemented
    },

    //Validate content on Reset Password Send OTP Page in English Language
    ENG_IDEN_TC_25: function (testdata) {
        sts = loginPage.forgotPassword_PageData()
        assertion.assertEqual(sts.resetPassword_title, testdata.resetPassword_title, "Reset Password Page Heading Mismatch")
        assertion.assertEqual(sts.resetPassword_subHeading, testdata.resetPassword_subHeading, "Reset Password Page Sub-Heading Mismatch")
        assertion.assertEqual(sts.sendOTPToResetbtn_txt, testdata.sendOTPToResetbtn_txt, "Reset Password Page Send OTP To Reset Button Text Mismatch")
        assertion.assertEqual(sts.sendOTPToResetbtn_Disabled, true, "Reset Password Page Send OTP To Reset Button Not Disabled")
        assertion.assertEqual(sts.forgotPassword_Email_lbl, testdata.forgotPassword_Email_lbl, "Reset Password Page Email Label Text Mismatch")
        assertion.assertEqual(sts.cancelandGoBackbtn_txt, testdata.cancelandGoBackbtn_txt, "Reset Password Page Cancel & Go Back Button Text Mismatch")
        assertion.assertEqual(sts.brandLogo_img_exists, true, "Reset Password Page Brand Logo Not Displayed")
    },

    //Validate content on Reset Password Send OTP Page in Spanish Language
    ENG_IDEN_TC_26: function (testdata) {
        this.ENG_IDEN_TC_25(testdata)
    },

    //Validate that error message is displayed if email with invalid format is entered on the Reset Password Send OTP page
    ENG_IDEN_TC_27: function (testdata) {
        sts = loginPage.set_UserName(testdata[0].email)
        assertion.assertEqual(sts, true, "Username Not Entered");
        sts = loginPage.click_SendOTPToReset_Button()
        assertion.assertEqual(sts, true, "Send OTP To Reset Password Not Clicked");
        sts = loginPage.get_invalidEmail_ErrorText()
        assertion.assertEqual(sts, testdata[1].invalidEmail_txt, "Invalid Email Text Mismatch")
    },

    //Validate that Sign In page is launched on clicking "Cancel & GO Back to Login" button on Reset Password Send OTP page
    ENG_IDEN_TC_28: function (testdata) {
        sts = loginPage.click_CancelAndGoBackToLogin_Button()
        assertion.assertEqual(sts.loginPage_title, testdata[0].loginPage_title, "Login Page Title Mismatch");
        assertion.assertEqual(sts.email_tbox_lbl, testdata[0].email_tbox_lbl, "Login Page Email Textbox Label Mismatch");
        assertion.assertEqual(sts.userName_tbox_placeholder, testdata[0].userName_tbox_placeholder, "Login Page Username Textbox Placeholder Mismatch");
        assertion.assertEqual(sts.userName_tbox_placeholder, testdata[0].userName_tbox_placeholder, "Login Page Username Textbox Placeholder Mismatch");
        assertion.assertEqual(sts.pswrd_tbox_lbl, testdata[0].pswrd_tbox_lbl, "Login Page Password Textbox Placeholder Mismatch");
        assertion.assertEqual(sts.google_btn, testdata[0].google_btn, "Login Page Google Button Mismatch");
        assertion.assertEqual(sts.facebook_btn, testdata[0].facebook_btn, "Login Page Facebook Button Mismatch");
        assertion.assertEqual(sts.login_btn, testdata[0].login_btn, "Login Page Login Button Mismatch");
        assertion.assertEqual(sts.forgotPassword, testdata[0].forgotPassword, "Login Page Forgot Password Text Mismatch");
        assertion.assertEqual(sts.signup, testdata[0].signup, "Login Page Signup Text Mismatch");
        assertion.assertEqual(sts.dontHaveAccount_txt, testdata[0].dontHaveAccount_txt, "Login Page Don't Have Account Text Mismatch");
        assertion.assertEqual(sts.loginoption_txt, testdata[0].loginoption_txt, "Login Page login Option Text Mismatch");
        assertion.assertEqual(sts.googlebtn_icon, true, "Login Page Google Button Icon Not Displayed");
        assertion.assertEqual(sts.facebookbtn_icon, true, "Login Page Facebook Button Icon Not Displayed");
        //TBD when language switcher will be activated
        // assertion.assertEqual(sts.languageSelector_dropdown, testdata[1].split("-")[0].trim(), "Login Page Powered By Text Mismatch");
        // assertion.assertEqual(sts.languageSelector_image_exists, true, "Login Page Language Selector Image Not Displayed");
    },


    //Validate email with leading trailing space on Reset Password Send OTP page
    ENG_IDEN_TC_29: function (testdata) {
        sts = loginPage.set_UserName(" " + testdata.email + " ")
        assertion.assertEqual(sts, true, "Username Not Entered");
        sts = loginPage.click_SendOTPToReset_Button()
        assertion.assertEqual(sts, true, "Send OTP Button Not Clicked");
        sts = loginPage.changePassword_isInitialized()
        assertion.assertEqual(sts.pageStatus, true, "Change Password Sub-Heading Not Displayed")
        assertion.assertEqual(sts.userName_tbox_Disabled, true, "Change Password Page User Name TextBox Not Disabled")
        assertion.assertEqual(sts.userName_tbox_value.trim(), testdata.email, "Change Password Page User EmailID Mismatch")
        assertion.assertEqual(sts.brandLogo_img_exists, true, "Change Password Page Brand Logo Not Displayed")
    },

    //Validate email with upper case on Reset Password Send OTP page
    ENG_IDEN_TC_30: function (testdata) {
        sts = loginPage.set_UserName(testdata.email.toUpperCase())
        assertion.assertEqual(sts, true, "Username Not Entered");
        sts = loginPage.click_SendOTPToReset_Button()
        assertion.assertEqual(sts, true, "Send OTP Button Not Clicked");
        sts = loginPage.changePassword_isInitialized()
        assertion.assertEqual(sts.pageStatus, true, "Change Password Sub-Heading Not Displayed")
        assertion.assertEqual(sts.userName_tbox_Disabled, true, "Change Password Page User Name TextBox Not Disabled")
        assertion.assertEqual(sts.userName_tbox_value.trim(), testdata.email.toUpperCase(), "Change Password Page User EmailID Mismatch")
        assertion.assertEqual(sts.brandLogo_img_exists, true, "Change Password Page Brand Logo Not Displayed")
    },

    //Validate that Change Password page launches on clicking 'SEND OTP to reset password' button
    ENG_IDEN_TC_31: function (testdata) {
        sts = loginPage.set_UserName(testdata.email)
        assertion.assertEqual(sts, true, "Username Not Entered");
        sts = loginPage.click_SendOTPToReset_Button()
        assertion.assertEqual(sts, true, "Send OTP Button Not Clicked");
        sts = loginPage.changePassword_isInitialized()
        assertion.assertEqual(sts.pageStatus, true, "Change Password page status mismatch")
        assertion.assertEqual(sts.userName_tbox_Disabled, true, "Change Password Page User Name TextBox Not Disabled")
        assertion.assertEqual(sts.userName_tbox_value.trim(), testdata.email, "Change Password Page User EmailID Mismatch")
        assertion.assertEqual(sts.brandLogo_img_exists, true, "Change Password Page Brand Logo Not Displayed")
    },

    //Validate Content on Change Password page in English language
    ENG_IDEN_TC_35: function (testdata) {
        sts = require('./common.test.js').get_Snackbar_Message_Text();
        assertion.assertEqual(sts, testdata.checkEmailForCode_txt)
        sts = loginPage.changePassword_PageData()
        //assertion.assertEqual(sts.checkEmailForCode_txt, testdata.checkEmailForCode_txt)
        assertion.assertEqual(sts.resetPassword_title, testdata.resetPassword_title, "Change Password Page Heading Mismatch")
        assertion.assertEqual(sts.resetPassword_subHeading2, testdata.resetPassword_subHeading2, "Change Password Page Sub-Heading Mismatch")
        assertion.assertEqual(sts.email_tbox_lbl, testdata.email_tbox_lbl, "Change Password Page Email Label Mismatch")
        assertion.assertEqual(sts.verificationCode_lbl, testdata.verificationCode_lbl, "Change Password Page Verification Code Label Mismatch")
        assertion.assertEqual(sts.newPassword_lbl, testdata.newPassword_lbl, "Change Password Page New Password Label Mismatch")
        assertion.assertEqual(sts.confirmPassword_lbl, testdata.confirmPassword_lbl, "Change Password Page Confirm Password Label Mismatch")
        assertion.assertEqual(sts.changePassword, testdata.changePassword, "Change Password Page Change Password Button Mismatch")
        assertion.assertEqual(sts.cancelandGoBackbtn_txt, testdata.cancelandGoBackbtn_txt, "Change Password Page Cancel And Go Back Button Mismatch")
    },

    //Validate Content on Change Password page in Spanish language
    ENG_IDEN_TC_36: function (testdata) {
        this.ENG_IDEN_TC_35(testdata)
    },

    //Validate that the Sign In page is launched on clicking the "Cancel & GO Back to Login" button on Change Password page
    ENG_IDEN_TC_38: function (testdata) {
        this.ENG_IDEN_TC_28(testdata)
    },

    //Validate if user is able to click Resend OTP after 60 sec on Change Password page
    ENG_IDEN_TC_39: function (testdata) {
        sts = loginPage.click_ResentOTP_Button()
        assertion.assertEqual(sts.snackbar, testdata.resendOTP_msg, "Snackbar Message Mismatch")
        assertion.assertEqual(sts.resendTimer_Enabled, true, "Resend Timer Not Displayed After 60s")
    },

    //Validate snackbar message is displayed and user is not able to proceed if user enter incorrect OTP on Reset Password page
    ENG_IDEN_TC_40: function (testdata) {
        sts = loginPage.set_VerificationCode(testdata[1].invalid_OTP[1])
        assertion.assertEqual(sts, true, "Verification Code Not Set");
        sts = loginPage.set_NewPassword(testdata[0].password)
        assertion.assertEqual(sts, true, "New Password Not Set");
        sts = loginPage.set_ConfirmPassword(testdata[0].password)
        assertion.assertEqual(sts, true, "Confirm Password Not Set");
        sts = loginPage.click_ChangePassword_Button()
        assertion.assertEqual(sts, true, "Change Password Button Not Clicked");
        sts = require('./common.test.js').get_Snackbar_Message_Text();
        assertion.assertEqual(sts, testdata[2].invalid_VerificationCode2)
    },

    //Validate the Error message when the user enters the incomplete OTP i.e. less than 6 digits
    ENG_IDEN_TC_41: function (testdata) {
        sts = loginPage.set_VerificationCode(testdata[1].invalid_OTP[0])
        assertion.assertEqual(sts, true, "Verification Code Not Set");
        sts = loginPage.set_NewPassword(testdata[0].password)
        assertion.assertEqual(sts, true, "New Password Not Set");
        sts = loginPage.set_ConfirmPassword(testdata[0].password)
        assertion.assertEqual(sts, true, "Confirm Password Not Set");
        sts = loginPage.click_ChangePassword_Button()
        assertion.assertEqual(sts, true, "Change Password Button Not Clicked");
        sts = loginPage.get_invalid_VerificationCode_Text()
        assertion.assertEqual(sts, testdata[2].invalid_OTP)
    },

    //Validate user is prompt for Password rules when user does not follow all rules and click Change Password button
    ENG_IDEN_TC_43: function (testdata) {
        sts = loginPage.set_VerificationCode(testdata[1].invalid_OTP[1])
        assertion.assertEqual(sts, true, "Verification Code Not Set");
        sts = loginPage.set_NewPassword(testdata[0].password)
        assertion.assertEqual(sts, true, "New Password Not Set");
        sts = loginPage.set_ConfirmPassword(testdata[0].password)
        assertion.assertEqual(sts, true, "Confirm Password Not Set");
        sts = loginPage.click_ChangePassword_Button()
        assertion.assertEqual(sts, true, "Change Password Button Not Clicked");
        sts = loginPage.get_PasswordRules_text()
        assertion.assertEqual(sts, testdata[2].password_rules)
    },

    //Validate that message is displayed to the user when password and confirm password text does not match and user click Change Password button
    ENG_IDEN_TC_44: function (testdata) {
        sts = loginPage.set_VerificationCode(testdata[2].invalid_OTP[1])
        assertion.assertEqual(sts, true, "Verification Code Not Set");
        sts = loginPage.set_NewPassword(testdata[0].password)
        assertion.assertEqual(sts, true, "New Password Not Set");
        sts = loginPage.set_ConfirmPassword(testdata[1].password)
        assertion.assertEqual(sts, true, "Confirm Password Not Set");
        sts = loginPage.click_ChangePassword_Button()
        assertion.assertEqual(sts, true, "Change Password Button Not Clicked");
        sts = loginPage.get_PasswordMismatch_text()
        assertion.assertEqual(sts, testdata[3].password_mismatch)
    }

};