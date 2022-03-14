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
	isInitialized: function () {
		logger.logInto(stackTrace.get());
		action.waitForDocumentLoad();
		let pageStatus = action.waitForDisplayed(this.joinClassHeader);
		res = this.get_joinClassPopUpData();
		res.pageStatus = pageStatus;
		return res;
	},


	get_joinClassPopUpData: function () {
		logger.logInto(stackTrace.get());
		action.waitForExist("div[style*=\"visibility: hidden;\"]", 20000);
		var obj = {
			joinClassHeader: action.getElementCount(this.joinClassHeader) > 0 ? action.getText(this.joinClassHeader) : null,
			joinClassSubHeader: action.getElementCount(this.joinClassSubHeader) > 0 ? action.getText(this.joinClassSubHeader) : null,
			enterClassCodeLabel: action.getElementCount(this.enterClassCodeLabel) > 0 ? action.getText(this.enterClassCodeLabel) : null,
			classCodeInput: (action.getElementCount(this.classCodeInput) > 0) ? action.getAttribute(this.classCodeInput, "placeholder") : null,
			classHelpText: action.getElementCount(this.classHelpText) > 0 ? action.getText(this.classHelpText) : null,
			joinclassPopUpbtn: action.getElementCount(this.joinclassPopUpbtn) > 0 ? action.getText(this.joinclassPopUpbtn) : null,
			helpJoiningClass: action.getElementCount(this.helpJoiningClass) > 0 ? action.getText(this.helpJoiningClass) : null,
			closebtn: action.getElementCount(this.closebtn) > 0 ? action.waitForExist(this.closebtn) : null,
		}
		return obj;
	},
	set_ClassCode: function (code) {
		logger.logInto(stackTrace.get());
		res = action.click(this.classCodeInput);
		if (res == true) {
			logger.logInto(stackTrace.get(), "-- classCodeInput textbox is clicked");
			res = action.setValue(this.classCodeInput, code);
			if (res == true) {
				res = action.getValue(this.classCodeInput);
			}
		}
		else {
			res = res + "-- classCodeInput textbox is NOT clicked";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_joinclassPopUpbtn: function () {
		logger.logInto(stackTrace.get());
		action.waitForDisplayed(this.joinclassPopUpbtn);
		res = action.click(this.joinclassPopUpbtn);
		browser.pause(4000)
		if (res == true) {
			logger.logInto(stackTrace.get(), res + " -- joinclassPopUpbtn is clicked");
		}
		else {
			res = res + " -- joinclassPopUpbtn is NOT clicked";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_ClosebtnjoinclassPopUp: function () {
		logger.logInto(stackTrace.get());
		action.waitForDisplayed(this.closebtn);
		res = action.click(this.closebtn);
		if (res == true) {
			logger.logInto(stackTrace.get(), res + " -- joinclassPopUpbtn is clicked");
		}
		else {
			res = res + " -- joinclassPopUpbtn is NOT clicked";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
}
