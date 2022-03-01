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

	isInitialized: function () {
		logger.logInto(stackTrace.get());
		action.waitForDocumentLoad();
		res = {
			leftPane: (action.getElementCount(this.custLogo + "," + this.toggleSidebarBtn) > 0) ? true : false,
			header: (action.getElementCount(this.headerbandDiv) > 0) ? true : false
		}
		return res;
	},

	getAppShellLeftPaneData: function () {
		var obj = {
			custLogo_exists: (action.getElementCount(this.custLogo) > 0) ? action.waitForDisplayed(this.custLogo) : false,
			dashboardBtn: (action.getElementCount(this.dashboardBtn) > 0) ? action.getText(this.dashboardBtn) : null,
			browseBtn: (action.getElementCount(this.browseBtn) > 0) ? action.getText(this.browseBtn) : null,
			classesBtn: (action.getElementCount(this.classesBtn) > 0) ? action.getText(this.classesBtn) : null,
			helpBtn: (action.getElementCount(this.helpBtn) > 0) ? action.getText(this.helpBtn) : null,
			settingsBtn: (action.getElementCount(this.settingsBtn) > 0) ? action.getText(this.settingsBtn) : null,
			sidebarImg_exists: (action.getElementCount(this.sidebarImg) > 0) ? action.waitForDisplayed(this.sidebarImg) : false,
			poweredbyTxt: (action.getElementCount(this.poweredbyTxt) > 0) ? action.getText(this.poweredbyTxt) : null,
			comproLogo_exists: (action.getElementCount(this.comproLogo) > 0) ? action.waitForDisplayed(this.comproLogo) : false,
			versionTxt: (action.getElementCount(this.versionTxt) > 0) ? action.getText(this.versionTxt) : null
		};
		return obj;
	},

	getAppShellHeaderData: function () {
		var obj = {
			notificationBtn_exists: (action.getElementCount(this.notificationBtn) > 0) ? action.waitForDisplayed(this.notificationBtn) : false,
			selectedLanguage: (action.getElementCount(this.selectedLanguage) > 0) ? action.getText(this.selectedLanguage) : null,
			userProfileBtn_exists: (action.getElementCount(this.userProfileBtn) > 0) ? action.waitForDisplayed(this.userProfileBtn) : false,
			indexBtn: (action.getElementCount(this.indexBtn) > 0) ? action.getText(this.indexBtn) : null,
			inviteBtnTxt: (action.getElementCount(this.inviteBtnTxt) > 0) ? action.getText(this.inviteBtnTxt) : null,
			addToPlaylistBtn: (action.getElementCount(this.addToPlaylistBtn) > 0) ? action.getText(this.addToPlaylistBtn) : null
		};
		return obj;
	},

	clickDashboardButton: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.dashboardBtn);
		if (true == res) {
			let dashboardPage = require('./dashboard.page.js');
			res = dashboardPage.isInitialized();
		}
		else {
			res = res + " -- Error in clicking Dashboard Button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickBrowseButton: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.browseBtn);
		if (true == res) {
			let browse = require('./browse.page.js');
			res = browse.isInitialized();
		}
		else {
			res = res + " -- Error in clicking Browse Button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickClassesButton: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.classesBtn);
		if (true == res) {
			logger.logInto(stackTrace.get(), res);
		}
		else {
			res = res + " -- Error in clicking Class Button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	click_PlusIconClassesTab: function () {
		res = action.click(this.classPlusIcon)
		if (res == true) {
			logger.logInto(stackTrace.get(), res + "Class plus button is clicked");
		}
		else
			logger.logInto(stackTrace.get(), res + ":Add A New Book Button is NOT Clicked", "error");
		return res;
	},

	clickNotificationButton: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.notificationBtn);
		if (true == res) {
			action.waitForDisplayed(this.noNotificationImg);
			res = {
				notificationTxt: (action.getElementCount(this.notificationTxt) > 0) ? action.getText(this.notificationTxt) : null,
				notificationCloseBtn_exists: (action.getElementCount(this.notificationCloseBtn) > 0) ? action.waitForDisplayed(this.notificationCloseBtn) : false,
				noNotificationImg_exists: (action.getElementCount(this.noNotificationImg) > 0) ? action.waitForDisplayed(this.noNotificationImg) : null,
			};
		}
		else {
			res = res + " -- Error in clicking Notification Button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickNotificationCloseButton: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.notificationCloseBtn);
		if (true == res) {
			res = action.waitForDisplayed(this.grayBackdrop, undefined, true);
		}
		else {
			res = res + " -- Error in clicking Notification Close Button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	/*getLanguageListFromDropdown: function () {
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

	selectLanguage: function (lang) {
		logger.logInto(stackTrace.get());
		let languageSelector;
		languageSelector = this.languageList + "0]";
		res = action.click(languageSelector);
		return res;
	},*/

	selectLanguagefromLanguageSelector: function (languageToSelect) {
		logger.logInto(stackTrace.get());
		res = action.click(this.languageSwitcherBtn);
		action.waitForDisplayed(this.languageList);
		if (res == true) {
			let list, i, languageListText;
			list = action.findElements(this.languageList);
			for (i = 0; i < list.length; i++) {
				languageListText = action.getText(list[i]);
				if (languageListText.includes(languageToSelect)) {
					res = action.click(list[i]);
					if (res == true) {
						res = action.getText(this.selectedLanguage);
						break;
					}
				}
			}
		}
		else {
			res = res + " -- Error in clicking languageSwitcherBtn";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickProfileButton: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.userProfileBtn);
		if (true == res) {
			action.waitForDisplayed(this.userName);
			res = this.getProfileData();
		}
		else {
			res = res + " -- Error in clicking Profile Button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	getProfileData: function () {
		logger.logInto(stackTrace.get());
		var obj = {
			userName: (action.getElementCount(this.userName) > 0) ? action.getText(this.userName) : null,
			emailID: (action.getElementCount(this.emailID) > 0) ? action.getText(this.emailID) : null,
			userProfileHelpBtn: (action.getElementCount(this.userProfileHelpBtn) > 0) ? action.getText(this.userProfileHelpBtn) : null,
			userProfileSettingsBtn: (action.getElementCount(this.userProfileSettingsBtn) > 0) ? action.getText(this.userProfileSettingsBtn) : null,
			userProfileLogoutBtn: (action.getElementCount(this.userProfileLogoutBtn) > 0) ? action.getText(this.userProfileLogoutBtn) : null,
		}
		return obj;
	},

	clickLogoutButton: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.userProfileLogoutBtn);
		if (true == res) {
			let landing = require('./landing.page.js');
			res = landing.isInitialized();
		}
		else {
			res = res + " -- Error in clicking Profile Button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickBackButton: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.breadcrumbbackbtn);
		if (res == true) {
			logger.logInto(stackTrace.get(), res + "back button is clicked");
		}
		else
			logger.logInto(stackTrace.get(), res + ":back button is NOT Clicked", "error");
		return res;
	},

	clickIndexButton: function () { //to be reviewed - akhil
		logger.logInto(stackTrace.get());
		res = action.click(this.indexBtn);
		if (true == res) {
			action.waitForDisplayed(this.chapterTitle);
			res = {
				chapterTitleTxt: (action.getElementCount(this.chapterTitle) > 0) ? action.getText(this.chapterTitle) : null,
			};
		}
		else {
			res = res + " -- Error in clicking index Button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickIndexCloseButton: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.indexCloseBtn);
		if (true == res) {
			res = action.waitForDisplayed(this.indexTOCPanel, undefined, true);
		}
		else {
			res = res + " -- Error in clicking Index Close Button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickInviteButton: function () { //to be reviewed - akhil
		logger.logInto(stackTrace.get());
		res = action.click(this.inviteBtnTxt);
		if (true == res) {
			res = {
				inviteBtnTxt: (action.getElementCount(this.inviteBtnTxt) > 0) ? action.getText(this.inviteBtnTxt) : null,
			};
		}
		else {
			res = res + " -- Error in clicking Invite Button Button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickAddToPlaylistButton: function () { //to be reviewed - akhil
		//page not working currently, getting crash
		logger.logInto(stackTrace.get());
		res = action.click(this.addToPlaylistBtn);
		if (true == res) {
			action.waitForDisplayed(this.newPlaylistOption);
			res = {
				newPlaylistOption: (action.getElementCount(this.newPlaylistOption) > 0) ? action.getText(this.newPlaylistOption) : null
			};
		}
		else {
			res = res + " -- Error in clicking Add To Playlist Button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	selectTab: function (str) {
		logger.logInto(stackTrace.get());
		let i, list;
		list = action.findElements(this.tabList);
		for (i = 0; i < list.length; i++) {
			if (action.getText(list[i]) == str) {
				res = action.click(list[i]);
				if (res == true) {
					logger.logInto(stackTrace.get(), " --Component clicked");
				} else
					logger.logInto(stackTrace.get(), " --Component NOT clicked", "error");
				break;
			}
			res = false;
		}
		return res;
	},

	getTabsListData: function () {
		let i, list;
		let obj = {
			list: null,
			selected: null
		};
		let componentArr = [];

		list = action.findElements(this.tabList);
		for (i = 0; i < list.length; i++) {
			componentArr[i] = action.getText(list[i])
			if (action.getAttribute(list[i], "aria-selected") == "true")
				obj.selected = componentArr[i];
		}
		obj.list = componentArr;
		logger.logInto(stackTrace.get(), JSON.stringify(obj));
		return obj;
	},

	clickSettingsButton: function () {
		res = action.click(this.settingsBtn);
		if (true == res) {
			logger.logInto(stackTrace.get(), res + "Settings Button clicked");
			res = require('./settings.page.js').isInitialized()
		} else
			logger.logInto(stackTrace.get(), res + " -- Error in clicking Settings Button", 'error');
		return res;
	}
};