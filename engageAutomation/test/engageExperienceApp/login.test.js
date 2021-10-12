"use strict";
const landingPage = require('../../pages/engageExperienceApp/landing.page.js');
var loginPage = require('../../pages/engageExperienceApp/login.page.js');
var signupPage = require('../../pages/engageExperienceApp/signup.page.js');
var createAccountPage = require('../../pages/engageExperienceApp/createAccountPage.page.js')
var verifyEmailPage = require('../../pages/engageExperienceApp/verifyEmailPage.page.js')
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
    },

    //************Sign up*******************//

    //Validate Content on Sign Up Page in default language
    ENG_IDEN_TC_49 : function(testdata){
        sts = signupPage.signUpPage_Data();
        
        assertion.assertEqual(sts.headingText, testdata.headingText, "SignUp page headingText Mismatch")
        assertion.assertEqual(sts.subTitleText, testdata.subTitleText, "SignUp page subTitleText Mismatch")
        assertion.assertEqual(sts.email_label, testdata.email_label, "SignUp page email_label Mismatch")
        assertion.assertEqual(sts.email_input_placeholder, testdata.email_input_placeholder, "SignUp page email_input_placeholder Mismatch")
        assertion.assertEqual(sts.signUpEmailPage_btn, testdata.signUpEmailPage_btn, "SignUp page signUpEmailPage_btn Mismatch")
        assertion.assertEqual(sts.continueWith_text, testdata.continueWith_text, "SignUp page continueWith_text Mismatch")
        assertion.assertEqual(sts.haveAnAccount_text, testdata.haveAnAccount_text, "SignUp page haveAnAccount_text Mismatch")
        assertion.assertEqual(sts.login_btn, testdata.login_btn, "SignUp page haveAnAccount_text Mismatch")
    },

    //Validate Content on Sign Up Page in Spanish language
    ENG_IDEN_TC_50 : function(testdata){
        sts = signupPage.signUpPage_Data();
        
        assertion.assertEqual(sts.headingText, testdata.headingText, "SignUp page headingText Mismatch")
        assertion.assertEqual(sts.subTitleText, testdata.subTitleText, "SignUp page subTitleText Mismatch")
        assertion.assertEqual(sts.email_label, testdata.email_label, "SignUp page email_label Mismatch")
        assertion.assertEqual(sts.email_input_placeholder, testdata.email_input_placeholder, "SignUp page email_input_placeholder Mismatch")
        assertion.assertEqual(sts.signUpEmailPage_btn, testdata.signUpEmailPage_btn, "SignUp page signUpEmailPage_btn Mismatch")
        assertion.assertEqual(sts.continueWith_text, testdata.continueWith_text, "SignUp page continueWith_text Mismatch")
        assertion.assertEqual(sts.haveAnAccount_text, testdata.haveAnAccount_text, "SignUp page haveAnAccount_text Mismatch")
        assertion.assertEqual(sts.login_btn, testdata.login_btn, "SignUp page haveAnAccount_text Mismatch")
    }

    //**************Create Account Page*******************//
    //Validate Enter Account Details page is launched if user enter valid Email ID and click Sign up
    ENG_IDEN_TC_57 : function(){
        sts = signupPage.click_signUp_btn()
        assertion.assertEqual(sts, true,"SignUp button Clicked")

        sts = createAccountPage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true,"Create Account Page Not Launched")
    },

    //Validate content on Create Account page
    ENG_IDEN_TC_64 : function(testdata){
        sts = createAccountPage.createAccountPage_Data()

        assertion.assertEqual(sts.headingText, testdata.headingText, "Create Account Page headingText Mismatch")
        assertion.assertEqual(sts.email_label, testdata.email_label, "Create Account Page email_label Mismatch")
        assertion.assertEqual(sts.email_input_placeholder, testdata.email_input_placeholder, "Create Account Page email_input_placeholder Mismatch")
        assertion.assertEqual(sts.password_label, testdata.password_label, "Create Account Page password_label Mismatch")
        assertion.assertEqual(sts.password_input_placeholder, testdata.password_input_placeholder, "Create Account Page password_input_placeholder Mismatch")
        assertion.assertEqual(sts.passwordRules_text, testdata.passwordRules_text, "Create Account Page passwordRules_text Mismatch")
        assertion.assertEqual(sts.confirmPassword_label, testdata.confirmPassword_label, "Create Account Page confirmPassword_label Mismatch")
        assertion.assertEqual(sts.confirmPassword_input_placeholder, testdata.confirmPassword_input_placeholder, "Create Account Page confirmPassword_input_placeholder Mismatch")
        assertion.assertEqual(sts.firstName_label, testdata.firstName_label, "Create Account Page firstName_label Mismatch")
        assertion.assertEqual(sts.lastName_label, testdata.lastName_label, "Create Account Page lastName_label Mismatch")
        assertion.assertEqual(sts.firstName_input_placeholder, testdata.firstName_input_placeholder, "Create Account Page firstName_input_placeholder Mismatch")
        assertion.assertEqual(sts.lastName_input_placeholder, testdata.lastName_input_placeholder, "Create Account Page lastName_input_placeholder Mismatch")
        assertion.assertEqual(sts.country_label, testdata.country_label, "Create Account Page country_label Mismatch")
        assertion.assertEqual(sts.createAccount_btn, testdata.createAccount_btn, "Create Account Page createAccount_btn Mismatch")
        assertion.assertEqual(sts.selectCountry, testdata.selectCountry, "Create Account Page selectCountry Mismatch")
        assertion.assertEqual(sts.country_input_placeholder, testdata.country_input_placeholder, "Create Account Page country_input_placeholder Mismatch")
        assertion.assertEqual(sts.country_input_placeholder, testdata.country_input_placeholder, "Create Account Page country_input_placeholder Mismatch")
       
    },

    //Validate the content on  Create Account page in Spanish Language
    ENG_IDEN_TC_65 : function(testdata){
        sts = createAccountPage.createAccountPage_Data()

        assertion.assertEqual(sts.headingText, testdata.headingText, "Create Account Page headingText Mismatch")
        assertion.assertEqual(sts.email_label, testdata.email_label, "Create Account Page email_label Mismatch")
        assertion.assertEqual(sts.email_input_placeholder, testdata.email_input_placeholder, "Create Account Page email_input_placeholder Mismatch")
        assertion.assertEqual(sts.password_label, testdata.password_label, "Create Account Page password_label Mismatch")
        assertion.assertEqual(sts.password_input_placeholder, testdata.password_input_placeholder, "Create Account Page password_input_placeholder Mismatch")
        assertion.assertEqual(sts.passwordRules_text, testdata.passwordRules_text, "Create Account Page passwordRules_text Mismatch")
        assertion.assertEqual(sts.confirmPassword_label, testdata.confirmPassword_label, "Create Account Page confirmPassword_label Mismatch")
        assertion.assertEqual(sts.confirmPassword_input_placeholder, testdata.confirmPassword_input_placeholder, "Create Account Page confirmPassword_input_placeholder Mismatch")
        assertion.assertEqual(sts.firstName_label, testdata.firstName_label, "Create Account Page firstName_label Mismatch")
        assertion.assertEqual(sts.lastName_label, testdata.lastName_label, "Create Account Page lastName_label Mismatch")
        assertion.assertEqual(sts.firstName_input_placeholder, testdata.firstName_input_placeholder, "Create Account Page firstName_input_placeholder Mismatch")
        assertion.assertEqual(sts.lastName_input_placeholder, testdata.lastName_input_placeholder, "Create Account Page lastName_input_placeholder Mismatch")
        assertion.assertEqual(sts.country_label, testdata.country_label, "Create Account Page country_label Mismatch")
        assertion.assertEqual(sts.createAccount_btn, testdata.createAccount_btn, "Create Account Page createAccount_btn Mismatch")
        assertion.assertEqual(sts.selectCountry, testdata.selectCountry, "Create Account Page selectCountry Mismatch")
        assertion.assertEqual(sts.country_input_placeholder, testdata.country_input_placeholder, "Create Account Page country_input_placeholder Mismatch")
        assertion.assertEqual(sts.country_input_placeholder, testdata.country_input_placeholder, "Create Account Page country_input_placeholder Mismatch")
       
    },

    //***************Verify Account************************/
    //Validate 'Verify Your Account' page is launched on clicking 'Create Account' on Account Details page
    ENG_IDEN_TC_76 : function(){
        sts = createAccountPage.click_createAccount_btn()
        assertion.assertEqual(sts, true,"Create Account button Clicked")

        sts = verifyEmailPage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true,"verifyEmailPage Not Launched")

    },

    //Validate the content on Verify Your Account page
    ENG_IDEN_TC_89 : function(testdata){
        sts = verifyEmailPage.verifyEmailPage_Data();
        assertion.assertEqual(sts.headingText, testdata.headingText,"Verify Your Account page headingText Mismatch")
        assertion.assertEqual(sts.subTitleText, testdata.subTitleText,"Verify Your Account page subTitleText Mismatch")
        assertion.assertEqual(sts.verificationcode_label, testdata.verificationcode_label,"Verify Your Account page verificationcode_label Mismatch")
        assertion.assertEqual(sts.verificationcode_input, testdata.verificationcode_input,"Verify Your Account page verificationcode_input Mismatch")
        assertion.assertEqual(sts.verifyEmail_btn, testdata.verifyEmail_btn,"Verify Your Account page verifyEmail_btn Mismatch")
        assertion.assertEqual(sts.resendCode_btn, testdata.resendCode_btn,"Verify Your Account page resendCode_btn Mismatch")
        assertion.assertEqual(sts.backToSignUp_btn, testdata.backToSignUp_btn,"Verify Your Account page backToSignUp_btn Mismatch")
    },

    //Validate the content on Verify Your Account page in Spanish Language
    ENG_IDEN_TC_90 : function(testdata){
        sts = verifyEmailPage.verifyEmailPage_Data();
        assertion.assertEqual(sts.headingText, testdata.headingText,"Verify Your Account page headingText Mismatch")
        assertion.assertEqual(sts.subTitleText, testdata.subTitleText,"Verify Your Account page subTitleText Mismatch")
        assertion.assertEqual(sts.verificationcode_label, testdata.verificationcode_label,"Verify Your Account page verificationcode_label Mismatch")
        assertion.assertEqual(sts.verificationcode_input, testdata.verificationcode_input,"Verify Your Account page verificationcode_input Mismatch")
        assertion.assertEqual(sts.verifyEmail_btn, testdata.verifyEmail_btn,"Verify Your Account page verifyEmail_btn Mismatch")
        assertion.assertEqual(sts.resendCode_btn, testdata.resendCode_btn,"Verify Your Account page resendCode_btn Mismatch")
        assertion.assertEqual(sts.backToSignUp_btn, testdata.backToSignUp_btn,"Verify Your Account page backToSignUp_btn Mismatch")
    }

   
};