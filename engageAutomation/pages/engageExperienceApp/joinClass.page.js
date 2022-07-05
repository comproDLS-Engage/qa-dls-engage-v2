'use strict';
var action = require('../../core/actionLibrary/baseActionLibrary.js');
const teacherViewClassPage = require('./teacherViewClass.page.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

	joinClassHeader: selectorFile.css.ComproEngage.myClassPage.joinClassHeader,
	joinClassSubHeader: selectorFile.css.ComproEngage.myClassPage.joinClassSubHeader,
	enterClassCodeLabel: selectorFile.css.ComproEngage.myClassPage.enterClassCodeLabel,
	classCodeInput: selectorFile.css.ComproEngage.myClassPage.classCodeInput,
	classHelpText: selectorFile.css.ComproEngage.myClassPage.classHelpText,
	joinclassPopUpbtn: selectorFile.css.ComproEngage.myClassPage.joinclassPopUpbtn,
	helpJoiningClass: selectorFile.css.ComproEngage.myClassPage.helpJoiningClass,
	closebtn: selectorFile.css.ComproEngage.myClassPage.closebtn,
	viewClassOption: selectorFile.css.ComproEngage.myClassPage.viewClassOption,
	progressOption: selectorFile.css.ComproEngage.myClassPage.progressOption,
	loaderIcon: selectorFile.css.ComproEngage.appShell.loaderIcon,
	classSubLable:selectorFile.css.ComproEngage.myClassPage.classSubLable,
	isInitialized: async function () {
		await logger.logInto(await stackTrace.get());
		await action.waitForDocumentLoad();
		let pageStatus = await action.waitForDisplayed(this.joinClassHeader);
		res = await this.get_joinClassPopUpData();
		res.pageStatus = pageStatus;
		return res;
	},


	get_joinClassPopUpData: async function () {
		await logger.logInto(await stackTrace.get());
		await action.waitForExist("div[style*=\"visibility: hidden;\"]", 20000);
		var obj = {
			classSubLable: (await action.getElementCount(this.classSubLable)) > 0 ? await action.getText(this.classSubLable) : null,
			joinClassHeader: (await action.getElementCount(this.joinClassHeader)) > 0 ? await action.getText(this.joinClassHeader) : null,
			joinClassSubHeader: (await action.getElementCount(this.joinClassSubHeader)) > 0 ? await action.getText(this.joinClassSubHeader) : null,
			enterClassCodeLabel: (await action.getElementCount(this.enterClassCodeLabel)) > 0 ? await action.getText(this.enterClassCodeLabel) : null,
			classCodeInput: ((await action.getElementCount(this.classCodeInput)) > 0) ? await action.getAttribute(this.classCodeInput, "placeholder") : null,
			classHelpText: (await action.getElementCount(this.classHelpText)) > 0 ? await action.getText(this.classHelpText) : null,
			joinclassPopUpbtn: (await action.getElementCount(this.joinclassPopUpbtn)) > 0 ? await action.getText(this.joinclassPopUpbtn) : null,
			helpJoiningClass: (await action.getElementCount(this.helpJoiningClass)) > 0 ? await action.getText(this.helpJoiningClass) : null,
			closebtn: (await action.getElementCount(this.closebtn)) > 0 ? await action.waitForExist(this.closebtn) : null,
		}
		return obj;
	},
	set_ClassCode: async function (code) {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.classCodeInput);
		if (res == true) {
			await logger.logInto(await stackTrace.get(), "-- classCodeInput textbox is clicked");
			res = await action.setValue(this.classCodeInput, code);
			if (res == true) {
				res = await action.getValue(this.classCodeInput);
			}
		}
		else {
			res = res + "-- classCodeInput textbox is NOT clicked";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_joinclassPopUpbtn: async function () {
		await logger.logInto(await stackTrace.get());
		await action.waitForDisplayed(this.joinclassPopUpbtn);
		res = await action.click(this.joinclassPopUpbtn);
		await browser.pause(4000)
		if (res == true) {
			await logger.logInto(await stackTrace.get(), res + " -- joinclassPopUpbtn is clicked");
		}
		else {
			res = res + " -- joinclassPopUpbtn is NOT clicked";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_ClosebtnjoinclassPopUp: async function () {
		await logger.logInto(await stackTrace.get());
		await action.waitForDisplayed(this.closebtn);
		res = await action.click(this.closebtn);
		if (res == true) {
			await logger.logInto(await stackTrace.get(), res + " -- joinclassPopUpbtn is clicked");
		}
		else {
			res = res + " -- joinclassPopUpbtn is NOT clicked";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},
}
