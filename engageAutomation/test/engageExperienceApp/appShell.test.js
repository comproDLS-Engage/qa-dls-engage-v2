"use strict";
var appShell = require('../../pages/engageExperienceApp/appShell.page.js');
var createClassPage = require('../../pages/engageExperienceApp/createClass.page.js');
var classDashboardPage = require('../../pages/engageExperienceApp/classDashboard.page.js');
var sts;

module.exports = {

	//Validate content of the appShell is launched (Desktop)
	ENG_SHELL_TC_1: async function (testdata) {
		sts = await appShell.getAppShellLeftPaneData();
		await assertion.assertEqual(sts.custLogo_exists, true, "Difusion logo does not exist");
		await assertion.assertEqual(sts.dashboardBtn, testdata.dashboardTxt, "Dashboard text mismatch");
		await assertion.assertEqual(sts.browseBtn, testdata.browseTxt, "Browser text mismatch");
		await assertion.assertEqual(sts.classesBtn, testdata.classesTxt, "Classes text mismatch");
		await assertion.assertEqual(sts.helpBtn, testdata.helpTxt, "Help text mismatch");
		await assertion.assertEqual(sts.settingsBtn, testdata.settingsTxt, "Settings text mismatch");
		await assertion.assertEqual(sts.sidebarImg_exists, true, "Left Pane Image does not exist");
		await assertion.assertEqual(sts.poweredbyTxt, testdata.poweredByTxt, "Powered By text mismatch");
		await assertion.assertEqual(sts.comproLogo_exists, true, "Compro logo does not exist");
		await assertion.assert(sts.versionTxt.includes(testdata.engageTxt), "Engage text mismatch");
		await assertion.assert(sts.versionTxt.includes(testdata.technologyPreviewTxt), "Technology Preview text mismatch");
		sts = await appShell.getAppShellHeaderData();
		await assertion.assertEqual(sts.notificationBtn_exists, true, "Notification Button does not exist");
		await assertion.assertEqual(sts.selectedLanguage, testdata.selectedLanguage, "Language Button does not exist");
		await assertion.assertEqual(sts.userProfileBtn_exists, true, "User Profile Button does not exist");
	},

	//Validate that clicking on the Dashboard button in left Navigation pane launches Dashboard page 
	ENG_SHELL_TC_2: async function () {
		sts = await appShell.clickDashboardButton();
		await assertion.assertEqual(sts.pageStatus, true, "Dashboard page status mismatch");
	},

	//Validate that clicking on the Browse button in left Navigation pane launches Browse page
	ENG_SHELL_TC_3: async function () {
		sts = await appShell.clickBrowseButton();
		await assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
	},

	//Validate that clicking on the Classes button in left Navigation pane launches Classes page for teacher
	ENG_SHELL_TC_4: async function (testdata) {
		sts = await appShell.clickClassesButton();
		await assertion.assertEqual(sts, true, "status mismatch");
		sts = await classDashboardPage.isInitialized();
		await assertion.assertEqual(sts.pageStatus, true, "Classes page status mismatch");
		await assertion.assertEqual(sts.classHeading, testdata.classHeading, "classHeading text mismatch");
		await assertion.assertEqual(sts.classSubHeading, testdata.classSubHeading, "classSubHeading text mismatch");
		//assertion.assertEqual(sts.addClassBtn, testdata.addClassBtn, "addClassBtn text mismatch");
		await assertion.assertEqual(sts.activeTab, testdata.activeTab, "activeTab text mismatch");
		await assertion.assertEqual(sts.archivedTab, testdata.archivedTab, "archivedTab text mismatch");
	},

	//Validate that clicking on the bell icon launches the notification drawer
	ENG_SHELL_TC_5: async function (testdata) {
		sts = await appShell.clickNotificationButton();
		await assertion.assertEqual(sts.notificationTxt, testdata.notificationHeader, "Notification Header Text mismatch");
		await assertion.assertEqual(sts.notificationCloseBtn_exists, true, "Close icon does not exist");
		await assertion.assertEqual(sts.noNotificationImg_exists, true, "No Notification Image does not exist");
	},

	//Validate that clicking on cross icon closes the notification section
	ENG_SHELL_TC_6: async function () {
		sts = await appShell.clickNotificationCloseButton();
		await assertion.assertEqual(sts, true, "Gray backdrop did not close");
	},

	//Validate that user is able to change the app language using the language switcher on the header 
	ENG_SHELL_TC_7: async function (testdata) {
		sts = await appShell.selectLanguagefromLanguageSelector(testdata[0]);
		await assertion.assertEqual(sts, testdata[1], "Selected Language Text mismatch");
	},

	//Validate that clicking on the profile dropdown launches the dropdown of profile and other options
	ENG_SHELL_TC_8: async function (testdata) {
		sts = await appShell.clickProfileButton();
		if (testdata[0] != undefined) {
			await assertion.assertEqual(sts.userName, testdata[1].name, "User Name Text mismatch");
			await assertion.assertEqual(sts.emailID, testdata[1].email, "email ID Text mismatch");
			await assertion.assertEqual(sts.userProfileHelpBtn, testdata[0].userProfileHelpBtn, "Help Text mismatch");
			await assertion.assertEqual(sts.userProfileSettingsBtn, testdata[0].userProfileSettingsBtn, "Settings Text mismatch");
			await assertion.assertEqual(sts.userProfileLogoutBtn, testdata[0].userProfileLogoutBtn, "Logout Text mismatch");
		}
	},

	//Validate that clicking on logout logs out from application
	ENG_SHELL_TC_9: async function () {
		sts = await appShell.clickLogoutButton();
		await assertion.assertEqual(sts.pageStatus, true, "Landing page status mismatch");
	},

	//Validate that clicking on + button on classes in Left navigation pane, launched the create class page in teacher login
	//Student My class is not developed yet, will add the test case once the page is developed. 
	ENG_SHELL_TC_10: async function () {
		sts = await appShell.click_PlusIconClassesTab();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: " + (await JSON.stringify(sts)))
		} else {
			await assertion.assertFail(sts);
		}
	},

	//Validate that clicking on + button on classes in Left navigation pane, launched the join class page in student login
	ENG_SHELL_TC_10: async function () {
		sts = await appShell.click_PlusIconClassesTab();
		await assertion.assertEqual(sts, true, "status mismatch");
		sts = await createClassPage.isInitialized();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: " + (await JSON.stringify(sts)))
		} else {
			await assertion.assertFail(sts);
		}
	},

	// Validate that click on breadcrumb back button on the header launch the previous page
	ENG_SHELL_TC_11: async function () {
		sts = await appShell.clickBackButton();
		await assertion.assertEqual(sts, true, "Back button is not clicked");
	},

	//Validate that clicking on the index button launches index dropdown
	ENG_SHELL_TC_13: async function (testdata) {
		sts = await appShell.clickIndexButton();
		await assertion.assertEqual(sts.chapterTitleTxt, testdata.chapterTitleTxt, "Jump to Section Text mismatch")
	},

	//Validate that clicking on the Invite button launches Invite dropdown
	ENG_SHELL_TC_14: async function (testdata) {
		sts = await appShell.clickInviteButton();
		await assertion.assertEqual(sts.inviteBtnTxt, testdata.inviteBtnText, "Invite Button Text mismatch")
	},

	//Validate that clicking on the Add to Playlist button launches playlist dropdown
	ENG_SHELL_TC_15: async function (testdata) {
		sts = await appShell.clickAddToPlaylistButton();
		await assertion.assertEqual(sts.inviteBtnTxt, testdata.inviteBtnText, "Invite Button Text mismatch")
	},

	//Validate that the list of the tabs is correct
	ENG_SHELL_TC_16: async function () {
		sts = await appShell.getTabsListData();
	},

	//Validate that clicking on the Settings button in left Navigation pane launches Settings page
	ENG_SHELL_TC_17: async function () {
		sts = await appShell.clickSettingsButton();
		await assertion.typeOf(sts, 'object', new Error(sts));
		await assertion.assertEqual(sts.pageStatus, true, "Settings Page Status Mismatch: ")
	},

	//Validate that clicking on the Assign button on the header launches the create assignment page
	ENG_SHELL_TC_18: async function () {
		sts = await appShell.clickAssignButton();
		await assertion.typeOf(sts, 'object', new Error(sts));
		await assertion.assertEqual(sts.pageStatus, true, "Create Assignment Page Status Mismatch: ")
	},
	//Mobile: Click on Profile button on the header
	ENG_SHELL_TC_19: async function (testdata) {
		sts = await appShell.clickProfileButton();
		if (testdata[0] != undefined) {
			await assertion.assertEqual(sts.userName, testdata[1].name, "User Name Text mismatch");
			await assertion.assertEqual(sts.emailID, testdata[1].email, "email ID Text mismatch");
			await assertion.assertEqual(sts.userProfileHelpBtn, testdata[0].userProfileHelpBtn, "Help Text mismatch");
			await assertion.assertEqual(sts.userProfileSettingsBtn, testdata[0].userProfileSettingsBtn, "Settings Text mismatch");
			await assertion.assertEqual(sts.userProfileLogoutBtn, testdata[0].userProfileLogoutBtn, "Logout Text mismatch");
			await assertion.assertEqual(sts.notificationTxt, testdata[0].notificationHeader, "Notification Header Text mismatch");
			await assertion.assertEqual(sts.notificationBtn_exists, true, "Notification Button does not exist");
			await assertion.assertEqual(sts.selectedLanguage, testdata[0].selectedLanguage, "Language Button does not exist");
		}
	},
	//Validate content of the appShell is launched (Desktop)
	ENG_SHELL_TC_20: async function (testdata) {
		sts = await appShell.getAppShellLeftPaneData();
		await assertion.assertEqual(sts.dashboardBtn, testdata.dashboardTxt, "Dashboard text mismatch");
		await assertion.assertEqual(sts.browseBtn, testdata.browseTxt, "Browser text mismatch");
		await assertion.assertEqual(sts.classesBtn, testdata.classesTxt, "Classes text mismatch");
		await assertion.assertEqual(sts.helpBtn, testdata.helpTxt, "Help text mismatch");
		sts = await appShell.getAppShellHeaderData();
		await assertion.assertEqual(sts.notificationBtn_exists, true, "Notification Button does not exist");
		//	assertion.assertEqual(sts.selectedLanguage, testdata.selectedLanguage, "Language Button does not exist");
		await assertion.assertEqual(sts.userProfileBtn_exists, true, "User Profile Button does not exist");
	},
	//Validate the click on index button
	ENG_SHELL_TC_21: async function (testdata) {
		sts = await appShell.click_indexbtn();
		await assertion.assertEqual(sts.closetocbtn, true, "closetocbtn mismatch");
		await assertion.assertEqual(sts.producHeadertbtn, true, "producHeadertbtn mismatch");
		await assertion.assertEqual(sts.tocPanelHeader, testdata[1].tocPanelHeader, "tocPanelHeader text mismatch");
		await assertion.assertEqual(sts.materialbtn, testdata[1].materialbtn, "materialbtn text mismatch");
	},
	//Validate the click on close button
	ENG_SHELL_TC_22: async function () {
		sts = await appShell.click_closetocbtn();
		await assertion.assertEqual(sts.pageStatus, true, "Page status mismatch");
	},
	//Validate the click on product button
	ENG_SHELL_TC_23: async function (testdata) {
		sts = await appShell.click_producHeadertbtn();
		for (var i = 0; i < sts.length; i++) {
			await assertion.assertEqual(sts[i].sectiongroup, testdata[i].title, "Page status mismatch");
		}
	},
	//Validate the click on section Items
	ENG_SHELL_TC_24: async function (testdata) {
		sts = await appShell.click_sectiongroup(testdata[0]);
		for (var i = 0; i < sts.length; i++) {
			await assertion.assertEqual(sts[i].resoursebtn, testdata[1][i], "Page status mismatch");
		}
	},
	//Validate the click on resourse Items
	ENG_SHELL_TC_25: async function (testdata) {
		sts = await appShell.click_resoursebtn(testdata[0], testdata[1]);
		await assertion.assertEqual(sts, true, "resourse is clicked")
	},
	//Validate the click on material button
	ENG_SHELL_TC_26: async function (testdata) {
		sts = await appShell.click_materialbtn();

		for (var i = 0; i < sts.length; i++) {
			await assertion.assertEqual(sts[i].indexproductbtn, testdata[i].name.EN, "Page status mismatch");
		}
	},
	//Validate the click on Product Items
	ENG_SHELL_TC_27: async function (testdata) {
		sts = await appShell.click_indexproductbtn(testdata);
		await assertion.assertEqual(sts, true, "Product is clicked")
		sts = await appShell.getData_sectionPanel()
		await assertion.assertEqual(sts[0].sectiongroup, "1. Unit 1", "Product is clicked")
	},

	ENG_SHELL_TC_28: async function (testdata) {
		sts = await appShell.click_infoBtn()
		await assertion.assertEqual(sts.infoTocHeading, testdata.infoTocHeading, "infoTocHeading mismatch");
		await assertion.assertEqual(sts.closeInfoBtn, true, "closeInfoBtn mismatch");
	},
	ENG_SHELL_TC_29: async function (testdata) {
		sts = await appShell.getData_infoData()
		await assertion.assertEqual(sts.infoTocHeading, testdata[2].infoTocHeading, "infoTocHeading mismatch");
		await assertion.assertEqual(sts.closeInfoBtn, true, "closeInfoBtn mismatch");
		await assertion.assertEqual(sts.chapterTitle, testdata[1], "chapterTitle text mismatch");
		await assertion.assertEqual(sts.productbtn, testdata[0], "productbtn text mismatch");
		await assertion.assertEqual(sts.bookIcon, true, "bookIcon mismatch");
		await assertion.assertEqual(sts.bookName, testdata[3].name, "bookName text mismatch");
	},
	ENG_SHELL_TC_30: async function (testdata) {
		sts = await appShell.click_resourseData(testdata)
		await assertion.assertEqual(sts, true, "Resourse is not launched. ");
	},
	ENG_SHELL_TC_31: async function (testdata) {
		sts = await appShell.click_closeInfoBtn(testdata)
		await assertion.assertEqual(sts, true, "Close btn is not clicked");
	},
	//Validate that clicking on the Library button in left Navigation pane launches Library page 
	ENG_SHELL_TC_32: async function () {
		sts = await appShell.clickLibraryButton();
		await assertion.assertEqual(sts.pageStatus, true, "Button is clicked.");
	},
}
