'use strict';
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

	textbox: selectorFile.css.ComproEngage.writing.textbox,

	isInitialized: function () {
		logger.logInto(stackTrace.get());
		action.waitForDisplayed("iframe[id*=iframe], iframe");
		action.switchToFrame(0);
		let res = action.waitForDisplayed(this.textbox);
		action.switchToParentFrame();
		return res;
	},

	set_textboxValue: function (writingData) {
		logger.logInto(stackTrace.get());
		let res, textboxSelector;
		action.switchToFrame(0);
		for (let i = 0; i < writingData.length; i++) {
			textboxSelector = this.textbox + writingData[i][0] + "]";
			res = action.getElementCount(textboxSelector);
			if (res == 1) {
				res = action.setValue(textboxSelector, writingData[i][1]);
				if (true == res) {
					logger.logInto(stackTrace.get(), res + " -- value is entered");
				}
				else {
					res = res + "-- Error in entering value in the textbox";
					logger.logInto(stackTrace.get(), res, "error");
					break;
				}
			}
		}
		action.switchToParentFrame();
		return res;
	},

	getData_writing: function (writingData) {
		logger.logInto(stackTrace.get());
		action.switchToFrame(0);
		var arr = [];
		var res, textboxSelector;
		for (let i = 0; i < writingData.length; i++) {
			textboxSelector = this.textbox + writingData[i][0] + "] ";
			res = action.getElementCount(textboxSelector);
			if (res == 1)
				arr[i] = [writingData[i][0], action.getValue(textboxSelector), action.getAttribute(textboxSelector, "readonly")]
		}
		action.switchToParentFrame();
		return arr;
	}
}