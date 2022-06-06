"use strict";
const landingPage = require('../../pages/engageExperienceApp/landing.page.js');
var loginPage = require('../../pages/engageExperienceApp/login.page.js');
var sts;

module.exports = {

    //Validate content on Login page in english Language
    ENG_IDEN_TC_2: async function (testdata) {
        sts = await loginPage.isInitialized()
        await assertion.assertEqual(sts.loginPage_title, testdata[0].loginPage_title, "Login Page Title Mismatch");
        await assertion.assertEqual(sts.email_tbox_lbl, testdata[0].email_tbox_lbl, "Login Page Email Textbox Label Mismatch");
        await assertion.assertEqual(sts.userName_tbox_placeholder, testdata[0].userName_tbox_placeholder, "Login Page Username Textbox Placeholder Mismatch");
        await assertion.assertEqual(sts.userName_tbox_placeholder, testdata[0].userName_tbox_placeholder, "Login Page Username Textbox Placeholder Mismatch");
        await assertion.assertEqual(sts.pswrd_tbox_lbl, testdata[0].pswrd_tbox_lbl, "Login Page Password Textbox Placeholder Mismatch");
        await assertion.assertEqual(sts.google_btn, testdata[0].google_btn, "Login Page Google Button Mismatch");
        await assertion.assertEqual(sts.facebook_btn, testdata[0].facebook_btn, "Login Page Facebook Button Mismatch");
        await assertion.assertEqual(sts.login_btn, testdata[0].login_btn, "Login Page Login Button Mismatch");
        await assertion.assertEqual(sts.forgotPassword, testdata[0].forgotPassword, "Login Page Forgot Password Text Mismatch");
        await assertion.assertEqual(sts.signup, testdata[0].signup, "Login Page Signup Text Mismatch");
        await assertion.assertEqual(sts.dontHaveAccount_txt, testdata[0].dontHaveAccount_txt, "Login Page Don't Have Account Text Mismatch");
        await assertion.assertEqual(sts.loginoption_txt, testdata[0].loginoption_txt, "Login Page login Option Text Mismatch");
        await assertion.assertEqual(sts.googlebtn_icon, true, "Login Page Google Button Icon Not Displayed");
        await assertion.assertEqual(sts.facebookbtn_icon, true, "Login Page Facebook Button Icon Not Displayed");

        //TBD when language switcher will be activated
        await assertion.assertEqual(sts.languageSelector_dropdown, testdata[1].split("-")[0].trim(), "Login Page Powered By Text Mismatch");
        await assertion.assertEqual(sts.languageSelector_image_exists, true, "Login Page Language Selector Image Not Displayed");
    },

    //Validate that the user is able to change the language on the login page
    ENG_IDEN_TC_4:async function (testdata) {
        sts = await landingPage.select_Language_from_dropdown(testdata)
        await assertion.assertEqual(sts, true, "Language not selected");
        sts = await loginPage.login_PageData();
        await assertion.assertEqual(sts.languageSelector_dropdown, testdata.split("-")[0].trim(), "Language mismatch")
    },

    //Validate that the login button is disabled if email is left blank
    ENG_IDEN_TC_5:async function () {
        sts = await loginPage.set_UserName("")
        await assertion.assertEqual(sts, true, "Email Not Entered");
        sts = await loginPage.login_PageData();
        //need to check button disable
        await assertion.assertEqual(sts.login_btn_Disabled, false, "Login Button Not Disabled")
    },

    //Validate that the login button is disabled if password is left blank
    ENG_IDEN_TC_6:async function () {
        sts = await loginPage.set_Password("")
        await assertion.assertEqual(sts, true, "Password Not Entered");
        sts = await loginPage.login_PageData();
        //need to check button disable
        await assertion.assertEqual(sts.login_btn_Disabled, false, "Login Button Not Disabled")
    },

    //Validate that the user is able to login successfully with an existing account
    ENG_IDEN_TC_7:async function (testdata) {
        sts = await loginPage.set_UserName(testdata.email)
        await assertion.assertEqual(sts, true, "Username Not Entered");
        sts = await loginPage.set_Password(testdata.password)
        await assertion.assertEqual(sts, true, "Password Not Entered");
        sts = await loginPage.click_Login_Button()
        await assertion.assertEqual(sts, true, "Login Button Not Clicked");
        sts = await require('../../pages/engageExperienceApp/dashboard.page.js').isInitialized();
        await assertion.assertEqual(sts.pageStatus, true, "Dashboard page status mismatch");
        //there should be some other assertion as well to validate successfull login - akhil
    },

    //Validate that the user is able to mask/unmask the password by clicking eye icon
    ENG_IDEN_TC_9:async function (testdata) {
        sts = await loginPage.set_Password(testdata.password)
        await assertion.assertEqual(sts, true, "Password Not Entered");
        sts = await loginPage.toggle_Password_Eye();
        await assertion.assertEqual(sts, "text", "Masking Status not set as Text");
        sts = await loginPage.toggle_Password_Eye();
        await assertion.assertEqual(sts, "password", "Masking Status not set as Password");
    },

    //Validate login with valid Email ID (Entered in UPPERCASE) & password
    ENG_IDEN_TC_10:async function (testdata) {
        sts = await loginPage.set_UserName(testdata.email.toUpperCase())
        await assertion.assertEqual(sts, true, "Username Not Entered");
        sts = await loginPage.set_Password(testdata.password)
        await assertion.assertEqual(sts, true, "Password Not Entered");
        sts = await loginPage.click_Login_Button()
        await assertion.assertEqual(sts, true, "Login Button Not Clicked");
        sts = await require('../../pages/engageExperienceApp/dashboard.page.js').isInitialized();
        await assertion.assertEqual(sts.pageStatus, true, "Dashboard page status mismatch");
        //there should be some other assertion as well to validate successfull login - akhil
    },

    //Validate user is not able to login with invalid Email ID/format
    ENG_IDEN_TC_11:async function (testdata) {
        sts = await loginPage.set_UserName(testdata[0].email)
        await assertion.assertEqual(sts, true, "Username Not Entered");
        sts = await loginPage.set_Password(testdata[0].password)
        await assertion.assertEqual(sts, true, "Password Not Entered");
        sts = await loginPage.click_Login_Button()
        await assertion.assertEqual(sts, true, "Login Button Not Clicked");
        sts = await loginPage.get_invalidEmail_ErrorText()
        await assertion.assertEqual(sts, testdata[1].invalidEmail_txt, "Invalid Email Text Mismatch")
    },

    //Validate message If user enter non-existing/unregistered Email ID while login
    ENG_IDEN_TC_12:async function (testdata) {
        sts = await loginPage.set_UserName(testdata[0].email)
        await assertion.assertEqual(sts, true, "Username Not Entered");
        sts = await loginPage.set_Password(testdata[0].password)
        await assertion.assertEqual(sts, true, "Password Not Entered");
        sts = await loginPage.click_Login_Button()
        await assertion.assertEqual(sts, true, "Login Button Not Clicked");
        sts = await require('./common.test.js').get_Snackbar_Message_Text();
        await assertion.assertEqual(sts, testdata[1].notRegisterUser_alert, "Not Registered Email Alert Mismatch")
    },

    //Validate user is not able to login with invalid password
    ENG_IDEN_TC_13: async function (testdata) {
        sts = await loginPage.set_UserName(testdata[0].email)
        await assertion.assertEqual(sts, true, "Username Not Entered");
        sts = await loginPage.set_Password(testdata[0].password)
        await assertion.assertEqual(sts, true, "Password Not Entered");
        sts = await loginPage.click_Login_Button()
        await assertion.assertEqual(sts, true, "Login Button Not Clicked");
        sts =await require('./common.test.js').get_Snackbar_Message_Text();
        await assertion.assertEqual(sts, testdata[1].notRegisterUser_alert, "Invalid Email/Password Alert Mismatch")
    },

    //Validate that user is able to log on entering leading and trailing spaces in the email id
    ENG_IDEN_TC_14:async function (testdata) {
        sts = await loginPage.set_UserName("  " + testdata.email + "  ")
        await assertion.assertEqual(sts, true, "Username Not Entered");
        sts = await loginPage.set_Password(testdata.password)
        await assertion.assertEqual(sts, true, "Password Not Entered");
        sts = await loginPage.click_Login_Button();
        await assertion.assertEqual(sts, true, "Login Button Not Clicked");
        sts = await require('../../pages/engageExperienceApp/dashboard.page.js').isInitialized();
        await assertion.assertEqual(sts.pageStatus, true, "Dashboard page status mismatch");
        //there should be some other assertion as well to validate successfull login - akhil
    },

    //Validate that the login button is clicked on pressing "ENTER" key on the login page
    ENG_IDEN_TC_15:async function (testdata) {
        sts = await loginPage.set_UserName(testdata.email)
        await assertion.assertEqual(sts, true, "Username Not Entered");
        sts = await loginPage.set_Password(testdata.password)
        await assertion.assertEqual(sts, true, "Password Not Entered");
        sts = await loginPage.press_Enter()
        await assertion.assertEqual(sts, true, "Enter Key Not Pressed");
        //there should be some other assertion as well to validate successfull login - akhil
    },

    //Validate that Reset Password page is launched on clicking 'Forgot Password' button
    ENG_IDEN_TC_16:async function () {
        sts = await loginPage.click_ForgotPassword_Button()
        await assertion.assertEqual(sts.pageStatus, true, "Reset Password Page UserName Textbox Not Displayed")
        await assertion.assertEqual(sts.brandLogo_img_exists, true, "Reset Password Page Brand Logo Not Displayed")
    }


};