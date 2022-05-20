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
	appVersion: selectorFile.css.ComproEngage.landingPage.appVersion,

	isInitialized: async function () {
		await logger.logInto(await stackTrace.get());
		await action.waitForDocumentLoad();
		let pageStatus = await action.waitForDisplayed(this.brandLogo_img);
		res = await this.get_LandingPage_Data();
		res.pageStatus = pageStatus;
		return res;
	},

	get_LandingPage_Data: async function () {
		var obj = {
			headingText: ((await action.getElementCount(this.headingText)) > 0) ? await action.getText(this.headingText) : null,
			subheadingText: ((await action.getElementCount(this.subheadingText)) > 0) ? await action.getText(this.subheadingText) : null,
			signup_btnText: ((await action.getElementCount(this.signupBtn)) > 0) ? await action.getText(this.signupBtn) : null,
			login_btnText: ((await action.getElementCount(this.loginBtn)) > 0) ? await action.getText(this.loginBtn) : null,
			login_lblText: ((await action.getElementCount(this.loginLbl)) > 0) ? await action.getText(this.loginLbl) : null,
			landing_img_exists: ((await action.getElementCount(this.landing_img)) > 0) ? await action.waitForDisplayed(this.landing_img) : false,
			brandLogo_img_exists: ((await action.getElementCount(this.brandLogo_img)) > 0) ? await action.waitForDisplayed(this.brandLogo_img) : false,
			selectedLangImg_exists: ((await action.getElementCount(this.selectedLangImg)) > 0) ? await action.waitForDisplayed(this.selectedLangImg) : false,
			selectedLanguage: ((await action.getElementCount(this.selectedLang)) > 0) ? await action.getText(this.selectedLang) : null,
			footerLabel: ((await action.getElementCount(this.footerLbl)) > 0) ? await action.getText(this.footerLbl) : null,
			footerImage: ((await action.getElementCount(this.footerImg)) > 0) ? await action.waitForDisplayed(this.footerImg) : false,
			appVersion: ((await action.getElementCount(this.appVersion)) > 0) ? await action.getText(this.appVersion) : null,
		};
		if (global.appVersion == undefined)
			global.appVersion = obj.appVersion;
		return obj;
	},

	click_Signup_Button: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.signupBtn);
		if (true == res) {
			let signupPage = require('./signup.page.js');
			res = await signupPage.isInitializedSetEmailPage();
		}
		else {
			res = res + " -- Error in clicking signupBtn";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	click_Signin_Button: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.loginBtn);
		if (true == res) {
			let loginPage = require('./login.page.js');
			res = await loginPage.isInitialized();
		}
		else {
			res = res + " -- Error in clicking loginBtn";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	select_Language_from_dropdown: async function (lang) {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.languageSelector_dropdown);
		if (true == res) {
			let list, i;
			list = await action.findElements(this.languageSelector_dropdown_list);
			res = null;
			for (i = 1; i <= list.length; i++) {
				if (lang == (await action.getText(this.languageSelector_dropdown_list + ":nth-child(" + i + ")"))) {
					res = await action.click(this.languageSelector_dropdown_list + ":nth-child(" + i + ")");
					await logger.logInto(await stackTrace.get(), "Value " + lang + " selected from the drop down");
					break;
				}
			}
			if (res == null) {
				res = lang + " -- language not found in the dropdown";
				await logger.logInto(await stackTrace.get(), res, 'error');
			}
		}
		else {
			res = res + " -- Error in clicking language Selector Arrow";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	}
};