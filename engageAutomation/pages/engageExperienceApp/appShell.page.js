"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

	difusionLogo: selectorFile.css.ComproEngage.appShell.difusionLogo,
	dashboardBtn: selectorFile.css.ComproEngage.appShell.dashboardBtn,
	browseBtn: selectorFile.css.ComproEngage.appShell.browseBtn,
	classesBtn: selectorFile.css.ComproEngage.appShell.classesBtn,
	helpBtn: selectorFile.css.ComproEngage.appShell.helpBtn,
	settingsBtn: selectorFile.css.ComproEngage.appShell.settingsBtn,
	leftPaneImg: selectorFile.css.ComproEngage.appShell.leftPaneImg,
	poweredByTxt: selectorFile.css.ComproEngage.appShell.poweredByTxt,
	comproLogo: selectorFile.css.ComproEngage.appShell.comproLogo,
	versionTxt: selectorFile.css.ComproEngage.appShell.versionTxt,
	notificationBtn: selectorFile.css.ComproEngage.appShell.notificationBtn,
	notificationCloseBtn: selectorFile.css.ComproEngage.appShell.notificationCloseBtn,
	notificationTxt: selectorFile.css.ComproEngage.appShell.notificationTxt,
	markAllAsReadTxt: selectorFile.css.ComproEngage.appShell.markAllAsReadTxt,
	languageSwitcherBtn: selectorFile.css.ComproEngage.appShell.languageSwitcherBtn,
	languageSelector_dropdown_list: selectorFile.css.ComproEngage.appShell.languageSelector_dropdown_list,
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
		let pageStatus = action.waitForDisplayed(this.difusionLogo);
		res = this.getAppShellData();
		res.pageStatus = pageStatus;
		return res;
	},

	getAppShellData: function () {
		var obj = {
			difusionLogo_exists: (action.getElementCount(this.difusionLogo) > 0) ? action.waitForDisplayed(this.difusionLogo) : false,
			dashboardBtn: (action.getElementCount(this.dashboardBtn) > 0) ? action.getText(this.dashboardBtn) : null,
			browseBtn: (action.getElementCount(this.browseBtn) > 0) ? action.getText(this.browseBtn) : null,
			classesBtn: (action.getElementCount(this.classesBtn) > 0) ? action.getText(this.classesBtn) : null,
			helpBtn: (action.getElementCount(this.helpBtn) > 0) ? action.getText(this.helpBtn) : null,
			settingsBtn: (action.getElementCount(this.settingsBtn) > 0) ? action.getText(this.settingsBtn) : null,
			leftPaneImg_exists: (action.getElementCount(this.leftPaneImg) > 0) ? action.waitForDisplayed(this.leftPaneImg) : false,
			poweredByTxt: (action.getElementCount(this.poweredByTxt) > 0) ? action.getText(this.poweredByTxt) : null,
			comproLogo_exists: (action.getElementCount(this.comproLogo) > 0) ? action.waitForDisplayed(this.comproLogo) : false,
			versionTxt: (action.getElementCount(this.versionTxt) > 0) ? action.getText(this.versionTxt) : null,
			notificationBtn_exists: (action.getElementCount(this.notificationBtn) > 0) ? action.waitForDisplayed(this.notificationBtn) : false,
			notificationTxt: (action.getElementCount(this.notificationTxt) > 0) ? action.getText(this.notificationTxt) : null,
			notificationCloseBtn: (action.getElementCount(this.notificationCloseBtn) > 0) ? action.getText(this.notificationCloseBtn) : null,
			markAllAsReadTxt: (action.getElementCount(this.markAllAsReadTxt) > 0) ? action.getText(this.markAllAsReadTxt) : null,
			languageSwitcherBtn_exists: (action.getElementCount(this.languageSwitcherBtn) > 0) ? action.waitForDisplayed(this.languageSwitcherBtn) : false,
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
			res = this.getNotificationData();
		}
		else {
			res = res + " -- Error in clicking Notification Button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	getNotificationData: function () {
		var obj = {
			notificationTxt: (action.getElementCount(this.notificationTxt) > 0) ? action.getText(this.notificationTxt) : null,
			notificationCloseBtn_exists: (action.getElementCount(this.notificationCloseBtn) > 0) ? action.waitForDisplayed(this.notificationCloseBtn) : false,
			markAllAsReadTxt: (action.getElementCount(this.markAllAsReadTxt) > 0) ? action.getText(this.markAllAsReadTxt) : null,
			//for now only 3 elements have been added, will add more
		};
		return obj;
	},

	clickNotificationCloseButton: function () {
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

	getLanguageListFromDropdown: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.languageSwitcherBtn);
		if (res == true) {
			var languageData = [];
			var languageSelector, languageCount, i;
			languageCount = action.getElementCount(this.languageSelector_dropdown_list);
			for (i = 0; i < languageCount; i++) {
				languageSelector = this.languageSelector_dropdown_list + i + "]";
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
		languageSelector = this.languageSelector_dropdown_list + "0]";
		res = action.click(languageSelector);
		return res;
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

	getProfileData: function () {
		var obj = {
			userName: (action.getElementCount(this.userName) > 0) ? action.getText(this.userName) : null,
			emailID: (action.getElementCount(this.emailID) > 0) ? action.getText(this.emailID) : null,
		}
		let userProfileOptionData = [], i
		let userProfileOptionCount = action.getElementCount(this.userProfileOptionBtns)
		for (i = 0; i < userProfileOptionCount; i++) {
			let userProfileOptionSelector = this.userProfileOptionBtns + i + "]";
			userProfileOptionData[i] = action.getText(userProfileOptionSelector);
		}
		obj.options = userProfileOptionData;
		return obj;
	},
};