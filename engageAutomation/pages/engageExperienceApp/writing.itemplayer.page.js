'use strict';
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

	textbox: selectorFile.css.ComproEngage.writing.textbox,

	isInitialized: async function () {
		await logger.logInto(await stackTrace.get());
		await action.waitForDisplayed("iframe[id*=iframe], iframe");
		await action.switchToFrame(0);
		let res = await action.waitForDisplayed(this.textbox);
		await action.switchToParentFrame();
		return res;
	},

	set_textboxValue: async function (writingData) {
		await logger.logInto(await stackTrace.get());
		let res, textboxSelector;
		await action.switchToFrame(0);
		for (let i = 0; i < writingData.length; i++) {
			textboxSelector = this.textbox + writingData[i][0] + "]";
			res = await action.getElementCount(textboxSelector);
			if (res == 1) {
				res = await action.setValue(textboxSelector, writingData[i][1]);
				if (true == res) {
					await logger.logInto(await stackTrace.get(), res + " -- value is entered");
				}
				else {
					res = res + "-- Error in entering value in the textbox";
					await logger.logInto(await stackTrace.get(), res, "error");
					break;
				}
			}
		}
		await action.switchToParentFrame();
		return res;
	},

	getData_writing: async function (writingData) {
		await logger.logInto(await stackTrace.get());
		await action.switchToFrame(0);
		var arr = [];
		var res, textboxSelector;
		for (let i = 0; i < writingData.length; i++) {
			textboxSelector = this.textbox + writingData[i][0] + "] ";
			res = await action.getElementCount(textboxSelector);
			if (res == 1)
				arr[i] = [writingData[i][0], await action.getValue(textboxSelector), await action.getAttribute(textboxSelector, "readonly")]
		}
		await action.switchToParentFrame();
		return arr;
	}
}