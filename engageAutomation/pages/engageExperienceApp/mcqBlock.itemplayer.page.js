'use strict';
const itemplayer = require('./itemPlayer.page.js');
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, ret;

module.exports = {

	choice: selectorFile.css.ComproEngage.MCQB.choice,
	choices: selectorFile.css.ComproEngage.MCQB.choices,
	selectedChoice: selectorFile.css.ComproEngage.MCQB.selectedChoice,

	isInitialized: async function (mcqbQuesData) {
		await logger.logInto(stackTrace.get());
		var qIndex = await itemplayer.getQuesIndex();
		await action.switchToFrame(0);
		let choiceSelector = "div[index='" + qIndex + "'] " + this.choice + mcqbQuesData[0][0] + "]";
		res = await action.getCSSProperty(choiceSelector, 'border-style');
		if (res.value == 'solid') {
			await logger.logInto(stackTrace.get(), " -- Choice " + mcqbQuesData[0][0] + " is of MCQ Block type");
			let choiceSvgSelector = choiceSelector + " svg"
			res = await action.getAttribute(choiceSvgSelector, 'data-icon');
			if (res == 'circle') {
				await logger.logInto(stackTrace.get(), " -- choice " + mcqbQuesData[0][0] + " is having circle icon");
				ret = await this.getmcqbData(mcqbQuesData)
			}
			else {
				ret = res + " -- choice no " + mcqbQuesData[0][0] + "is not having circle icon";
				await logger.logInto(stackTrace.get(), ret, "error");
			}
		}
		else {
			ret = res + "-- Choice no " + mcqbQuesData[0][0] + " is NOT of MCQ Block type";
			await logger.logInto(stackTrace.get(), ret, "error");
		}
		await action.switchToParentFrame();
		return ret;
	},

	clickOption: async function (mcqbQuesData) {
		await logger.logInto(stackTrace.get());
		let qIndex = await itemplayer.getQuesIndex();
		await action.switchToFrame(0);
		for (let i = 0; i < mcqbQuesData.length; i++) {
			let choiceSelector = "div[index='" + qIndex + "'] " + this.choice + mcqbQuesData[i][0] + "]";
			res = await action.getElementCount(choiceSelector);
			if (res == 1) {
				await logger.logInto(stackTrace.get(), " -- choice is available");
				if (mcqbQuesData[i][2] == 'select') {
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
			else {
				res = res + " -- choice is NOT available";
				await logger.logInto(stackTrace.get(), res, "error");
			}
		}
		await action.switchToParentFrame();
		return res;
	},

	getmcqbData: async function (mcqbQuesData) {
		await logger.logInto(stackTrace.get());
		await action.switchToParentFrame();
		let qIndex = await itemplayer.getQuesIndex();
		await action.switchToFrame(0);
		var obj = [];
		for (let i = 0; i < mcqbQuesData.length; i++) {
			let choiceSelector = "div[index='" + (qIndex) + "'] " + this.choice + mcqbQuesData[i][0] + "]"
			let selectedChoice = choiceSelector + " " + this.selectedChoice;
			let value = await itemplayer.getFeedbackIconDetails(choiceSelector)
			res = await action.getElementCount(selectedChoice);
			if (res == 1)
				obj[i] = [mcqbQuesData[i][0], await action.getText(choiceSelector), "select", value]
			else
				obj[i] = [mcqbQuesData[i][0], await action.getText(choiceSelector), "", value]
		}
		await action.switchToParentFrame();
		return obj;
	}
}