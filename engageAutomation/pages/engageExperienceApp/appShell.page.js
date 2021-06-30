"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

	toggleSidebarBtn: selectorFile.css.ComproEngage.appShell.toggleSidebarBtn, // added a selector for lower resolution - akhil
	headerLogo: selectorFile.css.ComproEngage.appShell.headerLogo,
	dashboardBtn: selectorFile.css.ComproEngage.appShell.dashboardBtn,
	browseBtn: selectorFile.css.ComproEngage.appShell.browseBtn,
	classesBtn: selectorFile.css.ComproEngage.appShell.classesBtn,
	helpBtn: selectorFile.css.ComproEngage.appShell.helpBtn,
	settingsBtn: selectorFile.css.ComproEngage.appShell.settingsBtn,
	sidebarImg: selectorFile.css.ComproEngage.appShell.sidebarImg,
	poweredbyTxt: selectorFile.css.ComproEngage.appShell.poweredbyTxt,
	comproLogo: selectorFile.css.ComproEngage.appShell.comproLogo,
	versionTxt: selectorFile.css.ComproEngage.appShell.versionTxt,
	notificationBtn: selectorFile.css.ComproEngage.appShell.notificationBtn,
	//notificationCloseBtn: selectorFile.css.ComproEngage.appShell.notificationCloseBtn, // should be part of notifications.page.js - akhil
	//notificationTxt: selectorFile.css.ComproEngage.appShell.notificationTxt, // should be part of notifications.page.js - akhil
	//markAllAsReadTxt: selectorFile.css.ComproEngage.appShell.markAllAsReadTxt, // should be part of notifications.page.js - akhil
	languageSwitcherBtn: selectorFile.css.ComproEngage.appShell.languageSwitcherBtn,
	languageList: selectorFile.css.ComproEngage.appShell.languageList,
	selectedLanguage: selectorFile.css.ComproEngage.appShell.selectedLanguage, // added a selector - akhil
	userProfileBtn: selectorFile.css.ComproEngage.appShell.userProfileBtn,
	userName: selectorFile.css.ComproEngage.appShell.userName,
	emailID: selectorFile.css.ComproEngage.appShell.emailID,
	userProfileOptionBtns: selectorFile.css.ComproEngage.appShell.userProfileOptionBtns,
	userProfileHelpBtn: selectorFile.css.ComproEngage.appShell.userProfileHelpBtn,
	userProfileSettingsBtn: selectorFile.css.ComproEngage.appShell.userProfileSettingsBtn,
	userProfileLogoutBtn: selectorFile.css.ComproEngage.appShell.userProfileLogoutBtn,

	isInitialized: function () {
		logger.logInto(stackTrace.get());
		action.waitForDocumentLoad();
		let pageStatus = action.waitForDisplayed(this.headerLogo);
		res = this.getAppShellData();
		res.pageStatus = pageStatus;
		return res;
	},

	getAppShellData: function () {
		var obj = {
			headerLogo_exists: (action.getElementCount(this.headerLogo) > 0) ? action.waitForDisplayed(this.headerLogo) : false,
			dashboardBtn: (action.getElementCount(this.dashboardBtn) > 0) ? action.getText(this.dashboardBtn) : null,
			browseBtn: (action.getElementCount(this.browseBtn) > 0) ? action.getText(this.browseBtn) : null,
			classesBtn: (action.getElementCount(this.classesBtn) > 0) ? action.getText(this.classesBtn) : null,
			helpBtn: (action.getElementCount(this.helpBtn) > 0) ? action.getText(this.helpBtn) : null,
			settingsBtn: (action.getElementCount(this.settingsBtn) > 0) ? action.getText(this.settingsBtn) : null,
			sidebarImg_exists: (action.getElementCount(this.sidebarImg) > 0) ? action.waitForDisplayed(this.sidebarImg) : false,
			poweredbyTxt: (action.getElementCount(this.poweredbyTxt) > 0) ? action.getText(this.poweredbyTxt) : null,
			comproLogo_exists: (action.getElementCount(this.comproLogo) > 0) ? action.waitForDisplayed(this.comproLogo) : false,
			versionTxt: (action.getElementCount(this.versionTxt) > 0) ? action.getText(this.versionTxt) : null,
			notificationBtn_exists: (action.getElementCount(this.notificationBtn) > 0) ? action.waitForDisplayed(this.notificationBtn) : false,
			//notificationTxt: (action.getElementCount(this.notificationTxt) > 0) ? action.getText(this.notificationTxt) : null,
			//notificationCloseBtn: (action.getElementCount(this.notificationCloseBtn) > 0) ? action.getText(this.notificationCloseBtn) : null,
			//markAllAsReadTxt: (action.getElementCount(this.markAllAsReadTxt) > 0) ? action.getText(this.markAllAsReadTxt) : null,
			selectedLanguage: (action.getElementCount(this.selectedLanguage) > 0) ? action.getText(this.selectedLanguage) : null,
			userProfileBtn_exists: (action.getElementCount(this.userProfileBtn) > 0) ? action.waitForDisplayed(this.userProfileBtn) : false,
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
			res = true;
			//Class page is not yet developed so returning true in this case
		}
		else {
			res = res + " -- Error in clicking Class Button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickNotificationButton: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.notificationBtn);
		if (true == res) {
			res = this.getNotificationData(); // we will have a seperate page obj for notifications - akhil
		}
		else {
			res = res + " -- Error in clicking Notification Button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	getNotificationData: function () { // this should part of notifications.page.js - akhil
		var obj = {
			notificationTxt: (action.getElementCount(this.notificationTxt) > 0) ? action.getText(this.notificationTxt) : null,
			notificationCloseBtn_exists: (action.getElementCount(this.notificationCloseBtn) > 0) ? action.waitForDisplayed(this.notificationCloseBtn) : false,
			markAllAsReadTxt: (action.getElementCount(this.markAllAsReadTxt) > 0) ? action.getText(this.markAllAsReadTxt) : null,
			//for now only 3 elements have been added, will add more
		};
		return obj;
	},

	clickNotificationCloseButton: function () { // this should part of notifications.page.js - akhil
		logger.logInto(stackTrace.get());
		res = action.click(this.notificationCloseBtn);
		if (true == res) {
			res = this.getAppShellData();
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

	selectLanguagefromLanguageSelector: function (langtoselect) {
		logger.logInto(stackTrace.get());
		res = action.click(this.languageSwitcherBtn);
		if (res == true) {
			let list, i;
			list = action.findElements(this.languageList);
			for (i = 0; i < list.length; i++) {
				if (action.getText(list[i]) == langtoselect) {
					res = action.click(list[i]);
					if (res == true) {
						res = action.getText(this.selectedLanguage);
					}
					break;
				}
			}
			res = "user provided language not found";
		}
		else {
			res = res + " -- Error in clicking languageSwitcherBtn";
			logger.logInto(stackTrace.get(), res, 'error');
		}
	},


	clickProfileButton: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.userProfileBtn);
		if (true == res) {
			res = this.getProfileData();
		}
		else {
			res = res + " -- Error in clicking Profile Button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	getProfileData: function () { // this function is not required...we should add 
		logger.logInto(stackTrace.get());
		var obj = {
			userName: (action.getElementCount(this.userName) > 0) ? action.getText(this.userName) : null,
			emailID: (action.getElementCount(this.emailID) > 0) ? action.getText(this.emailID) : null,
			//add following:
			//userProfileHelpBtn: ,
			//userProfileSettingsBtn: ,
			//userProfileLogoutBtn: ,
		}

		//since we have already created selectors for each option, hence following logic is not required - akhil
		/*let userProfileOptionData = [], i
		let userProfileOptionCount = action.getElementCount(this.userProfileOptionBtns)
		for (i = 0; i < userProfileOptionCount; i++) {
			let userProfileOptionSelector = this.userProfileOptionBtns + i + "]";
			userProfileOptionData[i] = action.getText(userProfileOptionSelector);
		}
		obj.options = userProfileOptionData;*/
		return obj;
	},

	//add function for logout - akhil
};