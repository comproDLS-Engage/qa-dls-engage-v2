"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

	headerbandDiv: selectorFile.css.ComproEngage.appShell.headerbandDiv,
	toggleSidebarBtn: selectorFile.css.ComproEngage.appShell.toggleSidebarBtn,
	//Left Pane
	custLogo: selectorFile.css.ComproEngage.appShell.custLogo,
	dashboardBtn: selectorFile.css.ComproEngage.appShell.dashboardBtn,
	browseBtn: selectorFile.css.ComproEngage.appShell.browseBtn,
	classesBtn: selectorFile.css.ComproEngage.appShell.classesBtn,
	helpBtn: selectorFile.css.ComproEngage.appShell.helpBtn,
	settingsBtn: selectorFile.css.ComproEngage.appShell.settingsBtn,
	sidebarImg: selectorFile.css.ComproEngage.appShell.sidebarImg,
	poweredbyTxt: selectorFile.css.ComproEngage.appShell.poweredbyTxt,
	comproLogo: selectorFile.css.ComproEngage.appShell.comproLogo,
	versionTxt: selectorFile.css.ComproEngage.appShell.versionTxt,
	//Header
	notificationBtn: selectorFile.css.ComproEngage.appShell.notificationBtn,
	notificationCloseBtn: selectorFile.css.ComproEngage.appShell.notificationCloseBtn,
	notificationTxt: selectorFile.css.ComproEngage.appShell.notificationTxt,
	noNotificationImg: selectorFile.css.ComproEngage.appShell.noNotificationImg,
	grayBackdrop: selectorFile.css.ComproEngage.appShell.grayBackdrop,
	languageSwitcherBtn: selectorFile.css.ComproEngage.appShell.languageSwitcherBtn,
	languageList: selectorFile.css.ComproEngage.appShell.languageList,
	selectedLanguage: selectorFile.css.ComproEngage.appShell.selectedLanguage,
	userProfileBtn: selectorFile.css.ComproEngage.appShell.userProfileBtn,
	userName: selectorFile.css.ComproEngage.appShell.userName,
	emailID: selectorFile.css.ComproEngage.appShell.emailID,
	userProfileHelpBtn: selectorFile.css.ComproEngage.appShell.userProfileHelpBtn,
	userProfileSettingsBtn: selectorFile.css.ComproEngage.appShell.userProfileSettingsBtn,
	userProfileLogoutBtn: selectorFile.css.ComproEngage.appShell.userProfileLogoutBtn,
	classPlusIcon: selectorFile.css.ComproEngage.appShell.classPlusIcon,
	breadcrumbbackbtn: selectorFile.css.ComproEngage.appShell.breadcrumbbackbtn,
	indexBtn: selectorFile.css.ComproEngage.appShell.indexBtn,
	chapterTitle: selectorFile.css.ComproEngage.appShell.chapterTitle,
	indexCloseBtn: selectorFile.css.ComproEngage.appShell.indexCloseBtn,
	indexTOCPanel: selectorFile.css.ComproEngage.appShell.indexTOCPanel,
	inviteBtnTxt: selectorFile.css.ComproEngage.appShell.inviteBtnTxt,
	inviteStudentText: selectorFile.css.ComproEngage.appShell.inviteStudentText,
	addToPlaylistBtn: selectorFile.css.ComproEngage.appShell.addToPlaylistBtn,
	newPlaylistOption: selectorFile.css.ComproEngage.appShell.newPlaylistOption,
	tabList: selectorFile.css.ComproEngage.appShell.component,
	assignBtn: selectorFile.css.ComproEngage.appShell.assignBtn,
	shareBtn: selectorFile.css.ComproEngage.appShell.shareBtn,

	isInitialized: async function () {
		await logger.logInto(await stackTrace.get());
		await action.waitForDocumentLoad();
		res = {
			leftPane: ((await action.getElementCount(this.custLogo + "," + this.toggleSidebarBtn)) > 0) ? true : false,
			header: ((await action.getElementCount(this.headerbandDiv)) > 0) ? true : false
		}
		return res;
	},

	getAppShellLeftPaneData: async function () {
		var obj = {
			custLogo_exists: ((await action.getElementCount(this.custLogo)) > 0) ? await action.waitForDisplayed(this.custLogo) : false,
			dashboardBtn: ((await action.getElementCount(this.dashboardBtn)) > 0) ? await action.getText(this.dashboardBtn) : null,
			browseBtn: ((await action.getElementCount(this.browseBtn)) > 0) ? await action.getText(this.browseBtn) : null,
			classesBtn: ((await action.getElementCount(this.classesBtn)) > 0) ? await action.getText(this.classesBtn) : null,
			helpBtn: ((await action.getElementCount(this.helpBtn)) > 0) ? await action.getText(this.helpBtn) : null,
			settingsBtn: ((await action.getElementCount(this.settingsBtn)) > 0) ? await action.getText(this.settingsBtn) : null,
			sidebarImg_exists: ((await action.getElementCount(this.sidebarImg)) > 0) ? await action.waitForDisplayed(this.sidebarImg) : false,
			poweredbyTxt: ((await action.getElementCount(this.poweredbyTxt)) > 0) ? await action.getText(this.poweredbyTxt) : null,
			comproLogo_exists: ((await action.getElementCount(this.comproLogo)) > 0) ? await action.waitForDisplayed(this.comproLogo) : false,
			versionTxt: ((await action.getElementCount(this.versionTxt)) > 0) ? await action.getText(this.versionTxt) : null
		};
		return obj;
	},

	getAppShellHeaderData: async function () {
		var obj = {
			notificationBtn_exists: ((await action.getElementCount(this.notificationBtn)) > 0) ? await action.waitForDisplayed(this.notificationBtn) : false,
			selectedLanguage: ((await action.getElementCount(this.selectedLanguage)) > 0) ? await action.getText(this.selectedLanguage) : null,
			userProfileBtn_exists: ((await action.getElementCount(this.userProfileBtn)) > 0) ? await action.waitForDisplayed(this.userProfileBtn) : false,
			indexBtn: ((await action.getElementCount(this.indexBtn)) > 0) ? await action.getText(this.indexBtn) : null,
			inviteBtnTxt: ((await action.getElementCount(this.inviteBtnTxt)) > 0) ? await action.getText(this.inviteBtnTxt) : null,
			addToPlaylistBtn: ((await action.getElementCount(this.addToPlaylistBtn)) > 0) ? await action.getText(this.addToPlaylistBtn) : null,
			assignBtn: ((await action.getElementCount(this.assignBtn)) > 0) ? await action.getText(this.assignBtn) : null,
			shareBtn: ((await action.getElementCount(this.shareBtn)) > 0) ? await action.getText(this.shareBtn) : null
		};
		return obj;
	},

	clickDashboardButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.dashboardBtn);
		if (true == res) {
			let dashboardPage = await require('./dashboard.page.js');
			res = await dashboardPage.isInitialized();
		}
		else {
			res = res + " -- Error in clicking Dashboard Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickBrowseButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.browseBtn);
		if (true == res) {
			let browse = await require('./browse.page.js');
			res = await browse.isInitialized();
		}
		else {
			res = res + " -- Error in clicking Browse Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickClassesButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.classesBtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), res);
		}
		else {
			res = res + " -- Error in clicking Class Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	click_PlusIconClassesTab: async function () {
		res = await action.click(this.classPlusIcon)
		if (res == true) {
			await logger.logInto(await stackTrace.get(), res + "Class plus button is clicked");
		}
		else
			await logger.logInto(await stackTrace.get(), res + ":Add A New Book Button is NOT Clicked", "error");
		return res;
	},

	clickNotificationButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.notificationBtn);
		if (true == res) {
			await action.waitForDisplayed(this.noNotificationImg);
			res = {
				notificationTxt: ((await action.getElementCount(this.notificationTxt)) > 0) ? await action.getText(this.notificationTxt) : null,
				notificationCloseBtn_exists: ((await action.getElementCount(this.notificationCloseBtn)) > 0) ? await action.waitForDisplayed(this.notificationCloseBtn) : false,
				noNotificationImg_exists: ((await action.getElementCount(this.noNotificationImg)) > 0) ? await action.waitForDisplayed(this.noNotificationImg) : null,
			};
		}
		else {
			res = res + " -- Error in clicking Notification Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickNotificationCloseButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.notificationCloseBtn);
		if (true == res) {
			res = await action.waitForDisplayed(this.grayBackdrop, undefined, true);
		}
		else {
			res = res + " -- Error in clicking Notification Close Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	/*getLanguageListFromDropdown: async function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.languageSwitcherBtn);
		if (res == true) {
			var languageData = [];
			var languageSelector, languageCount, i;
			languageCount = action.getElementCount(this.languageList);
			for (i = 0; i < languageCount; i++) {
				languageSelector = this.languageList + i + "]";
				languageData[i] = action.getText(languageSelector);
			}
		}
		else {
			res = res + " -- Error in clicking language Selector Arrow";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return languageData;
	},

	selectLanguage: async function (lang) {
		logger.logInto(stackTrace.get());
		let languageSelector;
		languageSelector = this.languageList + "0]";
		res = action.click(languageSelector);
		return res;
	},*/

	selectLanguagefromLanguageSelector: async function (languageToSelect) {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.languageSwitcherBtn);
		await action.waitForDisplayed(this.languageList);
		if (res == true) {
			let list, i, languageListText;
			list = await action.findElements(this.languageList);
			for (i = 0; i < list.length; i++) {
				languageListText = await action.getText(list[i]);
				if (languageListText.includes(languageToSelect)) {
					res = await action.click(list[i]);
					if (res == true) {
						res = await action.getText(this.selectedLanguage);
						break;
					}
				}
			}
		}
		else {
			res = res + " -- Error in clicking languageSwitcherBtn";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickProfileButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.waitForDisplayed(this.userProfileBtn);
		res = await action.click(this.userProfileBtn);

		if (true == res) {
			await action.waitForDisplayed(this.userName);
			res = await this.getProfileData();
		}
		else {
			res = res + " -- Error in clicking Profile Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	getProfileData: async function () {
		await logger.logInto(await stackTrace.get());
		var obj = {
			userName: ((await action.getElementCount(this.userName)) > 0) ? await action.getText(this.userName) : null,
			emailID: ((await action.getElementCount(this.emailID)) > 0) ? await action.getText(this.emailID) : null,
			userProfileHelpBtn: ((await action.getElementCount(this.userProfileHelpBtn)) > 0) ? await action.getText(this.userProfileHelpBtn) : null,
			userProfileSettingsBtn: ((await action.getElementCount(this.userProfileSettingsBtn)) > 0) ? await action.getText(this.userProfileSettingsBtn) : null,
			userProfileLogoutBtn: ((await action.getElementCount(this.userProfileLogoutBtn)) > 0) ? await action.getText(this.userProfileLogoutBtn) : null,
			notificationTxt: ((await action.getElementCount(this.notificationTxt)) > 0) ?await action.getText(this.notificationTxt) : null,
			notificationBtn_exists: ((await action.getElementCount(this.notificationBtn)) > 0) ? await action.waitForDisplayed(this.notificationBtn) : false,
			selectedLanguage: ((await action.getElementCount(this.selectedLanguage) > 0)) ? await action.getText(this.selectedLanguage) : null,
		}
		return obj;
	},

	clickLogoutButton: async function () {
		await logger.logInto(await stackTrace.get());
		await action.waitForDisplayed(this.userProfileLogoutBtn);
		res = await action.click(this.userProfileLogoutBtn);
		if (true == res) {
			res = await require('./landing.page.js').isInitialized();
		}
		else {
			res = res + " -- Error in clicking Profile Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickBackButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.breadcrumbbackbtn);
		if (res == true) {
			await logger.logInto(await stackTrace.get(), res + "back button is clicked");
		}
		else
			await logger.logInto(await stackTrace.get(), res + ":back button is NOT Clicked", "error");
		return res;
	},

	clickIndexButton: async function () { //to be reviewed - akhil
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.indexBtn);
		if (true == res) {
			await action.waitForDisplayed(this.chapterTitle);
			res = {
				chapterTitleTxt: ((await action.getElementCount(this.chapterTitle)) > 0) ? await action.getText(this.chapterTitle) : null,
			};
		}
		else {
			res = res + " -- Error in clicking index Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickIndexCloseButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.indexCloseBtn);
		if (true == res) {
			res = await action.waitForDisplayed(this.indexTOCPanel, undefined, true);
		}
		else {
			res = res + " -- Error in clicking Index Close Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickInviteButton: async function () { //to be reviewed - akhil
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.inviteBtnTxt);
		if (true == res) {
			res = {
				inviteBtnTxt: ((await action.getElementCount(this.inviteBtnTxt)) > 0) ? await action.getText(this.inviteBtnTxt) : null,
			};
		}
		else {
			res = res + " -- Error in clicking Invite Button Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickAddToPlaylistButton: async function () { //to be reviewed - akhil
		//page not working currently, getting crash
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.addToPlaylistBtn);
		if (true == res) {
			await action.waitForDisplayed(this.newPlaylistOption);
			res = {
				newPlaylistOption: ((await action.getElementCount(this.newPlaylistOption)) > 0) ? await action.getText(this.newPlaylistOption) : null
			};
		}
		else {
			res = res + " -- Error in clicking Add To Playlist Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickAssignButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.assignBtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), res + "Assign Button clicked");
			res = await require('./createAssignment.page.js').isInitialized();
		} else
			await logger.logInto(await stackTrace.get(), res + " -- Error in clicking Assign Button", 'error');
		return res;
	},

	selectTab: async function (str) {
		await logger.logInto(await stackTrace.get());
		let i, list;
		list = await action.findElements(this.tabList);
		for (i = 0; i < list.length; i++) {
			if ((await action.getText(list[i])) == str) {
				res = await action.click(list[i]);
				if (res == true) {
					await logger.logInto(await stackTrace.get(), " --Component clicked");
				} else
					await logger.logInto(await stackTrace.get(), " --Component NOT clicked", "error");
				break;
			}
			res = false;
		}
		return res;
	},

	getTabsListData: async function () {
		await logger.logInto(await stackTrace.get());
		let i, list;
		let obj = {
			list: null,
			selected: null
		};
		let componentArr = [];

		list = await action.findElements(this.tabList);
		for (i = 0; i < list.length; i++) {
			componentArr[i] = await action.getText(list[i])
			if ((await action.getAttribute(list[i], "aria-selected")) == "true")
				obj.selected = componentArr[i];
		}
		obj.list = componentArr;
		await logger.logInto(await stackTrace.get(), await JSON.stringify(obj));
		return obj;
	},

	clickSettingsButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.settingsBtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), res + "Settings Button clicked");
			res = await require('./settings.page.js').isInitialized()
		} else
			await logger.logInto(await stackTrace.get(), res + " -- Error in clicking Settings Button", 'error');
		return res;
	}
};