'use strict';
const itemplayer = require('./itemPlayer.page.js');
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

	choices: selectorFile.css.ComproEngage.multiMcq.choices,
	selectedChoice: selectorFile.css.ComproEngage.multiMcq.selectedChoice,

	isInitialized: async function () {
		await logger.logInto(stackTrace.get());
		//action.switchToFrame("[id*=iframe]");
		await action.switchToFrame(0);
		let res = await action.waitForExist(this.choices);
		await action.switchToParentFrame();
		return res;
	},

	clickOption: async function (mcqQuesData) {
		await logger.logInto(stackTrace.get());
		await action.switchToFrame(0);
		let res, choiceSelector;
		for (let i = 0; i < mcqQuesData.length; i++) {
			choiceSelector = this.choices + mcqQuesData[i][0] + "]";
			res = await action.getElementCount(choiceSelector);
			if (res == 1 && mcqQuesData[i][2] == 'select') {
				res = await action.click(choiceSelector);
				if (true == res) {
					await logger.logInto(stackTrace.get(), " -- choice is clicked");
				}
				else {
					res = res + "-- Error in clicking option";
					await logger.logInto(stackTrace.get(), res, "error");
					break;
				}
			}
		}
		await action.switchToParentFrame();
		return res;
	},

	getData_multiMcq: async function (mcqQuesData) {
		await logger.logInto(stackTrace.get());
		await action.switchToFrame(0);
		var obj = [];
		var res, choiceSelector, selChoiceSelector, value;
		for (let i = 0; i < mcqQuesData.length; i++) {
			choiceSelector = this.choices + mcqQuesData[i][0] + "] ";
			selChoiceSelector = choiceSelector + this.selectedChoice;
			value = await itemplayer.getFeedbackIconDetails(choiceSelector)
			res = await action.getElementCount(selChoiceSelector);
			if (res == 1)
				obj[i] = [mcqQuesData[i][0], await action.getText(choiceSelector), "select", value]
			else
				obj[i] = [mcqQuesData[i][0], await action.getText(choiceSelector), "", value]
		}
		await action.switchToParentFrame();
		return obj;
	}
}