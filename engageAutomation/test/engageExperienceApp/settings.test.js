"use strict";
var settingsPage = require('../../pages/engageExperienceApp/settings.page.js');
var appShellPage = require('../../pages/engageExperienceApp/appShell.page.js');
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
        assertion.assertEqual(sts.resetButton, testdata.Accessibility.reset_button, "Accessibility Tab Reset Button Mismatch: ")
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
        assertion.assertEqual(sts.resetButton, testdata.reset_button, "Accessibility Tab reset button Mismatch: ")
        assertion.assertEqual(sts.applySettingsBtn, testdata.accessbility_button, "Accessibility Tab accessbility button Mismatch: ")
        assertion.assertEqual(sts.fontSizeText, testdata.fontSize_text, "Accessibility Tab fontSize text Mismatch: ")
        assertion.assertEqual(sts.lineSpaceText, testdata.lineSpace_text, "Accessibility Tab lineSpace text Mismatch: ")
        assertion.assertEqual(sts.previewTextPara, testdata.samplePara_text, "Accessibility Tab samplePara text Mismatch: ")
        assertion.assertEqual(sts.previewTextHeading, testdata.sampleHeader_text, "Accessibility Tab sampleHeader text Mismatch: ")
    },

    //Validate that email ID textbox is not editable
    ENG_SETT_TC_8: function() {
        sts = settingsPage.getProfileTabData()
        //console.log(sts)
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.email_input_readOnly, 'true', "Profile Tab Email ID textbox Editable: ")
    },

    //Validate that user can modify the First name.
    ENG_SETT_TC_9: function(testdata) {
        sts = settingsPage.setFirstName(testdata[0].name.split(" ")[0])
        assertion.assertEqual(sts, true, "First Name not Entered: ")

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
        assertion.assertEqual(sts.country_input_value, null, "Profile Country Mismatch: ")

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
    },

    //font size increament is hard coded
    //Validate that font size of the application is updated when the Font Size is increased.
    ENG_SETT_TC_23: function(testdata) {
        // sts = settingsPage.getCssPropertyData()
        // console.log(sts)

        sts = settingsPage.click_fontSizeInc(2)
        assertion.assertEqual(sts, true, "Font Size not Increased: ")

        sts = settingsPage.getCssPropertyData()
        assertion.assertEqual(sts.previewTextHeading_fontSize, testdata[0].previewTextHeading_fontSize_XL, "Preview Text Heading Font Size Mismatch: ")
        assertion.assertEqual(sts.previewTextPara_fontSize, testdata[0].previewTextPara_fontSize_XL, "Preview Text Para Font Size Mismatch: ")
        assertion.assertEqual(sts.previewLinkText_fontSize, testdata[0].previewLinkText_fontSize_XL, "Preview Link Text Font Size Mismatch: ")
        assertion.assertEqual(sts.button1_fontSize, testdata[0].button1_fontSize_XL, "Button1 Font Size Mismatch: ")
        assertion.assertEqual(sts.button2_fontSize, testdata[0].button2_fontSize_XL, "Button2 Font Size Mismatch: ")

        this.ENG_SETT_TC_37(testdata[1])

        sts = settingsPage.getCssPropertyData()
        assertion.assertEqual(sts.pageHeading_fontSize, testdata[0].pageHeading_fontSize_XL, "Page Heading Font Size Mismatch: ")
        assertion.assertEqual(sts.moreDetailsBtn_fontSize, testdata[0].moreDetailsBtn_fontSize_XL, "More Details Btn Font Size Mismatch: ")

    },

    //Validate that font size of the application is updated when the Font Size decreased.
    ENG_SETT_TC_24: function(testdata) {
        sts = settingsPage.click_fontSizeDec(1)
        assertion.assertEqual(sts, true, "Font Size not Increased: ")

        sts = settingsPage.getCssPropertyData()
        assertion.assertEqual(sts.previewTextHeading_fontSize, testdata[0].previewTextHeading_fontSize_small, "Preview Text Heading Font Size Mismatch: ")
        assertion.assertEqual(sts.previewTextPara_fontSize, testdata[0].previewTextPara_fontSize_small, "Preview Text Para Font Size Mismatch: ")
        assertion.assertEqual(sts.previewLinkText_fontSize, testdata[0].previewLinkText_fontSize_small, "Preview Link Text Font Size Mismatch: ")
        assertion.assertEqual(sts.button1_fontSize, testdata[0].button1_fontSize_small, "Button1 Font Size Mismatch: ")
        assertion.assertEqual(sts.button2_fontSize, testdata[0].button2_fontSize_small, "Button2 Font Size Mismatch: ")

        this.ENG_SETT_TC_37(testdata[1])

        sts = settingsPage.getCssPropertyData()
        assertion.assertEqual(sts.pageHeading_fontSize, testdata[0].pageHeading_fontSize_small, "Page Heading Font Size Mismatch: ")
        assertion.assertEqual(sts.moreDetailsBtn_fontSize, testdata[0].moreDetailsBtn_fontSize_small, "More Details Btn Font Size Mismatch: ")
    },

    //Validate that Line Spacing of the application is updated when the Line Spacing is increased.
    ENG_SETT_TC_25: function(testdata) {
        sts = settingsPage.click_lineSpaceInc(2)
        assertion.assertEqual(sts, true, "Line Space not Increased: ")

        sts = settingsPage.getCssPropertyData()
        assertion.assertEqual(sts.previewTextHeading_lineHeight, testdata[0].previewTextHeading_lineHeight_XL, "Preview Text Heading Line Height Mismatch: ")
        assertion.assertEqual(sts.previewTextPara_lineHeight, testdata[0].previewTextPara_lineHeight_XL, "Preview Text Para Line Height Mismatch: ")
        assertion.assertEqual(sts.previewLinkText_lineHeight, testdata[0].previewLinkText_lineHeight_XL, "Preview Link Text Line Height Mismatch: ")
        assertion.assertEqual(sts.button1_lineHeight, testdata[0].button1_lineHeight_XL, "Button1 Line Height Mismatch: ")
        assertion.assertEqual(sts.button2_lineHeight, testdata[0].button2_lineHeight_XL, "Button2 Line Height Mismatch: ")

        this.ENG_SETT_TC_37(testdata[1])

        sts = settingsPage.getCssPropertyData()
        assertion.assertEqual(sts.pageHeading_lineHeight, testdata[0].pageHeading_lineHeight_XL, "Page Heading Line Height  Mismatch: ")
        assertion.assertEqual(sts.moreDetailsBtn_lineHeight, testdata[0].moreDetailsBtn_lineHeight_XL, "More Details Line Height  Mismatch: ")
        assertion.assertEqual(sts.resetButton_lineHeight, testdata[0].resetButton_lineHeight_XL, "Reset Button Line Height  Mismatch: ")
        assertion.assertEqual(sts.applySettingsBtn_lineHeight, testdata[0].applySettingsBtn_lineHeight_XL, "Apply Settings Btn Line Height  Mismatch: ")


    },

    //Validate that Line Spacing of the application is updated when the Line Spacing is decreased.
    ENG_SETT_TC_26: function(testdata) {
        sts = settingsPage.click_lineSpaceDec(1)
        assertion.assertEqual(sts, true, "Line Space not Decreased: ")

        sts = settingsPage.getCssPropertyData()
        assertion.assertEqual(sts.previewTextHeading_lineHeight, testdata[0].previewTextHeading_lineHeight_narrow, "Preview Text Heading Line Height Mismatch: ")
        assertion.assertEqual(sts.previewTextPara_lineHeight, testdata[0].previewTextPara_lineHeight_narrow, "Preview Text Para Line Height Mismatch: ")
        assertion.assertEqual(sts.previewLinkText_lineHeight, testdata[0].previewLinkText_lineHeight_narrow, "Preview Link Text Line Height Mismatch: ")
        assertion.assertEqual(sts.button1_lineHeight, testdata[0].button1_lineHeight_narrow, "Button1 Line Height Mismatch: ")
        assertion.assertEqual(sts.button2_lineHeight, testdata[0].button2_lineHeight_narrow, "Button2 Line Height Mismatch: ")

        this.ENG_SETT_TC_37(testdata[1])

        sts = settingsPage.getCssPropertyData()
        assertion.assertEqual(sts.pageHeading_lineHeight, testdata[0].pageHeading_lineHeight_narrow, "Page Heading Line Height  Mismatch: ")
        assertion.assertEqual(sts.moreDetailsBtn_lineHeight, testdata[0].moreDetailsBtn_lineHeight_narrow, "More Details Line Height  Mismatch: ")
        assertion.assertEqual(sts.resetButton_lineHeight, testdata[0].resetButton_lineHeight_narrow, "Reset Button Line Height  Mismatch: ")
        assertion.assertEqual(sts.applySettingsBtn_lineHeight, testdata[0].applySettingsBtn_lineHeight_narrow, "Apply Settings Btn Line Height  Mismatch: ")
    },

    //Validate that High contrast theme is applied in the application when High Contrast is toggled ON.
    ENG_SETT_TC_27: function(testdata) {
        sts = settingsPage.click_highContrastToggleBtn()
        assertion.assertEqual(sts, true, "High Contrast Toggle Btn Not Clicked ")

        sts = settingsPage.getCssPropertyData()
        assertion.assertEqual(sts.previewLinkText_color, testdata[0].previewLinkText_color, "Preview Link Color Mismatch: ")
        assertion.assertEqual(sts.button1_color, testdata[0].button1_color, "Button1 Color Mismatch: ")
        assertion.assertEqual(sts.button2_bgcolor, testdata[0].button2_bgcolor, "Button2 bgcolor Mismatch: ")

        this.ENG_SETT_TC_37(testdata[1])

        sts = settingsPage.getCssPropertyData()
        assertion.assertEqual(sts.moreDetailsBtn_color, testdata[0].moreDetailsBtn_color, "More Details Btn Color  Mismatch: ")
        assertion.assertEqual(sts.resetButton_color, testdata[0].resetButton_color, "Reset Button Color  Mismatch: ")
        assertion.assertEqual(sts.applySettingsBtn_bgcolor, testdata[0].applySettingsBtn_bgcolor, "Apply Settings Btn bgcolor  Mismatch: ")

    },

    //Validate that OpenDyslexic Font is applied in the application when OpenDyslexic Font is toggled ON.
    ENG_SETT_TC_28: function(testdata) {
        sts = settingsPage.click_dylexicFontToggleBtn()
        assertion.assertEqual(sts, true, "Dylexic Font Btn Not Clicked ")

        sts = settingsPage.getCssPropertyData()
        assertion.assertEqual(sts.previewTextHeading_font, testdata[0].previewTextHeading_font, "Preview Text Heading Font Mismatch: ")
        assertion.assertEqual(sts.previewTextPara_font, testdata[0].previewTextPara_font, "Preview Text Para Font Mismatch: ")
        assertion.assertEqual(sts.previewLinkText_font, testdata[0].previewLinkText_font, "Preview LinkText Font Mismatch: ")
        assertion.assertEqual(sts.button1_font, testdata[0].button1_font, "Button1 Font Mismatch: ")
        assertion.assertEqual(sts.button2_font, testdata[0].button2_font, "Button2 Font Mismatch: ")

        this.ENG_SETT_TC_37(testdata[1])
        
        sts = settingsPage.getCssPropertyData()
        assertion.assertEqual(sts.pageHeading_font, testdata[0].pageHeading_font, "PageHeading Font  Mismatch: ")
        assertion.assertEqual(sts.moreDetailsBtn_font, testdata[0].moreDetailsBtn_font, "More Details Btn Font  Mismatch: ")
        assertion.assertEqual(sts.resetButton_font, testdata[0].resetButton_font, "Reset Button Font  Mismatch: ")
        assertion.assertEqual(sts.applySettingsBtn_font, testdata[0].applySettingsBtn_font, "Apply Settings Btn Font  Mismatch: ")

    },

    //Validate that Underline Links are applied in the application when Underline Links is toggled ON.
    ENG_SETT_TC_29: function(testdata) {
        sts = settingsPage.click_underlineLinksToggleBtn()
        assertion.assertEqual(sts, true, "Underline Links Btn Not Clicked ")

        sts = settingsPage.getCssPropertyData()
        assertion.assertEqual(sts.previewLinkText_textDecoration, testdata[0].previewLinkText_textDecoration, "Preview LinkText Text Decoration Mismatch: ")
        assertion.assertEqual(sts.button1_textDecoration, testdata[0].button1_textDecoration, "Button1 Text Decoration Mismatch: ")
        assertion.assertEqual(sts.button2_textDecoration, testdata[0].button2_textDecoration, "Button2 Text Decoration Mismatch: ")
        
        this.ENG_SETT_TC_37(testdata[1])

        sts = settingsPage.getCssPropertyData()
        assertion.assertEqual(sts.moreDetailsBtn_textDecoration, testdata[0].moreDetailsBtn_textDecoration, "More Details Btn Text Decoration Mismatch: ")
        assertion.assertEqual(sts.resetButton_textDecoration, testdata[0].resetButton_textDecoration, "Reset Button Text Decoration Mismatch: ")
        assertion.assertEqual(sts.applySettingsBtn_textDecoration, testdata[0].applySettingsBtn_textDecoration, "Apply Settings Btn Text Decoration Mismatch: ")

    },

    //Validate that clicking on Apply Settings updates the application on the basis of settings modified.
    ENG_SETT_TC_37: function(testdata) {

        sts = settingsPage.click_applySettingsButton();
        assertion.assertEqual(sts, true, "Apply Settings Button Not Clicked ")

        sts = snackBarTest.get_Snackbar_Message_Text();
        assertion.assertEqual(sts, testdata.update, "Snackbar Messsage Mismatch: ")

    },

    //Validate that clicking on Confirm button on Reset Default Settings Modal resets the applied settings to default behavior.
    ENG_SETT_TC_40: function(testdata) {

        // sts = settingsPage.getCssPropertyData()
        // console.log(sts)

        sts = settingsPage.click_resetButton()
        assertion.assertEqual(sts.resetSettingsTitle, testdata[0].resetSettingsTitle, "Reset Settings Title Mismatch")
        assertion.assertEqual(sts.resetSettingsSubTitle, testdata[0].resetSettingsSubTitle, "Reset Settings SubTitle Mismatch")
        assertion.assertEqual(sts.resetSettingsCancelBtn, testdata[0].resetSettingsCancelBtn, "Reset Settings Modal Cancel Button Mismatch")
        assertion.assertEqual(sts.resetSettingsConfirmBtn, testdata[0].resetSettingsConfirmBtn, "Reset Settings Modal Confirm Button Mismatch")
        
        sts = settingsPage.click_resetSettingsConfirmBtn()
        assertion.assertEqual(sts, true, "Confirm Button Not Clicked ")

        sts = snackBarTest.get_Snackbar_Message_Text();
        assertion.assertEqual(sts, testdata[2].update, "Snackbar Messsage Mismatch: ")

        sts = settingsPage.getCssPropertyData()
        assertion.assertEqual(sts.resetButton_lineHeight, testdata[1].resetButton_lineHeight, "Reset Button line Height Mismatch: ")
        assertion.assertEqual(sts.applySettingsBtn_fontSize, testdata[1].applySettingsBtn_fontSize, "Apply Settings Btn Font Size Mismatch: ")
        assertion.assertEqual(sts.moreDetailsBtn_textDecoration, testdata[1].moreDetailsBtn_textDecoration, "More Details Btn Link Text Decoration Mismatch: ")
        
        assertion.assertEqual(sts.pageHeading_lineHeight, testdata[1].pageHeading_lineHeight, "Page Heading line Height Mismatch: ")
        assertion.assertEqual(sts.pageHeading_font, testdata[1].pageHeading_font, "Page Heading Font Mismatch: ")
        assertion.assertEqual(sts.pageHeading_fontSize, testdata[1].pageHeading_fontSize, "Page Heading Font Size Mismatch: ")

    }
};