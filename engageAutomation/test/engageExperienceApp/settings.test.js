"use strict";
var settingsPage = require('../../pages/engageExperienceApp/settings.page.js');
var appShellPage = require('../../pages/engageExperienceApp/appShell.page.js');
var appShell = require('./appShell.test.js');
var snackBarTest = require('./common.test.js');

var sts;
module.exports = {

    //Validate that Profile tab is selected by default when settings page is launched
    ENG_SETT_TC_1: function(testdata) {
        sts = settingsPage.isInitialized()
        //console.log(sts)
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.selectedTab, testdata.tabList[0], "Settings Page Profile Tab Not Selected: ")

    },

    //Validate that clicking on Profile tab launches Profile page
    ENG_SETT_TC_2: function(testdata) {
        sts = appShellPage.selectTab(testdata[0].tabList[0])
        assertion.assertEqual(sts, true, "Profile Tab Not Clicked: ")

        sts = settingsPage.getProfileTabData()
        //console.log(sts)
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageHeading, testdata[0].Profile.pageHeading, "Profile Page Heading Mismatch: ")
        assertion.assertEqual(sts.email_input, testdata[1].email, "Profile Email Input Mismatch: ")
        assertion.assertEqual(sts.firstName_input, testdata[1].name.split(" ")[0], "Profile firstName Mismatch: ")
        assertion.assertEqual(sts.lastName_input, testdata[1].name.split(" ")[1], "Profile lastName Mismatch: ")
    },

    //Validate that clicking on Password tab launches Password page
    ENG_SETT_TC_3: function(testdata) {
        sts = appShellPage.selectTab(testdata.tabList[1])
        assertion.assertEqual(sts, true, "Password Tab Not Clicked: ")

        sts = settingsPage.getPasswordTabData()
        //console.log(sts)
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageHeading, testdata.Password.pageHeading, "Password Tab Page Heading Mismatch: ")
        assertion.assertEqual(sts.currentPassword_input, '', "Password Tab Current Password Mismatch: ")
        assertion.assertEqual(sts.password_input, '', "Password Tab New Password Mismatch: ")
        assertion.assertEqual(sts.confirmPassword_input, '', "Password Tab Confirm Password Mismatch: ")
        assertion.assertEqual(sts.changePassword_button, testdata.Password.changePassword_button, "Password Tab Update Settings Button Mismatch: ")

    },

    //Validate that clicking on Accessibility tab launches Accessibility pagee
    ENG_SETT_TC_4: function(testdata) {
        sts = appShellPage.selectTab(testdata.tabList[2])
        assertion.assertEqual(sts, true, "Password Tab Not Clicked: ")

        sts = settingsPage.getAccessibilityTabData()
        //console.log(sts)
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageHeading, testdata.Accessibility.pageHeading, "Accessibility Tab Page Heading Mismatch: ")
        assertion.assertEqual(sts.reset_button, testdata.Accessibility.reset_button, "Accessibility Tab Reset Button Mismatch: ")

    },

    //Validate the content of Profile tab
    ENG_SETT_TC_5: function(testdata) {
        sts = settingsPage.getProfileTabData()
        //console.log(sts)
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.email_label, testdata.email_label, "Profile Email Label Mismatch: ")
        assertion.assertEqual(sts.firstName_label, testdata.firstName_label, "Profile firstName label Mismatch: ")
        assertion.assertEqual(sts.lastName_label, testdata.lastName_label, "Profile lastName label Mismatch: ")
        assertion.assertEqual(sts.country_label, testdata.country_label, "Profile country label Mismatch: ")
        assertion.assertEqual(sts.country_input_placeholder, testdata.country_input_placeholder, "Profile country input placeholder Mismatch: ")
        assertion.assertEqual(sts.changeProfile_button, testdata.changeProfile_button, "Profile changeProfile button Mismatch: ")

    },

    //Validate the content of Password tab
    ENG_SETT_TC_6: function(testdata) {
        sts = settingsPage.getPasswordTabData()
        //console.log(sts)
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.currentPassword_label, testdata.currentPassword_label, "Password Current Password label Mismatch: ")
        assertion.assertEqual(sts.togglepasswordvisibility, true, "Password toggle password visibility Not displayed: ")
        assertion.assertEqual(sts.password_label, testdata.newPassword_label, "Password New Password label Mismatch:")
        assertion.assertEqual(sts.confirmPassword_label, testdata.confirmPassword_label, "Password confirmPassword label Mismatch:")
        assertion.assertEqual(sts.newPasswordRules_text, testdata.newPasswordRules_text, "Password newPasswordRules text Mismatch:")
        assertion.assertEqual(sts.changePassword_button, testdata.changePassword_button, "Password changePassword button Mismatch:")

    },

    //Validate the content of Accessibility tab
    ENG_SETT_TC_7: function(testdata) {
        sts = settingsPage.getAccessibilityTabData()
        //console.log(sts)
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.reset_button, testdata.reset_button, "Accessibility Tab reset button Mismatch: ")
        assertion.assertEqual(sts.accessbility_button, testdata.accessbility_button, "Accessibility Tab accessbility button Mismatch: ")
        assertion.assertEqual(sts.fontSize_text, testdata.fontSize_text, "Accessibility Tab fontSize text Mismatch: ")
        assertion.assertEqual(sts.lineSpace_text, testdata.lineSpace_text, "Accessibility Tab lineSpace text Mismatch: ")
        assertion.assertEqual(sts.samplePara_text, testdata.samplePara_text, "Accessibility Tab samplePara text Mismatch: ")
        assertion.assertEqual(sts.sampleHeader_text, testdata.sampleHeader_text, "Accessibility Tab sampleHeader text Mismatch: ")

    },

    //Validate that email ID textbox is not editable
    ENG_SETT_TC_8: function(testdata) {
        sts = settingsPage.getProfileTabData()
        //console.log(sts)
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.email_input_readOnly, 'true' , "Profile Tab Email ID textbox Editable: ")
    },

    //Validate that user can modify the First name.
    ENG_SETT_TC_9: function(testdata) {
        sts = settingsPage.setFirstName(testdata[0].name.split(" ")[0])
        assertion.assertEqual(sts, true, "Fisrt Name not Entered: ")

        sts = settingsPage.clickUpdateSettingsProfile()
        assertion.assertEqual(sts, true, "Update Settings Not Clicked: ")

        sts = snackBarTest.get_Snackbar_Message_Text();
        assertion.assertEqual(sts, testdata[1].update, "Snackbar Messsage Mismatch: ")

        sts = settingsPage.getProfileTabData()
        assertion.assertEqual(sts.firstName_input, testdata[0].name.split(" ")[0], "Profile firstName Mismatch: ")
    },

    //Validate that user can modify the Last name
    ENG_SETT_TC_10: function(testdata) {
        sts = settingsPage.setLastName(testdata[0].name.split(" ")[1])
        assertion.assertEqual(sts, true, "Last Name not Entered: ")

        sts = settingsPage.clickUpdateSettingsProfile()
        assertion.assertEqual(sts, true, "Update Settings Not Clicked: ")

        sts = snackBarTest.get_Snackbar_Message_Text();
        assertion.assertEqual(sts, testdata[1].update, "Snackbar Messsage Mismatch: ")

        sts = settingsPage.getProfileTabData()
        assertion.assertEqual(sts.lastName_input, testdata[0].name.split(" ")[1], "Profile LastName Mismatch: ")
    },

    //Validate that user can select country from the drop down suggestions
    ENG_SETT_TC_11: function(testdata) {
        sts = settingsPage.setCountry(testdata[0].country)
        assertion.assertEqual(sts, true, "Country Not Selected: ")

        sts = settingsPage.clickUpdateSettingsProfile()
        assertion.assertEqual(sts, true, "Update Settings Not Clicked: ")

        sts = snackBarTest.get_Snackbar_Message_Text();
        assertion.assertEqual(sts, testdata[1].update, "Snackbar Messsage Mismatch: ")

        sts = settingsPage.getProfileTabData()
        assertion.assertEqual(sts.country_input_value, testdata[0].country, "Profile Country Name Mismatch: ")
    },

    //Validate that clicking on cross button clears the country name from the text box
    ENG_SETT_TC_12: function(testdata) {
        sts = settingsPage.clickClose()
        //console.log(sts)
        assertion.assertEqual(sts.country_input_value, null , "Profile Country Mismatch: ")

        sts = settingsPage.clickUpdateSettingsProfile()
        assertion.assertEqual(sts, true, "Update Settings Not Clicked: ")

        sts = snackBarTest.get_Snackbar_Message_Text();
        assertion.assertEqual(sts, testdata.update, "Snackbar Messsage Mismatch: ")
    },

    //Validate the error message if First name is left blank
    ENG_SETT_TC_13: function(testdata) {
        sts = settingsPage.setFirstName("")
        assertion.assertEqual(sts, true, "First Name not Entered: ")

        sts = settingsPage.clickUpdateSettingsProfile()
        assertion.assertEqual(sts, true, "Update Settings Not Clicked: ")

        sts = settingsPage.getErrorMessages()
        assertion.assertEqual(sts.firstNameError_text, testdata.firstNameError_text, "FirstName Error Mismatch: ")
    },

    //Validate the error message if Last name is left blank
    ENG_SETT_TC_14: function(testdata) {
        sts = settingsPage.setLastName("")
        assertion.assertEqual(sts, true, "First Name not Entered: ")

        sts = settingsPage.clickUpdateSettingsProfile()
        assertion.assertEqual(sts, true, "Update Settings Not Clicked: ")

        sts = settingsPage.getErrorMessages()
        assertion.assertEqual(sts.lastNameError_text, testdata.lastNameError_text, "Last Name Error Mismatch: ")
    },

    //Validate that user can update the Password
    ENG_SETT_TC_15: function(testdata) {
        sts = settingsPage.setCurrentPassword(testdata[0].password)
        assertion.assertEqual(sts, true, "current Password not Entered: ")

        sts = settingsPage.setNewPassword(testdata[1].password)
        assertion.assertEqual(sts, true, "New Password not Entered: ")

        sts = settingsPage.setConfirmPassword(testdata[1].password)
        assertion.assertEqual(sts, true, "Confirm Password not Entered: ")

        sts = settingsPage.clickUpdateSettingsPassword()
        assertion.assertEqual(sts, true, "Update Settings Not Clicked: ")

        sts = snackBarTest.get_Snackbar_Message_Text();
        assertion.assertEqual(sts, testdata[1].update, "Snackbar Messsage Mismatch: ")
    },

    //Validate the error messages if all Password textboxes are left blank
    ENG_SETT_TC_16: function(testdata) {
        sts = settingsPage.clickUpdateSettingsPassword()
        assertion.assertEqual(sts, true, "Password Not Updated")

        sts = settingsPage.getErrorMessages()
        assertion.assertEqual(sts.currentPasswordError_text, testdata.currentPasswordError_text, "Current Password Error Mismatch: ")
        assertion.assertEqual(sts.newPasswordError_text, testdata.newPasswordError_text, "New Password Error Mismatch: ")
        assertion.assertEqual(sts.confirmPasswordError_text, testdata.confirmPasswordError_text, "Confirm Password Error Mismatch: ")
    },

    //Validate the message if Current Password is incorrect
    ENG_SETT_TC_17: function(testdata) {
        sts = settingsPage.setCurrentPassword(testdata[0].password.toUpperCase())
        assertion.assertEqual(sts, true, "current Password not Entered: ")

        sts = settingsPage.setNewPassword(testdata[0].password)
        assertion.assertEqual(sts, true, "New Password not Entered: ")

        sts = settingsPage.setConfirmPassword(testdata[0].password)
        assertion.assertEqual(sts, true, "Confirm Password not Entered: ")

        sts = settingsPage.clickUpdateSettingsPassword()
        assertion.assertEqual(sts, true, "Update Settings Not Clicked: ")

        sts = snackBarTest.get_Snackbar_Message_Text();
        assertion.assertEqual(sts, testdata[1].incorrectPassword, "Snackbar Messsage Mismatch: ")

    },

    //Validate the error message if New Password and Confirm Passwords do not match
    ENG_SETT_TC_18: function(testdata) {
        sts = settingsPage.setCurrentPassword(testdata[0].password)
        assertion.assertEqual(sts, true, "current Password not Entered: ")

        sts = settingsPage.setNewPassword(testdata[0].password)
        assertion.assertEqual(sts, true, "New Password not Entered: ")

        sts = settingsPage.setConfirmPassword(testdata[0].password.toUpperCase())
        assertion.assertEqual(sts, true, "Confirm Password not Entered: ")

        sts = settingsPage.clickUpdateSettingsPassword()
        assertion.assertEqual(sts, true, "Update Settings Not Clicked")

        sts = settingsPage.getErrorMessages()
        assertion.assertEqual(sts.confirmPasswordError_text, testdata[1].confirmPasswordError_text, "Confirm Password Error Mismatch: ")
    }
};