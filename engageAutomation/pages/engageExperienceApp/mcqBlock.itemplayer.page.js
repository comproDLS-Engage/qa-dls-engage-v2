'use strict';
const itemplayer = require('./itemPlayer.page.js');
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, ret;

module.exports = {

	choice: selectorFile.css.ComproEngage.MCQB.choice,
	choices: selectorFile.css.ComproEngage.MCQB.choices,
	selectedChoice: selectorFile.css.ComproEngage.MCQB.selectedChoice,

	isInitialized: function (mcqbQuesData) {
		logger.logInto(stackTrace.get());
		var qIndex = itemplayer.getQuesIndex();
		action.switchToFrame(0);
		let choiceSelector = "div[index='" + qIndex + "'] " + this.choice + mcqbQuesData[0][0] + "]";
		res = action.getCSSProperty(choiceSelector, 'border-style');
		if (res.value == 'solid') {
			logger.logInto(stackTrace.get(), " -- Choice " + mcqbQuesData[0][0] + " is of MCQ Block type");
			let choiceSvgSelector = choiceSelector + " svg"
			res = action.getAttribute(choiceSvgSelector, 'data-icon');
			if (res == 'circle') {
				logger.logInto(stackTrace.get(), " -- choice " + mcqbQuesData[0][0] + " is having circle icon");
				ret = this.getmcqbData(mcqbQuesData)
			}
			else {
				ret = res + " -- choice no " + mcqbQuesData[0][0] + "is not having circle icon";
				logger.logInto(stackTrace.get(), ret, "error");
			}
		}
		else {
			ret = res + "-- Choice no " + mcqbQuesData[0][0] + " is NOT of MCQ Block type";
			logger.logInto(stackTrace.get(), ret, "error");
		}
		action.switchToParentFrame();
		return ret;
	},

	clickOption: function (mcqbQuesData) {
		logger.logInto(stackTrace.get());
		let qIndex = itemplayer.getQuesIndex();
		action.switchToFrame(0);
		for (let i = 0; i < mcqbQuesData.length; i++) {
			let choiceSelector = "div[index='" + qIndex + "'] " + this.choice + mcqbQuesData[i][0] + "]";
			res = action.getElementCount(choiceSelector);
			if (res == 1) {
				logger.logInto(stackTrace.get(), " -- choice is available");
				if (mcqbQuesData[i][2] == 'select') {
					res = action.click(choiceSelector);
					if (true == res) {
						logger.logInto(stackTrace.get(), " -- choice is clicked");
					}
					else {
						res = res + "-- Error in clicking option";
						logger.logInto(stackTrace.get(), res, "error");
						break;
					}
				}
			}
			else {
				res = res + " -- choice is NOT available";
				logger.logInto(stackTrace.get(), res, "error");
			}
		}
		action.switchToParentFrame();
		return res;
	},

	getmcqbData: function (mcqbQuesData) {
		logger.logInto(stackTrace.get());
		action.switchToParentFrame();
		let qIndex = itemplayer.getQuesIndex();
		action.switchToFrame(0);
		var obj = [];
		for (let i = 0; i < mcqbQuesData.length; i++) {
			let choiceSelector = "div[index='" + (qIndex) + "'] " + this.choice + mcqbQuesData[i][0] + "]"
			let selectedChoice = choiceSelector + " " + this.selectedChoice;
			let value = itemplayer.getFeedbackIconDetails(choiceSelector)
			res = action.getElementCount(selectedChoice);
			if (res == 1)
				obj[i] = [mcqbQuesData[i][0], action.getText(choiceSelector), "select", value]
			else
				obj[i] = [mcqbQuesData[i][0], action.getText(choiceSelector), "", value]
		}
		action.switchToParentFrame();
		return obj;
	}
}