'use strict';
const itemplayer = require('./itemPlayer.page.js');
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

	choices: selectorFile.css.ComproEngage.multiMcq.choices,
	selectedChoice: selectorFile.css.ComproEngage.multiMcq.selectedChoice,
	subquesText: selectorFile.css.ComproEngage.multiMcq.subquesText,
	subquesMediaCont1: selectorFile.css.ComproEngage.multiMcq.subquesMediaCont1,
	subquesMediaCont2: selectorFile.css.ComproEngage.multiMcq.subquesMediaCont2,

	isInitialized: async function () {
		await logger.logInto(await stackTrace.get());
		//action.switchToFrame("[id*=iframe]");
		await action.switchToFrame(0);
		let res = await action.waitForExist(this.choices);
		await action.switchToParentFrame();
		return res;
	},

	clickOption: async function (mcqQuesData) {
		await logger.logInto(await stackTrace.get());
		await action.switchToFrame(0);
		let res, choiceSelector;
		for (let i = 0; i < mcqQuesData.length; i++) {
			choiceSelector = this.choices + mcqQuesData[i][0] + "]";
			res = await action.getElementCount(choiceSelector);
			if (res == 1 && mcqQuesData[i][2] == 'select') {
				res = await action.click(choiceSelector);
				if (true == res) {
					await logger.logInto(await stackTrace.get(), " -- choice is clicked");
				}
				else {
					res = res + "-- Error in clicking option";
					await logger.logInto(await stackTrace.get(), res, "error");
					break;
				}
			}
		}
		await action.switchToParentFrame();
		return res;
	},

	getData_options: async function (optionsArr) {
		await logger.logInto(await stackTrace.get());
		await action.switchToFrame(0);
		var obj = [];
		var choiceSelector, selChoiceSelector;
		for (let i = 0; i < optionsArr.length; i++) {
			choiceSelector = this.choices + optionsArr[i][0] + "]";
			selChoiceSelector =  choiceSelector + this.selectedChoice;
			obj[i] = [
				optionsArr[i][0],
				await action.getText(choiceSelector),
				(await action.getElementCount(selChoiceSelector) > 0) ? "select" : "",
				await itemplayer.getFeedbackIconDetails(choiceSelector)
			];
		}
		await action.switchToParentFrame();
		return obj;
	},

	getData_subques: async function (subquesArr) {
		await logger.logInto(await stackTrace.get());
		await action.switchToFrame(0);
		var obj = [];
		var sel;
		for (let i = 0; i < subquesArr.length; i++) {
			sel = this.subquesMediaCont1 + subquesArr[i][0] + this.subquesMediaCont2;
			obj[i] = [
				subquesArr[i][0],
				await action.getText(this.subquesText + subquesArr[i][0]),
				(await action.getElementCount(sel) > 0) ? await action.getAttribute(sel,'data-tid') : ""
			];
		}
		await action.switchToParentFrame();
		return obj;
	}
}