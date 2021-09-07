"use strict";
const landingPage = require('../../pages/engageExperienceApp/landing.page.js');
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
        assertion.assertEqual(sts.languageSelector_dropdown, testdata[1].split("-")[0].trim(), "Login Page Powered By Text Mismatch");
        assertion.assertEqual(sts.languageSelector_image_exists, true, "Login Page Language Selector Image Not Displayed");
    },

    //Validate that the user is able to change the language on the login page
    ENG_IDEN_TC_4: function (testdata) {
        sts = landingPage.select_Language_from_dropdown(testdata)
        assertion.assertEqual(sts, true, "Language not selected");
        sts = loginPage.login_PageData();
        assertion.assertEqual(sts.languageSelector_dropdown, testdata.split("-")[0].trim(), "Language mismatch")
    },

    //Validate that the login button is enabled if email is left blank
    ENG_IDEN_TC_5: function () {
        sts = loginPage.set_UserName("")
        assertion.assertEqual(sts, true, "Email Not Entered");
        sts = loginPage.login_PageData();
        //need to check button disable
        assertion.assertEqual(sts.login_btn_Disabled, false, "Login Button Not Disabled")
    },

    //Validate that the login button is enabled if password is left blank
    ENG_IDEN_TC_6: function () {
        sts = loginPage.set_Password("")
        assertion.assertEqual(sts, true, "Password Not Entered");
        sts = loginPage.login_PageData();
        //need to check button disable 
        assertion.assertEqual(sts.login_btn_Disabled, false, "Login Button Not Disabled")
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
        assertion.assertEqual(sts, testdata[1].notRegisterUser_alert, "Invalid Email/Password Alert Mismatch")
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
    }

   
};