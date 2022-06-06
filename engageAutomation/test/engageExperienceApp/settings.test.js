"use strict";
var settingsPage = require('../../pages/engageExperienceApp/settings.page.js');
var appShellPage = require('../../pages/engageExperienceApp/appShell.page.js');
var snackBarTest = require('./common.test.js');
var appShellTest = require('./appShell.test.js');
var billingPage = require('../../pages/engageExperienceApp/billing.page.js');
var sts;

module.exports = {

    //Validate that Profile tab is selected by default when settings page is launched
    ENG_SETT_TC_1: async function (testdata) {
        sts = await settingsPage.getSettingsPageData()
        //console.log(sts)
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.selectedTab, testdata.tabList[0], "Settings Page Profile Tab Not Selected: ")
    },

    //Validate that clicking on Profile tab launches Profile page
    ENG_SETT_TC_2: async function (testdata) {
        sts = await appShellPage.selectTab(testdata[0].tabList[0])
        await assertion.assertEqual(sts, true, "Profile Tab Not Clicked: ")

        sts = await settingsPage.getSettingsPageData()
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.selectedTab, testdata[0].tabList[0], "Settings Page Profile Tab Not Selected: ")

        sts = await settingsPage.getProfileTabData()
        //console.log(sts)
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata[0].Profile.pageHeading, "Profile Page Heading Mismatch: ")
        await assertion.assertEqual(sts.email_input, testdata[1].email, "Profile Email Input Mismatch: ")
        await assertion.assertEqual(sts.firstName_input, testdata[1].name.split(" ")[0], "Profile firstName Mismatch: ")
        await assertion.assertEqual(sts.lastName_input, testdata[1].name.split(" ")[1], "Profile lastName Mismatch: ")
    },

    //Validate that clicking on Password tab launches Password page
    ENG_SETT_TC_3: async function (testdata) {
        sts = await appShellPage.selectTab(testdata.tabList[1])
        await assertion.assertEqual(sts, true, "Password Tab Not Clicked: ")

        sts = await settingsPage.getSettingsPageData()
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.selectedTab, testdata.tabList[1], "Settings Page Password Tab Not Selected: ")

        sts = await settingsPage.getPasswordTabData()
        //console.log(sts)
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata.Password.pageHeading, "Password Tab Page Heading Mismatch: ")
        await assertion.assertEqual(sts.currentPassword_input, '', "Password Tab Current Password Mismatch: ")
        await assertion.assertEqual(sts.password_input, '', "Password Tab New Password Mismatch: ")
        await assertion.assertEqual(sts.confirmPassword_input, '', "Password Tab Confirm Password Mismatch: ")
        await assertion.assertEqual(sts.changePassword_button, testdata.Password.changePassword_button, "Password Tab Update Settings Button Mismatch: ")
    },

    //Validate that clicking on Accessibility tab launches Accessibility pagee
    ENG_SETT_TC_4: async function (testdata) {
        sts = await appShellPage.selectTab(testdata.tabList[2])
        await assertion.assertEqual(sts, true, "Password Tab Not Clicked: ")

        sts = await settingsPage.getSettingsPageData()
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.selectedTab, testdata.tabList[2], "Settings Page Accessibility Tab Not Selected: ")

        sts = await settingsPage.getAccessibilityTabData()
        //console.log(sts)
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata.Accessibility.pageHeading, "Accessibility Tab Page Heading Mismatch: ")
        await assertion.assertEqual(sts.resetButton, testdata.Accessibility.reset_button, "Accessibility Tab Reset Button Mismatch: ")
    },

    //Validate the content of Profile tab
    ENG_SETT_TC_5: async function (testdata) {
        sts = await settingsPage.getProfileTabData()
        //console.log(sts)
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.email_label, testdata.email_label, "Profile Email Label Mismatch: ")
        await assertion.assertEqual(sts.firstName_label, testdata.firstName_label, "Profile firstName label Mismatch: ")
        await assertion.assertEqual(sts.lastName_label, testdata.lastName_label, "Profile lastName label Mismatch: ")
        await assertion.assertEqual(sts.country_label, testdata.country_label, "Profile country label Mismatch: ")
        await assertion.assertEqual(sts.country_input_placeholder, testdata.country_input_placeholder, "Profile country input placeholder Mismatch: ")
        await assertion.assertEqual(sts.changeProfile_button, testdata.changeProfile_button, "Profile changeProfile button Mismatch: ")
    },

    //Validate the content of Password tab
    ENG_SETT_TC_6: async function (testdata) {
        sts = await settingsPage.getPasswordTabData()
        //console.log(sts)
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.currentPassword_label, testdata.currentPassword_label, "Password Current Password label Mismatch: ")
        await assertion.assertEqual(sts.togglePassword_currentPassword, true, "Password toggle password visibility Not displayed: ")
        await assertion.assertEqual(sts.password_label, testdata.newPassword_label, "Password New Password label Mismatch:")
        await assertion.assertEqual(sts.confirmPassword_label, testdata.confirmPassword_label, "Password confirmPassword label Mismatch:")
        await assertion.assertEqual(sts.newPasswordRules_text, testdata.newPasswordRules_text, "Password newPasswordRules text Mismatch:")
        await assertion.assertEqual(sts.changePassword_button, testdata.changePassword_button, "Password changePassword button Mismatch:")
    },

    //Validate the content of Accessibility tab
    ENG_SETT_TC_7: async function (testdata) {
        sts = await settingsPage.getAccessibilityTabData()
        //console.log(sts)
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.resetButton, testdata.reset_button, "Accessibility Tab reset button Mismatch: ")
        await assertion.assertEqual(sts.applySettingsBtn, testdata.accessbility_button, "Accessibility Tab accessbility button Mismatch: ")
        await assertion.assertEqual(sts.fontSizeText, testdata.fontSize_text, "Accessibility Tab fontSize text Mismatch: ")
        await assertion.assertEqual(sts.lineSpaceText, testdata.lineSpace_text, "Accessibility Tab lineSpace text Mismatch: ")
        await assertion.assertEqual(sts.previewTextPara, testdata.samplePara_text, "Accessibility Tab samplePara text Mismatch: ")
        await assertion.assertEqual(sts.previewTextHeading, testdata.sampleHeader_text, "Accessibility Tab sampleHeader text Mismatch: ")
    },

    //Validate that email ID textbox is not editable
    ENG_SETT_TC_8: async function () {
        sts = await settingsPage.getProfileTabData()
        //console.log(sts)
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.email_input_readOnly, 'true', "Profile Tab Email ID textbox Editable: ")
    },

    //Validate that user can modify the First name.
    ENG_SETT_TC_9: async function (testdata) {
        sts = await settingsPage.setFirstName(testdata[0].name.split(" ")[0])
        await assertion.assertEqual(sts, true, "First Name not Entered: ")

        sts = await settingsPage.clickUpdateSettingsProfile()
        await assertion.assertEqual(sts, true, "Update Settings Not Clicked: ")

        sts = await snackBarTest.get_Snackbar_Message_Text();
        await assertion.assertEqual(sts, testdata[1].update, "Snackbar Messsage Mismatch: ")

        sts = await settingsPage.getProfileTabData()
        await assertion.assertEqual(sts.firstName_input, testdata[0].name.split(" ")[0], "Profile firstName Mismatch: ")
    },

    //Validate that user can modify the Last name
    ENG_SETT_TC_10: async function (testdata) {
        sts = await settingsPage.setLastName(testdata[0].name.split(" ")[1])
        await assertion.assertEqual(sts, true, "Last Name not Entered: ")

        sts = await settingsPage.clickUpdateSettingsProfile()
        await assertion.assertEqual(sts, true, "Update Settings Not Clicked: ")

        sts = await snackBarTest.get_Snackbar_Message_Text();
        await assertion.assertEqual(sts, testdata[1].update, "Snackbar Messsage Mismatch: ")

        sts = await settingsPage.getProfileTabData()
        await assertion.assertEqual(sts.lastName_input, testdata[0].name.split(" ")[1], "Profile LastName Mismatch: ")
    },

    //Validate that user can select country from the drop down suggestions
    ENG_SETT_TC_11: async function (testdata) {
        sts = await settingsPage.setCountry(testdata[0].country)
        await assertion.assertEqual(sts, true, "Country Not Selected: ")

        sts = await settingsPage.clickUpdateSettingsProfile()
        await assertion.assertEqual(sts, true, "Update Settings Not Clicked: ")

        sts = await snackBarTest.get_Snackbar_Message_Text();
        await assertion.assertEqual(sts, testdata[1].update, "Snackbar Messsage Mismatch: ")

        sts = await settingsPage.getProfileTabData()
        await assertion.assertEqual(sts.country_input_value, testdata[0].country, "Profile Country Name Mismatch: ")
    },

    //Validate that clicking on cross button clears the country name from the text box
    ENG_SETT_TC_12: async function (testdata) {
        sts = await settingsPage.clickClose()
        //console.log(sts)
        //assertion.assertEqual(sts.country_input_value, null, "Profile Country Mismatch: ")
        await assertion.assertEqual(sts, '', "Profile Country Mismatch: ")

        sts = await settingsPage.clickUpdateSettingsProfile()
        await assertion.assertEqual(sts, true, "Update Settings Not Clicked: ")

        sts = await snackBarTest.get_Snackbar_Message_Text();
        await assertion.assertEqual(sts, testdata.update, "Snackbar Messsage Mismatch: ")
    },

    //Validate the error message if First name is left blank
    ENG_SETT_TC_13: async function (testdata) {
        sts = await settingsPage.setFirstName("")
        await assertion.assertEqual(sts, true, "First Name not Entered: ")

        sts = await settingsPage.clickUpdateSettingsProfile()
        await assertion.assertEqual(sts, true, "Update Settings Not Clicked: ")

        sts = await settingsPage.getErrorMessages()
        await assertion.assertEqual(sts.firstNameError_text, testdata.firstNameError_text, "FirstName Error Mismatch: ")
    },

    //Validate the error message if Last name is left blank
    ENG_SETT_TC_14: async function (testdata) {
        sts = await settingsPage.setLastName("")
        await assertion.assertEqual(sts, true, "First Name not Entered: ")

        sts = await settingsPage.clickUpdateSettingsProfile()
        await assertion.assertEqual(sts, true, "Update Settings Not Clicked: ")

        sts = await settingsPage.getErrorMessages()
        await assertion.assertEqual(sts.lastNameError_text, testdata.lastNameError_text, "Last Name Error Mismatch: ")
    },

    //Validate that user can update the Password
    ENG_SETT_TC_15: async function (testdata) {
        sts = await settingsPage.setCurrentPassword(testdata[0].password)
        await assertion.assertEqual(sts, true, "current Password not Entered: ")

        sts = await settingsPage.setNewPassword(testdata[1].password)
        await assertion.assertEqual(sts, true, "New Password not Entered: ")

        sts = await settingsPage.setConfirmPassword(testdata[1].password)
        await assertion.assertEqual(sts, true, "Confirm Password not Entered: ")

        sts = await settingsPage.clickUpdateSettingsPassword()
        await assertion.assertEqual(sts, true, "Update Settings Not Clicked: ")

        sts = await snackBarTest.get_Snackbar_Message_Text();
        await assertion.assertEqual(sts, testdata[1].update, "Snackbar Messsage Mismatch: ")
    },

    //Validate the error messages if all Password textboxes are left blank
    ENG_SETT_TC_16: async function (testdata) {
        sts = await settingsPage.clickUpdateSettingsPassword()
        await assertion.assertEqual(sts, true, "Password Not Updated")

        sts = await settingsPage.getErrorMessages()
        await assertion.assertEqual(sts.currentPasswordError_text, testdata.currentPasswordError_text, "Current Password Error Mismatch: ")
        await assertion.assertEqual(sts.newPasswordError_text, testdata.newPasswordError_text, "New Password Error Mismatch: ")
        await assertion.assertEqual(sts.confirmPasswordError_text, testdata.confirmPasswordError_text, "Confirm Password Error Mismatch: ")
    },

    //Validate the message if Current Password is incorrect
    ENG_SETT_TC_17: async function (testdata) {
        sts = await settingsPage.setCurrentPassword(testdata[0].password.toUpperCase())
        await assertion.assertEqual(sts, true, "current Password not Entered: ")

        sts = await settingsPage.setNewPassword(testdata[0].password)
        await assertion.assertEqual(sts, true, "New Password not Entered: ")

        sts = await settingsPage.setConfirmPassword(testdata[0].password)
        await assertion.assertEqual(sts, true, "Confirm Password not Entered: ")

        sts = await settingsPage.clickUpdateSettingsPassword()
        await assertion.assertEqual(sts, true, "Update Settings Not Clicked: ")

        sts = await snackBarTest.get_Snackbar_Message_Text();
        await assertion.assertEqual(sts, testdata[1].incorrectPassword, "Snackbar Messsage Mismatch: ")
    },

    //Validate the error message if New Password and Confirm Passwords do not match
    ENG_SETT_TC_18: async function (testdata) {
        sts = await settingsPage.setCurrentPassword(testdata[0].password)
        await assertion.assertEqual(sts, true, "current Password not Entered: ")

        sts = await settingsPage.setNewPassword(testdata[0].password)
        await assertion.assertEqual(sts, true, "New Password not Entered: ")

        sts = await settingsPage.setConfirmPassword(testdata[0].password.toUpperCase())
        await assertion.assertEqual(sts, true, "Confirm Password not Entered: ")

        sts = await settingsPage.clickUpdateSettingsPassword()
        await assertion.assertEqual(sts, true, "Update Settings Not Clicked")

        sts = await settingsPage.getErrorMessages()
        await assertion.assertEqual(sts.confirmPasswordError_text, testdata[1].confirmPasswordError_text, "Confirm Password Error Mismatch: ")
    },

    //TBD - password text to be extracted. getText and getValue not working - Akanksha
    //Validate clicking on toggle password eye button displays the Password
    // ENG_SETT_TC_19: function() {

    //     sts = settingsPage.getPasswordTabData()
    //     console.log(sts)

    //     sts = settingsPage.togglePasswordVisibility()
    //     console.log(sts)
    //     // assertion.assertEqual(sts, true, "Update Settings Not Clicked")

    //     // sts = settingsPage.getErrorMessages()
    //     // assertion.assertEqual(sts.confirmPasswordError_text, testdata[1].confirmPasswordError_text, "Confirm Password Error Mismatch: ")
    // },

    //Validate that font size of the application is updated when the Font Size is increased.
    ENG_SETT_TC_23: async function (testdata) {
        sts = await settingsPage.click_fontSizeInc(2)     //font size increament is hard coded
        await assertion.assertEqual(sts, true, "Font Size not Increased: ")

        sts = await settingsPage.getCssPropertyData()
        await assertion.assertEqual(sts.previewTextHeading_fontSize, testdata[0].previewTextHeading_fontSize_XL, "Preview Text Heading Font Size Mismatch: ")
        await assertion.assertEqual(sts.previewTextPara_fontSize, testdata[0].previewTextPara_fontSize_XL, "Preview Text Para Font Size Mismatch: ")
        await assertion.assertEqual(sts.previewLinkText_fontSize, testdata[0].previewLinkText_fontSize_XL, "Preview Link Text Font Size Mismatch: ")
        await assertion.assertEqual(sts.button1_fontSize, testdata[0].button1_fontSize_XL, "Button1 Font Size Mismatch: ")
        await assertion.assertEqual(sts.button2_fontSize, testdata[0].button2_fontSize_XL, "Button2 Font Size Mismatch: ")

        await this.ENG_SETT_TC_37(testdata[1])

        sts = await settingsPage.getCssPropertyData()
        await assertion.assertEqual(sts.pageHeading_fontSize, testdata[0].pageHeading_fontSize_XL, "Page Heading Font Size Mismatch: ")
        await assertion.assertEqual(sts.moreDetailsBtn_fontSize, testdata[0].moreDetailsBtn_fontSize_XL, "More Details Btn Font Size Mismatch: ")
    },

    //Validate that font size of the application is updated when the Font Size decreased.
    ENG_SETT_TC_24: async function (testdata) {
        sts = await settingsPage.click_fontSizeDec(1)
        await assertion.assertEqual(sts, true, "Font Size not Increased: ")

        sts = await settingsPage.getCssPropertyData()
        await assertion.assertEqual(sts.previewTextHeading_fontSize, testdata[0].previewTextHeading_fontSize_small, "Preview Text Heading Font Size Mismatch: ")
        await assertion.assertEqual(sts.previewTextPara_fontSize, testdata[0].previewTextPara_fontSize_small, "Preview Text Para Font Size Mismatch: ")
        await assertion.assertEqual(sts.previewLinkText_fontSize, testdata[0].previewLinkText_fontSize_small, "Preview Link Text Font Size Mismatch: ")
        await assertion.assertEqual(sts.button1_fontSize, testdata[0].button1_fontSize_small, "Button1 Font Size Mismatch: ")
        await assertion.assertEqual(sts.button2_fontSize, testdata[0].button2_fontSize_small, "Button2 Font Size Mismatch: ")

        await this.ENG_SETT_TC_37(testdata[1])

        sts = await settingsPage.getCssPropertyData()
        await assertion.assertEqual(sts.pageHeading_fontSize, testdata[0].pageHeading_fontSize_small, "Page Heading Font Size Mismatch: ")
        await assertion.assertEqual(sts.moreDetailsBtn_fontSize, testdata[0].moreDetailsBtn_fontSize_small, "More Details Btn Font Size Mismatch: ")
    },

    //Validate that Line Spacing of the application is updated when the Line Spacing is increased.
    ENG_SETT_TC_25: async function (testdata) {
        sts = await settingsPage.click_lineSpaceInc(2)
        await assertion.assertEqual(sts, true, "Line Space not Increased: ")

        sts = await settingsPage.getCssPropertyData()
        await assertion.assertEqual(sts.previewTextHeading_lineHeight, testdata[0].previewTextHeading_lineHeight_XL, "Preview Text Heading Line Height Mismatch: ")
        await assertion.assertEqual(sts.previewTextPara_lineHeight, testdata[0].previewTextPara_lineHeight_XL, "Preview Text Para Line Height Mismatch: ")
        await assertion.assertEqual(sts.previewLinkText_lineHeight, testdata[0].previewLinkText_lineHeight_XL, "Preview Link Text Line Height Mismatch: ")
        await assertion.assertEqual(sts.button1_lineHeight, testdata[0].button1_lineHeight_XL, "Button1 Line Height Mismatch: ")
        await assertion.assertEqual(sts.button2_lineHeight, testdata[0].button2_lineHeight_XL, "Button2 Line Height Mismatch: ")

        await this.ENG_SETT_TC_37(testdata[1])

        sts = await settingsPage.getCssPropertyData()
        await assertion.assertEqual(sts.pageHeading_lineHeight, testdata[0].pageHeading_lineHeight_XL, "Page Heading Line Height  Mismatch: ")
        await assertion.assertEqual(sts.moreDetailsBtn_lineHeight, testdata[0].moreDetailsBtn_lineHeight_XL, "More Details Line Height  Mismatch: ")
        await assertion.assertEqual(sts.resetButton_lineHeight, testdata[0].resetButton_lineHeight_XL, "Reset Button Line Height  Mismatch: ")
        await assertion.assertEqual(sts.applySettingsBtn_lineHeight, testdata[0].applySettingsBtn_lineHeight_XL, "Apply Settings Btn Line Height  Mismatch: ")
    },

    //Validate that Line Spacing of the application is updated when the Line Spacing is decreased.
    ENG_SETT_TC_26: async function (testdata) {
        sts = await settingsPage.click_lineSpaceDec(1)
        await assertion.assertEqual(sts, true, "Line Space not Decreased: ")

        sts = await settingsPage.getCssPropertyData()
        await assertion.assertEqual(sts.previewTextHeading_lineHeight, testdata[0].previewTextHeading_lineHeight_narrow, "Preview Text Heading Line Height Mismatch: ")
        await assertion.assertEqual(sts.previewTextPara_lineHeight, testdata[0].previewTextPara_lineHeight_narrow, "Preview Text Para Line Height Mismatch: ")
        await assertion.assertEqual(sts.previewLinkText_lineHeight, testdata[0].previewLinkText_lineHeight_narrow, "Preview Link Text Line Height Mismatch: ")
        await assertion.assertEqual(sts.button1_lineHeight, testdata[0].button1_lineHeight_narrow, "Button1 Line Height Mismatch: ")
        await assertion.assertEqual(sts.button2_lineHeight, testdata[0].button2_lineHeight_narrow, "Button2 Line Height Mismatch: ")

        await this.ENG_SETT_TC_37(testdata[1])

        sts = await settingsPage.getCssPropertyData()
        await assertion.assertEqual(sts.pageHeading_lineHeight, testdata[0].pageHeading_lineHeight_narrow, "Page Heading Line Height  Mismatch: ")
        await assertion.assertEqual(sts.moreDetailsBtn_lineHeight, testdata[0].moreDetailsBtn_lineHeight_narrow, "More Details Line Height  Mismatch: ")
        await assertion.assertEqual(sts.resetButton_lineHeight, testdata[0].resetButton_lineHeight_narrow, "Reset Button Line Height  Mismatch: ")
        await assertion.assertEqual(sts.applySettingsBtn_lineHeight, testdata[0].applySettingsBtn_lineHeight_narrow, "Apply Settings Btn Line Height  Mismatch: ")
    },

    //Validate that High contrast theme is applied in the application when High Contrast is toggled ON.
    ENG_SETT_TC_27: async function (testdata) {
        sts = await settingsPage.click_highContrastToggleBtn()
        await assertion.assertEqual(sts, true, "High Contrast Toggle Btn Not Clicked ")

        sts = await settingsPage.getCssPropertyData()
        await assertion.assertEqual(sts.previewLinkText_color, testdata[0].previewLinkText_color, "Preview Link Color Mismatch: ")
        await assertion.assertEqual(sts.button1_color, testdata[0].button1_color, "Button1 Color Mismatch: ")
        await assertion.assertEqual(sts.button2_bgcolor, testdata[0].button2_bgcolor, "Button2 bgcolor Mismatch: ")

        await this.ENG_SETT_TC_37(testdata[1])

        sts = await settingsPage.getCssPropertyData()
        await assertion.assertEqual(sts.moreDetailsBtn_color, testdata[0].moreDetailsBtn_color, "More Details Btn Color  Mismatch: ")
        await assertion.assertEqual(sts.resetButton_color, testdata[0].resetButton_color, "Reset Button Color  Mismatch: ")
        await assertion.assertEqual(sts.applySettingsBtn_bgcolor, testdata[0].applySettingsBtn_bgcolor, "Apply Settings Btn bgcolor  Mismatch: ")
    },

    //Validate that OpenDyslexic Font is applied in the application when OpenDyslexic Font is toggled ON.
    ENG_SETT_TC_28: async function (testdata) {
        sts = await settingsPage.click_dylexicFontToggleBtn()
        await assertion.assertEqual(sts, true, "Dyslexic Font Btn Not Clicked ")

        sts = await settingsPage.getCssPropertyData()
        await assertion.assertEqual(sts.previewTextHeading_font, testdata[0].previewTextHeading_font, "Preview Text Heading Font Mismatch: ")
        await assertion.assertEqual(sts.previewTextPara_font, testdata[0].previewTextPara_font, "Preview Text Para Font Mismatch: ")
        await assertion.assertEqual(sts.previewLinkText_font, testdata[0].previewLinkText_font, "Preview LinkText Font Mismatch: ")
        await assertion.assertEqual(sts.button1_font, testdata[0].button1_font, "Button1 Font Mismatch: ")
        await assertion.assertEqual(sts.button2_font, testdata[0].button2_font, "Button2 Font Mismatch: ")

        await this.ENG_SETT_TC_37(testdata[1])

        sts = await settingsPage.getCssPropertyData()
        await assertion.assertEqual(sts.pageHeading_font, testdata[0].pageHeading_font, "PageHeading Font  Mismatch: ")
        await assertion.assertEqual(sts.moreDetailsBtn_font, testdata[0].moreDetailsBtn_font, "More Details Btn Font  Mismatch: ")
        await assertion.assertEqual(sts.resetButton_font, testdata[0].resetButton_font, "Reset Button Font  Mismatch: ")
        await assertion.assertEqual(sts.applySettingsBtn_font, testdata[0].applySettingsBtn_font, "Apply Settings Btn Font  Mismatch: ")
    },

    //Validate that Underline Links are applied in the application when Underline Links is toggled ON.
    ENG_SETT_TC_29: async function (testdata) {
        sts = await settingsPage.click_underlineLinksToggleBtn()
        await assertion.assertEqual(sts, true, "Underline Links Btn Not Clicked ")

        sts = await settingsPage.getCssPropertyData()
        await assertion.assertEqual(sts.previewLinkText_textDecoration, testdata[0].previewLinkText_textDecoration, "Preview LinkText Text Decoration Mismatch: ")
        await assertion.assertEqual(sts.button1_textDecoration, testdata[0].button1_textDecoration, "Button1 Text Decoration Mismatch: ")
        await assertion.assertEqual(sts.button2_textDecoration, testdata[0].button2_textDecoration, "Button2 Text Decoration Mismatch: ")

        await this.ENG_SETT_TC_37(testdata[1])

        sts = await settingsPage.getCssPropertyData()
        await assertion.assertEqual(sts.moreDetailsBtn_textDecoration, testdata[0].moreDetailsBtn_textDecoration, "More Details Btn Text Decoration Mismatch: ")
        await assertion.assertEqual(sts.resetButton_textDecoration, testdata[0].resetButton_textDecoration, "Reset Button Text Decoration Mismatch: ")
        await assertion.assertEqual(sts.applySettingsBtn_textDecoration, testdata[0].applySettingsBtn_textDecoration, "Apply Settings Btn Text Decoration Mismatch: ")
    },

    //Validate that clicking on Apply Settings updates the application on the basis of settings modified.
    ENG_SETT_TC_37: async function (testdata) {
        sts = await settingsPage.click_applySettingsButton();
        await assertion.assertEqual(sts, true, "Apply Settings Button Not Clicked ")
        sts = await snackBarTest.get_Snackbar_Message_Text();
        await assertion.assertEqual(sts, testdata.update, "Snackbar Messsage Mismatch: ")
    },



    //Validate that clicking on Confirm button on Reset Default Settings Modal resets the applied settings to default behavior.
    ENG_SETT_TC_40: async function (testdata) {

        sts = await settingsPage.click_resetSettingsConfirmBtn()
        await assertion.assertEqual(sts, true, "Confirm Button Not Clicked ")
        sts = await snackBarTest.get_Snackbar_Message_Text();
        await assertion.assertEqual(sts, testdata[1].update, "Snackbar Messsage Mismatch: ")

        sts = await settingsPage.getCssPropertyData()
        await assertion.assertEqual(sts.resetButton_lineHeight, testdata[0].resetButton_lineHeight, "Reset Button line Height Mismatch: ")
        await assertion.assertEqual(sts.applySettingsBtn_fontSize, testdata[0].applySettingsBtn_fontSize, "Apply Settings Btn Font Size Mismatch: ")
        await assertion.assertEqual(sts.moreDetailsBtn_textDecoration, testdata[0].moreDetailsBtn_textDecoration, "More Details Btn Link Text Decoration Mismatch: ")

        await assertion.assertEqual(sts.pageHeading_lineHeight, testdata[0].pageHeading_lineHeight, "Page Heading line Height Mismatch: ")
        await assertion.assertEqual(sts.pageHeading_font, testdata[0].pageHeading_font, "Page Heading Font Mismatch: ")
        await assertion.assertEqual(sts.pageHeading_fontSize, testdata[0].pageHeading_fontSize, "Page Heading Font Size Mismatch: ")

    },

    //Validate that clicking on Reset Default Settings button Reset Default Settings pop up is launched
    ENG_SETT_TC_54: async function (testdata) {
        sts = await settingsPage.click_resetButton()
        await assertion.assertEqual(sts.resetSettingsTitle, testdata.resetSettingsTitle, "Reset Settings Title Mismatch")
        await assertion.assertEqual(sts.resetSettingsSubTitle, testdata.resetSettingsSubTitle, "Reset Settings SubTitle Mismatch")
        await assertion.assertEqual(sts.resetSettingsCancelBtn, testdata.resetSettingsCancelBtn, "Reset Settings Modal Cancel Button Mismatch")
        await assertion.assertEqual(sts.resetSettingsConfirmBtn, testdata.resetSettingsConfirmBtn, "Reset Settings Modal Confirm Button Mismatch")

    },

    //Validate that clicking on Billing tab launches Billing page
    ENG_SETT_TC_55: async function (testdata) {
        sts = await appShellPage.selectTab(testdata.tabList[3])
        await assertion.assertEqual(sts, true, "Billing Tab Not Clicked: ")

        sts = await settingsPage.getSettingsPageData()
    
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.selectedTab, testdata.tabList[3], "Settings Page Profile Tab Not Selected: ")

        sts = await settingsPage.getBillingTabData()
    
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata.Billing.pageHeading, "Billing Page Heading Mismatch: ")
        await assertion.assertEqual(sts.subscriptionSubtitle_text, testdata.Billing.subscriptionSubtitle_text, "Subscription Subtitle Text Mismatch: ")

    },

    //Validate the content of Billing tab for a free user
    ENG_SETT_TC_56: async function (testdata) {

        sts = await settingsPage.getBillingTabData()

        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "Billing Page Heading Mismatch: ")
        await assertion.assertEqual(sts.subscriptionSubtitle_text, testdata.subscriptionSubtitle_text, "Subscription Subtitle Text Mismatch: ")
        await assertion.assertEqual(sts.free_text, testdata.free_text, "free Text Mismatch: ")
        await assertion.assertEqual(sts.getPremiumAccess_text, testdata.getPremiumAccess_text, "GetPremiumAccess Text Mismatch: ")
        await assertion.assertEqual(sts.getPremiumAccessSubtitle_text, testdata.getPremiumAccessSubtitle_text, "GetPremiumAccessSubtitle Text Mismatch: ")
        await assertion.assertEqual(sts.price_text, testdata.price_text, "Price Text Mismatch: ")
        await assertion.assertEqual(sts.upgradePlan_btn, testdata.upgradePlan_btn, "upgradePlan Button Text Mismatch: ")
        await assertion.assertEqual(sts.paymentMethod_text, testdata.paymentMethod_text, "PaymentMethod Text Mismatch: ")
        await assertion.assertEqual(sts.noPaymentMethod_text, testdata.noPaymentMethod_text, "noPaymentMethod Text Mismatch: ")
        await assertion.assertEqual(sts.noPaymentMethodSubtitle_text, testdata.noPaymentMethodSubtitle_text, "noPaymentMethodSubtitle Text Mismatch: ")
        await assertion.assertEqual(sts.billingMethod_text, testdata.billingMethod_text, "billingMethod Text Mismatch: ")
        await assertion.assertEqual(sts.noBillingInfo_text, testdata.noBillingInfo_text, "noBillingInfo Text Mismatch: ")

    },

    //Validate the content of Billing tab for a Premium user 
    ENG_SETT_TC_57: async function (testdata) {
        sts = await settingsPage.getBillingTabData()
        await assertion.typeOf(sts, 'object', new Error(sts));
        await assertion.assertEqual(sts.pageHeading, testdata.pageHeading, "Billing Page Heading Mismatch: ")
        await assertion.assertEqual(sts.subscriptionSubtitle_text, testdata.subscriptionSubtitle_text, "Subscription Subtitle Text Mismatch: ")
        await assertion.assertEqual(sts.premiumPlan_text, testdata.premiumPlan_text, "PremiumPlan Text Mismatch: ")
        await assertion.assertEqual(sts.active_text, testdata.active_text, "Active Text Mismatch: ")
        await assertion.assertEqual(sts.premiumPrice_text, testdata.premiumPrice_text, "premiumPrice Text Mismatch: ")
        await assertion.assertEqual(sts.autoRenewal_text, testdata.autoRenewal_text, "autoRenewal Text Mismatch: ")
        await assertion.assertEqual(sts.licensePeriod_text.trim(), testdata.licensePeriod_text, "licensePeriod Text Mismatch: ")
        await assertion.assertEqual(sts.licensePeriod_date, testdata.licensePeriod_date, "licensePeriod Date Mismatch: ")
        await assertion.assertEqual(sts.managePlan_btn, testdata.managePlan_btn, "managePlan Button Text Mismatch: ")
        await assertion.assertEqual(sts.changeCard_btn, testdata.changeCard_btn, "changeCard Button Text Mismatch: ")
        await assertion.assertEqual(sts.updateBillingAddress_btn, testdata.updateBillingAddress_btn, "updateBillingAddress Button Text Mismatch: ")

    },

    //Validate clicking on Upgrade plan button for a free user launches Select a plan page
    ENG_SETT_TC_58: async function () {
        sts = await settingsPage.click_upgradePlan_btn()
        await assertion.assertEqual(sts.pageStatus, true, "Billing Plan Page Status Mismatch")

        sts = await billingPage.click_close_btn()
        await assertion.assertEqual(sts, true, "Close button Status Mismatch")

    },

    //Validate clicking on Manage plan button launches Plan options page
    ENG_SETT_TC_59: async function () {
        sts = await settingsPage.click_managePlan_btn()
        await assertion.assertEqual(sts.pageStatus, true, "Plan Options Page Status Mismatch")

        sts = await appShellTest.ENG_SHELL_TC_11()

    },

    //Validate clicking on Change card button launches Plan options page
    ENG_SETT_TC_60: async function (testdata) {
        sts = await settingsPage.click_changeCard_btn()
        await assertion.assertEqual(sts.pageStatus, true, "Plan Options Page Status Mismatch")

        sts = await appShellTest.ENG_SHELL_TC_11()

    },

    //Validate clicking on Update button on Billing Information card launches Plan options page .
    ENG_SETT_TC_61: async function (testdata) { 
        sts = await settingsPage.click_updateBillingAddress_btn()
        await assertion.assertEqual(sts.pageStatus, true, "Plan Options Page Status Mismatch")

        sts = await appShellTest.ENG_SHELL_TC_11()

    }
};