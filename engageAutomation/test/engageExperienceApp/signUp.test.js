"use strict";
const signUpPage = require('../../pages/engageExperienceApp/signUp.page.js');
var sts;

module.exports = {
    //Validate the content of signup page, where user enter the email details
    ENG_SNUP_TC_1: async function (testdata) {
        sts = await signUpPage.getData_createAccountPage();
        await assertion.assertEqual(sts.createAccountTitleTxt, testdata.createAccountTitleTxt, "createAccountTitleTxt mismatch");
        await assertion.assertEqual(sts.createAccountSubTitleTxt, testdata.createAccountSubTitleTxt, "createAccountSubTitleTxt mismatch");
        await assertion.assertEqual(sts.emailLbl, testdata.emailLbl, "emailLbl mismatch");
        await assertion.assertEqual(sts.signUpBtn, testdata.signUpBtn, "signUpBtn text mismatch");
        await assertion.assertEqual(sts.continueWithTxt, testdata.continueWithTxt, "continueWithTxt mismatch");
        await assertion.assertEqual(sts.googleBtn, testdata.googleBtn, "googleBtn text mismatch");
        await assertion.assertEqual(sts.facebookBtn, testdata.facebookBtn, "facebookBtn mismatch");
        await assertion.assertEqual(sts.haveAnAccountTxt, testdata.haveAnAccountTxt, "haveAnAccountTxt mismatch");
        await assertion.assertEqual(sts.logInBtn, testdata.logInBtn, "logInBtn text mismatch");
        await assertion.assertEqual(sts.emailErrorTxt, null, "emailErrorTxt mismatch");
        await assertion.assertEqual(sts.emailTextbox, '', "emailTextbox text mismatch");
    },

    //Validate the error message when no email is entered
    ENG_SNUP_TC_2: async function (testdata) {
        sts = await signUpPage.click_signUpBtn();
        await assertion.assertEqual(sts, true, "page status mismatch");
        sts = await signUpPage.getData_createAccountPage();
        await assertion.assert(sts.emailErrorTxt, testdata.emailErrorTxt, "emailErrorTxt mismatch");
    },

    //Validate the error message when wrong email format is added
    ENG_SNUP_TC_3: async function (testdata) {
        sts = await signUpPage.set_emailTextbox(testdata[0].email);
        await assertion.assertEqual(sts, true, "email is not entered in textbox");
        sts = await signUpPage.click_signUpBtn();
        await assertion.assertEqual(sts, true, "page status mismatch");
        sts = await signUpPage.getData_createAccountPage();
        await assertion.assert(sts.emailErrorTxt, testdata.emailErrorTxt, "emailErrorTxt mismatch");
    },

    //Validate the error message when existing user email id is entered
    ENG_SNUP_TC_4: async function (testdata) {
        sts = await signUpPage.set_emailTextbox(testdata[0].email);
        await assertion.assertEqual(sts, true, "email is not entered in textbox");
        sts = await signUpPage.click_signUpBtn();
        await assertion.assertEqual(sts, true, "page status mismatch");
        sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
        await assertion.assert(sts, testdata[1].userExistSnackBar, "Snackbar message mismatch: " + sts);
    },

    //Validate clicking on "Signup with Email" button with valid Email address
    ENG_SNUP_TC_5: async function (testdata) {
        sts = await signUpPage.set_emailTextbox(testdata.email);
        await assertion.assertEqual(sts, true, "email is not entered in textbox");
        sts = await signUpPage.click_signUpBtn();
        await assertion.assertEqual(sts, true, "page status mismatch");
    },

    //Validate clicking on "Google" button for signup
    ENG_SNUP_TC_6: async function (testdata) {
        sts = await signUpPage.click_googleBtn();
        await assertion.assertEqual(sts, true, "page status mismatch");
        sts = await signUpPage.getData_googlePage();
        await assertion.assertEqual(sts.googlePageHeadingTxt, testdata.googlePageHeadingTxt, "googlePageHeadingTxt mimatch");
        await assertion.assertEqual(sts.googlePageSubHeadingTxt, testdata.googlePageSubHeadingTxt, "googlePageSubHeadingTxt mismatch");

    },

    //Validate clicking on "facebook" button for signup
    ENG_SNUP_TC_7: async function (testdata) {
        sts = await signUpPage.click_facebookBtn();
        await assertion.assertEqual(sts, true, "page status mismatch");
        sts = await signUpPage.getData_facebookPage();
        await assertion.assertEqual(sts.facebookPageHeadingTxt, testdata.facebookPageHeadingTxt, "facebookPageHeadingTxt mismatch");
    },

    //On signup page, Validate clicking on "logIn" button
    ENG_SNUP_TC_9: async function () {
        sts = await signUpPage.click_logInBtn();
        await assertion.assertEqual(sts.pageStatus, true, "page status mismatch");
    },

    //Validate the content of Role Selection page
    ENG_SNUP_TC_54: async function (testdata) {
        sts = await signUpPage.getData_roleSelectionPage();
        await assertion.assertEqual(sts.roleSelectionTitleTxt, testdata.roleSelectionTitleTxt, "roleSelectionTitleTxt mismatch");
        await assertion.assertEqual(sts.selectRoleTxt, testdata.selectRoleTxt, "selectRoleTxt mismatch");
        await assertion.assertEqual(sts.studentRoleBtn, testdata.studentRoleBtn, "studentRoleBtn text mismatch");
        await assertion.assertEqual(sts.teacherRoleBtn, testdata.teacherRoleBtn, "teacherRoleBtn text mismatch");
        await assertion.assertEqual(sts.continueBtn, testdata.continueBtn, "continueBtn text mismatch");
        await assertion.assertEqual(sts.backToSignInBtn, testdata.backToSignInBtn, "backToSignInBtn text mismatch");
    },

    //Validate the  selecting "I'm teacher" on Role Selection Page
    ENG_SNUP_TC_10: async function () {
        sts = await signUpPage.click_teacherRoleBtn();
        await assertion.assertEqual(sts, true, "teacher role button not clicked");
    },

    //Validate the selecting "I'm Student" on Role Selection Page
    ENG_SNUP_TC_11: async function () {
        sts = await signUpPage.click_studentRoleBtn();
        await assertion.assertEqual(sts, true, "student role button not clicked");
    },

    //Validate the click of continue button after selecting teacher on Role Selection Page
    ENG_SNUP_TC_12: async function () {
        sts = await signUpPage.click_continueBtn();
        await assertion.assertEqual(sts, true, "continue button not clicked");
    },

    //Validate the click of continue button after selecting student on Role Selection Page
    ENG_SNUP_TC_13: async function () {
        sts = await signUpPage.click_continueBtn();
        await assertion.assertEqual(sts, true, "continue button not clicked");
    },

    //Validate the error message without selecting any teacher/student
    ENG_SNUP_TC_14: async function (testdata) {
        sts = await signUpPage.click_continueBtn();
        await assertion.assertEqual(sts, true, "continue button not clicked");
        sts = await signUpPage.getData_roleSelectionPage();
        await assertion.assertEqual(sts.roleSelectionErrorTxt, testdata.roleSelectionErrorTxt, "roleSelectionErrorTxt mismatch")
    },

    //Validate the Click on "Back to Sign in" on Role Selection Page
    ENG_SNUP_TC_16: async function () {
        sts = await signUpPage.click_backToSignInBtn();
        await assertion.assertEqual(sts, true, "Back button not clicked");
    },

    //Validate the application content of "Account Details" page
    ENG_SNUP_TC_17: async function (testdata) {
        sts = await signUpPage.getData_accountDetailsPage();
        await assertion.assertEqual(sts.accountDetailsTitleTxt, testdata.accountDetailsTitleTxt, "accountDetailsTitleTxt mismatch");
        await assertion.assertEqual(sts.passwordHelperTxt, testdata.passwordHelperTxt, "passwordHelperTxt mismatch");
        await assertion.assertEqual(sts.passwordLbl, testdata.passwordLbl, "passwordLbl mismatch");
        await assertion.assertEqual(sts.confirmPasswordLbl, testdata.confirmPasswordLbl, "confirmPasswordLbl mismatch");
        await assertion.assertEqual(sts.firstNameLbl, testdata.firstNameLbl, "firstNameLbl mismatch");
        await assertion.assertEqual(sts.lastNameLbl, testdata.lastNameLbl, "lastNameLbl mismatch");
        await assertion.assertEqual(sts.countryLbl, testdata.countryLbl, "countryLbl mismatch");
        await assertion.assertEqual(sts.policyLineTxt, testdata.policyLineTxt, "policyLineTxt mismatch");
        await assertion.assertEqual(sts.createAccountBtn, testdata.createAccountBtn, "createAccountBtn text mismatch");
        await assertion.assertEqual(sts.backToRoleSelectionBtn, testdata.backToRoleSelectionBtn, "backToRoleSelectionBtn text mismatch");
        await assertion.assertEqual(sts.privacyPoliceLink, testdata.privacyPoliceLink, "privacyPoliceLink text mismatch");
        await assertion.assertEqual(sts.termsOfUseLink, testdata.termsOfUseLink, "termsOfUseLink text mismatch");
    },

    //Validate the email id on "Account Details" page
    ENG_SNUP_TC_19: async function (testdata) {
        sts = await signUpPage.getData_accountDetailsPage();
        await assertion.assertEqual(sts.emailTxt, testdata.email, "emailTxt mismatch")
    },

    //Validate the error message of each textbox on Account details page when each textbox is blank
    ENG_SNUP_TC_24: async function (testdata) {
        sts = await signUpPage.click_createAccountBtn();
        await assertion.assertEqual(sts, true, "create button not clicked");
        sts = await signUpPage.getData_accountDetailsPage();
        await assertion.assertEqual(sts.passwordErrorTxt, testdata.passwordErrorTxt, "passwordErrorTxt mismatch");
        await assertion.assertEqual(sts.confirmPasswordErrorTxt, testdata.confirmPasswordErrorTxt, "confirmPasswordErrorTxt mismatch");
        await assertion.assertEqual(sts.firstNameErrorTxt, testdata.firstNameErrorTxt, "firstNameErrorTxt mismatch");
        await assertion.assertEqual(sts.lastNameErrorTxt, testdata.lastNameErrorTxt, "lastNameErrorTxt mismatch");
        await assertion.assertEqual(sts.countryErrorTxt, testdata.countryErrorTxt, "countryErrorTxt mismatch");
        await assertion.assertEqual(sts.policyLineErrorTxt, testdata.policyLineErrorTxt, "policyLineErrorTxt mismatch");

    },

    //Validate the error message of password, When Password have less than 8 character (other condition fulfill)
    ENG_SNUP_TC_20: async function (testdata) {
        sts = await signUpPage.set_passwordTextbox(testdata[0].partialPassword);
        await assertion.assertEqual(sts, true, "data not entered in textbox");
        sts = await signUpPage.set_confirmPasswordTextbox(testdata[0].partialPassword);
        await assertion.assertEqual(sts, true, "data not entered in textbox");
        sts = await signUpPage.click_createAccountBtn();
        await assertion.assertEqual(sts, true, "create Account button not clicked");
        sts = await signUpPage.getData_accountDetailsPage();
        await assertion.assertEqual(sts.passwordErrorTxt, testdata[1].passwordErrorTxt, "passwordErrorTxt mismatch");
        await assertion.assertEqual(sts.confirmPasswordErrorTxt, null, "confirmPasswordErrorTxt mismatch");

    },

    //Validate the error message of password, When Password have all upper case character (other condition fulfill)
    ENG_SNUP_TC_21: async function (testdata) {
        sts = await signUpPage.set_passwordTextbox(testdata[0].upperCasePassword);
        await assertion.assertEqual(sts, true, "data not entered in textbox");
        sts = await signUpPage.set_confirmPasswordTextbox(testdata[0].upperCasePassword);
        await assertion.assertEqual(sts, true, "data not entered in textbox");
        sts = await signUpPage.click_createAccountBtn();
        await assertion.assertEqual(sts, true, "create Account button not clicked");
        sts = await signUpPage.getData_accountDetailsPage();
        await assertion.assertEqual(sts.passwordErrorTxt, testdata[1].passwordErrorTxt, "passwordErrorTxt mismatch");
        await assertion.assertEqual(sts.confirmPasswordErrorTxt, null, "confirmPasswordErrorTxt mismatch");


    },

    //Validate the error message of password, When Password have all lower case character (other condition fulfill)
    ENG_SNUP_TC_22: async function (testdata) {
        sts = await signUpPage.set_passwordTextbox(testdata[0].lowercasePassword);
        await assertion.assertEqual(sts, true, "data not entered in textbox");
        sts = await signUpPage.set_confirmPasswordTextbox(testdata[0].lowercasePassword);
        await assertion.assertEqual(sts, true, "data not entered in textbox");
        sts = await signUpPage.click_createAccountBtn();
        await assertion.assertEqual(sts, true, "create Account button not clicked");
        sts = await signUpPage.getData_accountDetailsPage();
        await assertion.assertEqual(sts.passwordErrorTxt, testdata[1].passwordErrorTxt, "passwordErrorTxt mismatch");
        await assertion.assertEqual(sts.confirmPasswordErrorTxt, null, "confirmPasswordErrorTxt mismatch");
    },

    //Validate the error message of password, When Password have not any special character (other condition fulfill)
    ENG_SNUP_TC_23: async function (testdata) {
        sts = await signUpPage.set_passwordTextbox(testdata[0].withoutSpecialCharacterPassword);
        await assertion.assertEqual(sts, true, "data not entered in textbox");
        sts = await signUpPage.set_confirmPasswordTextbox(testdata[0].withoutSpecialCharacterPassword);
        await assertion.assertEqual(sts, true, "data not entered in textbox");
        sts = await signUpPage.click_createAccountBtn();
        await assertion.assertEqual(sts, true, "create Account button not clicked");
        sts = await signUpPage.getData_accountDetailsPage();
        await assertion.assertEqual(sts.passwordErrorTxt, testdata[1].passwordErrorTxt, "passwordErrorTxt mismatch");
        await assertion.assertEqual(sts.confirmPasswordErrorTxt, null, "confirmPasswordErrorTxt mismatch");
    },

    //Validate the error message when password  is not same with confirm passord
    ENG_SNUP_TC_25: async function (testdata) {
        sts = await signUpPage.set_passwordTextbox(testdata[0].password);
        await assertion.assertEqual(sts, true, "data not entered in textbox");
        sts = await signUpPage.set_confirmPasswordTextbox(testdata[1].incorrectConfirmPassword);
        await assertion.assertEqual(sts, true, "data not entered in textbox");
        sts = await signUpPage.click_createAccountBtn();
        await assertion.assertEqual(sts, true, "create Account button not clicked");
        sts = await signUpPage.getData_accountDetailsPage();
        await assertion.assertEqual(sts.passwordErrorTxt, null, "passwordErrorTxt mismatch");
        await assertion.assertEqual(sts.confirmPasswordErrorTxt, testdata[2].confirmPasswordErrorTxt, "passwordErrorTxt mismatch");

    },

    //Validate the click on eye button of password after entering the password
    ENG_SNUP_TC_31: async function (testdata) {
        sts = await signUpPage.set_passwordTextbox(testdata.password);
        await assertion.assertEqual(sts, true, "data not entered in textbox");
        sts = await signUpPage.click_passwordToggleBtn();
        await assertion.assertEqual(sts, 'text', "password type mismatch");
    },

    //Validate the click on eye button of Confirm password before entering the password
    ENG_SNUP_TC_32: async function (testdata) {
        sts = await signUpPage.click_confirmPasswordToggleBtn();
        await assertion.assertEqual(sts, 'text', "password type mismatch");
        sts = await signUpPage.set_confirmPasswordTextbox(testdata.password);
        await assertion.assertEqual(sts, true, "data not entered in textbox");
    },

    //Validate the country is selected from dropdown
    ENG_SNUP_TC_37: async function (testdata) {
        sts = await signUpPage.set_countryTextbox(testdata.countryName);
        await assertion.assertEqual(sts, true, "data not entered in textbox");
        sts = await signUpPage.click_countryName(testdata.countryName);
        await assertion.assertEqual(sts, true, "country not clicked");
        sts = await signUpPage.getData_accountDetailsPage();
        await assertion.assertEqual(sts.countryTextbox, testdata.countryName, "countryName mismatch");

    },

    //Validate the click on "back Role Selection" on Account Details Page
    ENG_SNUP_TC_39: async function () {
        sts = await signUpPage.click_backToRoleSelectionBtn();
        await assertion.assertEqual(sts, true, "Back button not clicked");
    },

    //Validate clicking on Privacy Policy link launch the pop up with Privacy Policy tab selected
    ENG_SNUP_TC_55: async function () {
        sts = await signUpPage.click_privacyPoliceLink();
        await assertion.assertEqual(sts, 'true', "privacy tab not selected");
    },

    //Validate clicking on Terms of use link launch the pop up with Privacy Policy tab selected
    ENG_SNUP_TC_56: async function () {
        sts = await signUpPage.click_termsOfUseLink();
        await assertion.assertEqual(sts, 'true', "terms of use tab not selected");
    },

    //Validate clicking on I Agree button on policy page select the policy checkbox on Account Details page
    ENG_SNUP_TC_57: async function () {
        sts = await signUpPage.click_policyAgreeBtn();
        await assertion.assertEqual(sts, true, "button not clicked");
        sts = await signUpPage.click_createAccountBtn();
        await assertion.assertEqual(sts, true, "create Account button not clicked");
        sts = await signUpPage.getData_accountDetailsPage();
        await assertion.assertEqual(sts.policyLineErrorTxt, null, 'policyLineErrorTxt mismatch');
    },

    //Validate clicking on Cancel button on policy page do not select the policy checkbox on Account Details page
    ENG_SNUP_TC_58: async function (testdata) {
        sts = await signUpPage.click_policyCancelBtn();
        await assertion.assertEqual(sts, true, "button not clicked");
        sts = await signUpPage.click_createAccountBtn();
        await assertion.assertEqual(sts, true, "create Account button not clicked");
        sts = await signUpPage.getData_accountDetailsPage();
        await assertion.assertEqual(sts.policyLineErrorTxt, testdata.policyLineErrorTxt, 'policyLineErrorTxt mismatch');
    },

};