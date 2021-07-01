"use strict";
var appShell = require('../../pages/engageExperienceApp/appShell.page.js');
var sts;

module.exports = {

	//Validate that appShell is launched (Desktop)
	ENG_SHELL_TC_1: function (testdata) {
		sts = appShell.isInitialized();
		assertion.assertEqual(sts.pageStatus, true, "AppShell status mismatch");
		assertion.assertEqual(sts.headerLogo_exists, true, "Difusion logo does not exist");
		assertion.assertEqual(sts.dashboardBtn, testdata.dashboardTxt, "Dashboard text mismatch");
		assertion.assertEqual(sts.browseBtn, testdata.browseTxt, "Browser text mismatch");
		assertion.assertEqual(sts.classesBtn, testdata.classesTxt, "Classes text mismatch");
		assertion.assertEqual(sts.helpBtn, testdata.helpTxt, "Help text mismatch");
		assertion.assertEqual(sts.settingsBtn, testdata.settingsTxt, "Settings text mismatch");
		assertion.assertEqual(sts.sidebarImg_exists, true, "Left Pane Image does not exist");
		assertion.assertEqual(sts.poweredbyTxt, testdata.poweredByTxt, "Powered By text mismatch");
		assertion.assertEqual(sts.comproLogo_exists, true, "Compro logo does not exist");
		assertion.assert(sts.versionTxt.includes(testdata.engageTxt), "Engage text mismatch");
		assertion.assert(sts.versionTxt.includes(testdata.technologyPreviewTxt), "Technology Preview text mismatch");
		assertion.assertEqual(sts.notificationBtn_exists, true, "Notification Button does not exist");
		assertion.assertEqual(sts.selectedLanguage,testdata.selectedLanguage, "Language Button does not exist");
		assertion.assertEqual(sts.userProfileBtn_exists, true, "User Profile Button does not exist");
		},

	//Validate that clicking on the Dashboard button in left Navigation pane launches Dashboard page 
	ENG_SHELL_TC_2: function () {
		sts = appShell.clickDashboardButton();
		assertion.assertEqual(sts.pageStatus, true, "Dashboard page status mismatch");
	},

	//Validate that clicking on the Browse button in left Navigation pane launches Browse page
	ENG_SHELL_TC_3: function () {
		sts = appShell.clickBrowseButton();
		assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
	},

	//Validate that clicking on the Classes button in left Navigation pane launches Classes page
	ENG_SHELL_TC_4: function () {
		sts = appShell.clickClassesButton();
		assertion.assertEqual(sts, true, "Classes page status mismatch");
	},

	//Validate that clicking on the bell icon launches the notification drawer
	ENG_SHELL_TC_5: function (testdata) {
		sts = appShell.clickNotificationButton(testdata);
		assertion.assertEqual(sts.notificationTxt,testdata.notificationHeader, "Notification Header Text mismatch");
		assertion.assertEqual(sts.notificationCloseBtn_exists, true, "Close icon does not exist");
		assertion.assertEqual(sts.noNotificationImg_exists, true, "No Notification Image does not exist");
	},

	//Validate that clicking on cross icon closes the notification section
	ENG_SHELL_TC_6: function (testdata) {
		sts = appShell.clickNotificationCloseButton();
		sts = appShell.isInitialized();
		//For Akhil - Do we need to again add all the assertions for this test case or 
		//calling the isinitialised function will work the same way?
	},

	//Validate that user is able to change the app language using the language switcher on the header 
	ENG_SHELL_TC_7: function (testdata) {
		sts = appShell.selectLanguagefromLanguageSelector(testdata[0]);
		assertion.assertEqual(sts,testdata[1], "Selected Language Text mismatch");
	},
	
	//Validate that clicking on the profile dropdown launches the dropdown of profile and other options
	ENG_SHELL_TC_8: function (testdata) {
		sts = appShell.clickProfileButton(testdata);
		assertion.assertEqual(sts.userName,testdata.profileUsername, "User Name Text mismatch");
		assertion.assertEqual(sts.emailID,testdata.emailID, "email ID Text mismatch");
		assertion.assertEqual(sts.userProfileHelpBtn,testdata.userProfileHelpBtn, "Help Text mismatch");
		assertion.assertEqual(sts.userProfileSettingsBtn,testdata.userProfileSettingsBtn, "Settings Text mismatch");
		assertion.assertEqual(sts.userProfileLogoutBtn,testdata.userProfileLogoutBtn, "Logout Text mismatch");
	},

	//Validate that clicking on logout logs out from application
	ENG_SHELL_TC_9: function () {
		sts = appShell.clickLogoutButton();
		assertion.assertEqual(sts.pageStatus, true, "Landing page status mismatch");
	},
	
}
