"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

	signupBtn: selectorFile.css.ComproEngage.landingPage.signupBtn,
	loginBtn: selectorFile.css.ComproEngage.landingPage.loginBtn,
	loginLbl: selectorFile.css.ComproEngage.landingPage.loginLbl,
	headingText: selectorFile.css.ComproEngage.landingPage.headingText,
	subheadingText: selectorFile.css.ComproEngage.landingPage.subheadingText,
	landing_img: selectorFile.css.ComproEngage.landingPage.landing_img,
	brandLogo_img: selectorFile.css.ComproEngage.landingPage.brandLogo_img,
	selectedLangImg: selectorFile.css.ComproEngage.landingPage.selectedLangImg,
	selectedLang: selectorFile.css.ComproEngage.landingPage.selectedLang,
	languageSelector_dropdown: selectorFile.css.ComproEngage.landingPage.languageSelector_dropdown,
	languageSelector_dropdown_list: selectorFile.css.ComproEngage.landingPage.languageSelector_dropdown_list,
	footerLbl: selectorFile.css.ComproEngage.landingPage.footerLbl,
	footerImg: selectorFile.css.ComproEngage.landingPage.footerImg,

	isInitialized: function () {
		logger.logInto(stackTrace.get());
		action.waitForDocumentLoad();
		let pageStatus = action.waitForDisplayed(this.brandLogo_img);
		res = this.get_LandingPage_Data();
		res.pageStatus = pageStatus;
		return res;
	},

	get_LandingPage_Data: function () {
		var obj = {
			headingText: (action.getElementCount(this.headingText) > 0) ? action.getText(this.headingText) : null,
			subheadingText: (action.getElementCount(this.subheadingText) > 0) ? action.getText(this.subheadingText) : null,
			signup_btnText: (action.getElementCount(this.signupBtn) > 0) ? action.getText(this.signupBtn) : null,
			login_btnText: (action.getElementCount(this.loginBtn) > 0) ? action.getText(this.loginBtn) : null,
			login_lblText: (action.getElementCount(this.loginLbl) > 0) ? action.getText(this.loginLbl) : null,
			landing_img_exists: (action.getElementCount(this.landing_img) > 0) ? action.waitForDisplayed(this.landing_img) : false,
			brandLogo_img_exists: (action.getElementCount(this.brandLogo_img) > 0) ? action.waitForDisplayed(this.brandLogo_img) : false,
			selectedLangImg_exists: (action.getElementCount(this.selectedLangImg) > 0) ? action.waitForDisplayed(this.selectedLangImg) : false,
			selectedLanguage: (action.getElementCount(this.selectedLang) > 0) ? action.getText(this.selectedLang) : null,
			footerLabel: (action.getElementCount(this.footerLbl) > 0) ? action.getText(this.footerLbl) : null,
			footerImage: (action.getElementCount(this.footerImg) > 0) ? action.waitForDisplayed(this.footerImg) : false,
		};
		return obj;
	},

	click_Signup_Button: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.signupBtn);
		if (true == res) {
			let signupPage = require('./signup.page.js');
			res = signupPage.isInitializedSetEmailPage();
		}
		else {
			res = res + " -- Error in clicking signupBtn";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	click_Signin_Button: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.loginBtn);
		if (true == res) {
			let loginPage = require('./login.page.js');
			res = loginPage.isInitialized();
		}
		else {
			res = res + " -- Error in clicking loginBtn";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	select_Language_from_dropdown: function (lang) {
		logger.logInto(stackTrace.get());
		res = action.click(this.languageSelector_dropdown);
		if (true == res) {
			let list, i;
			list = action.findElements(this.languageSelector_dropdown_list);
			res = null;
			for (i = 1; i <= list.length; i++) {
				if (lang == action.getText(this.languageSelector_dropdown_list + ":nth-child(" + i + ")")) {
					res = action.click(this.languageSelector_dropdown_list + ":nth-child(" + i + ")");
					logger.logInto(stackTrace.get(), "Value " + lang + " selected from the drop down");
					break;
				}
			}
			if (res == null) {
				res = lang + " -- language not found in the dropdown";
				logger.logInto(stackTrace.get(), res, 'error');
			}
		}
		else {
			res = res + " -- Error in clicking language Selector Arrow";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	}
};